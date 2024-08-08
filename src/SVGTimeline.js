/**
  new Timeline({
    duration: <duration>,
    frameRate: <number>,
    loop: <boolean>,
    interpolations: {
      '.css-selector': {
        stagger|span: <duration>,
        transformOrigin: [<number>, <number>], // If set, will override any existing SVGElement[transform] attribute
        visible: { from: <duration>, to: <duration> },
        property1: {
          initial: <number>
          from: <number>,
          to: <number>,
          delay: <duration>,
          duration: <duration>,
          easing: <string>, // See https://github.com/mattdesl/eases
          loop: <boolean>|<number>,
          pingpong: <boolean>
        },
        property2: {…},
      },
      'svg > path': {
        d: {
          from: [[<number>, <number>], [<number>, <number>], [<number>, <number>]]
          to: [[<number>, <number>, [<number>, <number>], [<number>, <number>]]]
        }
      }
    }
  })

  <duration>
    60 (frames)
    '1s'
    '1000ms'
    'calc(60 * 2)'
    'calc(1s * 2)'
    'calc(1000ms / 2 + 0.5s)'
    'calc(calc(1000ms / 2) * 2)'
 */

import eases from 'eases'
import * as Transform from 'transformation-matrix'
import { clamp, lerp, radians, wrap } from 'missing-math'

const RESERVED = ['stagger', 'span', 'transformOrigin']
const SUPPORTED_TRANSFORM_ATTRIBUTES = [
  'translateX',
  'translateY',
  'rotate',
  'scale',
  'scaleX',
  'scaleY'
]

const lerpArray = (a, b, t) => Array.isArray(a) ? a.map((v, i) => lerpArray(v, b[i], t)) : lerp(a, b, t)

function toPathData (arr, { decimals = 3, close = true } = {}) {
  let d = ''
  for (let i = 0; i < arr.length + (close ? 1 : 0); i++) {
    d += i ? ' L ' : 'M '
    d += arr[i % arr.length][0].toFixed(decimals) + ' ' + arr[i % arr.length][1].toFixed(decimals)
  }

  if (close) d += ' Z'

  return d
}

export default class SVGTimeline {
  constructor ({
    interpolations = {},
    loop = false,
    duration = 0,
    frameRate = 60
  } = {}) {
    this.props = { interpolations, duration, frameRate, loop }
    this.length = this.toFrames(duration)
  }

  get interpolations () { return this.props.interpolations }
  set interpolations (o) { this.props.interpolations = o }

  get frameRate () { return this.props.frameRate }

  set loop (s) { this.props.loop = s }
  get loop () { return this.props.loop }

  // Convert 'calc(1s * 2)', 'calc(1000ms + 1s)', '1s', '10ms', 10 to a number
  // of frames based on a frame rate
  calc (formula) {
    if (typeof formula !== 'string') return formula
    if (formula === '') return formula
    if (!formula.startsWith('calc(')) return this.toFrames(formula)

    formula = formula.match(/^calc\((.*)\)/)[1]
    // Interpret nested calc() as parenthesis
    formula = formula.replaceAll(/calc/g, '')

    const values = formula.match(/((?:\d*[.])?\d+\w+)?/g)
    for (const value of values) formula = formula.replace(value, this.calc(value))
    return eval(formula) /* eslint-disable-line no-eval */
  }

  // Convert '1s', '10ms', 10 to a number of frames based on a frame rate
  toFrames (duration = 0) {
    const [, value, unit] = (/([-+]?[0-9.]+)([a-z%]*)/.exec(duration) ?? [parseFloat(duration)])
    if (!unit) return +value

    // Handle 'ms' and 's', 's' being the default
    let factor = 1
    if (unit === 'ms') factor = 1000

    return Math.floor((value / factor) * this.props.frameRate)
  }

  // Interpolate a specific frame and apply the whole timeline to a document
  apply (document, frameIndex = null) {
    // Iterate all selectors
    for (const selector in this.props.interpolations) {
      const els = document.querySelectorAll(selector)
      if (!els) continue

      // Prepare stagger
      let staggerDelay = 0
      const staggerAmt = this.props.interpolations[selector].span
        ? this.calc(this.props.interpolations[selector].span ?? 0) / els.length
        : this.calc(this.props.interpolations[selector].stagger ?? 0)

      // Iterate all elements matching current selector
      for (const el of els) {
        // Iterate all defined interpolations for this selector
        for (let attr in this.props.interpolations[selector]) {
          if (RESERVED.includes(attr)) continue

          if (attr === 'visible') {
            const { from, to } = this.props.interpolations[selector][attr]
            const t0 = this.calc(from)
            const t1 = this.calc(to ?? this.length)
            const visible = frameIndex >= t0 && frameIndex < t1
            el.setAttribute('visibility', visible ? 'visible' : 'hidden')
            continue
          }

          const {
            initial,
            from,
            to,
            delay = 0,
            duration = this.length,
            easing = 'linear',
            loop = false,
            pingpong = false
          } = this.props.interpolations[selector][attr]

          const d = this.calc(duration)
          const dl = this.calc(delay) + staggerDelay
          const t = (() => {
            const n = (frameIndex - dl) / d
            if (loop) {
              const iters = typeof loop === 'number' ? loop : Number.POSITIVE_INFINITY
              const t = wrap(clamp(n, 0, iters) - 1e-10, 0, 1)
              return pingpong ? Math.sin(t * Math.PI) : t
            }

            return clamp(n, 0, 1)
          })()

          const ease = eases[easing]
          if (!ease) throw new Error(`easing function '${easing}' does not exist. See https://github.com/mattdesl/eases for available functions.`)

          let v = lerpArray(frameIndex < dl && initial !== undefined ? initial : from, to, ease(t))

          // Handle SVG transformations
          if (SUPPORTED_TRANSFORM_ATTRIBUTES.includes(attr)) {
            const transformOrigin = this.props.interpolations[selector].transformOrigin ?? [0, 0]

            // Override [transform] attribute if a transformOrigin is defined to
            // avoid disrupting the transformation idempotency
            const initialValue = this.props.interpolations[selector].transformOrigin
              ? 'translate(0,0)'
              : el.getAttribute('transform') ?? 'translate(0, 0)'
            const initialMatrix = /^matrix/i.test(initialValue)
              ? Transform.fromString(initialValue)
              : Transform.fromDefinition(Transform.fromTransformAttribute(initialValue))[0]

            const { translate, scale, rotation } = Transform.decomposeTSR(
              initialMatrix ?? Transform.translate(0)
            )

            switch (attr) {
              case 'translateX':
                translate.tx = v
                break
              case 'translateY':
                translate.ty = v
                break
              case 'scale':
                scale.sx = v
                scale.sy = v
                break
              case 'scaleX':
                scale.sx = v
                break
              case 'scaleY':
                scale.sy = v
                break
              case 'rotate':
                rotation.angle = radians(v)
                break
            }

            const matrix = Transform.compose(
              Transform.translate(translate.tx ?? 0, translate.ty ?? 0),
              Transform.scale(scale.sx ?? 1, scale.sy ?? 1, transformOrigin[0], transformOrigin[1]),
              Transform.rotate(rotation.angle ?? 0, transformOrigin[0], transformOrigin[1])
            )

            attr = 'transform'
            v = Transform.toString(matrix)
          }

          if (attr === 'd') v = toPathData(v)
          el.setAttribute(attr, v)
        }

        // Increment delay for the next element matching the current selector
        staggerDelay += staggerAmt
      }
    }
  }

  toJSON () {
    return this.props
  }
}

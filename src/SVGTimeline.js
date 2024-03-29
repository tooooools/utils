/**
  new Timeline({
    duration: '1s'|'1000ms'|60,
    frameRate: 60,
    loop: true|false,
    interpolations: {
      '.css-selector': {
        stagger: '100ms', // stagger|span
        visible: { from: '1s', to: '2s' },
        property1: {
          initial: 0
          from: 0,
          to: 100,
          delay: '1s',
          duration: '3000ms',
          easing: 'linear' // See https://github.com/mattdesl/eases
        },
        property2: {…},
      },
      'svg > path': {
        d: {
          from: [[0, 0], [0, 1], [0, 2]]
          to: [[0, 0, [1, 1], [0, 2]]]
        }
      }
    }
  })
 */

import eases from 'eases'
import * as Transform from 'transformation-matrix'
import { clamp, lerp, radians } from 'missing-math'

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
        ? this.toFrames(this.props.interpolations[selector].span ?? 0) / els.length
        : this.toFrames(this.props.interpolations[selector].stagger ?? 0)

      // Iterate all elements matching current selector
      for (const el of els) {
        // Iterate all defined interpolations for this selector
        for (let attr in this.props.interpolations[selector]) {
          if (attr === 'stagger') continue
          if (attr === 'span') continue

          if (attr === 'visible') {
            const { from, to } = this.props.interpolations[selector][attr]
            const t0 = this.toFrames(from)
            const t1 = this.toFrames(to ?? this.length)
            const visible = frameIndex >= t0 && frameIndex < t1
            el.setAttribute('visibility', visible ? 'visible' : 'hidden')
            continue
          }

          const {
            initial,
            from,
            to,
            delay,
            duration,
            easing
          } = this.props.interpolations[selector][attr]

          const d = this.toFrames(duration ?? this.length)
          const dl = this.toFrames(delay ?? 0) + staggerDelay
          const t = clamp((frameIndex - dl) / d, 0, 1)

          const ease = eases[easing ?? 'linear']
          if (!ease) throw new Error(`easing function '${easing}' does not exist. See https://github.com/mattdesl/eases for available functions.`)

          let v = lerpArray(frameIndex < dl && initial !== undefined ? initial : from, to, ease(t))

          // Handle SVG transformations
          if (SUPPORTED_TRANSFORM_ATTRIBUTES.includes(attr)) {
            const initialValue = el.getAttribute('transform') || 'translate(0,0)'

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
              Transform.scale(scale.sx ?? 1, scale.sy ?? 1),
              Transform.rotate(rotation.angle ?? 0)
            )

            attr = 'transform'
            v = Transform.toString(matrix)
          }

          if (attr === 'd') v = toPathData(v)
          el.setAttribute(attr, v)
        }
      }

      // Increment delay for the next element matching the current selector
      staggerDelay += staggerAmt
    }
  }

  toJSON () {
    return this.props
  }
}

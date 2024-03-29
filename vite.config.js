import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'

// This file will be auto-generated
const index = path.resolve(__dirname, 'src/index.js')

export default defineConfig(async ({ mode }) => {
  // Watch only on dev mode, ignoring auto-generated files
  const watch = mode === 'dev' && {
    exclude: [index]
  }

  return {
    build: {
      watch,
      sourcemap: true,
      lib: {
        name: '@tooooools/utils',
        entry: { index }
      }
    },

    plugins: [
      {
        name: 'build-index',
        apply: 'build',
        buildStart: () => {
          console.log('\ngenerating /src/index.js...\n')
          const dir = path.resolve(__dirname, 'src/')

          fs.writeFileSync(
            index,
            [
              '// Auto-generated by the build-index plugin',
              ...fs.readdirSync(dir).map(filename =>
                /^(?!index)(.*).js/.test(filename) &&
                  `export { default as ${path.parse(filename).name} } from './${filename}'`
              ).filter(Boolean),
              ''
            ].join('\n'),
            'utf8'
          )
        }
      }
    ]
  }
})

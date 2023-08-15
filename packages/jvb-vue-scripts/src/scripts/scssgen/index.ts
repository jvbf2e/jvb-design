import path from 'path'
import fs from 'fs-extra'
import { globSync } from 'glob'
import paths from '../../utils/paths'

const scssgen = () => {
  let scssContent = `@import './style/index.scss';\n@import './trigger/style/index.scss';\n`
  const scssFiles = globSync('**/style/index.scss', {
    cwd: paths.components,
    ignore: ['style/index.scss', 'trigger/style/index.scss'],
  })
  scssFiles.forEach((value) => {
    scssContent += `@import './${value}';\n`
  })

  fs.outputFileSync(path.resolve(paths.components, 'index.scss'), scssContent)

  console.log('generate index.scss success')
}

export default scssgen

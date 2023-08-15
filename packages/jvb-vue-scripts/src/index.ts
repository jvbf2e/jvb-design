#!/usr/bin/env node

import path from 'path'
import fs from 'fs-extra'
import { Command } from 'commander'

import buildComponent from './scripts/build-component'
import devComponent from './scripts/dev-component'
import dtsgen from './scripts/dtsgen'
import scssgen from './scripts/scssgen'

const program = new Command()

const packageContent = fs.readFileSync(
  path.resolve(__dirname, '../package.json'),
  'utf8'
)

const packageData: any = JSON.parse(packageContent)

program
  .version(packageData.version)
  .name('jvb-vue-scripts')
  .usage('command [options]')

// program
//   .command('docgen')
//   .description(
//     'generate document of component. e.g. arco-scripts-vue docgen --components menu,affix,button'
//   )
//   .option('-i, --input <filename>', 'specified input file')
//   .option('-c, --components <names>', 'component name(s) joined by comma(,)')
//   .action(({ input, components }) => {
//     components = typeof components === 'string' ? components.split(',') : []
//     docgen({ input, components })
//   })

// program
//   .command('icongen')
//   .description('generate icon components.')
//   .action(() => {
//     icongen()
//   })

program
  .command('scssgen')
  .description('generate index scss file.')
  .action(() => {
    scssgen()
  })

program
  .command('dtsgen <files>')
  .description('emit .d.ts files for vue files.')
  .option(
    '-o, --outDir <direname>',
    'Specify an output folder for all emitted files'
  )
  .action((files, options) => {
    dtsgen(files, options)
  })

program
  .command('dev:component')
  .description('build components with watch mode.')
  .action(async () => {
    await devComponent()
  })

// program
//   .command('dev:site')
//   .description('start vite server for development.')
//   .action(async () => {
//     await devSite()
//   })

program
  .command('build:component')
  .description('build production files.')
  .option('-u, --umd', 'build with UMD file')
  .action(async ({ umd }) => {
    await buildComponent({ umd })
  })

// program
//   .command('build:style')
//   .description('build style related files.')
//   .option('-M, --material', 'generate style for material')
//   .action(async ({ material }) => {
//     await buildStyle({ material })
//   })

// program
//   .command('build:site')
//   .description('build document site.')
//   .action(async () => {
//     await buildSite()
//   })

// program
//   .command('build:material <input>')
//   .description('build vue material.')
//   .action(async (input) => {
//     await buildMaterial(input)
//   })

// program
//   .command('build:material-library')
//   .description('build vue material library.')
//   .action(async () => {
//     await buildMaterialLibrary()
//   })

// program
//   .command('test')
//   .description('run test for component or material.')
//   .option('-c, --components <names>', 'component name(s) joined by comma(,)')
//   .allowUnknownOption()
//   .action(async ({ components }) => {
//     components = typeof components === 'string' ? components.split(',') : []
//     await test(components, program.args.slice(1))
//   })

// program
//   .command('test:screenshot')
//   .description('run test:screenshot for components.')
//   .option('-d, --domain <domain>', 'gen screentshots')
//   .option('-o, --outDir <outDir>', 'gen screentshots')
//   .action(async ({ domain, outDir }) => {
//     await screentshotTest(domain, outDir);
//   });

// program
//   .command('changelog')
//   .description(
//     'Obtain and organize changelog information through the git repository.'
//   )
//   .action(async () => {
//     await changelog()
//   })

// program
//   .command('jsongen')
//   .description('generate vetur and web-types json files')
//   .action(async () => {
//     await jsongen()
//   })

program.parse(process.argv)

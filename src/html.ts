import {Logger} from './types'
import execa = require('execa')
import {remove} from 'fs-extra'
import bin from './bin'

/**
 * Creates TypeDoc HTML files from TypeScript source files.
 *
 * @param param0 are options.
 * @param param0.out is output directory for generated HTML files.
 * @param logger is simple logger
 */
export default async function html({out = 'api-docs-html'}, logger = console as Logger) {
  // rm -rf api-docs-html && typedoc --plugin typedoc-plugin-example-tag --mode file --out api-docs-html
  await remove(out)
  await execa(bin('typedoc'), ['--plugin', 'typedoc-plugin-example-tag', '--mode', 'file', '--out', out], {stdio: 'inherit'})
  logger.log(`TyepDoc HTML files created in${out}.`)
}

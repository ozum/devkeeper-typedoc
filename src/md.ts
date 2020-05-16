import {Logger} from './types'
import execa = require('execa');
import {remove, outputFile} from 'fs-extra'
import bin from './bin'
import concatMd from 'concat-md'
import {dir as tmpDir} from 'tmp-promise'

/**
 * Creates TypeDoc multiple or single markdown from TypeScript source files.
 *
 * @param param0 are options.
 * @param param0.out is output directory or file for generated markdown. Default "api-docs-md" for multi files or "api.md" for single file.
 * @param param0.singleFile is whether to combine all output into single markdown file.
 * @param logger is simple logger.
 */
export default async function md({out = '', singleFile = false}, logger = console as Logger) {
  // rm -rf api-docs-md && typedoc --platform vuepress --plugin typedoc-plugin-example-tag,typedoc-plugin-markdown --excludeExternals --excludePrivate --excludeProtected --theme markdown --readme none --mode file --out api-docs-md && find api-docs-md -name \"index.md\" -exec sh -c 'mv \"$1\" \"${1%index.md}\"index2.md' - {} \\;
  const outDir = singleFile ? (await tmpDir()).path : (out || 'api-docs-md')
  const outFile = out || 'api.md'

  try {
    await remove(outDir)
    await execa(bin('typedoc'), ['--platform', 'vuepress', '--plugin', 'typedoc-plugin-example-tag,typedoc-plugin-markdown', '--excludeExternals', '--excludePrivate', '--excludeProtected', '--excludeNotExported', '--theme', 'markdown', '--readme', 'none', '--mode', 'file', '--out', outDir], {stdio: 'inherit'})
    await execa('find', [outDir, '-name', '"index.md"', '-exec', 'sh', '-c', "'mv \"$1\" \"${1%index.md}\"index2.md'", '-', '{}', ';'], {stdio: 'inherit'}) // eslint-disable-line no-template-curly-in-string

    if (singleFile) {
      const apiDoc = await concatMd(outDir, {dirNameAsTitle: true})
      await outputFile(outFile, apiDoc)
      await remove(outDir)
    }
  } catch (error) {
    if (singleFile) remove(outDir)
    throw (error)
  }

  logger.log(`TypeDoc markdown created in ${singleFile ? outFile : outDir}`)
}

import {Command, flags} from '@oclif/command'
import md from '../md'

export default class Md extends Command {
  static description = 'Creates TypeDoc markdown from TypeScript source files.'

  static flags = {
    help: flags.help({char: 'h'}),
    singleFile: flags.boolean({description: 'combines all output into single markdown file'}),
    out: flags.string({description: 'output directory or file for generated markdown. Default "api-docs-md" for multi files or "api.md" for single file'}),
  }

  async run() {
    const {flags} = this.parse(Md)
    await md(flags, this)
  }
}

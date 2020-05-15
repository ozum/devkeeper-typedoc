import {Command, flags} from '@oclif/command'
import html from '../html'

export default class Html extends Command {
  static description = 'Creates TypeDoc HTML files from TypeScript source files.'

  static flags = {
    help: flags.help({char: 'h'}),
    out: flags.string({default: 'api-docs-html', description: 'Output directory for generated HTML files.'}),
  }

  async run() {
    const {flags} = this.parse(Html)
    await html(flags, this)
  }
}

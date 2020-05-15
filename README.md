devkeeper-typedoc
=================

Typedoc commands for devkeeper

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/devkeeper-typedoc.svg)](https://npmjs.org/package/devkeeper-typedoc)
[![Downloads/week](https://img.shields.io/npm/dw/devkeeper-typedoc.svg)](https://npmjs.org/package/devkeeper-typedoc)
[![License](https://img.shields.io/npm/l/devkeeper-typedoc.svg)](https://github.com/ozum/devkeeper-typedoc/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g devkeeper-typedoc
$ devkeeper-typedoc COMMAND
running command...
$ devkeeper-typedoc (-v|--version|version)
devkeeper-typedoc/1.0.0 darwin-x64 node-v14.1.0
$ devkeeper-typedoc --help [COMMAND]
USAGE
  $ devkeeper-typedoc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`devkeeper-typedoc help [COMMAND]`](#devkeeper-typedoc-help-command)
* [`devkeeper-typedoc html`](#devkeeper-typedoc-html)
* [`devkeeper-typedoc md`](#devkeeper-typedoc-md)

## `devkeeper-typedoc help [COMMAND]`

display help for devkeeper-typedoc

```
USAGE
  $ devkeeper-typedoc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.0/src/commands/help.ts)_

## `devkeeper-typedoc html`

Creates TypeDoc HTML files from TypeScript source files.

```
USAGE
  $ devkeeper-typedoc html

OPTIONS
  -h, --help  show CLI help
  --out=out   [default: api-docs-html] Output directory for generated HTML files.
```

_See code: [src/commands/html.ts](https://github.com/ozum/devkeeper-typedoc/blob/v1.0.0/src/commands/html.ts)_

## `devkeeper-typedoc md`

Creates TypeDoc markdown from TypeScript source files.

```
USAGE
  $ devkeeper-typedoc md

OPTIONS
  -h, --help    show CLI help

  --out=out     output directory or file for generated markdown. Default "api-docs-md" for multi files or "api.md" for
                single file

  --singleFile  combines all output into single markdown file
```

_See code: [src/commands/md.ts](https://github.com/ozum/devkeeper-typedoc/blob/v1.0.0/src/commands/md.ts)_
<!-- commandsstop -->

[![Build Status](https://travis-ci.org/cipchk/ng-alain.svg?branch=master)](https://travis-ci.org/cipchk/ng-alain)
[![Dependency Status](https://david-dm.org/cipchk/ng-alain/status.svg)](https://david-dm.org/cipchk/ng-alain)
[![NPM version](https://img.shields.io/npm/v/ng-alain.svg)](https://www.npmjs.com/package/ng-alain)
[![NPM version](https://img.shields.io/npm/v/ng-alain/next.svg)](https://www.npmjs.com/package/ng-alain)

# ng-alain

[Ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd) admin panel front-end framework.

更多信息见[中文 README](README-zh_CN.md)

[DEMO](https://cipchk.github.io/ng-alain/)

## Quick start

There are two ways to install:

### Use the Command Line

Depend on `@delon/cli`, [How install?](http://ng-alain.com/docs/cli)

```bash
ng new -c=@delon/cli my-app
```

### Clone the Git Repository

```bash
# --depth 1 removes all but one .git commit history
$ git clone --depth=1 https://github.com/cipchk/ng-alain.git my-project

# change directory
cd my-project

# install npm package
npm install

# start the serve
npm start

# use HMR
npm run serve:hmr
```

> [vscode] recommended install [ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) plugins, that includes `nz-alain-*` snippets.

## Links

+ [Document](http://ng-alain.com)
+ [@delon](https://github.com/cipchk/delon)
+ [DEMO](https://cipchk.github.io/ng-alain/)

## Delon

[delong](https://github.com/cipchk/delon) is a production-ready solution for admin business components packages, Built on the design principles developed by Ant Design.

[![Build Status](https://travis-ci.org/cipchk/delon.svg?branch=master)](https://travis-ci.org/cipchk/delon)
[![Dependency Status](https://david-dm.org/cipchk/delon/status.svg)](https://david-dm.org/cipchk/delon)
[![DevDependency Status](https://david-dm.org/cipchk/delon/dev-status.svg)](https://david-dm.org/cipchk/delon?type=dev)

[![npm](https://img.shields.io/npm/l/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme)
[![npm](https://img.shields.io/npm/dm/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme)

| package name | version | next version |
| ------------ |:-----:|:----------:|
| @delon/theme | [![NPM version](https://img.shields.io/npm/v/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme) | [![NPM version](https://img.shields.io/npm/v/@delon/theme/next.svg)](https://www.npmjs.com/package/@delon/theme) |
| @delon/abc | [![NPM version](https://img.shields.io/npm/v/@delon/abc.svg)](https://www.npmjs.com/package/@delon/abc) | [![NPM version](https://img.shields.io/npm/v/@delon/abc/next.svg)](https://www.npmjs.com/package/@delon/abc) |
| @delon/acl | [![NPM version](https://img.shields.io/npm/v/@delon/acl.svg)](https://www.npmjs.com/package/@delon/acl) | [![NPM version](https://img.shields.io/npm/v/@delon/acl/next.svg)](https://www.npmjs.com/package/@delon/acl) |
| @delon/auth | [![NPM version](https://img.shields.io/npm/v/@delon/auth.svg)](https://www.npmjs.com/package/@delon/auth) | [![NPM version](https://img.shields.io/npm/v/@delon/auth/next.svg)](https://www.npmjs.com/package/@delon/auth) |
| @delon/mock | [![NPM version](https://img.shields.io/npm/v/@delon/mock.svg)](https://www.npmjs.com/package/@delon/mock) | [![NPM version](https://img.shields.io/npm/v/@delon/mock/next.svg)](https://www.npmjs.com/package/@delon/mock) |
| @delon/cache | [![NPM version](https://img.shields.io/npm/v/@delon/cache.svg)](https://www.npmjs.com/package/@delon/cache) | [![NPM version](https://img.shields.io/npm/v/@delon/cache/next.svg)](https://www.npmjs.com/package/@delon/cache) |
| @delon/cli | [![NPM version](https://img.shields.io/npm/v/@delon/cli.svg)](https://www.npmjs.com/package/@delon/cli) | [![NPM version](https://img.shields.io/npm/v/@delon/cli/next.svg)](https://www.npmjs.com/package/@delon/cli) |

## Architecture

![Architecture](https://github.com/cipchk/delon/blob/master/_screenshot/architecture.png)

## Features

+ `ng-zorro-antd` based
+ Responsive Layout
+ I18n
+ ACL
+ Lazy load Assets
+ UI Router States
+ Multiple color options
+ Less preprocessor
+ Well organized & commented code
+ Simple upgrade
+ Hot Module Replacement
+ Support Docker deploy
+ Support [Electron](http://ng-alain.com/docs/cli#electron) packager(just via @delon/cli)

## App Shots

![desktop](https://github.com/cipchk/delon/blob/master/_screenshot/desktop.png)
![ipad](https://github.com/cipchk/delon/blob/master/_screenshot/ipad.png)
![iphone](https://github.com/cipchk/delon/blob/master/_screenshot/iphone.png)

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/cipchk/ng-alain/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/cipchk/ng-alain/blob/master/LICENSE) file for the full text)

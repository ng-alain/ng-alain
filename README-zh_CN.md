[![Build Status](https://travis-ci.org/cipchk/ng-alain.svg?branch=master)](https://travis-ci.org/cipchk/ng-alain)
[![Dependency Status](https://david-dm.org/cipchk/ng-alain/status.svg)](https://david-dm.org/cipchk/ng-alain)
[![NPM version](https://img.shields.io/npm/v/ng-alain.svg)](https://www.npmjs.com/package/ng-alain)

# ng-alain

一套基于 [Ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd)【ANT DESIGN】 的企业后台模板。

[README in English](README.md)

[DEMO](https://cipchk.github.io/ng-alain/)

## 快速入门

确保 `node` 版本 >= 6.9.0 且 `npm` 版本 >= 3 以上。

`ng-alain` 本身并非组件库，只是一个单纯的企业后台模板，你可以**直接克隆**到你的本地，然后立即进入实际开发。

```bash
# clone a blank ng-alain repo, just only basic function
#   --depth 1 removes all but one .git commit history
git clone -b blank --depth 1 https://github.com/cipchk/ng-alain.git
# or full master branch
git clone --depth 1 https://github.com/cipchk/ng-alain.git

# change directory
cd ng-alain

# install npm package
npm install
# in china please use cnpm （https://github.com/cnpm/cnpm）
# cnpm install

# start the serve
npm start

# use HMR
npm run serve:hmr
```

> [vscode] 建议安装 [ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) 插件，含 `nz-alain-*` 代码片断。


## Links

+ [文档](http://ng-alain.com)
+ [@delon](https://github.com/cipchk/delon)
+ [DEMO](https://cipchk.github.io/ng-alain/)

## 特性

+ 基于 `ng-zorro-antd`
+ 响应式
+ 国际化
+ ACL访问控制
+ 延迟加载及良好的启用画面
+ 良好的UI路由设计
+ 十种颜色版本
+ Less预编译
+ 良好的目录组织结构
+ 简单升级
+ 模块热替换
+ 支持[Docker](_documents/docker.md)部署

## 应用截图

![desktop](_screenshot/desktop.png)
![ipad](_screenshot/ipad.png)
![iphone](_screenshot/iphone.png)

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/cipchk/ng-alain/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/cipchk/ng-alain/blob/master/LICENSE) file for the full text)

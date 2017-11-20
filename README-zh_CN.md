# ng-alain

一套基于 [Ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd)【ANT DESIGN】 的企业后台模板。

[README in English](README.md)

[DEMO](https://cipchk.github.io/ng-alain/)

## 快速入门

确保 `node` 版本 >= 6.9.0 且 `npm` 版本 >= 3 以上。

`ng-alain` 本身并非组件库，只是一个单纯的企业后台模板，你可以**直接克隆**到你的本地，然后立即进入实际开发。

```bash
# clone ng-alain repo
# --depth 1 removes all but one .git commit history
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

## 环境

| 包 | 版本 |
| ------- | ------- |
| `ng-alain` | 0.1.3 | 
| `ng-zorro-antd` | ^0.6.0 |
| `@angular` | ^5.0.0 |
| `@angular/cli` | ^1.5.2 |

**第三方类型[可选]**

| 包 | 额外依赖 | 说明 |
| ------- | ------- | ------- |
| `font-awesome` |  |  |
| `simple-line-icons` |  |  |
| `weather-icons` |  |  |
| `angular-baidu-maps` |  | BaidDu Map |
| `angular-qq-maps` |  | QQ Map |
| `angular-web-storage` |  | LocalStorage |
| `g2-angular` | `g2` |  |
| `ng2-file-upload` |  |  |
| `ng2-img-cropper` |  |  |
| `ngx-color-picker` |  |  |
| `ng-tree-antd` | `angular-tree-component` |  |
| `ng2-dnd` |  |  |
| `sweetalert` |  |  |
| `file-saver` |  |  |

## 指引文章

`ng-alain` 非常单纯，整体的设计都基于 `ng-zorro-antd`。虽然 antd 的栅格、布局已经足够满足我们日常的需求，然而出于对企业后台在开发过程中总是需要一点微调，因此我独立构建了一套用作这类需求工具类样式。

因此，在你开始ANTD之前最好先了解以下系列文章，他们会帮助你更好的理解 antd 是怎么一回事，以及为什么需要这一套工具类规则。

+ [整个antd的指引文章（非常经典一定要细读）](https://ant.design/docs/spec/introduce-cn)
+ [设计规则](_documents/layout.md)
+ [CSS组件补丁类](_documents/component-patch.md)
+ [工具类规则](_documents/utils.md)
+ [接地气Pipe](_documents/pipe.md)
+ [ACL访问控制](_documents/acl.md)
+ [目录结构与版本升级说明](_documents/upgrade.md)
+ 为了减少github的发布，后续有关 `ng-alain` 的文章，会一直发布在我的[SF专栏](https://segmentfault.com/blog/cipchk)当中。

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

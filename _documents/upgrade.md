# 目录结构与版本升级说明

`ng-alain` 会一直与 `ng-zorro-antd` 保持同步更新，但这不代表你需要重新克隆 `ng-alain`。

## 目录结构

项目是通过 `ng new` 来构建的，就如同你平时要创建项目一样，因此，当你克隆 `ng-alain` 到你本地后，只需要执行 `npm install`，那么就相当构建好一个新项目。

以下是一个完整的大概结构：

```
_documents (允许删除)
_screenshot (允许删除)
_mock (允许删除：ng-alain示例所需要数据模拟)
libs （一些无法通过 npm 安装使用的类库）
src
    app
        core
            preloader
            settings
            translator (可选：国际化)
            acl (可选：国际化)
            net (可选：HTTP拦截器)
        layout
        routes
        shared
            components (一个业务通用的组件库)
            directives (可选：若干自定义的指令)
            pipes
        utils （一些常用工具集方法、样式等）
    assets
        i18n (可选：国际化)
        img  (可选：一些图片资源)
    styles
        alain
            _antd-style （Antd Dsign原生样式目录）
        _alain-custom-variables.less
        index.less
.angular-cli.json
package.json
```

对于**可选**的文件夹，允许你**直接删除**，但可能会由于一些依赖倒置编译失败，可以根据编译结果自行调整并删除相关语句。

**src/app/core**

core文件夹包括菜单配置、布局配置、颜色主题、国际化（可选）；我建议如果企业后台无须国际化允许删除它。而其他建议保留。

**src/app/layout**

页面整体布局结构，包括：头部、左边菜单，**除非在更新日志中明确提醒否则该目录不太会变动**。

**src/app/routes**

具体业务页面可以全部放在该目录下面。有关文件结构，可以参考里面的风格。**这里的内容对于后续的升级不会有任何是影响。**

**src/styles/alain**

核心文件，除非你知道你在干什么，否则不建议你去调整它们。

**src/styles**

建议项目所需要的样式放在该目录下。

同时**勿删除_alain-custom-variables.less**文件，你可以针对在此重新定义 ng-alain 的一些默认参数值。

**.angular-cli.json**

`scripts` 节点包括第三方类库包引用配置，可以放心移除。

## 项目名称问题

由于是直接克隆的基础上进行开发，因此，对于项目命名上面，有一个窍门是搜索整个文件夹把 `ng-alain` 替换成你的名称即可。

## 后续升级注意项

除非在[更新日志](https://github.com/cipchk/ng-alain/releases)中明确指出需要对DOM结构上有所调整以外，任何一次的版本升级（主要是修复一些兼容性问题）你可以直接将 `src/styles/alain` 覆盖你的老版本即可。

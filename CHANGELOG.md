# update no more, please to [release](https://github.com/cipchk/ng-alain/releases) page.

-------------------

# 0.1.2-beta.10

+ ng-zorro-antd 0.6.x 由于[#504](https://github.com/NG-ZORRO/ng-zorro-antd/issues/504)的原因回滚至最低版本，本次只对 ng-zorro-antd 组件国际化产生影响。

# 0.1.2-beta.9

+ 新增 ng-zorro-antd 组件的国际化，见 [translator.service](./src/app/core/translator/translator.service.ts)
    + 当前 ng-zorro-antd 为 `rc` 版本，若遇到构建当中存在 `@angular/cdk` 问题，请手动安装。

> 下周末将发布正式版，这段时间将不会再新增任何功能。

# 0.1.2-beta.8

+ 增加快捷菜单，见 [menu.service.ts](./src/app/core/services/menu.service.ts)
+ 修复菜单小三角与菜单文本垂直问题
+ 移除 ng-zorro-antd 已知问题且修复的 bug 链接地址 `header.component.ts`。

# 0.1.2-beta.7

+ 增加Docker部署
    + 增加 `.dockerignore`、`docker-compose.yml`、`docker-compose.debug.yml`、`Dockerfile` 文件
    + 增加 `_nginx` 目录

# 0.1.2-beta.6

+ 增加全屏布局，见[用户关系图](https://cipchk.github.io/ng-alain/#/data-v/relation)
+ 侧边栏主菜单链接支持 `target` 属性
+ 基于Front-End-Checklist优化 `index.html`

# 0.1.2-beta.5

+ 新增 `[_src]` 指令，包括以下特性：
    + 支持微信、qq头像规则缩略图规则
    + 支持移除http&https协议http
    + 支持增加onerror事件
+ 样式相关：
    + 移除 `text-truncate` 的 `!important`。
    + 调整 `.simple-table` 的 `img` 边距由 `padding-left` 改变成 `margin-left` 更为合理。
+ 修复用户EMAIL无法缩短问题，closes [#35](https://github.com/cipchk/ng-alain/issues/35)
+ 修复注册、找回、屏幕页面密码框类型问题，closes [#34](https://github.com/cipchk/ng-alain/issues/34)
+ 调整 `sparkline.directive.ts` 目录。
+ 调整tsline规则：`curly: false`。

# 0.1.2-beta.4

+ 修复分页当前页hover文字颜色问题，closes [#31](https://github.com/cipchk/ng-alain/issues/31)

# 0.1.2-beta.3

+ 修复 `file-upload` 按钮由于 `span` 样式关系导致元素无法触发问题，closes [#27](https://github.com/cipchk/ng-alain/issues/27)

# 0.1.2-beta.2

+ 新增 `TitleService` 用于设置页面标题

# 0.1.2-beta.1

+ 为了更好支持 git-subtree 调整 `styles` 目录位置至 `src/styles/alain/`（以及 `themes.service.ts` 变更）

# 0.1.1-beta.2

+ 支持 `ng-zorro-antd` 部分组件换肤
+ 修复若干样式细节

# 0.1.1-beta.1

为了 ng-alain 更好的发展（主要是 alain 在其他框架中做准备），最后还是决定由 scss 转为 less，虽然 scss 更优雅这也是当初选择的原因：

+ scss 转 less 升级要点
    + `.angular-cli.json` 中 `styles`、`styleExt` 变更为 `.less`
    + `themes.service.ts` 修改为 `.less`
    + 对所有 `.scss` 文件后缀换成 `.less`
+ **注：** 根据团队反馈，去掉所有业务的 `.less` 文件，这是因为作为后台管理绝大多数页面中无须编写样式，去掉可以提升编译速度。
+ 新增 `down-file` 指令。
+ 升级 `ng-zorro-antd` 至最新版本，并移除已经修复BUG的部分样式代码。

# 0.1.0-beta.1

**0.1.0版本说明：**

由于 `nz-menu` 很难满足 ng-alain 的需求，这包括换肤、收缩等问题，因此重写菜单；并且不兼容 `0.0.x` 的版本（已将独立另一分支）；主要改变：

+ `0.1.0` 影响到整个 `layout`（结构发生改变）、`styles` 文件夹，因此升级时最好移除并重新添加。
+ 原10套颜色主题，保留5个主要色，且每一色系包括：菜单栏黑、白两色系，新依然保持10个主题色。
+ 菜单默认 `14px` 字号。
+ 优化框架样式属性参数化，允许通过 `_alain-custom-variables.scss` 改变主题基本配置；主要是ng-alain，对于 `ng-zorro-antd` 组件（如：字号、间距等）并不支持，这一点我一直在尝试，但成本太高！
+ 顶部快捷菜单与搜索框由改成左中右布局
+ **实验性功能** 支持自定义 ng-zorro-antd 所有组件字号
+ closes [#6](https://github.com/cipchk/ng-alain/issues/6) [#12](https://github.com/cipchk/ng-alain/issues/12) [#13](https://github.com/cipchk/ng-alain/issues/13) [#14](https://github.com/cipchk/ng-alain/issues/14) [#23](https://github.com/cipchk/ng-alain/issues/23)

**其他**

+ 支持 `ng lint`
+ 从 `app.component.ts` 中移除非必选 `nz-root`
+ 样式：
    + 新增 `badge-dot` 小红点。
    + 新增 `nz-table` 单元格与文本垂直居中
    + 新增 `unwrap` 样式，使内容区域与header、aside 无缝
    + 优化 `width-*`、`modal-*`
+ 默认开启支持IE版本（可通过 `polyfills.ts` 自行关闭）
+ 新 Logo
+ 升级 `angular`、`angular-cli`、`ng-zorro-antd` 至最新版本
    + 之前有过一个版本回退，以及 `licenses` BUG问题都已经修复。
    + close [#15](https://github.com/cipchk/ng-alain/issues/15)

# 0.1.0-beta.1

+ 增加 `.simple-table`、`.search-form`、`.fixed-btns` 样式，效果见[门店页](https://cipchk.github.io/ng-alain/#/extras/poi)
+ 增加HTML模板驱动表单视觉反馈，默认未开启，可以在 `_alain-custom-variables.scss` 增加 `$form-state-visual-feedback-enabled: true;`
+ 增加门店页
+ 增加 `_HttpClient`、`ModalHelper` 类
    + `_HttpClient` 简化请求以及更好的与 `[nzLoading]` 属性相配合
    + `ModalHelper` 简化打开与回调处理
+ 增加Modal相关样式，更便于自定义组件，见[CSS组件补丁类](./_documents/component-patch.md)

# 0.0.1-beta.3

+ **注** 允许通过 `_alain-custom-variables.scss` 覆盖 `styles` 属性值，例如：将内容区域背景色为白色。见 [升级目录结构](./_documents/upgrade.md)。
+ 增加 `yn`、`keys` 管道，见 [pipe文档](./_documents/pipe.md)
+ 增加 `badge` 样式
+ 升级 `angular-cli@4.4.1`、`ng-zorro-antd@0.5.1`

# 0.0.1-beta.2

+ 增加 `tree`、`sortable`、`sweetalert` 示例

# 0.0.1-beta.1

+ 增加顶部左右结构布局（替换 `header-left-right.component` 模板可以体验），新增 `.top-nav-wrap` 样式
+ 增加自定义样式风格目录结构
+ 增加利用 `environments` 使开发、生产设置不同参数（例如：后端地址）
+ 修复 `TokenService` 循环依赖问题
+ 重写模态框示例
+ 重写 `StartupService` 解决状态码处理BUG
+ 更新 `@angular/cli` 至最新版本，当前版本可能会存在 `licenses` BUG，可增加 ` --extract-licenses=false` 解决，抑或不升级
+ 优化样式目录结构

# 0.0.1-beta

+ 增加 `core`、`shared` 别名，允许通过 `@shared/shared.module` 访问 `SharedModule`
+ 增加顶部菜单栏 `.full` 样式，方便去掉搜索框菜单右对齐。
+ 修复首次加载菜单无法选中问题
+ 优化源代码包体大小，去掉 `ueditor` 示例、清除无效图像资源
+ 优化首次加载速度方法，仪表盘去掉延迟加载
+ 优化 `core/services` 目录结构

# 0.0.1-alpha.7

+ 增加TOKEN拦截器示例
+ 修复菜单有时出现重复选择问题，closes #8
+ 升级 `angular-cli`、`ng-zorro-antd` 至最新版本
+ 由于新版 `angular-cli` 对commonjs都必须指定一个名称，因此重写 `preloader` （ 并在 `main.ts` 中导入它）。

# 0.0.1-alpha.6

+ 新增应用启动，基础、菜单、用户数据由远程获取。
+ 新增ACL
+ 修复测试用例
+ 关闭 #6 #7

# 0.0.1-alpha.5

+ 新增若干小部件
+ 新增 `algin`、`img` 相关CSS工具类
+ 新增10*10种颜色CSS工具类
+ 升级 `ng-zorro-antd` 至最新版本

# 0.0.1-alpha.4

+ 新增G2图表
+ 移除未发布 `nz-avatar` antd补丁样式
+ 升级 `ng-zorro-antd` 至最新版本
+ 修复 [#1](https://github.com/cipchk/ng-alain/issues/1)

# 0.0.1-alpha.3

+ 新增路由守卫DEMO
+ 新增设置快捷入口
+ 新增 `nz-carousel` 指示点颜色补丁
+ 新增若干小部件

# 0.0.1-alpha.2

+ 新增 `.list-group` CSS组件
+ 新增 `_date`、`_currenty` Pipe
+ 新增扩展页：帮助中心、个人设置
+ 新增 component-patch.md pipe.md 说明

+ 修复顶部搜索框的 `nzFocus`、`nzBlur` 问题。
+ 调整 `color.service`、`scroll.service` 至 services 目录。

# 0.0.1-beta.4

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

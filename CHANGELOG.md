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

# 通用组件库

建议将项目中通用的组件放在该目录下。

> 不要忘记在 `index.ts` 中导出它，这样 `share.module` 会自动注册它。

# 关于组件 index.md 说明

每个组件都需要一个 index.md 作为对该组件的API接口、调用说明做说明。

建议开头统一加上组件的基础说明，例如：

```
---
component: notice-icon （组件名）
title: 通知菜单 （组件名称）
cols: 1 （可选：占用栏数）
---
```

# 样式

每一个共享组件建议采用 `encapsulation: ViewEncapsulation.None` 封装策略，因为绝大部分情况下，我们是需要对 `ng-zorro-antd` 加以修饰，而只有 `None` 策略能正确的应用样式。

# 组件列表

组件名 | API | 说明
----|------|------
`desc-list` | [API](./desc-list/index.md) | 描述列表
`notice-icon` | [API](./notice-icon/index.md) | 通知菜单
`pro-header` | [API](./pro-header/index.md) | Pro 专用标题
`standard-form-row` | [API](./standard-form-row/index.md) | 标准表单行
`tag-select` | [API](./tag-select/index.md) | 标签选择器
`ellipsis` | [API](./ellipsis/index.md) | 一个简单的文本自动省略号
`avatar-list` | [API](./avatar-list/index.md) | 用户头像列表
`trend` | [API](./trend/index.md) | 趋势标记
`result` | [API](./result/index.md) | 处理结果
`exception` | [API](./exception/index.md) | 异常
`global-footer` | [API](./global-footer/index.md) | 全局页脚
g2-charts | [API](./charts/index.md) | 图表清单

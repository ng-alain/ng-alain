---
component: desc-list
title: 描述列表
cols: 1
---

成组展示多个只读字段，常见于详情页的信息展示。

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
layout | 布局方式  | `horizontal,vertical` | `horizontal`
col | 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 | `number(0 < col <= 4)` | `3`
title | 列表标题  | `string, TemplateRef<any>` | -
gutter | 列表项间距，单位为 `px`  | `number` | `32`
size | 列表型号，可以设置为 `large` `small`  | `string` | -

## 响应式规则

| 窗口宽度             | 展示列数                                      | 
|---------------------|---------------------------------------------|
| `≥768px`           |  `col`                                       |
| `≥576px`           |  `col < 2 ? col : 2`                         |
| `<576px`           |  `1`                                         |

### `desc-list-item`

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| term     | 列表项标题                                 | `string, TemplateRef<any>`  | - |


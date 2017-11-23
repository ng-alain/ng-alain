---
component: standard-form-row
title: 标准表单行
cols: 1
---

一般用在搜索框需要左右结构时。

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
title | 标题 | `string` | -
block | 是否整行 | `boolean` | `false`
last | 是否最后一行 | `boolean` | `false`
grid | 是否网格布局 | `boolean` | `false`

## DEMO

```html
<standard-form-row [title]="'所属类目'" block></standard-form-row>

<standard-form-row [title]="'其它选项'" grid last></standard-form-row>
```

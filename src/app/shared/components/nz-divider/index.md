---
component: nz-divider
title: 分割线
---

**注意：组件将在3.0直接支持，这里是一种临时方案，但API和React保持一致。**

区隔内容的分割线。

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
nzType | 水平还是垂直类型  | `horizontal,vertical` | `horizontal`
nzDashed | 是否虚线 | `Boolean` | `false`
nzTitle | 标题 | `string, TemplateRef<any>` | -

## Demo

```html
<nz-divider nzDashed></nz-divider>
<nz-divider nzTitle="cipchk"></nz-divider>
<nz-divider nzType="vertical"></nz-divider>
```

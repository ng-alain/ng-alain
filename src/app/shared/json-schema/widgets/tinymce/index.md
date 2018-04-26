---
title: tinymce
subtitle: Tinymce富文本
type: Third Widgets
---

Tinymce富文本。

> 注：第三方小部件默认并未注册，细节见[自定义小部件](https://ng-alain.com/form/customize)。

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
config | 配置项说明，[见官网](https://www.tinymce.com/docs/configure/integration-and-setup/) | `Object` | -
loading | 初始化提示文本 | `string` | `加载中...`
change | 编辑器内容发生改变时会触发该事件 | `(html: string) => void` | -

## Demo

```ts
schema = {
    properties: {
        remark: {
            type: 'string',
            title: '描述',
            ui: {
                widget: 'tinymce'
            }
        }
    }
}
```

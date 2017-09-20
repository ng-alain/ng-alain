# 工具类规则

`ng-alain` 在 Ant Design 的基础上生产一套尺寸、间距、颜色等工具类。

## 尺寸

我认为这些工具类只会运用在内容区域，因此，按 Ant Design 的规范，尺寸的宽度是以一个 `8px` Gutter 基础间距为基础；并衍生出三个尺寸，分别为：

| 名称 | 公式 | 尺寸 | 说明 |
| ---- | --- | --- | --- |
| `sm` | $gutter | 8px | 小号 |
| `md` | $gutter * 2 | 16px | 中号 |
| `lg` | $gutter * 3 | 24px | 大号 |

依这些尺寸规则，衍生出尺寸微调整的类，这些类包括 `margin`、`padding`，其命名规则如下。

类型包括：`padding`、`margin`。

方向包括：`top`、`right`、`bottom`、`left`、`x`（`left`、`right`）、`y`（`top`、`bottom`）；方向为可选。

**消除**

```regex
[<类型>p|m][<方向>t|r|b|l|x|y]?0
```

**基础**

```regex
[<类型>p|m][<方向>t|r|b|l|x|y]?-[<尺寸>sm|md|lg]
```

示例：

```css
.p-sm { padding: 8px !important; }
.pt-sm { padding-top: 8px !important; }
.m-sm { margin: 16px !important; }
.mt-md { margin-top: 16px !important; }

.p0 { padding: 0 !important; }
```

## 色彩

Ant Design 并没有按钮色这一说，而是以视觉效果为基准。`nz-button` 包括四种类型：`primary`、`dashed` 等。但 `primary` 是固定的蓝色系列，这是默认色系。

而 `ng-alain` 依然不会破坏这种规则，但依 [色彩](https://ant.design/docs/spec/colors-cn) 章节，我产生了一种运用于文本、背景的色系类。

色彩一共有十种，前九种依[色彩](https://ant.design/docs/spec/colors-cn)为准，以及新增一种 `teal【#20c997】` （别问我为什么，我就喜欢偶数而已），分别如下：

| 名称 | 基本色 | 说明 |
| ---- | --- | --- |
| `red` | `#f04134` | 热情、警示 |
| `green` | `#00a854` | 成功、通过、安全 |
| `blue` | `#108ee9` | 专业、科技 |
| `pink` | `#f5317f` | 典雅、明快、女性 |
| `orange` | `#f56a00` | 醒目、温暖 |
| `purple` | `#7265e6` | 高雅、浪漫 |
| `yellow` | `#ffbf00` | 活力、提示 |
| `cyan` | `#00a2ae` | 清新、冷静、结构化 |
| `grey` | `#bfbfbf` | 平稳、中性 |
| `teal` | `#20c997` |  |

这些色彩会衍生出 10 种渐变色，然而每一种渐变色要想产生一个有效的命名（10 * 10）非常困难。因此，我只衍生三种颜色规则，分别为：

| 名称 | 色号 |
| ---- | --- |
| `light` | 5号 |
| `normal` | 6号 |
| `dark` | 7号 |

然后依以下规则产生：

类型包括：`text`、`background-color`、`background-color:hover`。

```regex
[<类型>text|bg]-[<色彩名>red|green|blue|pink|orange|purple|yellow|cyan|teal|grey](-[light|dark])?(-h)?
```

*`normal` 本身即是基本色，所以实际无须加上 normal*

> `grey` 可能会更常用，因此，除了 `grey-light`、`grey-dark` 额外增加了 `grey-lighter`、`grey-darker` 表示更浅深度。

示例：

```scss
// Text color
.text-red-light { color: #fabeb9 !important; }
.text-red { color: #f04134 !important; }
.text-red-dark { color: #a31837 !important; }

// background-color color
.bg-red-light { background-color: #fabeb9 !important; }
.bg-red { background-color: #f04134 !important; }
.bg-red-dark { background-color: #a31837 !important; }

// hover color
.bg-red-light-h { &:hover { background-color: #fabeb9 !important; } }
.bg-red-h { &:hover { background-color: #f04134 !important; } }
.bg-red-dark-h { &:hover { background-color: #a31837 !important; } }
```

### 别名

实际上 Ant Design 提供一套类似 bootstrap 的命名方式的别名规则。只是，我们无法使用到这里内置的而已，这些别名包括：

| 别名 | 色系 |
| ---- | --- |
| `primary` | `blue` |
| `success` | `green` |
| `error` | `red` |
| `warning` | `yellow` |

进而，我将取转化成文本与背景，其命名规则同上面一样，只是将色彩名变成为别名而已。

示例：

```scss
// Text color
.text-error-light { color: #fabeb9 !important; }
.text-error { color: #f04134 !important; }
.text-error-dark { color: #a31837 !important; }

// background-color color
.bg-error-light { background-color: #fabeb9 !important; }
.bg-error { background-color: #f04134 !important; }
.bg-error-dark { background-color: #a31837 !important; }

// hover color
.bg-error-light-h { &:hover { background-color: #fabeb9 !important; } }
.bg-error-h { &:hover { background-color: #f04134 !important; } }
.bg-error-dark-h { &:hover { background-color: #a31837 !important; } }
```

### 全量颜色

包含10*10=100种颜色面板，具体效果参见 [color page](https://cipchk.github.io/ng-alain/#/elements/colors)。

## Clearfix

`ng-zoroo-antd` 自带清除浮动 `.clearfix`。

## Display

| 别名 | CSS |
| ---- | --- |
| `d-none` | `display: none` |
| `d-block` | `display: block` |
| `d-inline-block` | `display: inline-block` |
| `d-flex` | `display: flex` |
| `d-inline-flex` | `display: inline-flex` |
| `justify-content-start` | `justify-content: flex-start` |
| `justify-content-end` | `justify-content: flex-end` |
| `justify-content-center` | `justify-content: center` |
| `justify-content-between` | `justify-content: space-between` |
| `justify-content-around` | `justify-content: space-around` |
| `align-items-start` | `align-items: flex-start` |
| `align-items-end` | `align-items: flex-end` |
| `align-items-center` | `align-items: center` |
| `align-items-baseline` | `align-items: baseline` |
| `align-items-stretch` | `align-items: stretch` |
| `align-content-start` | `align-content: flex-start` |
| `align-content-end` | `align-content: flex-end` |
| `align-content-center` | `align-content: center` |
| `align-content-between` | `align-content: space-between` |
| `align-content-around` | `align-content: space-around` |
| `align-content-stretch` | `align-content: stretch` |
| `align-self-auto` | `align-self: auto` |
| `align-self-start` | `align-self: flex-start` |
| `align-self-end` | `align-self: flex-end` |
| `align-self-center` | `align-self: center` |
| `align-self-baseline` | `align-self: baseline` |
| `align-self-stretch` | `align-self: stretch` |

## Float

| 名称 | 说明 |
| ---- | --- |
| `fixed-top` | 顶部 |
| `fixed-bottom` | 底部 |

## Text

### Sizing

Ant Design 是以 `12px` 为基准字号。

| 名称 | 说明 |
| ---- | --- |
| `text-sm` | `12px` |
| `text-md` | `24px` |
| `text-lg` | `36px` |

### Alignment

| 名称 | 说明 |
| ---- | --- |
| `text-left` | 文本居左 |
| `text-center` | 文本居中 |
| `text-right` | 文本居右 |

### Wrapping

**容器必须是 `display: inline-block` 或 `display: block`。

| 名称 | 说明 |
| ---- | --- |
| `text-nowrap` | 文本超出不换行 |
| `text-truncate` | 文本超出截取并加 `...` |

### Transformation

| 名称 | 说明 |
| ---- | --- |
| `text-lowercase` | 小写文本 |
| `text-uppercase` | 大写文本 |
| `text-capitalize` | 首词大写 |
| `text-deleted` | 删除线 |

### Weight and italics

| 名称 | 说明 |
| ---- | --- |
| `font-weight-normal` | `font-weight: normal` |
| `font-weight-bold` | `font-weight: 700` |
| `font-italic` | `font-style: italic` |

## Borders

### 边框

| 名称 | 说明 |
| ---- | --- |
| `border` | `border: 1px solid #f5f5f5 !important;` |
| `border-0` | `border: 0 !important;` |
| `border-top-0` | `border-top: 0 !important;` |
| `border-right-0` | `border-right: 0 !important;` |
| `border-bottom-0` | `border-bottom: 0 !important;` |
| `border-left-0` | `border-left: 0 !important;` |

### 颜色

支持色彩章节所有的色系&别名写法，例如：`border-red`、`border-success`。

### 圆角

| 名称 | 说明 |
| ---- | --- |
| `rounded-0` | `border-radius: 0;` |
| `rounded-circle` | `border-radius: 50%;` |
| `rounded-sm` | `border-radius: 2px;` |
| `rounded-md` | `border-radius: 4px;` |
| `rounded-lg` | `border-radius: 6px;` |

## Width

| 名称 | 说明 |
| ---- | --- |
| `width-sm` | `160px` |
| `width-md` | `240px` |
| `width-lg` | `320px` |

## Responsive

类似 Bootstrap 响应式规则，当屏幕小于 `480px` 时会隐藏所有 `hidden-xs` 类。

| 名称 | 屏幕 |
| ---- | --- |
| `hidden-xs` | <480px |
| `hidden-sm` | <768px |
| `hidden-md` | <992px |
| `hidden-lg` | <1200px |

## Other

| 名称 | 说明 |
| ---- | --- |
| `block-center` | `margin: 0 auto` |
| `point` | `cursor: pointer` |
| `no-resize` | 设置不允许调整元素 |

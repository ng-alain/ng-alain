# CSS组件补丁类

## `list-group` 列表组

相当于 Bootstrap4。

## `animate.css` CSS动画库

来源于 [animate.css](https://daneden.github.io/animate.css/)。

## `nz-button` 补丁

+ `ant-btn__block` 强制按钮为块元素 `display: block; width: 100%;`。

## `nz-card` 补丁

+ `ant-card__title-img` 标题为图片时设置 `valign` 为内容与对象中部对齐。
+ `ant-card__img` 图片类型卡片强制设置 `ant-card-body` 无间距且支持内部 `img` 样式为自动100%大小。
+ `ant-card__body-nopadding` 强制内容无间距。
+ `ant-card__{{color}}` 设置标题背景色；颜色值参[工具类规则](utils.md)。

## `nz-breadcrumb` 补丁

+ `ant-breadcrumb__last-item-no-bold` 强制最后一项字体粗细为正常 `font-weight: normal`。

## `masonry-grid` 纯CSS瀑布流

+ `row-masonry` 行
    + `.row-masonry-{xs|sm|md|lg|xl}-{1-10}` 响应式样式
+ `col-masonry` 列

## `nz-carousel` 补丁

+ `nz-carousel__dot-{{color}}` 设置指示点颜色；颜色值参[工具类规则](utils.md)。

## `nz-modal` 补丁

+ `.modal-{lg|sm}` 设置Modal的大小，例如：`wrapClassName: 'modal-lg'`
+ `.modal-header` 自定义Modal时非常有效。
+ `.modal-footer` 自定义Modal时非常有效。
> 效果可参考[Modal](https://cipchk.github.io/ng-alain/#/elements/modal)

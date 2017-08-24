# 接地气Pipe

## `_currenty` 货币

`_currency` 货币格式化，简化原 `currency` 针对中文货币格式化问题，使用方式同 `currenty` 一样。

```html
{{data.price | _currency}}
```

输出：

```
￥4,035,173.71
```

**别忘记在根模块中注册语言环境：**

```typescript
// code see: https://github.com/unicode-cldr/cldr-core/blob/master/availableLocales.json
{ provide: LOCALE_ID, useValue: 'zh-Hans' }
```

## `_date` 货币

`ng-zorro-antd` 依赖了 moment ，因此，可以创建一个基于moment的 `_date` 格式化。

最大好处是 moment 支持不同种类的时间格式，例如：

+ 2017-08-24 18:08:20
+ 2017-08-24
+ 20170824
+ 1503571962333

等等。

```html
{{data.registered | _date: 'YYYY年MM月DD日'}}
```

输出：

```
2017年08月24日
```

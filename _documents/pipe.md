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
import { registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
registerLocaleData(localeZhHans);


{ provide: LOCALE_ID, useValue: 'zh-Hans' }
```

## `_date` 货币

基于 moment 日期格式化，显示更多细节参考：http://momentjs.com/docs/#/displaying

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

## `keys` 将对象数组化

例如：

```typescript
const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
```

变成可迭代对象：

```html
<div *ngFor="let item of data | keys">{{item.value.city}} {{item.value.district}}</div>
```

## `yn` 将boolean类型徽章化

```html
<td [innerHTML]="enabled | yn"></td>
Output: 
<td><span class="badge badge-success">是</span></td>
```

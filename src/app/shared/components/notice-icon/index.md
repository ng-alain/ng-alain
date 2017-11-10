---
component: notice-icon
title: 通知菜单
cols: 1
---

用在导航工具栏上，作为整个产品统一的通知中心。

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
data | 数据 | `NoticeItem[]` | -
count | 图标上的消息总数 | `number` | -
loading | 弹出卡片加载状态 | `boolean` | `false`
select | 点击列表项的回调，参数：`{type:'',item:any}` | `EventEmitter` | -
clear | 点击清空按钮的回调 | `EventEmitter` | -
popoverVisible | 手动控制Popover显示 | `boolean` | `false`
popupVisibleChange | Popover显隐回调 | `EventEmitter` | -

### NoticeItem

参数 | 说明 | 类型 | 默认值
----|------|-----|------
title | 标题 | `string` | -
list | 列表数据，格式参照下表 | `any[]` | -
emptyText | 针对每个 Tab 定制空数据文案 | `string` | -
emptyImage | 针对每个 Tab 定制空数据图片 | `string` | -


### Tab data

参数 | 说明 | 类型 | 默认值
----|------|-----|------
avatar | 头像图片链接 | string | -
title | 标题 | ReactNode | -
description | 描述信息 | ReactNode | -
datetime | 时间戳 | ReactNode | -
extra | 额外信息，在列表项右上角 | ReactNode | -

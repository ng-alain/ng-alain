# ShareModule

**应** 包含定义：

+ 应用通用自定义业务组件

**应** 导出所有包含的模块。

**不应** 有 `providers` 属性。

## 自定义全局组件或指令

每一个组件或指令应该有一个完整的说明文件，**建议**一个合理的目录结构应该是：

```
├── components
│   ├── comp1
│   │   ├── index.ts
│   │   ├── README.md
│   ├── comp2
│   │   ├── index.ts
│   │   ├── README.md
├── directives
│   ├── dire1
│   │   ├── index.ts
│   │   ├── README.md
│   ├── dire2
│   │   ├── index.ts
│   │   ├── README.md
```

# Happy Coding

ng-alain 配置了一些针对 cli、ide 选项，以便更好进行编码工作。

## cli

vscode 是编写 Angular 最佳的选择，你可以在项目的任何目录里输入：`ng g c list` 生成组件的相应的文件。

ng-alain 默认配置了不生成样式文件&单元测试，因此，你会看到生成的只有 `.ts`、`.html`。这是因为 ng-alain 提供了非常丰富的样式API，在大多数页面中自定义样式并不是刚需的；同时，单元测试也是如此。

当然，你可以很容易在 `.angular-cli.json` 中调整默认配置。

## snippets

vscode 是编写 Angular 最佳的选择，自然 ng-alain 也制作了相应 snippets 扩展插件：[ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)。除了大量的 ng-zorro-antd 组件片断以外，还加入了部分 ng-alain 片断，例如：

```
nz-button => 构建一个按钮
nz-alain-content => 构建一个ng-alain页面标题
nz-alain-pro.header => 构建一个pro版本的页面标题
```

## pre commit

`lint` 可以非常有效的帮助我们更早发现bug、更高的可读性；如果我们能够保证团队开发过程中每一次 commit 前都自动做一次 staged 中文件的 lint 的话，那不是非常酷吗？

`ng-alain` 配置了每次对 staged 进行 commit 时会预先做 lint，若发现错误则无法提交。

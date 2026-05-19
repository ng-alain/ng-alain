# NG-ALAIN — Agent 协作指南

> 本文件为 AI 编码助手（Copilot、Cursor、Claude 等）提供项目上下文，帮助其在本仓库中做出准确、符合规范的代码决策。

---

## 项目概述

**NG-ALAIN** 是一个基于 [Angular](https://angular.io/) + [NG-ZORRO Antd](https://ng.ant.design/) 的企业级中后台前端脚手架，遵循 Ant Design 设计价值观。当前版本：**v21.x**（Angular 21，Zoneless 模式）。

- 文档站点：<https://ng-alain.com/zh>
- 源码仓库：<https://github.com/ng-alain/ng-alain>
- 组件库仓库：<https://github.com/ng-alain/delon>

---

## 技术栈

| 层次 | 技术 |
|------|------|
| 框架 | Angular 21（Standalone + Zoneless） |
| UI 组件库 | ng-zorro-antd 21 |
| 业务组件库 | @delon/abc、@delon/chart |
| 主题系统 | @delon/theme（LESS 变量、CSS 工具集） |
| 表单引擎 | @delon/form（JSON Schema 动态表单） |
| 权限控制 | @delon/acl |
| 用户认证 | @delon/auth（SimpleToken / JWTToken） |
| 缓存 | @delon/cache |
| Mock | @delon/mock |
| 工具库 | @delon/util |
| 样式 | LESS |
| 测试框架 | Vitest（`vitest.config.ts`） |
| 代码规范 | ESLint + Prettier + Stylelint |
| 提交钩子 | Husky（pre-commit lint-staged） |
| 脚手架工具 | Angular CLI Schematics（`ng-alain` schematic） |

---

## 目录结构

```
ng-alain/
├── _mock/                        # Mock 数据规则（@delon/mock）
├── _cli-tpl/                     # 自定义 CLI 模板
├── public/                       # 静态资源（直接复制到产物）
├── src/
│   ├── main.ts                   # 应用入口
│   ├── styles.less               # 全局样式入口
│   ├── style-icons.ts            # 按需引入的 Ant Design 图标
│   ├── style-icons-auto.ts       # 自动生成的图标引用
│   ├── app/
│   │   ├── app.ts                # 根组件
│   │   ├── app.config.ts         # 全局 providers 配置（ApplicationConfig）
│   │   ├── core/                 # 核心服务（仅全局单例，严禁在此写业务）
│   │   │   ├── i18n/             # 国际化加载服务（I18NService）
│   │   │   ├── net/              # HTTP 拦截器（DefaultInterceptor）
│   │   │   ├── startup/          # 启动服务（StartupService）
│   │   │   └── index.ts          # 核心导出
│   │   ├── layout/               # 布局组件
│   │   │   ├── basic/            # 基础布局（含顶栏、侧边菜单）
│   │   │   ├── blank/            # 空白布局
│   │   │   └── passport/         # 登录/注册布局
│   │   ├── routes/               # 业务路由模块
│   │   │   ├── routes.ts         # 根路由配置
│   │   │   ├── dashboard/        # 仪表盘示例
│   │   │   ├── delon/            # @delon 组件示例
│   │   │   ├── passport/         # 登录/注册页
│   │   │   ├── exception/        # 异常页（403/404/500）
│   │   │   └── ...               # 其他业务模块
│   │   └── shared/               # 共享资源
│   │       ├── shared-imports.ts # 高频共享组件集合（直接 import 导出）
│   │       ├── shared-delon.module.ts  # @delon 共享模块
│   │       ├── shared-zorro.module.ts  # NG-ZORRO 共享模块
│   │       └── index.ts          # 共享导出
│   ├── assets/                   # 本地静态资源（图片、i18n JSON 等）
│   ├── environments/             # 环境变量
│   └── styles/                   # 全局 LESS 样式
├── angular.json                  # Angular 工作区配置
├── tsconfig.json                 # TypeScript 根配置
├── vitest.config.ts              # Vitest 测试配置
├── eslint.config.mjs             # ESLint 配置
└── stylelint.config.mjs          # Stylelint 配置
```

---

## 常用命令

```bash
# 启动开发服务器
npm start                         # 等价于 ng serve -o

# 构建生产包
npm run build                     # 等价于 ng build

# 代码检查
npm run lint                      # TS + LESS 全量 lint
npm run lint:ts                   # 仅 TypeScript
npm run lint:style                # 仅 LESS

# 运行测试
npm test                          # Vitest 交互模式
npm run test-coverage             # 生成覆盖率报告

# 主题工具
npm run color-less                # 生成色彩 LESS 变量
npm run theme                     # 生成主题 CSS（dark/compact）
npm run icon                      # 更新按需图标列表
```

### CLI Schematics（新增页面）

```bash
# 新增业务模块
ng g ng-alain:module <module-name>

# 新增列表页
ng g ng-alain:list <page-name> -m=<module-name>

# 新增编辑页（模态框）
ng g ng-alain:edit <page-name> -m=<module-name>

# 新增详情查看页
ng g ng-alain:view <page-name> -m=<module-name>

# 新增空白页
ng g ng-alain:empty <page-name> -m=<module-name>
```

---

## 架构约定

### 组件风格

- 项目使用 **Standalone Components**（Angular 17+ 风格），新建组件统一使用 `standalone: true`。
- 变更检测使用 **Zoneless**（`provideZonelessChangeDetection()`），**禁止**引入 `zone.js`。
- 样式文件使用 **LESS**（`angular.json` 中已配置 `inlineStyleLanguage: less`）。
- 组件默认**不生成**单独的 `.less` 样式文件（在 `angular.json` 的 schematics 中配置），如需自定义样式，手动创建并在组件中引用。

### 路由约定

- 所有业务路由通过**懒加载**（`loadChildren`）方式注册于 `src/app/routes/routes.ts`。
- 受认证保护的路由统一使用 `authSimpleCanActivate` + `authSimpleCanActivateChild` 守卫。
- 路由守卫 `startPageGuard` 用于处理起始页跳转逻辑。

### 共享模块

- `shared-imports.ts`：整个项目高频使用的 Standalone 组件/指令/管道直接导出，在各业务页面按需 import。
- `shared-delon.module.ts`：@delon 系列模块的聚合（用于 NgModule 模式的导入）。
- `shared-zorro.module.ts`：NG-ZORRO 模块的聚合。
- **原则**：某个模块/组件在 **2 个以上**业务页面中使用，才应放入 shared；否则在使用处直接 import。

### HTTP 与服务端交互

- 使用 `@delon/theme` 提供的 `_HttpClient`（封装了通用错误处理与参数序列化）代替原生 `HttpClient`。
- 拦截器注册顺序（`app.config.ts`）：`authSimpleInterceptor` → `defaultInterceptor`。
- `DefaultInterceptor`（`src/app/core/net/default.interceptor.ts`）负责：统一请求前缀、处理 HTTP 异常、处理业务异常（如 `{ code: 0, msg: '...' }`）。
- 开发环境跨域通过 `proxy.conf.js` 配置 Angular CLI 代理解决，**不要**在生产代码中绕过 CORS。

### 启动初始化

- `StartupService.load()` 在 `APP_INITIALIZER` 中执行，用于加载菜单、用户信息、权限数据等应用级数据。
- 若需要在启动前请求接口（如获取菜单），应在 `StartupService` 内完成，**不要**在组件的 `ngOnInit` 中做全局性初始化。

### Mock 数据

- Mock 规则统一放在 `_mock/` 目录下，以模块为单位分文件。
- Mock 仅在开发/测试环境下生效（通过 `environment.ts` 中的 `mock` 配置控制）。
- 确保 Mock 数据的接口结构与后端真实接口保持一致。
- 完成联调后及时注释或删除对应 Mock 规则。

### ACL 权限

- 使用 `@delon/acl` 的 `ACLService` 进行权限控制，支持角色（role）和权限点（ability）两种模式。
- 在模板中使用 `*aclIf="'permission-key'"` 指令控制元素显示/隐藏。
- 在路由中使用 `canActivate: [ACLGuard]` 进行页面级权限控制。

### 国际化

- 使用 `@delon/theme` 的 `ALAIN_I18N_TOKEN` 注入 `I18NService`。
- i18n 资源文件存放在 `src/assets/i18n/` 下，按语言分目录（`zh/`、`en/`）。
- 模板中使用 `{{ 'key' | i18n }}` 管道，代码中注入 `I18NService` 调用 `fanyi(key)`。

### 主题系统

- 基础主题变量覆盖在 `src/styles/` 目录下的 LESS 文件中配置。
- 支持暗色主题（`style.dark.css`）和紧凑主题（`style.compact.css`），通过运行时切换 `<link>` 标签实现。
- 使用 `ng-alain-plugin-theme` 工具生成主题 CSS 文件（`npm run theme`）。

---

## 编码规范

### TypeScript

- 遵循官方 [Angular Style Guide](https://angular.io/guide/styleguide)。
- 使用 `inject()` 函数注入依赖（代替构造函数注入），与 Angular 17+ 最佳实践保持一致。
- 优先使用 Angular Signals（`signal`、`computed`、`effect`）而非 RxJS Subject 管理组件状态。
- 服务使用 `providedIn: 'root'` 或通过 `providers` 数组在特定层级提供，避免不必要的多实例。
- 文件命名遵循 `kebab-case`，例如：`user-list.component.ts`、`user.service.ts`。

### LESS / 样式

- 优先使用 `@delon/theme` 提供的 CSS 工具类（如 `.mb-md`、`.text-center`）。
- 组件私有样式应置于组件同名 `.less` 文件，使用组件选择器作为顶层命名空间防止污染。
- **禁止**使用 `!important`（除非覆盖第三方库样式且无法通过选择器优先级解决）。
- LESS 变量使用 `@` 前缀，遵循 NG-ALAIN 现有变量命名规范。

### 测试

- 单元测试使用 **Vitest**，测试文件与源文件同目录，命名为 `*.spec.ts`。
- 组件测试中，修改 Signal 值后需调用 `fixture.detectChanges()` 以触发视图更新（Zoneless 模式）。
- Mock 服务依赖使用 `jasmine.createSpyObj` 或 Vitest 的 `vi.fn()`。

### Git 提交

- Husky `pre-commit` 钩子会对 staged 的 `*.ts` 和 `*.less` 文件执行自动格式化，提交前无需手动 lint。
- 若出现 `hook was ignored because it's not set as executable` 错误，执行：
  ```bash
  chmod ug+x .husky/*
  chmod ug+x .git/hooks/*
  ```
- Commit Message 建议遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：
  - `feat(module): 新增用户管理模块`
  - `fix(auth): 修复 token 过期后未跳转登录页的问题`
  - `refactor(shared): 提取公共表格配置`

---

## 业务开发流程（快速参考）

1. **新增业务模块**：`ng g ng-alain:module <name>`，在 `src/app/routes/routes.ts` 中注册懒加载路由。
2. **新增页面**：在模块目录内执行 `ng g ng-alain:list/edit/view <name> -m=<module>`。
3. **接入后端接口**：在 `StartupService` 或页面组件中使用 `_HttpClient` 发起请求，接口数据格式与 `DefaultInterceptor` 中的解析逻辑保持一致。
4. **配置权限**：通过 `ACLService.setRole()` / `setAbility()` 设置用户权限，在模板和路由中使用 ACL 指令/守卫控制访问。
5. **国际化支持**：在 `src/assets/i18n/zh/` 和 `en/` 下添加对应 key，模板使用 `i18n` 管道。
6. **Mock 联调**：在 `_mock/` 中添加对应接口规则，联调完成后删除。

---

## AI 助手注意事项

- **不要引入 NgModule**：本项目全面使用 Standalone Components，新建组件不应使用 `@NgModule`。
- **不要引入 zone.js**：项目已切换至 Zoneless，`provideZonelessChangeDetection()` 已在 `app.config.ts` 中注册。
- **不要使用 `CommonModule`**：Angular 17+ 中 `NgIf`、`NgFor` 等已可直接从 `@angular/common` 单独 import。
- **优先使用 `@delon` 组件**：表格用 `st`（`@delon/abc/st`）、表单用 `sf`（`@delon/form`）、单元格用 `cell`，而非重复造轮子。
- **环境变量读取**：通过 `import { environment } from '@env/environment'` 引入，路径别名 `@env` 已在 `tsconfig.json` 中配置。
- **路径别名**：已配置 `@core`、`@shared`、`@env`、`@layout` 等路径别名，使用别名而非相对路径 `../../`。
- **测试变更检测**：Zoneless 模式下，修改 Signal 后必须手动调用 `fixture.detectChanges()` 才能断言 DOM 变化。
- **图标使用**：图标通过 `style-icons.ts` 按需引入，新增图标需在该文件中添加对应图标的导入，然后运行 `npm run icon` 更新自动生成文件。

---

## 相关资源

| 资源 | 链接 |
|------|------|
| NG-ALAIN 文档 | <https://ng-alain.com/zh> |
| @delon 组件文档 | <https://ng-alain.com/components/overview/zh> |
| NG-ZORRO 文档 | <https://ng.ant.design/docs/introduce/zh> |
| Angular 官方文档 | <https://angular.dev> |
| CLI Schematics 文档 | <https://ng-alain.com/cli/getting-started/zh> |
| 常见问题 | <https://ng-alain.com/docs/faq/zh> |
| 更新日志 | <https://ng-alain.com/docs/changelog/zh> |
| 贡献指南 | <https://ng-alain.com/docs/contributing/zh> |

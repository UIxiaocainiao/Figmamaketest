# 项目结构说明

## 📁 完整目录结构

```
进销存管理系统/
│
├── frontend/                    # 前端应用 ⭐
│   ├── src/
│   │   ├── app/                # 应用页面
│   │   │   ├── App.tsx        # 主入口
│   │   │   ├── routes.tsx     # 路由配置
│   │   │   └── components/    # 业务组件
│   │   │       ├── Layout.tsx          # 主布局
│   │   │       ├── Dashboard.tsx       # 仪表板
│   │   │       ├── Inventory.tsx       # 库存管理
│   │   │       ├── Purchase.tsx        # 进货管理
│   │   │       ├── Sales.tsx           # 销售管理
│   │   │       ├── Suppliers.tsx       # 供应商管理
│   │   │       ├── Customers.tsx       # 客户管理
│   │   │       ├── Reports.tsx         # 报表统计
│   │   │       ├── QuickStats.tsx      # 统计卡片
│   │   │       └── NotFound.tsx        # 404 页面
│   │   │
│   │   ├── components/         # UI 组件库
│   │   │   └── ui/            # shadcn/ui 组件 (56+)
│   │   │       ├── button.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── input.tsx
│   │   │       ├── table.tsx
│   │   │       ├── card.tsx
│   │   │       ├── badge.tsx
│   │   │       └── ... (50+ 其他组件)
│   │   │
│   │   ├── hooks/             # React Hooks
│   │   │   ├── use-mobile.ts
│   │   │   └── useKeyboardShortcut.ts
│   │   │
│   │   ├── lib/               # 工具函数
│   │   │   ├── utils.ts       # 通用工具 (cn 等)
│   │   │   └── toast-config.ts # Toast 配置
│   │   │
│   │   └── styles/            # 样式文件
│   │       ├── tailwind.css   # Tailwind + Figma 主题
│   │       ├── fonts.css      # 字体导入
│   │       ├── theme.css      # 主题变量
│   │       └── index.css      # 全局样式
│   │
│   ├── public/                # 静态资源
│   ├── components.json        # shadcn/ui 配置
│   ├── tsconfig.json          # TypeScript 配置
│   ├── vite.config.ts         # Vite 配置
│   ├── postcss.config.mjs     # PostCSS 配置
│   ├── package.json           # 依赖管理
│   └── README.md              # 前端说明文档
│
├── backend/                    # 后端应用（待实现）
│   ├── src/
│   │   ├── config/            # 配置
│   │   ├── routes/            # 路由
│   │   ├── controllers/       # 控制器
│   │   ├── services/          # 业务逻辑
│   │   ├── models/            # 数据模型
│   │   ├── middleware/        # 中间件
│   │   ├── utils/             # 工具函数
│   │   └── index.ts           # 入口
│   │
│   ├── prisma/                # Prisma ORM
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── tests/                 # 测试
│   ├── .env.example           # 环境变量示例
│   ├── package.json
│   └── README.md              # 后端说明文档
│
├── skills/                     # 技能文档 📚
│   ├── SKILL.md               # 原始技能文档
│   └── README.md              # 技能文档说明
│
├── docs/                       # 项目文档 📖
│   ├── DESIGN.md              # Figma 设计系统
│   ├── PROJECT_SUMMARY.md     # 项目总结
│   ├── FEATURES.md            # 功能特性
│   ├── FIGMA_MIGRATION.md     # 设计系统迁移
│   ├── SKILLS_GUIDE.md        # 技能指南
│   └── DESIGN_FIGMA.md        # Figma 设计详细
│
├── .projectrc                  # 项目配置
├── PROJECT_STRUCTURE.md        # 本文件
├── README.md                   # 项目主说明
├── package.json                # 根依赖管理
├── pnpm-workspace.yaml         # pnpm 工作区
└── pnpm-lock.yaml              # 依赖锁定

```

## 📋 目录说明

### 🎨 frontend/ - 前端应用

**用途**: React + TypeScript 前端应用

**核心文件**:
- `src/app/App.tsx` - 主入口组件
- `src/app/routes.tsx` - 路由配置
- `src/app/components/` - 业务组件（7个核心页面）
- `src/components/ui/` - shadcn/ui 组件库（56+ 组件）

**技术栈**:
- React 18.3.1
- TypeScript
- React Router 7.13.0
- Tailwind CSS 4.1.12
- shadcn/ui (默认组件库)
- Vite 6.3.5

**设计系统**:
- Figma Design System
- Inter Variable 字体
- 纯黑白界面

### 🔧 backend/ - 后端应用

**用途**: Node.js + Express 后端 API（待实现）

**推荐技术栈**:
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT 认证

**功能规划**:
- RESTful API
- 数据库 CRUD
- 用户认证
- 业务逻辑

### 📚 skills/ - 技能文档

**用途**: 存放技能文档和开发指南

**内容**:
- 技术技能文档
- 开发最佳实践
- 代码规范
- 问题解决方案

**文件**:
- `SKILL.md` - 原始技能文档
- `README.md` - 技能文档说明和索引

### 📖 docs/ - 项目文档

**用途**: 存放项目相关文档

**内容**:
- 设计系统文档
- 项目总结
- 功能说明
- 迁移指南

**核心文档**:
- `DESIGN.md` - Figma 设计系统完整规范
- `PROJECT_SUMMARY.md` - 项目完整总结
- `FEATURES.md` - 功能特性详细说明
- `FIGMA_MIGRATION.md` - Bugatti → Figma 迁移记录

## 🎯 架构设计

### 前后端分离架构

```
┌─────────────┐         ┌─────────────┐
│             │         │             │
│  Frontend   │ ◄─────► │   Backend   │
│   (React)   │  REST   │  (Express)  │
│             │   API   │             │
└─────────────┘         └──────┬──────┘
                               │
                               ▼
                        ┌─────────────┐
                        │             │
                        │  Database   │
                        │ (PostgreSQL)│
                        │             │
                        └─────────────┘
```

### 组件层次结构

```
App.tsx
  │
  ├─ routes.tsx (路由配置)
  │
  └─ Layout.tsx (主布局)
       │
       ├─ Sidebar (侧边栏导航)
       │
       └─ Main Content (主内容区)
            │
            ├─ Dashboard.tsx
            ├─ Inventory.tsx
            ├─ Purchase.tsx
            ├─ Sales.tsx
            ├─ Suppliers.tsx
            ├─ Customers.tsx
            └─ Reports.tsx
```

### 数据流

```
用户交互
  │
  ▼
React 组件
  │
  ▼
State 管理
  │
  ▼
API 调用 (fetch/axios)
  │
  ▼
后端 API
  │
  ▼
数据库
```

## 🔑 核心概念

### 1. 组件库策略

**默认使用 shadcn/ui**:
- ✅ 所有基础 UI 组件来自 shadcn/ui
- ✅ 不创建自定义基础组件
- ✅ 只创建业务组件

**组件分类**:
- **UI 组件** (`components/ui/`): shadcn/ui 提供的基础组件
- **业务组件** (`app/components/`): 项目特定的页面和功能组件
- **布局组件** (`app/components/Layout.tsx`): 应用布局结构

### 2. 设计系统

**Figma Design System**:
- 颜色: 纯黑白 (#000000, #ffffff)
- 字体: Inter Variable (变量字重 320-700)
- 圆角: 50px (pill) / 50% (circle) / 8px (cards)
- 焦点: dashed 2px 轮廓

**自定义工具类**:
```css
.figma-pill         /* Pill 按钮 */
.figma-card         /* 卡片容器 */
.figma-mono-label   /* 等宽标签 */
```

### 3. 路由结构

```
/                   → Dashboard
/inventory          → Inventory (库存管理)
/purchase           → Purchase (进货管理)
/sales              → Sales (销售管理)
/suppliers          → Suppliers (供应商管理)
/customers          → Customers (客户管理)
/reports            → Reports (报表统计)
*                   → NotFound (404)
```

### 4. 样式系统

**Tailwind CSS**:
- 使用 Tailwind 类进行布局和样式
- 自定义主题变量在 `tailwind.css` 中定义
- 内联样式仅用于字重和字间距

**样式优先级**:
1. Tailwind 类
2. 自定义工具类 (`.figma-*`)
3. 内联样式 (字重、字间距)

## 📦 依赖管理

### pnpm Workspace

使用 pnpm workspace 管理前后端依赖:

```yaml
# pnpm-workspace.yaml
packages:
  - 'frontend'
  - 'backend'
```

### 安装依赖

```bash
# 安装所有依赖
pnpm install

# 安装前端依赖
cd frontend && pnpm install

# 安装后端依赖
cd backend && pnpm install
```

## 🚀 开发工作流

### 1. 新功能开发

```bash
# 1. 创建功能分支
git checkout -b feature/new-feature

# 2. 开发前端组件
cd frontend
code src/app/components/NewFeature.tsx

# 3. 添加路由
code src/app/routes.tsx

# 4. 测试功能
pnpm run dev

# 5. 提交代码
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

### 2. 添加新页面

```bash
# 1. 创建组件文件
touch frontend/src/app/components/NewPage.tsx

# 2. 在 routes.tsx 添加路由
# 3. 在 Layout.tsx 添加导航链接
# 4. 测试页面
```

### 3. 使用 shadcn/ui 组件

```bash
# 查看可用组件
pnpm dlx shadcn@latest list

# 添加新组件
cd frontend
pnpm dlx shadcn@latest add [component-name]

# 使用组件
import { ComponentName } from "@/components/ui/component-name"
```

## 📝 文件命名规范

### 组件文件
```
✅ 正确:
- Dashboard.tsx
- QuickStats.tsx
- useKeyboardShortcut.ts

❌ 错误:
- dashboard.tsx
- quickStats.tsx
- UseKeyboardShortcut.ts
```

### 样式文件
```
✅ 正确:
- tailwind.css
- fonts.css
- theme.css

❌ 错误:
- Tailwind.css
- Fonts.CSS
- Theme.css
```

### 文档文件
```
✅ 正确:
- README.md
- PROJECT_SUMMARY.md
- DESIGN.md

⚠️ 可接受:
- readme.md
- project-summary.md
```

## 🔍 代码导航

### 查找组件
```bash
# 查找所有 .tsx 组件
find frontend/src -name "*.tsx"

# 查找特定组件
find frontend/src -name "Dashboard.tsx"

# 搜索组件内容
grep -r "figma-pill" frontend/src
```

### 查找样式
```bash
# 查找样式定义
grep -r "figma-pill" frontend/src/styles

# 查找 Tailwind 类使用
grep -r "text-black" frontend/src/app/components
```

## 🎓 学习路径

### 新手开发者

1. 📖 阅读 `README.md` 了解项目
2. 📖 阅读 `frontend/README.md` 学习前端
3. 📖 阅读 `docs/DESIGN.md` 理解设计系统
4. 💻 查看代码示例
5. 🛠️ 尝试开发简单功能

### 中级开发者

1. 📖 深入学习 `docs/PROJECT_SUMMARY.md`
2. 📖 研究 `docs/FIGMA_MIGRATION.md`
3. 💻 开发复杂功能
4. 🎨 自定义设计系统
5. 📝 编写技能文档

### 高级开发者

1. 🏗️ 设计架构方案
2. 🔧 搭建后端系统
3. 🔐 实现安全机制
4. 📊 优化性能
5. 📚 指导团队成员

## 📊 项目统计

### 代码量
- **前端组件**: 12 个
- **UI 组件**: 56+ 个 (shadcn/ui)
- **Hooks**: 2 个
- **样式文件**: 4 个
- **文档**: 10+ 个

### 技术覆盖
- ✅ React 18.3.1
- ✅ TypeScript (严格模式)
- ✅ React Router 7.13.0
- ✅ Tailwind CSS 4.1.12
- ✅ shadcn/ui (完整)
- ✅ Figma Design System
- ⏳ 后端 API (待实现)
- ⏳ 数据库 (待实现)

## 🤝 团队协作

### 角色分工

**前端开发者**:
- 开发 React 组件
- 实现 UI/UX
- 集成 API
- 优化性能

**后端开发者**:
- 设计 API
- 数据库设计
- 业务逻辑
- 安全机制

**UI/UX 设计师**:
- 设计界面
- 维护设计系统
- 用户体验优化

**全栈开发者**:
- 前后端开发
- 系统集成
- 架构设计

### 协作流程

1. **需求讨论** → 确定功能范围
2. **设计评审** → 确认 UI/UX 方案
3. **技术方案** → 确定实现方式
4. **开发实现** → 编码和测试
5. **代码审查** → Pull Request 审查
6. **部署上线** → 发布到生产环境

## 📧 获取帮助

### 文档资源
- 📖 项目文档: `docs/` 目录
- 📚 技能文档: `skills/` 目录
- 💻 前端文档: `frontend/README.md`
- 🔧 后端文档: `backend/README.md`

### 外部资源
- [shadcn/ui 文档](https://ui.shadcn.com)
- [React 文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [TypeScript 文档](https://www.typescriptlang.org)

---

**架构**: 前后端分离
**默认组件库**: shadcn/ui
**设计系统**: Figma
**更新日期**: 2026-04-22

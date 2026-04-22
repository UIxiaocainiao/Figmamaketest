# 进销存管理系统 (Inventory Management System)

基于 **Starbucks 设计系统**打造的现代化进销存管理系统，采用前后端分离架构。

## 📁 项目结构

```
.
├── src/              # 前端应用（Figma Make 主目录）
│   ├── app/         # 应用页面组件
│   ├── components/ui/  # shadcn/ui 组件库
│   ├── hooks/       # React Hooks
│   ├── lib/         # 工具函数
│   └── styles/      # 样式文件
│
├── backend/         # 后端应用（预留）
├── skills/          # 设计系统与技能文档
├── docs/            # 项目文档
└── README.md        # 本文件
```

## 🎯 技术栈

### 前端
- React 18.3.1 + TypeScript
- React Router 7.13.0
- Tailwind CSS 4.1.12
- shadcn/ui (base-nova preset)
- **设计系统**: Starbucks Design System
- Inter Variable + JetBrains Mono
- Vite 6.3.5

### 后端
- 待实现（Node.js/Express + Prisma + PostgreSQL）

## 🚀 快速开始

```bash
pnpm install
pnpm run dev   # 开发
pnpm run build # 构建
```

## 🎨 Starbucks 设计系统

- **四级绿色**: #006241 / #00754A / #1E3932 / #2b5148
- **暖奶油背景**: #f2f0eb
- **字体**: Inter Variable, -0.16px 字间距
- **圆角**: 12px 卡片 / 50px pill
- **交互**: scale(0.95) 按压效果

详见 [skills/DESIGN_STARBUCKS.md](./skills/DESIGN_STARBUCKS.md) 与 [STARBUCKS_MIGRATION.md](./STARBUCKS_MIGRATION.md)。

## 🏗️ 功能模块

- ✅ 仪表板 (Dashboard)
- ✅ 库存管理 (Inventory)
- ✅ 进货管理 (Purchase)
- ✅ 销售管理 (Sales)
- ✅ 供应商管理 (Suppliers)
- ✅ 客户管理 (Customers)
- ✅ 报表统计 (Reports)

## 📝 许可证

MIT License

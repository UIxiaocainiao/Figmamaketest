# 进销存管理系统 (Inventory Management System)

基于 **Figma 设计系统**打造的现代化进销存管理系统，采用前后端分离架构。

## 📁 项目结构

```
.
├── frontend/          # 前端应用
│   ├── src/
│   │   ├── app/      # 应用页面组件
│   │   ├── components/ui/  # shadcn/ui 组件库
│   │   ├── hooks/    # React Hooks
│   │   ├── lib/      # 工具函数
│   │   └── styles/   # 样式文件
│   └── ...配置文件
│
├── backend/           # 后端应用（预留）
│   └── src/
│
├── skills/            # 技能和指南文档
│   └── SKILL.md
│
├── docs/              # 项目文档
│   ├── DESIGN.md
│   ├── PROJECT_SUMMARY.md
│   ├── FEATURES.md
│   ├── FIGMA_MIGRATION.md
│   └── SKILLS_GUIDE.md
│
└── README.md          # 本文件
```

## 🎯 技术栈

### 前端 (Frontend)
- **框架**: React 18.3.1 + TypeScript
- **路由**: React Router 7.13.0
- **样式**: Tailwind CSS 4.1.12
- **组件库**: shadcn/ui (base-nova preset) - **默认组件库**
- **设计系统**: Figma Design System
- **字体**: Inter Variable + JetBrains Mono
- **构建工具**: Vite 6.3.5

### 后端 (Backend)
- 待实现（可选技术栈：Node.js/Express, Prisma, PostgreSQL）

## 🚀 快速开始

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm run dev
```

### 构建生产版本
```bash
pnpm run build
```

## 🎨 设计系统

本项目使用 **Figma 设计系统**：

- **颜色**: 纯黑白界面 (#000000, #ffffff)
- **字体**: Inter Variable (变量字重 320-700)
- **组件**: shadcn/ui (56+ 专业组件)
- **特色**: pill 按钮、虚线焦点轮廓、负字间距

详见: [docs/DESIGN.md](docs/DESIGN.md)

## 📦 组件库使用规范

### 默认使用 shadcn/ui

**本项目默认使用 shadcn/ui 组件库，所有新功能开发必须优先使用 shadcn/ui 组件。**

#### 安装新组件
```bash
pnpm dlx shadcn@latest add [component-name]
```

#### 已安装组件
查看 `frontend/src/components/ui/` 目录，包含 56+ 组件：
- button, dialog, input, label, table
- card, badge, avatar, dropdown-menu
- toast, alert, tabs, accordion
- 等等...

#### 使用示例
```tsx
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

// Figma 样式的 pill 按钮
<Button className="figma-pill">
  点击我
</Button>
```

## 🔧 开发规范

### 组件开发
1. ✅ **优先使用** shadcn/ui 组件
2. ✅ 遵循 Figma 设计系统
3. ✅ 使用 TypeScript 类型
4. ❌ **不要**创建自定义基础组件

### 样式规范
1. 使用 Tailwind CSS 类
2. 使用预定义工具类:
   - `.figma-pill` - Figma 风格按钮
   - `.figma-card` - 卡片容器
   - `.figma-mono-label` - 等宽标签
3. 内联样式用于字重和字间距:
   ```tsx
   <h1 style={{ fontWeight: 400, letterSpacing: '-1.72px' }}>
   ```

### 代码风格
- 文件命名: PascalCase (Dashboard.tsx)
- 组件命名: 与文件名一致
- 导出: 命名导出 `export function ComponentName()`

## 📚 文档

- [项目总结](docs/PROJECT_SUMMARY.md) - 完整项目概述
- [功能特性](docs/FEATURES.md) - 功能列表
- [设计系统](docs/DESIGN.md) - Figma 设计规范
- [迁移指南](docs/FIGMA_MIGRATION.md) - Bugatti → Figma 迁移
- [技能指南](docs/SKILLS_GUIDE.md) - 全栈开发技能

## 🎓 学习资源

### shadcn/ui
- 官网: https://ui.shadcn.com
- 组件文档: https://ui.shadcn.com/docs/components
- 主题定制: https://ui.shadcn.com/themes

### Figma Design System
- 参考: [docs/DESIGN.md](docs/DESIGN.md)
- 字体: Inter Variable, JetBrains Mono
- 原则: 极简、黑白、变量字重

## 🏗️ 功能模块

### 已实现
- ✅ 仪表板 (Dashboard)
- ✅ 库存管理 (Inventory) - 完整 CRUD
- ✅ 进货管理 (Purchase)
- ✅ 销售管理 (Sales)
- ✅ 供应商管理 (Suppliers)
- ✅ 客户管理 (Customers)
- ✅ 报表统计 (Reports)

### 计划中
- ⏳ 后端 API (Node.js + Express)
- ⏳ 数据库集成 (Prisma + PostgreSQL)
- ⏳ 用户认证 (JWT)
- ⏳ 数据持久化

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 提交规范
```
feat: 新功能
fix: 修复
docs: 文档
style: 样式
refactor: 重构
test: 测试
chore: 构建/工具
```

## 📝 许可证

MIT License

## 📧 联系方式

项目维护者: [您的名字]
邮箱: [您的邮箱]

---

**设计灵感** 🎨 Figma Design System
**开发时间** ⏱️ 2026-04-22
**技术栈** 💻 React + TypeScript + Tailwind + shadcn/ui

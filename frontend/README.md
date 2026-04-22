# Frontend - 进销存管理系统前端

基于 React + TypeScript + shadcn/ui 的现代化前端应用。

## 🎯 技术栈

- **React** 18.3.1 - UI 框架
- **TypeScript** - 类型安全
- **React Router** 7.13.0 - 路由管理
- **Tailwind CSS** 4.1.12 - 样式系统
- **shadcn/ui** - UI 组件库（默认）
- **Vite** 6.3.5 - 构建工具
- **Figma Design System** - 设计规范

## 📁 目录结构

```
src/
├── app/                    # 应用页面
│   ├── App.tsx            # 主入口
│   ├── routes.tsx         # 路由配置
│   └── components/        # 业务组件
│       ├── Layout.tsx     # 布局
│       ├── Dashboard.tsx  # 仪表板
│       ├── Inventory.tsx  # 库存管理
│       ├── Purchase.tsx   # 进货管理
│       ├── Sales.tsx      # 销售管理
│       ├── Suppliers.tsx  # 供应商管理
│       ├── Customers.tsx  # 客户管理
│       └── Reports.tsx    # 报表统计
│
├── components/ui/          # shadcn/ui 组件库 (56+ 组件)
│   ├── button.tsx
│   ├── dialog.tsx
│   ├── input.tsx
│   ├── table.tsx
│   └── ... (更多组件)
│
├── hooks/                  # React Hooks
│   ├── use-mobile.ts
│   └── useKeyboardShortcut.ts
│
├── lib/                    # 工具函数
│   ├── utils.ts           # 通用工具
│   └── toast-config.ts    # Toast 配置
│
└── styles/                 # 样式文件
    ├── tailwind.css       # Tailwind 主题
    ├── fonts.css          # 字体导入
    └── theme.css          # 主题变量
```

## 🎨 组件库使用

### shadcn/ui - 默认组件库

**所有新功能开发必须优先使用 shadcn/ui 组件。**

#### 添加新组件
```bash
cd frontend
pnpm dlx shadcn@latest add [component-name]
```

#### 常用组件示例

**按钮 (Button)**
```tsx
import { Button } from "@/components/ui/button";

// 默认按钮
<Button>Click me</Button>

// Figma 风格 pill 按钮
<Button className="figma-pill">
  Add Product
</Button>

// 变体
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

**对话框 (Dialog)**
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
```

**输入框 (Input)**
```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<Label>Product Name</Label>
<Input 
  placeholder="Enter name"
  className="figma-input"
  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
/>
```

**表格 (Table)**
```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>SKU</TableHead>
      <TableHead>Product</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>SKU-001</TableCell>
      <TableCell>Laptop</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Toast 通知 (Sonner)**
```tsx
import { toast } from "sonner";

toast.success("Success message");
toast.error("Error message");
toast("Info message");
```

## 🎨 Figma 设计系统

### 颜色
```css
--background: #ffffff    /* Pure White */
--foreground: #000000    /* Pure Black */
--muted: rgba(0,0,0,0.6) /* Subtle Black */
```

### 字体
```css
--font-sans: 'Inter Variable'     /* 主字体 */
--font-mono: 'JetBrains Mono'     /* 等宽字体 */
```

### 自定义工具类
```css
.figma-pill              /* Pill 按钮 (50px radius) */
.figma-pill-white        /* 白色 pill 按钮 */
.figma-card              /* 卡片容器 */
.figma-glass-dark        /* 玻璃效果按钮 */
.figma-mono-label        /* 等宽标签 (uppercase) */
```

### 排版示例
```tsx
// 标题 (Display)
<h1 style={{ fontWeight: 400, letterSpacing: '-1.72px' }}>
  DASHBOARD
</h1>

// 副标题
<h2 style={{ fontWeight: 540, letterSpacing: '-0.96px' }}>
  Section Title
</h2>

// 正文
<p style={{ fontWeight: 330, letterSpacing: '-0.14px' }}>
  Body text with Figma styling
</p>

// 标签
<span className="figma-mono-label">
  CATEGORY
</span>
```

## 🚀 开发命令

```bash
# 安装依赖
pnpm install

# 开发服务器
pnpm run dev

# 类型检查
pnpm run type-check

# 构建生产版本
pnpm run build

# 预览生产版本
pnpm run preview
```

## 📦 已安装的包

### UI 组件
- `@base-ui/react` - Base UI 原语
- `@radix-ui/*` - Radix UI 原语
- `lucide-react` - 图标库
- `sonner` - Toast 通知

### 样式
- `tailwindcss` - 样式系统
- `@tailwindcss/vite` - Vite 插件
- `class-variance-authority` - 组件变体
- `tailwind-merge` - 样式合并
- `clsx` - 类名工具

### 字体
- `@fontsource-variable/inter` - Inter Variable
- `@fontsource/jetbrains-mono` - JetBrains Mono

### 工具
- `react-router` - 路由
- `date-fns` - 日期处理

## 🔧 配置文件

- `components.json` - shadcn/ui 配置
- `tsconfig.json` - TypeScript 配置
- `vite.config.ts` - Vite 配置
- `postcss.config.mjs` - PostCSS 配置

## 📝 代码规范

### 组件命名
```tsx
// ✅ 正确
export function Dashboard() { ... }
export function QuickStats() { ... }

// ❌ 错误
export default Dashboard;
export const dashboard = () => { ... };
```

### 导入顺序
```tsx
// 1. React 相关
import { useState } from "react";

// 2. 第三方库
import { toast } from "sonner";

// 3. shadcn/ui 组件
import { Button } from "@/components/ui/button";

// 4. 自定义组件
import { QuickStats } from "./QuickStats";

// 5. 工具函数
import { cn } from "@/lib/utils";

// 6. 类型
import type { Product } from "@/types";
```

### 样式规范
```tsx
// ✅ 使用 Tailwind 类
<div className="flex items-center gap-4">

// ✅ 使用预定义工具类
<Button className="figma-pill">

// ✅ 内联样式用于字重和字间距
<h1 style={{ fontWeight: 400, letterSpacing: '-1.72px' }}>

// ❌ 避免内联样式用于布局
<div style={{ display: 'flex', gap: '16px' }}>
```

## 🎓 学习资源

- [shadcn/ui 文档](https://ui.shadcn.com)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [React Router 文档](https://reactrouter.com)
- [TypeScript 文档](https://www.typescriptlang.org)

## 🐛 常见问题

### 1. 如何添加新页面？

```tsx
// 1. 创建组件
// src/app/components/NewPage.tsx
export function NewPage() {
  return <div>New Page</div>;
}

// 2. 添加路由
// src/app/routes.tsx
import { NewPage } from "./components/NewPage";

{
  path: "/new-page",
  Component: NewPage
}

// 3. 添加导航
// src/app/components/Layout.tsx
{ path: "/new-page", label: "NEW PAGE", icon: Icon }
```

### 2. 如何自定义主题？

编辑 `src/styles/tailwind.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  /* 修改其他变量 */
}
```

### 3. 如何使用 Toast？

```tsx
import { toast } from "sonner";
import { Toaster } from "sonner";

// 在组件中
function MyComponent() {
  const handleClick = () => {
    toast.success("Success!");
  };
  
  return (
    <>
      <Button onClick={handleClick}>Show Toast</Button>
      <Toaster position="top-right" />
    </>
  );
}
```

---

**默认组件库**: shadcn/ui
**设计系统**: Figma
**开发模式**: 前后端分离

# 组件库使用规范

## 🎯 默认组件库

**本项目默认使用 shadcn/ui 作为 UI 组件库。**

所有新功能开发必须优先使用 shadcn/ui 组件，避免创建自定义基础组件。

## 📋 shadcn/ui 简介

shadcn/ui 是一个基于 Radix UI 和 Tailwind CSS 的高质量 React 组件库。

### 特点

- ✅ **完全可定制**: 组件代码在你的项目中，完全控制
- ✅ **可访问性**: 基于 Radix UI，符合 WAI-ARIA 标准
- ✅ **主题系统**: 内置深色模式和主题定制
- ✅ **TypeScript**: 完整的类型支持
- ✅ **无依赖锁定**: 不是 npm 包，而是复制代码到项目
- ✅ **样式自由**: 使用 Tailwind CSS，易于定制

### 与其他组件库对比

| 特性 | shadcn/ui | Material UI | Ant Design | Chakra UI |
|------|-----------|-------------|------------|-----------|
| 可定制性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 性能 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| TypeScript | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 可访问性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 文档 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 学习曲线 | 低 | 中 | 中 | 低 |
| 包大小 | 小 | 大 | 大 | 中 |

## 📦 已安装组件

本项目已安装 **56+ shadcn/ui 组件**。

### 核心组件

#### 表单组件
- `button` - 按钮
- `input` - 输入框
- `label` - 标签
- `textarea` - 多行文本框
- `select` - 下拉选择
- `checkbox` - 复选框
- `radio-group` - 单选按钮组
- `switch` - 开关
- `slider` - 滑块
- `form` - 表单

#### 数据展示
- `table` - 表格
- `card` - 卡片
- `badge` - 徽章
- `avatar` - 头像
- `separator` - 分隔线
- `skeleton` - 骨架屏
- `progress` - 进度条
- `chart` - 图表

#### 反馈组件
- `dialog` - 对话框
- `alert` - 警告
- `alert-dialog` - 警告对话框
- `toast` (sonner) - 通知
- `popover` - 弹出框
- `tooltip` - 提示框
- `drawer` - 抽屉

#### 导航组件
- `dropdown-menu` - 下拉菜单
- `navigation-menu` - 导航菜单
- `menubar` - 菜单栏
- `tabs` - 标签页
- `breadcrumb` - 面包屑
- `pagination` - 分页

#### 布局组件
- `accordion` - 手风琴
- `collapsible` - 折叠面板
- `scroll-area` - 滚动区域
- `resizable` - 可调整大小
- `sidebar` - 侧边栏

### 完整组件列表

查看 `frontend/src/components/ui/` 目录获取完整列表。

## 🚀 使用指南

### 1. 添加新组件

```bash
cd frontend
pnpm dlx shadcn@latest add [component-name]
```

示例：
```bash
# 添加按钮组件
pnpm dlx shadcn@latest add button

# 添加对话框组件
pnpm dlx shadcn@latest add dialog

# 添加多个组件
pnpm dlx shadcn@latest add button dialog input
```

### 2. 查看可用组件

```bash
pnpm dlx shadcn@latest list
```

### 3. 导入和使用组件

```tsx
// 导入组件
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// 使用组件
export function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
      
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
          <p>Content</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

## 🎨 样式定制

### 1. 使用 Figma 工具类

为组件添加 Figma 设计系统样式：

```tsx
import { Button } from "@/components/ui/button";

// Figma pill 按钮
<Button className="figma-pill">
  Add Product
</Button>

// Figma 卡片
<Card className="figma-card">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### 2. Tailwind 类定制

```tsx
// 自定义样式
<Button className="bg-black text-white hover:bg-black/90">
  Custom Button
</Button>

// 组合 Figma 类和 Tailwind 类
<Button className="figma-pill px-8 py-4">
  Large Button
</Button>
```

### 3. 内联样式

用于字重和字间距：

```tsx
<h1 style={{ fontWeight: 400, letterSpacing: '-1.72px' }}>
  Figma Style Heading
</h1>

<p style={{ fontWeight: 330, letterSpacing: '-0.14px' }}>
  Figma style text
</p>
```

### 4. 修改主题

编辑 `frontend/src/styles/tailwind.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --primary: #000000;
  --primary-foreground: #ffffff;
  /* 其他变量 */
}
```

## 📚 组件使用示例

### 按钮 (Button)

```tsx
import { Button } from "@/components/ui/button";

// 默认按钮
<Button>Default</Button>

// 变体
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// 大小
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// Figma 样式
<Button className="figma-pill">
  <Plus className="mr-2 size-4" />
  Add Product
</Button>
```

### 对话框 (Dialog)

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      
      <DialogContent className="bg-white border border-black/20">
        <DialogHeader>
          <DialogTitle style={{ fontWeight: 540 }}>
            Dialog Title
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p>Dialog content goes here...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### 输入框 (Input)

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="space-y-2">
  <Label className="figma-mono-label text-xs">
    PRODUCT NAME
  </Label>
  <Input
    placeholder="Enter product name"
    className="bg-white border-black/10 focus:border-black"
    style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
  />
</div>
```

### 表格 (Table)

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="figma-mono-label">SKU</TableHead>
      <TableHead className="figma-mono-label">PRODUCT</TableHead>
      <TableHead className="figma-mono-label">PRICE</TableHead>
    </TableRow>
  </TableHeader>
  
  <TableBody>
    <TableRow className="table-row-hover">
      <TableCell className="font-mono" style={{ fontWeight: 400 }}>
        SKU-001
      </TableCell>
      <TableCell style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>
        Laptop Computer
      </TableCell>
      <TableCell style={{ fontWeight: 480, letterSpacing: '-0.14px' }}>
        ¥5,999.00
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Toast 通知

```tsx
import { toast, Toaster } from "sonner";

// 在组件中添加 Toaster
<Toaster position="top-right" />

// 显示 toast
toast.success("Product added successfully");
toast.error("Failed to delete product");
toast("Info message");

// 自定义样式（已在 toast-config.ts 配置）
toast.success("Success", {
  description: "Your changes have been saved"
});
```

### 卡片 (Card)

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

<Card className="figma-card">
  <CardHeader>
    <CardTitle style={{ fontWeight: 540 }}>
      Card Title
    </CardTitle>
    <CardDescription>
      Card description goes here
    </CardDescription>
  </CardHeader>
  
  <CardContent>
    <p>Main content</p>
  </CardContent>
  
  <CardFooter>
    <Button className="figma-pill">Action</Button>
  </CardFooter>
</Card>
```

## ✅ 开发规范

### DO ✅

1. **优先使用 shadcn/ui 组件**
   ```tsx
   import { Button } from "@/components/ui/button";
   <Button>Click</Button>
   ```

2. **添加 Figma 样式类**
   ```tsx
   <Button className="figma-pill">Submit</Button>
   ```

3. **使用 TypeScript 类型**
   ```tsx
   import { ButtonProps } from "@/components/ui/button";
   
   function MyButton(props: ButtonProps) {
     return <Button {...props} />;
   }
   ```

4. **组合使用组件**
   ```tsx
   <Dialog>
     <DialogTrigger asChild>
       <Button className="figma-pill">Open</Button>
     </DialogTrigger>
     <DialogContent>...</DialogContent>
   </Dialog>
   ```

### DON'T ❌

1. **不要创建自定义基础组件**
   ```tsx
   // ❌ 错误
   function CustomButton({ children }) {
     return <button>{children}</button>;
   }
   
   // ✅ 正确
   import { Button } from "@/components/ui/button";
   <Button>Click</Button>
   ```

2. **不要覆盖组件的核心功能**
   ```tsx
   // ❌ 错误
   const Button = () => <div>Custom</div>;
   
   // ✅ 正确
   import { Button } from "@/components/ui/button";
   <Button className="custom-class">Custom</Button>
   ```

3. **不要忽略可访问性**
   ```tsx
   // ❌ 错误
   <div onClick={...}>Click</div>
   
   // ✅ 正确
   <Button onClick={...}>Click</Button>
   ```

4. **不要混用多个组件库**
   ```tsx
   // ❌ 错误
   import MuiButton from "@mui/material/Button";
   import AntButton from "antd/button";
   
   // ✅ 正确
   import { Button } from "@/components/ui/button";
   ```

## 🔧 高级用法

### 1. 组件变体

使用 `class-variance-authority` 创建组件变体：

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        outline: "border border-black bg-transparent",
        ghost: "bg-transparent hover:bg-black/5",
      },
      size: {
        sm: "text-sm px-3 py-2",
        md: "text-base px-4 py-3",
        lg: "text-lg px-6 py-4",
      },
    },
  }
);

// 使用
<Button variant="outline" size="lg">Button</Button>
```

### 2. 表单处理

结合 `react-hook-form` 和 `zod`:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button type="submit" className="figma-pill">
          Submit
        </Button>
      </form>
    </Form>
  );
}
```

### 3. 响应式设计

```tsx
import { Button } from "@/components/ui/button";

// 响应式大小
<Button className="text-sm md:text-base lg:text-lg">
  Responsive Text
</Button>

// 响应式布局
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {items.map(item => (
    <Card key={item.id}>...</Card>
  ))}
</div>
```

## 📖 学习资源

### 官方文档
- [shadcn/ui 官网](https://ui.shadcn.com)
- [组件文档](https://ui.shadcn.com/docs/components)
- [主题定制](https://ui.shadcn.com/themes)
- [示例](https://ui.shadcn.com/examples)

### 底层技术
- [Radix UI](https://www.radix-ui.com) - 底层原语
- [Tailwind CSS](https://tailwindcss.com) - 样式系统
- [class-variance-authority](https://cva.style) - 变体管理

### 社区资源
- [GitHub](https://github.com/shadcn/ui)
- [Discord](https://discord.gg/shadcn-ui)
- [Twitter](https://twitter.com/shadcn)

## 🐛 常见问题

### Q: 如何更新组件？
A: 重新运行添加命令：
```bash
pnpm dlx shadcn@latest add button --overwrite
```

### Q: 如何删除组件？
A: 直接删除 `components/ui/` 中的文件。

### Q: 如何自定义组件样式？
A: 编辑 `components/ui/` 中的组件文件，或使用 className 覆盖样式。

### Q: 组件样式不生效？
A: 检查：
1. Tailwind CSS 配置正确
2. 组件路径别名 `@/` 配置正确
3. 主题变量定义正确

### Q: 如何实现深色模式？
A: shadcn/ui 内置深色模式支持，修改 `tailwind.css` 中的 `.dark` 类样式。

## 📊 性能优化

### 1. 按需加载

```tsx
// 使用 React.lazy 懒加载
const Dialog = React.lazy(() => import("@/components/ui/dialog"));

// 使用时
<Suspense fallback={<div>Loading...</div>}>
  <Dialog>...</Dialog>
</Suspense>
```

### 2. 避免不必要的重渲染

```tsx
import { memo } from "react";
import { Button } from "@/components/ui/button";

// 使用 memo 包装
const MemoizedButton = memo(Button);

// 使用 useCallback
const handleClick = useCallback(() => {
  // ...
}, []);
```

### 3. 优化 Bundle Size

只导入需要的组件：
```tsx
// ✅ 正确
import { Button } from "@/components/ui/button";

// ❌ 错误（如果组件库支持的话）
import { Button, Dialog, Input } from "@/components/ui";
```

## 📝 更新日志

### v1.0.0 (2026-04-22)
- 初始版本
- 添加 56+ shadcn/ui 组件
- 集成 Figma 设计系统
- 完善文档和示例

---

**默认组件库**: shadcn/ui
**设计系统**: Figma
**原则**: 复用优先，定制灵活

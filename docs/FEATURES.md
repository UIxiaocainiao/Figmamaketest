# 进销存管理系统 - Bugatti 设计版

基于 Bugatti 超跑设计系统打造的高端进销存管理系统。

## 🎨 设计特色

### Bugatti 设计系统
- **纯黑配色** - `#000000` 纯黑背景，如同天鹅绒展示台
- **纯白文字** - `#ffffff` 纯白文字，极致对比
- **银灰点缀** - `#999999` 用于次要元素和边框
- **零阴影零梯度** - 极简主义美学
- **建筑级排版** - 超大标题 (text-6xl)，全部大写

### 字体系统
- **Unbounded** - 标题字体 (Bugatti Display 替代)
- **Space Mono** - 等宽字体，用于所有 UI 标签 (Bugatti Monospace 替代)
- **系统默认** - 正文字体

## ✨ 核心功能

### 1. 仪表板 (Dashboard)
- 实时统计卡片（库存总值、采购、销售、预警）
- 最近订单列表
- 库存预警提醒
- 淡入动画和卡片悬停效果

### 2. 库存管理 (Inventory)
- 产品列表展示
- 实时搜索过滤
- ✅ **添加产品对话框** - 完整的表单验证
- ✅ **删除产品通知** - Toast 提示
- 响应式表格设计

### 3. 进货管理 (Purchase)
- 采购订单列表
- 月度统计数据
- 待处理订单提醒
- 平均交付周期分析

### 4. 销售管理 (Sales)
- 销售订单列表
- 月度销售统计
- 平均客单价分析
- 订单状态追踪

### 5. 供应商管理 (Suppliers)
- 供应商信息卡片
- 联系方式管理
- 采购统计
- 卡片悬停动画

### 6. 客户管理 (Customers)
- 客户信息展示
- VIP 标签系统
- 订单历史统计
- 销售额追踪

### 7. 报表统计 (Reports)
- 月度趋势可视化
- 热销产品 TOP 4
- 采购/销售/利润对比
- 数据导出功能

## 🚀 高级交互

### 动画系统
- **淡入动画** - 页面加载时平滑淡入
- **上滑动画** - 标题从下方滑入
- **缩放动画** - 对话框弹出效果
- **悬停动画** - 卡片和按钮悬停效果

### 交互组件

#### BugattiButton
```tsx
<BugattiButton icon={Plus} variant="primary">
  ADD PRODUCT
</BugattiButton>
```
- 三种变体：primary、secondary、ghost
- 圆角丸设计 (rounded-full)
- Hover 时白底黑字，带缩放效果

#### BugattiDialog
```tsx
<BugattiDialog isOpen={open} onClose={close} title="ADD PRODUCT">
  {/* 内容 */}
</BugattiDialog>
```
- 模态对话框
- 背景模糊效果
- 缩放动画
- ESC 键关闭

#### BugattiInput
```tsx
<BugattiInput
  label="PRODUCT NAME"
  value={value}
  onChange={setValue}
  required
/>
```
- 统一表单样式
- Focus 时白色边框
- 占位符提示

#### Toast 通知
```tsx
toast.success("Product added successfully")
toast.error("Product deleted")
```
- Bugatti 风格通知
- 纯黑背景，白色边框
- 等宽字体

### 加载状态
- `BugattiLoading` - 全屏加载动画
- `BugattiSkeleton` - 骨架屏
- `BugattiTableSkeleton` - 表格骨架屏

## 🎯 用户体验优化

### 表格交互
- 行悬停高亮 (`table-row-hover`)
- 微缩放效果
- 平滑过渡

### 卡片效果
- 悬停时白色边框
- 微光晕效果
- 300ms 过渡动画

### 按钮反馈
- Hover 缩放至 102%
- Active 缩放至 95%
- 颜色反转动画

### 导航体验
- 活动状态白底黑字
- 非活动状态透明边框
- 平滑过渡效果

## 🛠️ 技术栈

- **React 18** + **TypeScript**
- **React Router 7** - 路由管理
- **Tailwind CSS 4** - 样式系统
- **shadcn/ui** - UI 组件库
- **Lucide React** - 图标库
- **Sonner** - Toast 通知
- **Motion/Framer Motion** - 动画库

## 📐 圆角系统

- `0` - 直角（表格、媒体）
- `6px` (rounded-md) - 次要容器
- `9999px` (rounded-full) - 主要按钮

## 🎨 自定义动画

### fadeIn
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### slideUp
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### scaleIn
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

## 🌟 设计原则

1. **极简至上** - 零装饰，让数据说话
2. **高对比度** - 纯黑纯白，终极可读性
3. **建筑级排版** - 超大标题，视觉冲击
4. **平滑过渡** - 300ms 标准过渡时间
5. **丝滑交互** - 微缩放、微光晕、微反馈

## 🚦 状态管理

- 实时表单验证
- Toast 成功/错误提示
- 加载状态展示
- 空状态处理

---

**设计灵感来自** Bugatti Chiron 的奢华、精准和力量感 🏎️

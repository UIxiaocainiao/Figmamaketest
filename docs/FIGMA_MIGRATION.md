# Figma 设计系统迁移文档

## 🎯 迁移概述

从 **Bugatti 设计系统** 迁移到 **Figma 设计系统**，保持极简美学的同时，采用 Figma 的官方设计语言。

迁移日期：2026-04-22

## 🔄 主要变化

### 1. 颜色系统

#### 之前（Bugatti）
```css
背景色: #000000 (Velvet Black)
文字色: #ffffff (Showroom White)
次要色: #999999 (Silver Mist)
```

#### 现在（Figma）
```css
背景色: #ffffff (Pure White)
文字色: #000000 (Pure Black)
次要色: rgba(0, 0, 0, 0.6) (Subtle Black)
Glass Dark: rgba(0, 0, 0, 0.08)
Glass Light: rgba(255, 255, 255, 0.16)
```

### 2. 字体系统

#### 之前（Bugatti）
```
标题字体: Unbounded (替代 Bugatti Display)
等宽字体: Space Mono
字重: 400, 700
```

#### 现在（Figma）
```
主字体: Inter Variable (替代 figmaSans)
等宽字体: JetBrains Mono (替代 figmaMono)
字重: 320, 330, 340, 400, 450, 480, 540, 700 (变量字重)
```

### 3. 排版原则

#### 之前
- 大写字母为主
- 正值字间距 (tracking-[1.4px])
- 字重 400 (regular) 和 700 (bold)

#### 现在
- 混合大小写（保留部分大写标签）
- 负值字间距 (-0.14px 到 -1.72px)
- 精细字重控制（320-540）
- 启用 OpenType kerning

### 4. 组件样式

#### 按钮

**之前：**
```tsx
<Button className="bugatti-pill">
  // 白色边框，黑色背景，白色文字
  // hover: 白色背景，黑色文字
</Button>
```

**现在：**
```tsx
<Button className="figma-pill">
  // 黑色背景，白色文字
  // 50px pill radius
  // 虚线焦点轮廓（dashed 2px）
</Button>
```

#### 卡片

**之前：**
```tsx
<div className="bugatti-card">
  // 黑色背景，#999999 边框
  // hover: 白色边框 + 光晕
</div>
```

**现在：**
```tsx
<div className="figma-card">
  // 白色背景，subtle shadow
  // hover: 增强 shadow
</div>
```

#### 输入框

**之前：**
```tsx
<input className="bg-transparent border-[#999999] text-white" />
```

**现在：**
```tsx
<input 
  className="bg-white border-black/10 text-black"
  style={{ fontWeight: 330, letterSpacing: '-0.14px' }}
/>
```

### 5. 焦点样式

#### 之前
```css
outline: solid 2px white;
```

#### 现在
```css
outline-style: dashed;
outline-width: 2px;
outline-color: #000000;
/* Figma 的标志性虚线轮廓 */
```

## 📦 新增依赖

```bash
pnpm install @fontsource-variable/inter @fontsource/jetbrains-mono
```

## 📝 文件更改清单

### ✅ 已更新的核心文件

- [x] `/DESIGN.md` - 替换为 Figma 设计系统文档
- [x] `/src/styles/fonts.css` - 更新字体导入
- [x] `/src/styles/tailwind.css` - 重写整个主题系统
- [x] `/src/app/components/Layout.tsx` - 白色背景 + 黑色文字
- [x] `/src/app/components/Dashboard.tsx` - Figma 样式卡片
- [x] `/src/app/components/QuickStats.tsx` - Figma 风格统计卡
- [x] `/src/app/components/Inventory.tsx` - 完整表格和对话框更新
- [x] `/src/lib/toast-config.ts` - Figma 风格 Toast

### 🔄 待更新的组件

- [ ] `/src/app/components/Purchase.tsx`
- [ ] `/src/app/components/Sales.tsx`
- [ ] `/src/app/components/Suppliers.tsx`
- [ ] `/src/app/components/Customers.tsx`
- [ ] `/src/app/components/Reports.tsx`

## 🎨 新增 CSS 工具类

```css
/* Figma 专用类 */
.figma-pill             /* 黑色 pill 按钮 */
.figma-pill-white       /* 白色 pill 按钮（深色背景用）*/
.figma-glass-dark       /* 圆形 glass 按钮 */
.figma-card             /* 白色卡片 + shadow */
.figma-mono-label       /* 等宽标签（大写 + 正字间距）*/

/* 向后兼容 */
.bugatti-pill → .figma-pill
.bugatti-card → .figma-card
```

## 🔑 关键设计原则

### Figma 设计哲学

1. **变量字体精度** - 使用 320-540 的独特字重
2. **轻量为基准** - 大部分文本使用 320-340（比标准 400 更轻）
3. **全局 Kerning** - 所有文本启用 `font-feature-settings: "kern"`
4. **负字间距** - body 文本 -0.1px 到 -1.72px
5. **虚线焦点** - 标志性的 dashed 轮廓
6. **Pill 和圆形** - 50px 和 50% 圆角
7. **纯黑白界面** - 颜色仅用于内容，不用于界面

### 排版层次

| 元素 | 字重 | 字号 | 字间距 |
|------|------|------|--------|
| Display (h1) | 400 | 86px | -1.72px |
| Heading | 540 | 24-64px | -0.96px |
| Body | 330-480 | 16-20px | -0.14px |
| Mono Label | 400 | 12-18px | +0.54px |

## 🚀 迁移步骤

### 第一步：字体和颜色（已完成）
1. ✅ 安装 Inter Variable 和 JetBrains Mono
2. ✅ 更新 `tailwind.css` 颜色变量
3. ✅ 更新全局字体设置

### 第二步：核心组件（已完成）
1. ✅ Layout - 侧边栏和主布局
2. ✅ Dashboard - 仪表板
3. ✅ Inventory - 库存管理（最复杂）
4. ✅ QuickStats - 统计卡片

### 第三步：剩余组件（待完成）
1. ⏳ Purchase, Sales, Suppliers, Customers, Reports
2. ⏳ 批量替换 `bugatti-pill` → `figma-pill`
3. ⏳ 更新所有颜色引用

### 第四步：测试和优化
1. ⏳ 验证所有页面显示正常
2. ⏳ 检查响应式布局
3. ⏳ 测试焦点状态和交互
4. ⏳ 更新项目文档

## 📊 对比示例

### 按钮对比

#### Bugatti 风格
```tsx
<button className="px-6 py-3 bg-transparent border border-white rounded-full text-white font-mono text-xs tracking-[1.4px] uppercase hover:bg-white hover:text-black">
  ADD PRODUCT
</button>
```

#### Figma 风格
```tsx
<button className="figma-pill" style={{ fontWeight: 480 }}>
  <Plus className="size-4 mr-2" />
  ADD PRODUCT
</button>
```

### 卡片对比

#### Bugatti 风格
```tsx
<div className="bg-black border border-[#999999] rounded-md p-6">
  <h2 className="text-white font-mono tracking-[1.4px] uppercase">TITLE</h2>
  <p className="text-[#999999]">Content</p>
</div>
```

#### Figma 风格
```tsx
<div className="figma-card p-6">
  <h2 className="figma-mono-label text-lg text-black">TITLE</h2>
  <p className="text-black/60" style={{ fontWeight: 330, letterSpacing: '-0.1px' }}>Content</p>
</div>
```

## 💡 注意事项

1. **字体回退**
   - Inter Variable 不可用时回退到 SF Pro Display
   - JetBrains Mono 不可用时回退到 SF Mono

2. **字重支持**
   - 确保浏览器支持 variable fonts
   - 不支持时回退到最接近的标准字重

3. **焦点轮廓**
   - 虚线轮廓是 Figma 的标志
   - 确保在所有交互元素上可见

4. **向后兼容**
   - 保留 `bugatti-pill` 和 `bugatti-card` 类
   - 映射到新的 Figma 类

## 🎯 下一步

1. 完成剩余 5 个组件的更新
2. 更新 `PROJECT_SUMMARY.md` 反映新设计系统
3. 添加更多 Figma 特有的组件（如有需要）
4. 考虑添加多色渐变（Figma hero section 风格）

---

**设计灵感** 🎨 Figma - 设计工具中的设计大师
**迁移日期** 📅 2026-04-22
**技术栈** 💻 React + TypeScript + Tailwind + Figma Design System

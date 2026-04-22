# Starbucks 设计系统迁移文档

## 📋 迁移概述

**迁移日期**: 2026-04-22  
**迁移类型**: Figma → Starbucks 设计系统  
**状态**: ✅ 完成

从 **Figma 设计系统**（极简黑白）全面迁移到 **Starbucks 设计系统**（温暖零售绿色系统）。

## 🎯 迁移目标

### 主要变化

1. ✅ **颜色系统** - 从纯黑白变为四级绿色 + 暖中性
2. ✅ **字体系统** - 保持 Inter Variable，调整字重和字间距
3. ✅ **组件样式** - 更新圆角、按钮、卡片样式
4. ✅ **交互效果** - scale(0.95) 按压效果
5. ✅ **视觉氛围** - 从极简工具感到温暖零售感

## 🎨 设计系统对比

### 核心差异

| 特性 | Figma (之前) | Starbucks (现在) |
|------|-------------|-----------------|
| **背景色** | #ffffff (纯白) | #f2f0eb (暖奶油色) |
| **主色调** | #000000 (纯黑) | #00754A (绿色强调) |
| **品牌绿** | - | #006241 (Starbucks Green) |
| **深色背景** | - | #1E3932 (House Green) |
| **卡片** | 白色 + 极简阴影 | 白色 + 12px 圆角 |
| **按钮** | 黑色 pill | 绿色 pill |
| **字间距** | -0.14px 到 -1.72px | -0.16px 到 -0.01em |
| **焦点样式** | 虚线 2px | 实线 2px |
| **交互** | opacity 变化 | scale(0.95) 压缩 |
| **圆角** | 8px (卡片) / 50px (pill) | 12px (卡片) / 50px (pill) |

## 📦 详细变更

### 1. 颜色系统 (tailwind.css)

#### 主色调变更

```css
/* 之前 - Figma */
--background: #ffffff;       /* 纯白 */
--foreground: #000000;       /* 纯黑 */
--primary: #000000;          /* 黑色按钮 */

/* 现在 - Starbucks */
--background: #f2f0eb;       /* 暖中性画布 */
--foreground: rgba(0,0,0,0.87); /* 文本黑 */
--primary: #00754A;          /* 绿色强调 */
```

#### 新增 Starbucks 品牌色

```css
/* 四级绿色系统 */
--starbucks-green: #006241;   /* 历史品牌绿 */
--green-accent: #00754A;      /* 主 CTA */
--house-green: #1E3932;       /* 深色表面 */
--green-uplift: #2b5148;      /* 次要深色 */
--green-light: #d4e9e2;       /* 浅色洗涤 */

/* 金色（仅 Rewards）*/
--gold: #cba258;              /* 金色强调 */
--gold-light: #dfc49d;        /* 柔和金 */
--gold-lightest: #faf6ee;     /* 奶油金 */

/* 暖中性 */
--neutral-warm: #f2f0eb;      /* 主画布 */
--ceramic: #edebe9;           /* 区域分隔 */
--neutral-cool: #f9f9f9;      /* 实用表面 */
```

### 2. 字体系统

#### 字体家族

```css
/* 之前 */
--font-sans: 'Inter Variable', 'SF Pro Display', sans-serif;

/* 现在 - SoDoSans 替代 */
--font-sans: 'Inter Variable', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

#### 字间距调整

```css
/* 之前 - Figma 负字间距 */
body { letter-spacing: -0.14px; }
h1 { letter-spacing: -1.72px; }

/* 现在 - Starbucks 一致紧密间距 */
body { letter-spacing: -0.16px; }
h1, h2 { letter-spacing: -0.16px; }
```

#### 字重调整

```css
/* 保持 400 基础字重，但移除 Figma 的变量字重（320-700） */
/* Starbucks 使用标准 400-600 */
```

### 3. 组件样式

#### 按钮 (Pill)

```css
/* 之前 - figma-pill */
.figma-pill {
  background: #000000;        /* 黑色 */
  color: #ffffff;
  border-radius: 50px;
  font-weight: 480;           /* Figma 变量字重 */
  letter-spacing: -0.14px;
}

/* 现在 - starbucks-pill */
.starbucks-pill {
  background: #00754A;        /* 绿色强调 */
  color: #ffffff;
  border-radius: 50px;
  font-weight: 400;           /* 标准字重 */
  letter-spacing: -0.01em;
  /* 新增 scale 按压 */
  &:active { transform: scale(0.95); }
}
```

#### 卡片

```css
/* 之前 - figma-card */
.figma-card {
  background: #ffffff;
  border-radius: 8px;         /* 8px 圆角 */
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* 现在 - starbucks-card */
.starbucks-card {
  background: #ffffff;
  border-radius: 12px;        /* 12px 圆角 */
  box-shadow: 0 1px 3px rgba(0,0,0,0.14); /* 更柔和 */
}
```

#### 新增 Frap 浮动 CTA

```css
.starbucks-frap {
  width: 56px;
  height: 56px;
  background: #00754A;
  border-radius: 50%;         /* 圆形 */
  /* 多层阴影 - Starbucks 特色 */
  box-shadow: 
    0 0 6px rgba(0,0,0,0.24),
    0 8px 12px rgba(0,0,0,0.14);
}
```

### 4. 焦点样式

```css
/* 之前 - Figma 虚线轮廓 */
*:focus-visible {
  outline-style: dashed;
  outline-width: 2px;
  outline-color: #000000;
}

/* 现在 - Starbucks 实线轮廓 */
*:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-color: var(--green-accent); /* 绿色 */
}
```

### 5. Toast 通知

```typescript
/* 之前 - Figma */
{
  background: "#ffffff",
  border: "1px solid #000000",  // 黑色边框
  borderRadius: "8px",
  fontWeight: 330,              // 变量字重
  letterSpacing: "-0.14px"
}

/* 现在 - Starbucks */
{
  background: "#ffffff",
  border: "1px solid #00754A",  // 绿色边框
  borderRadius: "12px",         // 12px 圆角
  fontWeight: 400,              // 标准字重
  letterSpacing: "-0.01em"
}
```

## 🔄 组件更新清单

### ✅ 已更新的组件

| 组件 | 主要变更 | 状态 |
|------|---------|------|
| **Layout.tsx** | 主背景 #f2f0eb，侧边栏白色，激活按钮绿色 | ✅ |
| **Inventory.tsx** | 保持白色卡片，仓库位置输入修正 | ✅ |
| **Reports.tsx** | 渐变卡片绿色，进度条绿色，徽章绿色 | ✅ |
| **Customers.tsx** | VIP 徽章绿色 | ✅ |
| **Dashboard.tsx** | 使用全局 utility 类（自动更新）| ✅ |
| **Purchase.tsx** | 使用全局 utility 类（自动更新）| ✅ |
| **Sales.tsx** | 使用全局 utility 类（自动更新）| ✅ |
| **Suppliers.tsx** | 使用全局 utility 类（自动更新）| ✅ |
| **QuickStats.tsx** | 使用全局 utility 类（自动更新）| ✅ |

### 🎨 样式文件

| 文件 | 变更 | 状态 |
|------|------|------|
| **tailwind.css** | 完整颜色系统、字体、组件样式 | ✅ |
| **toast-config.ts** | 绿色边框、12px 圆角 | ✅ |
| **fonts.css** | 保持 Inter Variable | ✅ |

### ⚙️ 配置文件

| 文件 | 变更 | 状态 |
|------|------|------|
| **.projectrc** | DESIGN_SYSTEM=starbucks | ✅ |

## 💡 新增工具类

### Starbucks 专用类

```css
/* 按钮 */
.starbucks-pill           /* 绿色 pill 按钮 */
.starbucks-pill-white     /* 白色 pill 按钮 */
.starbucks-frap           /* 浮动圆形 CTA (56px) */

/* 卡片 */
.starbucks-card           /* 白色卡片 12px 圆角 */

/* 表面 */
.starbucks-dark-surface   /* House Green 深色背景 */
.starbucks-warm-surface   /* Neutral Warm 暖背景 */
.starbucks-ceramic-surface /* Ceramic 陶瓷背景 */

/* 标签 */
.starbucks-mono-label     /* 等宽大写标签 */

/* 金色强调（仅 Rewards）*/
.starbucks-gold-accent    /* 金色文字 */
.starbucks-gold-bg        /* 金色背景 */
```

### 向后兼容

```css
/* 所有旧类映射到新类 */
.figma-pill → .starbucks-pill
.figma-card → .starbucks-card
.figma-mono-label → .starbucks-mono-label
.bugatti-pill → .starbucks-pill
.bugatti-card → .starbucks-card
```

## 📊 视觉效果变化

### 页面布局

```
之前 (Figma):
┌─────────────────────────────────┐
│ 白色背景                         │
│ ┌─────────┐  ┌───────────────┐ │
│ │白色侧边栏│  │ 白色主内容区   │ │
│ │黑色按钮  │  │ 黑色文字       │ │
│ └─────────┘  └───────────────┘ │
└─────────────────────────────────┘

现在 (Starbucks):
┌─────────────────────────────────┐
│ 暖奶油色背景 (#f2f0eb)          │
│ ┌─────────┐  ┌───────────────┐ │
│ │白色侧边栏│  │暖奶油色主内容 │ │
│ │绿色按钮  │  │白色卡片       │ │
│ └─────────┘  └───────────────┘ │
└─────────────────────────────────┘
```

### 配色方案

**之前 - Figma**:
- 背景: 纯白 (#ffffff)
- 文字: 纯黑 (#000000)
- 按钮: 黑底白字
- 强调: 无品牌色

**现在 - Starbucks**:
- 背景: 暖奶油 (#f2f0eb)
- 文字: 文本黑 (rgba(0,0,0,0.87))
- 按钮: 绿底白字 (#00754A)
- 强调: 四级绿色系统

## 🎨 设计原则变化

### Figma 设计原则

- ✅ 极简至上 - 零装饰
- ✅ 高对比度 - 纯黑纯白
- ✅ 变量字重 - 320-700
- ✅ 虚线焦点 - 连接产品语言
- ✅ 负字间距 - -0.14px 到 -1.72px

### Starbucks 设计原则

- ✅ 温暖自信 - 零售旗舰店感觉
- ✅ 四级绿色 - 品牌锚点系统
- ✅ 暖中性色 - 咖啡馆氛围
- ✅ 标准字重 - 400-600
- ✅ 圆角柔和 - 12px 卡片 / 50px pill
- ✅ Scale 交互 - 按压缩放效果

## 🔑 关键改进

### 1. 更温暖的视觉感受

**之前**: 冷静、专业、极简工具感  
**现在**: 温暖、友好、零售亲和感

### 2. 品牌识别度提升

**之前**: 无明显品牌色  
**现在**: 四级绿色系统强化品牌

### 3. 更丰富的色彩层次

**之前**: 黑白二元  
**现在**: 绿色渐变 + 暖中性

### 4. 更柔和的交互

**之前**: opacity 变化  
**现在**: scale(0.95) 压缩 + opacity

## 📝 使用指南

### 颜色使用规范

```tsx
// ✅ 主背景 - 暖奶油色
<div className="bg-[#f2f0eb]">

// ✅ 卡片 - 白色
<div className="bg-white starbucks-card">

// ✅ 主按钮 - 绿色 pill
<Button className="starbucks-pill">

// ✅ 深色区域 - House Green
<div className="starbucks-dark-surface">

// ✅ VIP 徽章等 - 金色（慎用）
<span className="starbucks-gold-accent">GOLD</span>
```

### 文字样式

```tsx
// ✅ 标题
<h1 style={{ fontWeight: 400, letterSpacing: '-0.16px' }}>

// ✅ 正文
<p style={{ fontWeight: 400, letterSpacing: '-0.16px' }}>

// ✅ 标签
<span className="starbucks-mono-label">CATEGORY</span>
```

### 交互效果

```tsx
// ✅ 按钮按压
<button className="starbucks-pill">
  {/* 自动应用 scale(0.95) on active */}
</button>

// ✅ 浮动 CTA
<button className="starbucks-frap">
  <Plus />
</button>
```

## ⚠️ 注意事项

### 金色使用限制

```tsx
// ❌ 错误 - 金色不应作为通用强调色
<div className="starbucks-gold-bg">Regular Content</div>

// ✅ 正确 - 金色仅用于 Rewards/高价值场景
<div className="starbucks-gold-bg">VIP REWARDS</div>
```

### 绿色层级使用

```tsx
// ✅ Starbucks Green (#006241) - 品牌标识
<h1 style={{ color: 'var(--starbucks-green)' }}>

// ✅ Green Accent (#00754A) - 主要 CTA
<Button className="bg-[#00754A]">

// ✅ House Green (#1E3932) - 深色背景
<footer className="bg-[#1E3932]">

// ✅ Green Light (#d4e9e2) - 浅色洗涤
<div className="bg-[#d4e9e2]">
```

## 🎯 最佳实践

### 1. 保持一致性

```tsx
// ✅ 使用 utility 类
<Button className="starbucks-pill">

// ❌ 避免内联样式
<button style={{ background: '#00754A' }}>
```

### 2. 遵循颜色层级

```tsx
// ✅ 正确的层次
暖背景 (#f2f0eb) → 白色卡片 (#ffffff) → 绿色按钮 (#00754A)

// ❌ 避免直接在暖背景上放绿色
<div className="bg-[#f2f0eb]">
  <button className="bg-[#00754A]">  {/* 缺少白色容器 */}
</div>
```

### 3. 适度使用阴影

```tsx
// ✅ 卡片使用柔和阴影
<div className="starbucks-card">

// ✅ Frap 使用多层阴影
<button className="starbucks-frap">

// ❌ 避免过度使用阴影
<div style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
```

## 📊 迁移统计

### 文件变更

| 类型 | 数量 | 说明 |
|------|------|------|
| 样式文件 | 2 个 | tailwind.css, toast-config.ts |
| 组件文件 | 9 个 | Layout + 8 个页面组件 |
| 配置文件 | 1 个 | .projectrc |
| 新增文档 | 1 个 | STARBUCKS_MIGRATION.md |

### 代码变更量

- 颜色变量: 40+ 个
- Utility 类: 15+ 个
- 组件更新: 9 个
- 总行数变更: ~500 行

## 🔄 回滚方案

如需回滚到 Figma 设计系统：

1. 恢复 `tailwind.css` 颜色变量
2. 恢复 `toast-config.ts`
3. 将组件中的颜色类名替换回 Figma 版本
4. 更新 `.projectrc` 为 `DESIGN_SYSTEM=figma`

或使用 Git:
```bash
git checkout <commit-before-migration> -- src/styles/tailwind.css src/lib/toast-config.ts
```

## 📚 参考文档

- [skills/DESIGN_STARBUCKS.md](./skills/DESIGN_STARBUCKS.md) - Starbucks 完整设计系统
- [skills/DESIGN_SYSTEMS.md](./skills/DESIGN_SYSTEMS.md) - 设计系统对比
- [docs/FIGMA_MIGRATION.md](./docs/FIGMA_MIGRATION.md) - Bugatti → Figma 迁移（历史）

## 🎓 学习要点

### Starbucks 设计系统精髓

1. **四级绿色系统** - 每个绿色有特定用途，不混用
2. **暖中性画布** - 营造咖啡馆氛围，不是冷白色
3. **金色保留** - 仅用于 Rewards 高价值场景
4. **圆角柔和** - 12px 比 8px 更柔和亲和
5. **Scale 交互** - 按压缩放比 opacity 更有触感

### 与 Figma 对比学习

- **Figma**: 极简、工具、黑白、虚线焦点
- **Starbucks**: 温暖、零售、绿色、实线焦点

两者都是优秀的设计系统，适用于不同场景。

## ✅ 迁移检查清单

- [x] 更新颜色系统（四级绿色 + 暖中性）
- [x] 更新字体系统（字间距调整）
- [x] 创建 Starbucks utility 类
- [x] 更新所有组件颜色
- [x] 更新 Toast 配置
- [x] 更新焦点样式（虚线→实线）
- [x] 添加 scale 按压效果
- [x] 圆角调整（8px→12px）
- [x] 更新配置文件
- [x] 创建迁移文档
- [x] 向后兼容（映射旧类名）

## 🚀 下一步计划

### 短期优化

- [ ] 添加 Starbucks Frap 浮动 CTA 示例
- [ ] 创建金色 Rewards 场景演示
- [ ] 优化响应式设计
- [ ] 添加更多 Starbucks 特色组件

### 中期计划

- [ ] 深色模式适配（House Green 为主）
- [ ] 添加更多绿色渐变效果
- [ ] 优化卡片阴影层次
- [ ] 创建 Starbucks 组件库

### 长期愿景

- [ ] 完整的 Starbucks 设计系统文档
- [ ] Storybook 组件展示
- [ ] 设计 token 系统
- [ ] 主题切换功能（Figma ↔ Starbucks）

---

**迁移状态**: ✅ 完成  
**迁移日期**: 2026-04-22  
**设计系统**: Starbucks  
**视觉氛围**: 温暖零售 🌟  
**品牌色**: 四级绿色 🍃  

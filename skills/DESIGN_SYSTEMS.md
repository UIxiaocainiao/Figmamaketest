# 设计系统库

本目录收集了多个知名品牌的设计系统作为学习和参考资料。

## 📚 已安装的设计系统

### 1. Starbucks 设计系统 ⭐

**文件**: [DESIGN_STARBUCKS.md](./DESIGN_STARBUCKS.md)

**核心特点**:
- 🎨 四级绿色品牌系统 (`#006241` / `#00754A` / `#1E3932` / `#2b5148`)
- 🎨 暖中性画布 (`#f2f0eb` / `#edebe9`)
- 🔤 SoDoSans 专有字体 + 上下文切换字体
- 🔘 50px 全圆角 pill 按钮
- ⚡ 浮动 Frap CTA (56px 圆形，多层阴影)
- 📐 12px 卡片圆角
- ✨ `scale(0.95)` 按压微交互

**适用场景**:
- 零售/咖啡店类应用
- 会员/奖励系统
- 温暖友好的品牌感觉
- 需要专业但亲和的设计

**关键学习点**:
1. 四级绿色系统 - 每个绿色有特定表面角色
2. 金色保留给 Rewards - 不是通用强调色
3. 暖中性代替冷白 - 参考真实咖啡馆材质
4. 上下文字体切换 - Rewards 用衬线，Careers 用手写
5. 礼品卡是真实产品照片 - 不是生成的图形

## 🌐 当前项目使用的设计系统

**Figma Design System** (在 `docs/DESIGN.md`)

- 纯黑白界面 (#000000, #ffffff)
- Inter Variable 字体 (变量字重 320-700)
- 虚线焦点轮廓 (dashed 2px)
- Pill 按钮 (50px) 和圆形按钮 (50%)
- 极简阴影
- 负字间距设计

## 🎯 设计系统对比

| 特性 | Figma | Starbucks |
|------|-------|-----------|
| **定位** | 设计工具 | 零售咖啡 |
| **颜色** | 纯黑白 | 四级绿色 + 暖中性 |
| **字体** | Inter Variable | SoDoSans + 上下文切换 |
| **圆角** | 50px / 8px | 50px / 12px |
| **字重** | 320-700 (变量) | 400-600 (标准) |
| **字间距** | -0.14px 到 -1.72px | -0.16px 到 -0.01em |
| **焦点** | 虚线轮廓 | 标准实线 |
| **阴影** | 极简 | 多层次（特色元素） |
| **氛围** | 极简、工具感 | 温暖、零售感 |
| **按钮** | Pill + 圆形 | Pill + 浮动圆形 CTA |
| **交互** | opacity 变化 | scale 变化 |

## 🚀 安装新的设计系统

### 使用 getdesign 工具

```bash
# 在 skills 目录下安装
cd skills
npx getdesign@latest add [brand-name]

# 移动到 skills 目录并重命名
mv ../DESIGN.md ./DESIGN_[BRAND].md
```

### 可用的设计系统

getdesign 支持多个知名品牌的设计系统：

- `starbucks` - Starbucks (已安装) ✅
- `figma` - Figma (在 docs/)
- `apple` - Apple
- `stripe` - Stripe
- `airbnb` - Airbnb
- `notion` - Notion
- `linear` - Linear
- 更多品牌...

查看完整列表:
```bash
npx getdesign@latest list
```

## 📖 如何使用设计系统文档

### 1. 学习设计原则

每个设计系统文档包含：
- 视觉主题与氛围
- 颜色系统和角色
- 排版规则
- 组件样式
- 布局原则
- 设计约束 (Do's and Don'ts)

### 2. 提取设计模式

从设计系统中学习：
- 颜色使用策略
- 字体层次结构
- 组件设计原则
- 微交互设计
- 空间使用方法

### 3. 应用到项目

**不要直接复制**，而是学习并适配：
1. 理解设计背后的原因
2. 提取核心设计原则
3. 根据项目需求调整
4. 创建自己的设计系统

### 4. 对比分析

比较不同设计系统：
- 相同元素的不同处理
- 各自的优缺点
- 适用场景差异
- 可借鉴的创新点

## 💡 设计系统学习路径

### 初级 (理解基础)

1. **阅读单个设计系统**
   - 从头到尾阅读一个设计系统文档
   - 理解各部分的作用
   - 注意关键设计决策

2. **识别核心元素**
   - 颜色体系
   - 字体层次
   - 间距规则
   - 组件样式

3. **观察实际应用**
   - 访问品牌官网
   - 观察设计系统如何应用
   - 注意细节和一致性

### 中级 (对比分析)

1. **对比两个设计系统**
   - Figma vs Starbucks
   - 记录差异和相似点
   - 理解为什么不同

2. **分析适用场景**
   - 工具类 vs 零售类
   - B2B vs B2C
   - 极简 vs 丰富

3. **提取设计模式**
   - 按钮设计模式
   - 卡片设计模式
   - 导航设计模式
   - 表单设计模式

### 高级 (创造应用)

1. **创建混合设计系统**
   - 结合多个系统的优点
   - 适配自己的项目
   - 建立一致的规范

2. **设计决策文档化**
   - 记录为什么这样设计
   - 说明适用场景
   - 建立使用指南

3. **持续改进**
   - 收集用户反馈
   - 优化设计细节
   - 更新文档

## 🎨 设计系统最佳实践

### 从设计系统中学习

1. **颜色使用**
   - Figma: 极简黑白，让内容成为焦点
   - Starbucks: 品牌色作为锚点，暖中性营造氛围

2. **字体策略**
   - Figma: 变量字重 (320-700) 创造精细层次
   - Starbucks: 上下文切换字体强化场景感

3. **圆角设计**
   - Figma: Pill (50px) 和圆形 (50%) 创造工具感
   - Starbucks: Pill (50px) 和卡片 (12px) 创造零售感

4. **微交互**
   - Figma: 虚线焦点轮廓连接产品语言
   - Starbucks: Scale 按压效果增强触感

5. **层次结构**
   - Figma: 负字间距 + 极简阴影
   - Starbucks: 多层阴影 + 圆角分组

### 适配到自己的项目

1. **保持一致性**
   - 选择一个主要参考系统
   - 建立清晰的设计规范
   - 严格遵循既定规则

2. **适度借鉴**
   - 不要完全复制
   - 提取适合的元素
   - 创造自己的特色

3. **文档化决策**
   - 记录设计选择
   - 说明使用场景
   - 提供代码示例

4. **持续优化**
   - 收集反馈
   - 迭代改进
   - 更新文档

## 📊 设计系统评估

### 评估维度

当评估一个设计系统时，考虑：

1. **完整性**
   - 是否覆盖所有常用组件？
   - 是否有清晰的使用指南？
   - 是否有代码示例？

2. **一致性**
   - 设计语言是否统一？
   - 组件之间是否协调？
   - 是否有冲突的模式？

3. **灵活性**
   - 是否易于定制？
   - 是否支持多种场景？
   - 是否容易扩展？

4. **可访问性**
   - 是否符合 WCAG 标准？
   - 颜色对比度是否足够？
   - 是否支持键盘导航？

5. **性能**
   - 字体加载策略？
   - 动画性能如何？
   - 是否有不必要的复杂性？

## 🔗 相关资源

### 设计系统工具

- [getdesign](https://github.com/getdesignio/getdesign) - 设计系统提取工具
- [Figma](https://www.figma.com) - 设计工具
- [Storybook](https://storybook.js.org) - 组件文档工具
- [Design Systems Repo](https://designsystemsrepo.com) - 设计系统集合

### 学习资源

- [Design Systems Guide](https://www.designsystems.com)
- [Adele - Design Systems Repository](https://adele.uxpin.com)
- [Design System Checklist](https://www.designsystemchecklist.com)

### 知名设计系统

- [Material Design](https://material.io) - Google
- [Human Interface Guidelines](https://developer.apple.com/design) - Apple
- [Fluent Design](https://www.microsoft.com/design/fluent) - Microsoft
- [Carbon Design System](https://carbondesignsystem.com) - IBM
- [Ant Design](https://ant.design) - Alibaba
- [Lightning Design System](https://www.lightningdesignsystem.com) - Salesforce

## 📝 贡献指南

### 添加新的设计系统

1. 使用 getdesign 安装
   ```bash
   cd skills
   npx getdesign@latest add [brand]
   mv ../DESIGN.md ./DESIGN_[BRAND].md
   ```

2. 更新本文档
   - 在"已安装的设计系统"部分添加条目
   - 添加核心特点和适用场景
   - 更新对比表格

3. 更新 skills/README.md
   - 添加到文档列表
   - 更新快速查找部分

### 编写设计系统分析

如果要添加自己的设计系统分析：

1. 使用统一的结构
   ```markdown
   # 设计系统名称
   
   ## 核心特点
   ## 颜色系统
   ## 字体系统
   ## 组件设计
   ## 适用场景
   ## 学习要点
   ```

2. 包含实际示例
   - 颜色代码
   - CSS 代码片段
   - 实际应用截图

3. 提供对比分析
   - 与其他系统比较
   - 优缺点分析
   - 适用场景建议

## 📅 更新日志

### v1.0.0 (2026-04-22)
- ✅ 创建设计系统库
- ✅ 安装 Starbucks 设计系统
- ✅ 添加 Figma vs Starbucks 对比
- ✅ 编写完整的学习指南
- ✅ 建立评估框架

---

**目的**: 学习和参考优秀的设计系统
**原则**: 学习而非复制，提取而非照搬
**维护**: 持续添加新的设计系统参考

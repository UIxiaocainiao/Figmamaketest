# Skills - 技能和指南文档

本目录包含项目相关的技能文档、开发指南和最佳实践。

## 📁 目录结构

```
skills/
├── README.md          # 本文件
├── SKILL.md          # 原始技能文档
└── ...               # 其他技能文档
```

## 📚 文档列表

### 核心技能

1. **SKILL.md** - 原始进销存系统技能文档
   - 项目概述
   - 核心功能
   - 技术栈
   - 开发规范

### 设计系统参考

2. **DESIGN_SYSTEMS.md** - 设计系统库索引 ⭐ 新增
   - 已安装的设计系统列表
   - 设计系统对比分析
   - 学习路径和最佳实践
   - 如何添加新的设计系统

3. **DESIGN_STARBUCKS.md** - Starbucks 设计系统 ⭐ 新增
   - 视觉主题与氛围
   - 四级绿色品牌系统
   - 暖中性色调画布
   - SoDoSans 专有字体
   - 完整圆角按钮系统
   - 浮动 Frap CTA 设计
   - 间距和布局原则

### 设计系统库

本项目收集了多个知名品牌的设计系统作为参考：

- ✅ **DESIGN_STARBUCKS.md** - Starbucks 设计系统（已安装）

可以使用 `npx getdesign@latest add [brand]` 添加更多设计系统。

### 推荐添加的技能文档

以下是建议添加的技能文档：

- `frontend-development.md` - 前端开发规范
- `backend-development.md` - 后端开发规范
- `database-design.md` - 数据库设计指南
- `api-design.md` - API 设计规范
- `testing-guide.md` - 测试指南
- `deployment-guide.md` - 部署指南
- `security-best-practices.md` - 安全最佳实践

## 🎯 使用指南

### 如何使用技能文档

1. **新成员入职**: 按顺序阅读文档了解项目
2. **功能开发**: 参考相关技能文档遵循规范
3. **问题解决**: 在文档中查找最佳实践
4. **知识沉淀**: 将经验总结为新的技能文档

### 文档编写规范

所有技能文档应遵循以下结构：

```markdown
# 文档标题

## 📋 概述
简要说明本文档的目的和范围

## 🎯 目标
明确文档要解决的问题

## 📚 内容
详细的技能说明和示例

## ✅ 检查清单
可操作的检查项

## 🔗 相关资源
相关文档和外部链接

## 📝 更新日志
文档的变更记录
```

## 📝 添加新技能文档

### 步骤

1. 在 `skills/` 目录创建新的 Markdown 文件
2. 使用清晰的文件名（小写，用连字符分隔）
3. 遵循文档编写规范
4. 更新本 README.md 添加文档链接

### 命名规范

```
✅ 正确:
- frontend-component-development.md
- api-error-handling.md
- database-migration-guide.md

❌ 错误:
- FrontendComponent.md
- API_Error_Handling.md
- databaseMigration.md
```

## 🔍 快速查找

### 前端开发
- [SKILL.md](./SKILL.md) - 原始技能文档
- `frontend/README.md` - 前端详细说明

### 后端开发
- `backend/README.md` - 后端详细说明

### 设计系统
- `docs/DESIGN.md` - Figma 设计系统（当前使用）
- [DESIGN_STARBUCKS.md](./DESIGN_STARBUCKS.md) - Starbucks 设计系统参考 ⭐

### 项目文档
- `docs/PROJECT_SUMMARY.md` - 项目总结
- `docs/FEATURES.md` - 功能特性

## 🎨 Starbucks 设计系统快速参考

### 核心特点

**颜色系统**:
- 四级绿色: `#006241` (Starbucks) / `#00754A` (Accent) / `#1E3932` (House) / `#2b5148` (Uplift)
- 金色: `#cba258` (仅用于 Rewards 状态)
- 暖中性: `#f2f0eb` (Cream) / `#edebe9` (Ceramic)

**字体系统**:
- 主字体: SoDoSans (专有字体)
- Rewards 衬线: Lander Tall
- Careers 手写: Kalam
- 字间距: `-0.16px` (紧密)

**组件特色**:
- 按钮: 50px 全圆角 pill
- 卡片: 12px 圆角
- 浮动 CTA: 56px 圆形，多层阴影
- 交互: `scale(0.95)` 按压效果

**布局节奏**:
```
Cream 英雄区 → White 内容 → Dark-green 特色带 → Cream 实用区 → Dark-green 页脚
```

### 何时使用

**适用场景**:
- 零售/咖啡店类应用
- 需要温暖、友好的品牌感觉
- 重点突出会员/奖励系统
- 需要专业但不失亲和力

**设计原则**:
- 温暖自信的零售旗舰店感觉
- 绿色作为品牌锚点
- 暖中性色调营造咖啡馆氛围
- 圆角几何创造柔和感
- 克制的阴影使用

### 与 Figma 设计系统对比

| 特性 | Figma | Starbucks |
|------|-------|-----------|
| 颜色 | 纯黑白 | 四级绿色 + 暖中性 |
| 字体 | Inter Variable | SoDoSans 专有 |
| 圆角 | 50px pill / 8px card | 50px pill / 12px card |
| 字重 | 320-700 变量 | 400-600 标准 |
| 氛围 | 极简工具 | 温暖零售 |
| 焦点 | 虚线轮廓 | 标准实线 |
| 阴影 | 极简 | 多层次（Frap CTA） |

### 学习要点

1. **四级绿色系统** - 每个绿色有特定用途
2. **金色仅用于 Rewards** - 不是通用强调色
3. **暖中性画布** - 参考实际咖啡馆材质
4. **上下文切换字体** - 不同场景使用不同字体
5. **物理产品设计** - 礼品卡是真实产品照片

查看完整文档: [DESIGN_STARBUCKS.md](./DESIGN_STARBUCKS.md)

## 💡 技能文档模板

### 前端组件开发模板

```markdown
# 前端组件开发规范

## 📋 概述
本文档说明如何在项目中开发 React 组件。

## 🎯 核心原则

1. 优先使用 shadcn/ui 组件
2. 遵循 Figma 设计系统
3. 使用 TypeScript
4. 保持组件简洁

## 📚 开发步骤

### 1. 创建组件文件

\`\`\`tsx
// src/app/components/NewComponent.tsx
export function NewComponent() {
  return <div>Component</div>;
}
\`\`\`

### 2. 使用 shadcn/ui

\`\`\`tsx
import { Button } from "@/components/ui/button";

export function NewComponent() {
  return (
    <Button className="figma-pill">
      Click me
    </Button>
  );
}
\`\`\`

### 3. 添加样式

\`\`\`tsx
<div className="figma-card p-6">
  <h2 style={{ fontWeight: 540 }}>Title</h2>
</div>
\`\`\`

## ✅ 检查清单

- [ ] 使用 shadcn/ui 组件
- [ ] 遵循 Figma 样式
- [ ] TypeScript 类型完整
- [ ] 响应式设计
- [ ] 可访问性考虑

## 🔗 相关资源

- [shadcn/ui 文档](https://ui.shadcn.com)
- [Figma 设计系统](../docs/DESIGN.md)
```

### API 开发模板

```markdown
# API 开发规范

## 📋 概述
本文档说明如何开发 RESTful API 端点。

## 🎯 设计原则

1. RESTful 风格
2. 清晰的命名
3. 统一的响应格式
4. 完善的错误处理

## 📚 端点设计

### URL 结构

\`\`\`
GET    /api/resources       # 列表
GET    /api/resources/:id   # 详情
POST   /api/resources       # 创建
PUT    /api/resources/:id   # 更新
DELETE /api/resources/:id   # 删除
\`\`\`

### 响应格式

\`\`\`json
{
  "success": true,
  "data": { ... },
  "message": "Success",
  "timestamp": "2026-04-22T10:00:00Z"
}
\`\`\`

### 错误响应

\`\`\`json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [...]
  },
  "timestamp": "2026-04-22T10:00:00Z"
}
\`\`\`

## ✅ 检查清单

- [ ] 遵循 RESTful 风格
- [ ] 统一响应格式
- [ ] 完善错误处理
- [ ] 输入验证
- [ ] 认证授权
- [ ] API 文档

## 🔗 相关资源

- [REST API 最佳实践](https://restfulapi.net)
- [HTTP 状态码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
```

## 🤝 贡献指南

### 如何贡献技能文档

1. **识别需求**: 发现需要文档化的技能或实践
2. **创建文档**: 使用模板创建新文档
3. **内部审查**: 团队成员审查文档
4. **更新索引**: 在本 README 中添加链接
5. **持续更新**: 根据反馈改进文档

### 文档质量标准

优秀的技能文档应该：

- ✅ **清晰**: 语言简洁，结构清晰
- ✅ **实用**: 包含可操作的步骤和示例
- ✅ **准确**: 技术信息准确无误
- ✅ **完整**: 覆盖主要场景和边界情况
- ✅ **最新**: 及时更新，保持与项目同步

## 📊 文档维护

### 定期审查

- 每月审查一次所有文档
- 更新过时的信息
- 添加新的最佳实践
- 删除不再适用的内容

### 版本控制

- 在文档末尾添加更新日志
- 记录主要变更和原因
- 标注文档版本号

### 示例更新日志

```markdown
## 📝 更新日志

### v1.1.0 (2026-04-22)
- 添加新的 API 设计规范
- 更新前端组件示例
- 修复错误的代码示例

### v1.0.0 (2026-04-01)
- 初始版本
```

## 🎓 学习路径

### 新手开发者

1. 阅读 `SKILL.md` 了解项目概况
2. 学习 `frontend/README.md` 掌握前端开发
3. 参考 `docs/DESIGN.md` 理解设计系统
4. 查看代码示例和最佳实践

### 高级开发者

1. 深入研究架构设计文档
2. 学习性能优化技巧
3. 掌握安全最佳实践
4. 贡献新的技能文档

## 📧 反馈

如果您发现：
- 文档中的错误
- 需要补充的内容
- 更好的实践方法

请创建 Issue 或直接提交 Pull Request。

---

**目的**: 知识沉淀与团队成长
**原则**: 实用、清晰、持续更新
**维护**: 团队共同负责

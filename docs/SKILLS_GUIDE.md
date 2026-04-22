# 🚀 Awesome LLM Apps - 技能指南

来自 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 的 AI Agent 技能集合。

## 📋 可用技能列表

### 1. 🎯 **fullstack-developer** ⭐ 推荐
现代 Web 全栈开发专家
- **技术栈**: React, Next.js, Node.js, TypeScript
- **数据库**: PostgreSQL, MongoDB, Prisma
- **部署**: Vercel, Docker, CI/CD
- **最佳实践**: API 设计, 安全性, 性能优化

### 2. 🐍 **python-expert**
Python 编程专家
- 数据处理, 脚本编写
- 面向对象编程
- 异步编程

### 3. 🔍 **code-reviewer**
代码审查专家
- 代码质量检查
- 最佳实践建议
- 性能优化建议

### 4. 🐛 **debugger**
调试专家
- 错误诊断
- 性能问题定位
- 解决方案建议

### 5. 📊 **data-analyst**
数据分析专家
- 数据可视化
- 统计分析
- 洞察报告

### 6. 🎨 **ux-designer**
用户体验设计师
- UI/UX 设计原则
- 交互设计
- 用户研究

### 7. ✍️ **content-creator**
内容创作者
- 文章撰写
- 营销文案
- 社交媒体内容

### 8. 📧 **email-drafter**
邮件起草专家
- 商务邮件
- 营销邮件
- 客户沟通

### 9. ✅ **fact-checker**
事实核查专家
- 信息验证
- 来源检查
- 准确性评估

### 10. 📝 **editor**
编辑专家
- 语法检查
- 风格优化
- 可读性提升

### 11. 📚 **academic-researcher**
学术研究员
- 文献综述
- 研究方法
- 论文撰写

### 12. 🔬 **deep-research**
深度研究专家
- 多源信息整合
- 深度分析
- 综合报告

### 13. 📋 **project-planner**
项目规划专家
- 项目管理
- 时间线规划
- 资源分配

### 14. 🏃 **sprint-planner**
敏捷冲刺规划师
- Scrum 方法论
- 任务分解
- 速度估算

### 15. 💼 **strategy-advisor**
战略顾问
- 业务策略
- 竞争分析
- 增长建议

### 16. 📖 **technical-writer**
技术文档撰写者
- API 文档
- 用户指南
- 开发文档

### 17. 📊 **visualization-expert**
可视化专家
- 数据可视化
- 图表设计
- Dashboard 创建

### 18. 🤝 **decision-helper**
决策助手
- 利弊分析
- 决策框架
- 风险评估

### 19. 📝 **meeting-notes**
会议记录专家
- 会议纪要
- 行动项提取
- 总结归纳

### 20. 🔄 **self-improving-agent-skills**
自我改进型 Agent
- 技能学习
- 性能优化
- 自适应能力

## 🎓 Full-Stack Developer 技能详解

### 核心能力
```
✅ 前端开发 (React, Next.js, TypeScript)
✅ 后端开发 (Node.js, Express, API 设计)
✅ 数据库 (PostgreSQL, MongoDB, Prisma)
✅ 部署运维 (Vercel, Docker, CI/CD)
✅ 安全最佳实践
✅ 性能优化
```

### 技术栈

**前端**
- React - 现代组件模式, Hooks, Context
- Next.js - SSR, SSG, App Router
- TypeScript - 类型安全
- Tailwind CSS - 样式系统
- React Query - 状态管理

**后端**
- Node.js - Express, Fastify
- TypeScript - 类型安全后端
- JWT/OAuth - 认证授权
- Zod - 数据验证
- RESTful/GraphQL API

**数据库**
- PostgreSQL - 关系型数据库
- MongoDB - 文档数据库
- Prisma - 类型安全 ORM
- Redis - 缓存

**DevOps**
- Vercel/Netlify - 部署
- Docker - 容器化
- GitHub Actions - CI/CD

### 架构模式

#### 前端架构
```
src/
├── app/              # Next.js 页面
├── components/       # UI 组件
│   ├── ui/          # 基础组件
│   └── features/    # 功能组件
├── lib/             # 工具库
├── hooks/           # 自定义 Hooks
├── types/           # TypeScript 类型
└── styles/          # 全局样式
```

#### 后端架构
```
src/
├── routes/          # API 路由
├── controllers/     # 业务逻辑
├── models/          # 数据模型
├── middleware/      # 中间件
├── services/        # 外部服务
├── utils/           # 工具函数
└── config/          # 配置文件
```

### 最佳实践

**前端**
1. 组件设计 - 小而专注, 组合优于继承
2. 性能优化 - 代码分割, 懒加载, bundle 优化
3. 状态管理 - React Query (服务端), Zustand (客户端)

**后端**
1. API 设计 - RESTful 规范, 正确的 HTTP 状态码
2. 安全性 - 输入验证, 数据清理, 参数化查询, 速率限制
3. 数据库 - 索引优化, 避免 N+1 查询, 事务管理

### 代码示例

#### Next.js API 路由
```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = createUserSchema.parse(body);
    
    const user = await db.user.create({ data });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### React 组件
```typescript
// components/UserProfile.tsx
'use client';

import { useQuery } from '@tanstack/react-query';

export function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(`/api/users/${userId}`).then(r => r.json()),
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user</div>;
  
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
```

## 📦 安装方法

### 方法 1: 手动安装
```bash
# 克隆仓库
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git

# 复制技能文件到项目
cp -r awesome-llm-apps/awesome_agent_skills/fullstack-developer .claude/skills/
```

### 方法 2: 使用 skills CLI
```bash
# 交互式安装
pnpm dlx skills add Shubhamsaboo/awesome-llm-apps

# 选择 fullstack-developer 技能
```

## 🎯 应用场景

### 适用于全栈开发者技能的场景:
- ✅ 构建完整的 Web 应用
- ✅ 开发 REST 或 GraphQL API
- ✅ 创建 React/Next.js 前端
- ✅ 设置数据库和数据模型
- ✅ 实现认证和授权
- ✅ 部署和扩展 Web 应用
- ✅ 集成第三方服务

### 当前项目应用:
我们的进销存系统已经应用了以下全栈开发实践:
- ✅ React + TypeScript 前端
- ✅ React Router 路由管理
- ✅ 组件化架构
- ✅ 响应式设计
- ✅ 状态管理 (useState)
- ✅ 表单处理
- ✅ Toast 通知系统

### 可以进一步改进:
- 🔄 添加后端 API (Next.js API routes)
- 🔄 集成数据库 (Prisma + PostgreSQL)
- 🔄 实现用户认证
- 🔄 添加数据持久化
- 🔄 部署到 Vercel

## 📚 相关资源

- [GitHub 仓库](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [技能文档](https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/awesome_agent_skills)
- [示例代码](https://github.com/Shubhamsaboo/awesome-llm-apps)

---

💡 **提示**: 这些技能可以组合使用，例如将 fullstack-developer + ux-designer 结合，打造完美的用户体验！

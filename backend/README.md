# Backend - 进销存管理系统后端

后端 API 服务（待实现）。

## 🎯 技术栈（推荐）

### 核心框架
- **Node.js** 18+ - JavaScript 运行时
- **Express** / **Fastify** - Web 框架
- **TypeScript** - 类型安全

### 数据库
- **PostgreSQL** - 主数据库
- **Prisma** - ORM
- **Redis** (可选) - 缓存

### 认证授权
- **JWT** - Token 认证
- **bcrypt** - 密码加密

### 验证
- **Zod** - 数据验证

### 文档
- **Swagger** / **OpenAPI** - API 文档

## 📁 推荐目录结构

```
backend/
├── src/
│   ├── config/           # 配置文件
│   │   └── database.ts
│   │
│   ├── routes/           # 路由
│   │   ├── inventory.ts
│   │   ├── purchase.ts
│   │   ├── sales.ts
│   │   ├── suppliers.ts
│   │   └── customers.ts
│   │
│   ├── controllers/      # 控制器
│   │   ├── inventoryController.ts
│   │   └── ...
│   │
│   ├── services/         # 业务逻辑
│   │   ├── inventoryService.ts
│   │   └── ...
│   │
│   ├── models/           # 数据模型 (Prisma)
│   │   └── schema.prisma
│   │
│   ├── middleware/       # 中间件
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   └── validation.ts
│   │
│   ├── utils/            # 工具函数
│   │   ├── jwt.ts
│   │   └── logger.ts
│   │
│   └── index.ts          # 入口文件
│
├── tests/                # 测试
│   ├── unit/
│   └── integration/
│
├── prisma/               # Prisma
│   ├── schema.prisma
│   └── migrations/
│
├── .env.example          # 环境变量示例
├── package.json
└── tsconfig.json
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd backend
pnpm install
```

### 2. 环境变量

创建 `.env` 文件:

```env
# 数据库
DATABASE_URL="postgresql://user:password@localhost:5432/inventory_db"

# JWT
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="7d"

# 服务器
PORT=3000
NODE_ENV="development"

# Redis (可选)
REDIS_URL="redis://localhost:6379"
```

### 3. 初始化数据库

```bash
# 生成 Prisma Client
pnpm prisma generate

# 运行迁移
pnpm prisma migrate dev

# 填充种子数据
pnpm prisma db seed
```

### 4. 启动开发服务器

```bash
pnpm run dev
```

## 📦 依赖安装

```bash
# 核心依赖
pnpm add express cors dotenv
pnpm add @prisma/client
pnpm add zod

# 认证
pnpm add jsonwebtoken bcrypt
pnpm add @types/jsonwebtoken @types/bcrypt -D

# 开发依赖
pnpm add -D typescript @types/node @types/express
pnpm add -D tsx nodemon prisma

# 测试 (可选)
pnpm add -D vitest supertest @types/supertest
```

## 🗄️ 数据模型设计

### Prisma Schema 示例

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  ADMIN
  USER
}

model Product {
  id          String   @id @default(uuid())
  sku         String   @unique
  name        String
  category    String
  quantity    Int
  unit        String
  price       Decimal  @db.Decimal(10, 2)
  supplierId  String
  supplier    Supplier @relation(fields: [supplierId], references: [id])
  location    String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  purchaseItems PurchaseItem[]
  salesItems    SalesItem[]
  
  @@index([sku])
  @@index([category])
}

model Supplier {
  id          String    @id @default(uuid())
  name        String
  contact     String
  email       String?
  phone       String?
  address     String?
  products    Product[]
  purchases   Purchase[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Customer {
  id        String   @id @default(uuid())
  name      String
  email     String?
  phone     String?
  address   String?
  isVip     Boolean  @default(false)
  sales     Sale[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Purchase {
  id          String         @id @default(uuid())
  orderNumber String         @unique
  supplierId  String
  supplier    Supplier       @relation(fields: [supplierId], references: [id])
  items       PurchaseItem[]
  totalAmount Decimal        @db.Decimal(10, 2)
  status      OrderStatus    @default(PENDING)
  orderDate   DateTime       @default(now())
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
  
  @@index([orderNumber])
  @@index([status])
}

model PurchaseItem {
  id         String   @id @default(uuid())
  purchaseId String
  purchase   Purchase @relation(fields: [purchaseId], references: [id])
  productId  String
  product    Product  @relation(fields: [productId], references: [id])
  quantity   Int
  price      Decimal  @db.Decimal(10, 2)
  subtotal   Decimal  @db.Decimal(10, 2)
}

model Sale {
  id          String      @id @default(uuid())
  orderNumber String      @unique
  customerId  String
  customer    Customer    @relation(fields: [customerId], references: [id])
  items       SalesItem[]
  totalAmount Decimal     @db.Decimal(10, 2)
  status      OrderStatus @default(PENDING)
  orderDate   DateTime    @default(now())
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  
  @@index([orderNumber])
  @@index([status])
}

model SalesItem {
  id        String  @id @default(uuid())
  saleId    String
  sale      Sale    @relation(fields: [saleId], references: [id])
  productId String
  product   Product @relation(fields: [productId], references: [id])
  quantity  Int
  price     Decimal @db.Decimal(10, 2)
  subtotal  Decimal @db.Decimal(10, 2)
}

enum OrderStatus {
  PENDING
  PROCESSING
  COMPLETED
  CANCELLED
}
```

## 🔌 API 端点设计

### 认证
```
POST   /api/auth/register     # 注册
POST   /api/auth/login        # 登录
POST   /api/auth/refresh      # 刷新 Token
GET    /api/auth/profile      # 获取用户信息
```

### 产品 (Products)
```
GET    /api/products          # 获取产品列表
GET    /api/products/:id      # 获取单个产品
POST   /api/products          # 创建产品
PUT    /api/products/:id      # 更新产品
DELETE /api/products/:id      # 删除产品
GET    /api/products/search   # 搜索产品
```

### 采购 (Purchases)
```
GET    /api/purchases         # 获取采购订单列表
GET    /api/purchases/:id     # 获取单个采购订单
POST   /api/purchases         # 创建采购订单
PUT    /api/purchases/:id     # 更新采购订单
DELETE /api/purchases/:id     # 删除采购订单
```

### 销售 (Sales)
```
GET    /api/sales             # 获取销售订单列表
GET    /api/sales/:id         # 获取单个销售订单
POST   /api/sales             # 创建销售订单
PUT    /api/sales/:id         # 更新销售订单
DELETE /api/sales/:id         # 删除销售订单
```

### 供应商 (Suppliers)
```
GET    /api/suppliers         # 获取供应商列表
GET    /api/suppliers/:id     # 获取单个供应商
POST   /api/suppliers         # 创建供应商
PUT    /api/suppliers/:id     # 更新供应商
DELETE /api/suppliers/:id     # 删除供应商
```

### 客户 (Customers)
```
GET    /api/customers         # 获取客户列表
GET    /api/customers/:id     # 获取单个客户
POST   /api/customers         # 创建客户
PUT    /api/customers/:id     # 更新客户
DELETE /api/customers/:id     # 删除客户
```

### 报表 (Reports)
```
GET    /api/reports/dashboard # 仪表板数据
GET    /api/reports/inventory # 库存报表
GET    /api/reports/sales     # 销售报表
GET    /api/reports/purchase  # 采购报表
```

## 🔐 认证中间件示例

```typescript
// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
```

## 📝 开发命令

```bash
# 开发模式
pnpm run dev

# 构建
pnpm run build

# 生产模式
pnpm run start

# 数据库迁移
pnpm prisma migrate dev

# Prisma Studio (数据库可视化)
pnpm prisma studio

# 测试
pnpm run test

# 代码检查
pnpm run lint
```

## 🧪 测试

### 单元测试示例

```typescript
// tests/unit/inventoryService.test.ts
import { describe, it, expect } from 'vitest';
import { inventoryService } from '@/services/inventoryService';

describe('InventoryService', () => {
  it('should create a product', async () => {
    const product = await inventoryService.createProduct({
      sku: 'TEST-001',
      name: 'Test Product',
      quantity: 100,
      price: 99.99
    });
    
    expect(product).toBeDefined();
    expect(product.sku).toBe('TEST-001');
  });
});
```

## 🔧 配置文件示例

### package.json

```json
{
  "name": "inventory-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "vitest",
    "lint": "eslint src --ext .ts"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📚 学习资源

- [Prisma 文档](https://www.prisma.io/docs)
- [Express 文档](https://expressjs.com)
- [JWT 文档](https://jwt.io)
- [PostgreSQL 文档](https://www.postgresql.org/docs)

---

**状态**: 待实现
**推荐技术栈**: Node.js + Express + Prisma + PostgreSQL

partner-agent/
├── apps/
│ ├── server/ # Hono 服务端
│ │ ├── src/
│ │ │ ├── routes/ # 路由定义
│ │ │ ├── middleware/ # 中间件
│ │ │ ├── services/ # 业务逻辑
│ │ │ └── index.ts # 入口
│ │ ├── wrangler.toml # CloudFlare Workers 配置
│ │ ├── tsconfig.json
│ │ └── package.json
│ │
│ ├── web/ # Next.js 客户端
│ │ ├── src/
│ │ │ ├── app/ # App Router 页面
│ │ │ ├── components/ # 客户端专属组件
│ │ │ ├── hooks/ # 自定义 Hooks
│ │ │ ├── stores/ # Zustand stores
│ │ │ └── lib/ # 工具函数
│ │ ├── next.config.ts
│ │ ├── tsconfig.json
│ │ └── package.json
│ │
│ └── admin/ # Next.js 后台管理
│ ├── src/
│ │ ├── app/ # App Router 页面
│ │ ├── components/ # 后台专属组件
│ │ ├── hooks/
│ │ ├── stores/
│ │ └── lib/
│ ├── next.config.ts
│ ├── tsconfig.json
│ └── package.json
│
├── packages/
│ ├── shared/ # 共享类型、Schema、常量、工具
│ │ ├── src/
│ │ │ ├── schemas/ # Zod Schema
│ │ │ ├── types/ # TypeScript 类型
│ │ │ ├── constants/ # 业务常量与枚举
│ │ │ ├── utils/ # 工具函数
│ │ │ └── index.ts # 统一导出
│ │ ├── tsconfig.json
│ │ └── package.json
│ │
│ ├── ui/ # 共享 UI 组件
│ │ ├── src/
│ │ │ ├── components/ # 组件
│ │ │ ├── styles/ # 共享样式
│ │ │ └── index.ts
│ │ ├── tsconfig.json
│ │ └── package.json
│ │
│ └── config/ # 共享配置
│ ├── tsconfig.base.json # TypeScript 基础配置
│ ├── tsconfig.next.json # Next.js 项目配置
│ ├── tsconfig.node.json # Node/Workers 项目配置
│ └── biome.json # Biome lint/format 配置
│
├── turbo.json # Turborepo 任务配置
├── package.json # 根 package.json
└── yarn.lock

# 基于Dva和TypeScript的后台管理系统框架
[![React](https://img.shields.io/badge/react-^16.0.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![dva](https://img.shields.io/badge/dva-^2.0.4-orange.svg?style=flat-square)](https://github.com/dvajs/dva)
[![Ant Design](https://img.shields.io/badge/ant--design-^3.0.0-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)

## 介绍

-   [dva](https://github.com/dvajs/dva) 基于 [redux](https://github.com/reactjs/redux)、[redux-saga](https://github.com/redux-saga/redux-saga) 和 [react-router](https://github.com/ReactTraining/react-router) 的轻量级前端框架。
-   [typescript](https://github.com/Microsoft/TypeScript) JS的强类型版本
-   UI库是[Ant Design](https://ant.design/docs/react/introduce-cn) 
-   用[tslint](https://github.com/palantir/tslint)做代码规范

## 安装

```bash
yarn
# or
npm install
```

## 开发

```bash
npm run dev
```

## 构建

```bash
npm run build
```

## 项目目录

```bash
├── /dist/             # 项目输出目录
├── /mock/             # 数据mock
├── /src/              # 项目源码目录
│ ├── /public/         # 公共文件，编译时copy至dist目录
│ ├── /components/     # UI组件及UI相关方法
│ ├── /components/     # UI组件及UI相关方法
│ │ ├── /Component/    # 单个UI组件目录
│ │ │ ├── index.less   # 单个UI组件的样式
│ │ │ └── index.tsx    # 单个UI组件
│ │ └── index.tsx      # UI组件对外输出口
│ ├── /routes/         # 路由组件
│ │ └── app.tsx        # 路由入口
│ ├── /models/         # 数据模型
│ ├── /services/       # 数据接口
│ ├── /themes/         # 项目样式
│ ├── /interfaces/     # TS接口文件目录
│ │ └── index.tsx      # 定义全局TS接口，如models的接口等
│ ├── /configs/        # 项目常规配置
│ │ └── Apis.ts        # api配置
│ ├── /utils/          # 工具函数
│ │ └── request.js     # 异步请求函数
│ ├── route.tsx        # 路由配置
│ ├── index.tsx        # 入口文件
│ ├── index.less       # 全局样式
│ └── index.ejs        # 入口html
├── package.json       # 项目信息
├── theme.config.js    # 主题样式配置引入文件
├── tsconfig.json      # TypeScript配置
├── alias.config.js    # 配置webpackConfig.resolve.alias
├── .roadhogrc.mock.js # 配置mock
├── globals.d.ts       # 配置TS全局的声明文件
├── tslint.json        # TSlint配置
└── webpackrc.js       # roadhog配置
```

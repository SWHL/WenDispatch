<div align="center">

# WenDispatch

_面向中文用户的多平台博客发布助手：一次编辑，便捷发布到多个常用平台。_

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension%20MV3-4285F4?logo=googlechrome&logoColor=white)](#)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vuedotjs&logoColor=white)](#)

</div>

WenDispatch 是一个本地运行的 Chrome 扩展，统一采集、编辑、预览并发布中文博客文章。项目第一阶段聚焦少量平台的发布质量和失败可恢复性，不以覆盖尽可能多的平台为目标。

## 项目来源与许可证

本项目基于 [SyncCaster](https://github.com/RyanYipeng/SyncCaster) 开发，保留原项目的 Git 历史、MIT License 和原作者版权声明。WenDispatch 自当前仓库起作为独立项目维护，不承诺持续同步上游代码；后续改动将围绕中文博客分发场景进行重构。

内嵌公众号编辑器新增的 18 套排版主题样式来自 [Markdown 中文网的微信 Markdown 编辑器](https://markdown.com.cn/wechat/)。WenDispatch 对这些样式进行了集成与渲染兼容适配，主题名称及原作者署名予以保留。

## 第一阶段平台

| 平台 | 内容入口 | 图片策略 | 当前重点 |
|:---|:---|:---|:---|
| CSDN | Markdown | 外链或上传 | Markdown、图片地址替换、草稿 |
| 稀土掘金 | Markdown | 外链或粘贴上传 | 图片粘贴、代码块、草稿 |
| 知乎 | 富文本 HTML | 上传 | 图片、公式、预览和失败提示 |
| 微信公众号 | 富文本 HTML | 上传 | 公众号排版、图片上传、草稿 |
| 博客园 | Markdown | 外链或上传 | Markdown、公式开关、草稿 |

第一阶段清单定义在 [`packages/core/src/platforms/first-phase.ts`](packages/core/src/platforms/first-phase.ts)，适配器注册入口只注册这五个平台。其他平台的适配器、权限、认证规则和 UI 入口已移除，需要参考旧实现时可通过 Git 历史查看。

## 目标能力

- Markdown 转平台格式：统一内容模型，按平台输出 Markdown 或 HTML
- 图片上传与地址处理：下载、替换、上传失败保留可读错误
- 超链接、代码块、语法高亮、数学公式和 Mermaid 的平台差异处理
- 草稿优先：支持发布前预览，平台需要人工确认时明确提示
- 任务级失败提示、重试和逐平台结果记录

## 技术栈

- Vue 3, TypeScript, Vite, pnpm monorepo
- Chrome Extension Manifest V3
- `marked`、`highlight.js`、KaTeX, Mermaid
- IndexedDB（Dexie）本地存储
- DOM 自动化适配器，统一转换和发布接口

## 项目结构

```text
apps/extension/       Chrome 扩展 UI、内容脚本和后台任务
apps/agent-bridge/    本地 Agent/MCP 桥接
packages/core/        CanonicalPost、资源管线、平台能力配置
packages/adapters/    平台适配器和统一发布接口
packages/ai/          可选的 AI 改写能力
packages/utils/       日志等共享工具
md/                   内嵌 Markdown 编辑器子项目
docs/                 架构、发布流程和迁移说明
```

## 开发

环境要求：Node.js 20+, pnpm 8.x（仓库锁文件为 pnpm 8 格式）。

```bash
pnpm install
pnpm test
pnpm build
```

开发模式构建扩展：

```bash
pnpm dev
```

构建完成后，在 Chrome 的“扩展程序”页面开启开发者模式，加载 `apps/extension/dist`。

## 迁移与路线图

迁移边界和平台验证记录见 [`docs/WENDISPATCH_MIGRATION.md`](docs/WENDISPATCH_MIGRATION.md)。后续按以下顺序推进：

现有功能的分层验证步骤、验收矩阵和统一测试文章见 [`docs/VALIDATION_PLAN.md`](docs/VALIDATION_PLAN.md) 与 [`fixtures/platform-validation.md`](fixtures/platform-validation.md)。

1. 完成五个平台的登录、内容填充、图片上传和草稿流程验证
2. 为统一接口补充转换快照、失败重试和可观测日志
3. 建立发布前预览与平台差异提示
4. 根据真实稳定性决定是否恢复其他历史适配器

## 致谢

感谢上游项目的原作者及所有贡献者。WenDispatch 遵循 MIT License，完整许可文本见 [`LICENSE`](LICENSE)。

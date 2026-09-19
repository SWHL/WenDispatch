<div align="center">

# WenDispatch

_面向中文用户的多平台博客发布助手：一次编辑，便捷发布到多个常用平台。_

[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension%20MV3-4285F4?logo=googlechrome&logoColor=white)](#)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vuedotjs&logoColor=white)](#)

</div>

WenDispatch 是一个本地运行的 Chrome 扩展，统一采集、编辑、预览并发布中文博客文章。项目第一阶段聚焦少量平台的发布质量和失败可恢复性，不以覆盖尽可能多的平台为目标。

## 项目来源与许可证

本项目采用 [GNU General Public License v3.0](LICENSE)。由于项目组合、改写并分发了多个上游项目中的代码和资源，发布版本整体按 GPL-3.0 条款提供；各上游项目的原有版权和许可声明继续保留。

代码来源和使用范围：

- [Wechatsync](https://github.com/wechatsync/Wechatsync)：平台发布适配器及浏览器端自动化流程，包括 CSDN、知乎、微信公众号、博客园和稀土掘金等平台的内容填充、图片处理和草稿操作。相关代码位于 `packages/adapters/`。
- [SyncCaster](https://github.com/RyanYipeng/SyncCaster)：项目基础架构和扩展运行链路，包括扩展及任务调度等部分；相关代码位于 `apps/` 和 `packages/`。
- [Markdown 中文网微信 Markdown 编辑器](https://markdown.com.cn/wechat/)：内嵌编辑器的微信排版主题和基础样式。相关资源位于 `md/packages/shared/src/configs/theme-css/markdown-cn/`，并在集成时保留来源注释。

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
packages/core/        CanonicalPost、资源管线、平台能力配置
packages/adapters/    平台适配器和统一发布接口
packages/utils/       日志等共享工具
md/                   内嵌 Markdown 编辑器子项目
docs/                 架构、发布流程和迁移说明
```

## 开发

环境要求：Node.js 22.16+, pnpm 10.x（仓库锁文件使用 lockfile v9 格式及 pnpm 10 元数据）。

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

发布到 Chrome 网上应用店时，直接上传 GitHub Release 中的 `wendispatch-*.zip`。
发布工作流会从 Git 标签（如 `v0.0.4`）注入扩展版本号，并将 `dist` 内的文件打包，确保 `manifest.json` 位于 ZIP 根目录。
如果手动压缩，请进入 `apps/extension/dist` 后压缩其中的文件；不要压缩外层目录，否则清单会多嵌套一层。
商店更新所用的版本号必须高于已上传版本；本地普通构建的默认版本仍为 `0.0.1`，手动发布前需通过 `EXTENSION_VERSION` 环境变量设置新版本。

## 迁移与路线图

迁移边界和平台验证记录见 [`docs/WENDISPATCH_MIGRATION.md`](docs/WENDISPATCH_MIGRATION.md)。后续按以下顺序推进：

现有功能的分层验证步骤、验收矩阵和统一测试文章见 [`docs/VALIDATION_PLAN.md`](docs/VALIDATION_PLAN.md) 与 [`fixtures/platform-validation.md`](fixtures/platform-validation.md)。

1. 完成五个平台的登录、内容填充、图片上传和草稿流程验证
2. 为统一接口补充转换快照、失败重试和可观测日志
3. 建立发布前预览与平台差异提示
4. 根据真实稳定性决定是否恢复其他历史适配器

## 致谢

感谢上游项目的原作者及所有贡献者。WenDispatch 遵循 GPL-3.0，完整许可文本见 [`LICENSE`](LICENSE) 及 [GPL-3.0 官方文本](https://www.gnu.org/licenses/gpl-3.0.html)。

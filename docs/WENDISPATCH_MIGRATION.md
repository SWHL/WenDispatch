# WenDispatch 迁移说明

## 当前状态

- 项目保留上游 Git 历史，当前远程为 `SWHL/WenDispatch`。
- 根项目名称和扩展 Manifest 已切换为 WenDispatch。
- 第一阶段默认平台为 CSDN、稀土掘金、知乎、微信公众号、博客园。
- 第一阶段之外的平台适配器、权限、认证规则和 UI 入口已移除。
- Native Messaging 主机名为 `org.wendispatch.bridge`；重新安装扩展后需要重新运行安装脚本。

## 统一发布契约

适配器接口位于 [`packages/adapters/src/base.ts`](../packages/adapters/src/base.ts)，核心流程保持以下顺序：

1. `ensureAuth` 检查目标账号
2. `transform` 将 `CanonicalPost` 转换为平台载荷
3. `uploadAsset`（如需要）处理图片等资源
4. `createDraft` 或 `publish` 执行平台操作
5. 返回 `PublishResult`，由任务服务记录 URL、草稿 ID 或错误

第一阶段新增的 [`FIRST_PHASE_PLATFORM_IDS`](../packages/core/src/platforms/first-phase.ts) 是平台范围的单一来源。新增或恢复平台时，应先更新该清单、能力说明和验证记录，再接入 UI 或任务流程。

## 平台验证模板

每个平台至少记录以下结果：

- 登录状态检测和重新登录
- 标题、段落、标题层级、列表、引用和超链接
- 代码块与语言标识
- 数学公式和 Mermaid 的降级策略
- 图片上传、地址替换、失败提示
- 草稿创建、人工确认和最终发布
- 发布失败后的重试行为及可诊断错误

验证过程中不应把用户 Cookie、文章正文或图片内容提交到第三方服务。

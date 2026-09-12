# 跨平台发布机制

本文档描述 WenDispatch 第一阶段的内容转换和发布控制原则。

## 发布控制

WenDispatch 负责检查登录状态、转换内容、处理图片、打开平台编辑页并填充草稿。用户在平台页面检查内容后手动执行最终发布。

第一阶段平台固定为 CSDN、稀土掘金、知乎、微信公众号和博客园。

## 平台策略

| 平台 | 编辑器内容 | 填充策略 | 重点验证 |
| --- | --- | --- | --- |
| CSDN | Markdown / HTML | 优先填充 Markdown，必要时使用 HTML | 图片地址、代码块、草稿 |
| 稀土掘金 | Markdown | 填充 Markdown | 图片粘贴上传、代码块 |
| 知乎 | Markdown / 富文本 | 根据图片与内容选择 Markdown 或 HTML | 图片、公式、解析确认 |
| 微信公众号 | 富文本 HTML | 先进入内置 MD 编辑器预览，再填充公众号编辑器 | 内联样式、图片、预览 |
| 博客园 | Markdown / HTML | 填充 Markdown | 公式、代码块、草稿 |

适配器通过 `capabilities` 声明内容能力：

```typescript
capabilities: {
  supportsMarkdown: boolean;
  supportsHtml: boolean;
}
```

转换阶段根据平台能力生成 `contentMarkdown`、`contentHtml` 或两者。DOM 适配器随后在目标平台页面中填充标题和正文，并返回当前页面 URL、草稿信息或错误。

## 图片处理

发布引擎从统一文章模型构建图片清单，并按平台策略处理：

1. 外链可用时保留原地址。
2. 平台要求上传时下载图片并在目标页面上传。
3. 上传成功后替换正文中的图片地址。
4. 上传失败时记录明确日志，保留可读正文并提示用户检查。

粘贴产生的 `local://` 图片必须在填充平台前完成转链，不能进入最终草稿。

## 微信公众号流程

选择微信公众号后，WenDispatch 保存 Markdown 并打开内置 MD 编辑器。用户在其中检查主题、字体、颜色、代码和公式效果，再点击“发布到微信”把排版后的 HTML 填入公众号编辑器。最终发布仍由用户确认。

## 成功与失败判断

发布引擎不会仅凭脚本执行完成判断发布成功。可信结果应包含平台文章 URL；未获得可信 URL 时，任务显示为需要人工确认。登录失效、编辑器未找到、图片上传失败和页面脚本异常都应进入目标平台日志，并允许对失败目标重试。

## 验证

自动化、扩展冒烟和真实平台草稿验证步骤见 [`VALIDATION_PLAN.md`](VALIDATION_PLAN.md)。统一测试文章见 [`../fixtures/platform-validation.md`](../fixtures/platform-validation.md)。

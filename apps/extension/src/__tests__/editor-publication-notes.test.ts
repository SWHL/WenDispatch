import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("../ui/options/views/Editor.vue", import.meta.url), "utf8");

describe("wechat editor sync regression", () => {
  it("keeps publication-note formatting available to tab switching", () => {
    const helperIndex = source.indexOf("function withPublicationNotes");
    const previewIndex = source.indexOf("const previewHtml = computed");
    const switchIndex = source.indexOf("async function switchEditorTab");

    expect(helperIndex).toBeGreaterThan(-1);
    expect(helperIndex).toBeLessThan(previewIndex);
    expect(helperIndex).toBeLessThan(switchIndex);
    expect(source.slice(switchIndex)).toContain("withPublicationNotes(body.value || ''");
  });

  it("retains the empty preview state while moving the helper", () => {
    expect(source).toContain("if (!body.value) return '<p class=\"empty-hint\">暂无内容</p>'");
  });

  it("allows an empty new article to return from WeChat to the general editor", () => {
    const switchIndex = source.indexOf("async function switchEditorTab");
    const switchEnd = source.indexOf("function handleWechatEditorLoad", switchIndex);
    const switchSource = source.slice(switchIndex, switchEnd);

    expect(switchSource).toContain("if (tab === 'wechat' && hasUnsavedChanges.value && title.value.trim() && body.value.trim())");
    expect(switchSource).toContain("ChromeStorageBridge.saveArticle");
    expect(switchSource).toContain("} else {\n    await syncFromStorage();\n  }");
    expect(switchSource.indexOf("await syncFromStorage()"))
      .toBeLessThan(switchSource.indexOf("editorTab.value = tab"));
  });

  it("does not sync empty content from an existing article to WeChat", () => {
    const switchIndex = source.indexOf("async function switchEditorTab");
    const switchEnd = source.indexOf("function handleWechatEditorLoad", switchIndex);
    const switchSource = source.slice(switchIndex, switchEnd);

    expect(switchSource).toContain("id.value !== 'new'");
    expect(switchSource).toContain("(!title.value.trim() || !body.value.trim())");
    expect(switchSource).toContain("已有文章的标题和正文不能为空");
  });
});

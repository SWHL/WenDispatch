import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("publish task deletion UI", () => {
  it("shows a delete action for every task and removes confirmed jobs", () => {
    const source = readFileSync(
      join(process.cwd(), "apps/extension/src/ui/options/views/Tasks.vue"),
      "utf8",
    );

    expect(source).toContain(
      ':aria-label="`删除任务：${getPostTitle(job.postId)}`"',
    );
    expect(source).toContain('await send("CANCEL_JOB", { jobId: job.id })');
    expect(source).toContain("await db.jobs.delete(job.id)");
    expect(source).toContain(
      "await db.jobs.bulkDelete(jobs.map((job) => job.id))",
    );
    expect(source).toContain("toggleAllFiltered");
  });
});

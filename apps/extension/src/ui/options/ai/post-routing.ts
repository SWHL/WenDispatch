export function getPostEditHash(_config: { enabled?: boolean }, post: any): string {
  const id = post?.id;
  return `editor/${id}`;
}

export function getAiRewriteHash(post: any): string {
  return `ai-rewrite/${post?.id}`;
}

export function getPostEditUrl(
  config: { enabled?: boolean },
  post: any,
  getExtensionUrl: (path: string) => string
): string {
  return getExtensionUrl(`src/ui/options/index.html#/${getPostEditHash(config, post)}`);
}

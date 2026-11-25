/**
 * Test access to helpers that live inside an injected `fillAndPublish`.
 *
 * These helpers intentionally live inside the serialized function because it
 * runs in the page's MAIN world and cannot reference module-scope symbols.
 * Tests extract the real in-page implementations with an AST so they exercise
 * the same code that ships, instead of a second module-level copy that drifts.
 */
import { parse } from 'acorn';
import type { PlatformAdapter } from '../base';

export type InjectedHelpers = Record<string, (...args: any[]) => any>;

export function loadInjectedHelpers(
  adapter: PlatformAdapter,
  helperNames: string[],
): InjectedHelpers {
  const source = String(adapter.dom?.fillAndPublish || '');
  const ast = parse(`(${source})`, {
    ecmaVersion: 'latest',
    sourceType: 'script',
  }) as any;
  const body = ast.body[0]?.expression?.body?.body as any[] | undefined;
  if (!body) throw new Error(`Cannot parse fillAndPublish of ${adapter.id}`);

  const wanted = new Set(helperNames);
  const declarations: string[] = [];
  for (const node of body) {
    if (
      node.type !== 'VariableDeclaration' ||
      !node.declarations?.some((d: any) => wanted.has(d.id?.name))
    ) {
      continue;
    }
    declarations.push(source.slice(node.start - 1, node.end - 1));
  }

  const missing = helperNames.filter((name) =>
    !declarations.some((d) => d.includes(`${name} =`) || d.includes(`${name}=`)),
  );
  if (missing.length) {
    throw new Error(`Missing injected helpers in ${adapter.id}: ${missing.join(', ')}`);
  }

  const compiled = new Function(
    `${declarations.join('\n')}\nreturn { ${helperNames.join(', ')} };`,
  )() as InjectedHelpers;
  return compiled;
}

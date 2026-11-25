/**
 * Static analysis for injected `fillAndPublish` functions.
 *
 * Chrome serializes these functions with toString() and rebuilds them in the
 * page's MAIN world. Any identifier that is neither declared inside the
 * function nor a standard page global becomes a ReferenceError at publish time.
 * Checking the AST is resilient to formatting, unlike regex-over-source tests.
 */
import { parse } from 'acorn';
import type { PlatformAdapter } from '../base';

const PAGE_GLOBALS = new Set([
  'globalThis', 'window', 'document', 'console', 'localStorage', 'sessionStorage',
  'location', 'navigator', 'setTimeout', 'clearTimeout', 'setInterval',
  'clearInterval', 'queueMicrotask', 'requestAnimationFrame', 'fetch', 'URL',
  'URLSearchParams', 'Blob', 'File', 'FormData', 'DOMParser', 'Node', 'Element',
  'HTMLElement', 'HTMLInputElement', 'HTMLTextAreaElement', 'Event', 'InputEvent',
  'KeyboardEvent', 'MouseEvent', 'ClipboardEvent', 'ClipboardItem', 'DataTransfer', 'FileReader',
  'MutationObserver', 'IntersectionObserver', 'NodeFilter', 'TreeWalker', 'Image', 'Date', 'Map', 'Set',
  'Promise', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Math', 'JSON',
  'RegExp', 'Error', 'TypeError', 'WeakMap', 'WeakSet', 'Symbol', 'BigInt',
  'Intl', 'Reflect', 'Proxy', 'atob', 'btoa', 'encodeURIComponent',
  'decodeURIComponent', 'crypto', 'performance', 'structuredClone',
  'customElements', 'ShadowRoot', 'DocumentFragment', 'Range', 'Selection',
  'getComputedStyle', 'matchMedia', 'screen', 'history', 'alert', 'chrome',
  'undefined', 'NaN', 'Infinity', 'isNaN', 'parseInt', 'parseFloat', 'eval',
  'Function', 'arguments', 'this', 'Uint8Array', 'ArrayBuffer', 'TextEncoder',
  'TextDecoder', 'AbortController', 'ResizeObserver', 'getSelection', 'self',
  'top', 'frames', 'parent', 'open', 'close', 'focus', 'print',
]);

type Node = { type: string; name?: string; key?: Node; property?: Node; label?: Node; value?: Node; computed?: boolean; shorthand?: boolean; id?: Node; params?: Node[]; [key: string]: any };

/**
 * Walk with parent context. Checking whether an Identifier is a property name
 * must happen at that identifier's own node: collecting all property names
 * globally and subtracting them afterwards would hide a genuine free variable
 * whenever its name also appears as `obj.name` somewhere in the function.
 */
function walk(node: unknown, parents: Node[], visit: (node: Node, parents: Node[]) => void): void {
  if (!node || typeof node !== 'object') return;
  const n = node as Node;
  if (typeof n.type === 'string') visit(n, parents);
  const nextParents = typeof n.type === 'string' ? [...parents, n] : parents;
  for (const [key, value] of Object.entries(n)) {
    if (key === 'type' || key === 'start' || key === 'end' || key === 'loc') continue;
    if (Array.isArray(value)) value.forEach((child) => walk(child, nextParents, visit));
    else if (value && typeof value === 'object') walk(value, nextParents, visit);
  }
}

function isPropertyName(node: Node, parents: Node[]): boolean {
  const parent = parents[parents.length - 1];
  if (!parent || parent.computed) return false;
  if (parent.type === 'MemberExpression' && parent.property === node) return true;
  if (parent.type === 'Property' && parent.key === node && !parent.shorthand) return true;
  if (parent.type === 'MethodDefinition' && parent.key === node) return true;
  if (parent.type === 'PropertyDefinition' && parent.key === node) return true;
  if (
    (parent.type === 'LabeledStatement' ||
      parent.type === 'BreakStatement' ||
      parent.type === 'ContinueStatement') &&
    parent.label === node
  ) {
    return true;
  }
  return false;
}

export function freeIdentifiers(adapter: PlatformAdapter): string[] {
  const source = String(adapter.dom?.fillAndPublish || '');
  const ast = parse(`(${source})`, {
    ecmaVersion: 'latest',
    sourceType: 'script',
  }) as any;

  const declared = new Set<string>();
  const referenced = new Set<string>();

  walk(ast, [], (node, parents) => {
    switch (node.type) {
      case 'VariableDeclarator':
        walk(node.id, [], (id) => {
          if (id.type === 'Identifier' && id.name) declared.add(id.name);
        });
        break;
      case 'FunctionDeclaration':
      case 'FunctionExpression':
      case 'ArrowFunctionExpression':
        for (const param of node.params || []) {
          walk(param, [], (id) => {
            if (id.type === 'Identifier' && id.name) declared.add(id.name);
          });
        }
        if (node.id?.name) declared.add(node.id.name);
        break;
      case 'CatchClause':
        walk(node.param, [], (id) => {
          if (id.type === 'Identifier' && id.name) declared.add(id.name);
        });
        break;
      case 'ClassDeclaration':
        if (node.id?.name) declared.add(node.id.name);
        break;
      case 'Identifier':
        if (node.name && !isPropertyName(node, parents)) referenced.add(node.name);
        break;
    }
  });

  return [...referenced].filter(
    (name) => !declared.has(name) && !PAGE_GLOBALS.has(name),
  ).sort();
}

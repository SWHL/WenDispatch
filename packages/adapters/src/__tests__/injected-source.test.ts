import { describe, expect, it } from 'vitest';
import type { PlatformAdapter } from '../base';
import { freeIdentifiers } from './injected-source';

function adapterWith(fn: (...args: any[]) => any): PlatformAdapter {
  return { id: 'probe', dom: { fillAndPublish: fn } } as unknown as PlatformAdapter;
}

describe('injected-source free identifier analysis', () => {
  it('detects a free variable even when its name is also used as a property name', () => {
    // Regression: subtracting all property names globally hid this case, so a
    // module-scope reference leaking into an injected function went unnoticed.
    const fn = function () {
      const obj = { timeout: 1 };
      console.log(obj.timeout);
      return timeout;
    };
    expect(freeIdentifiers(adapterWith(fn))).toEqual(['timeout']);
  });

  it('does not report ordinary property names as free variables', () => {
    const fn = function () {
      const obj = { text: 'x' };
      return [obj.text, obj['text']];
    };
    expect(freeIdentifiers(adapterWith(fn))).toEqual([]);
  });

  it('detects a free variable used in a shorthand object property', () => {
    const fn = function () {
      return { leakedGlobal };
    };
    expect(freeIdentifiers(adapterWith(fn))).toEqual(['leakedGlobal']);
  });

  it('detects a free variable used as a computed property key', () => {
    const fn = function () {
      const obj = { a: 1 };
      return obj[dynamicKey];
    };
    expect(freeIdentifiers(adapterWith(fn))).toEqual(['dynamicKey']);
  });

  it('recognizes declared locals, parameters and catch bindings', () => {
    const fn = function (title: string) {
      try {
        const value = title.trim();
        return value;
      } catch (err) {
        return String(err);
      }
    };
    expect(freeIdentifiers(adapterWith(fn))).toEqual([]);
  });
});

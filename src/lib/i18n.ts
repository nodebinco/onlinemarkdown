import { getContext } from 'svelte';
import type { Readable } from 'svelte/store';

const LOCALE_KEY = 'locale';

export function getLocaleStore(): Readable<string> {
  const store = getContext<Readable<string>>(LOCALE_KEY);
  return store ?? { subscribe: (fn) => (fn('en'), () => {}) };
}

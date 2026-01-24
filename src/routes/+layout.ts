import type { LayoutLoad } from './$types';
import { extractLocaleFromUrl, baseLocale } from '$lib/paraglide/runtime';

export const ssr = true;

export const load: LayoutLoad = ({ url }) => {
  const locale = extractLocaleFromUrl(url) ?? baseLocale;
  return { locale };
};

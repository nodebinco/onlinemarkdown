<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { page } from '$app/stores';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import { Menu, X } from 'lucide-svelte';

  let mobileMenuOpen = $state(false);
  let localeOpen = $state(false);
  let localeDropdownEl: HTMLDivElement | null = $state(null);

  const locale = $derived($page.data?.locale ?? 'en');
  const localeStore = writable('en');
  setContext('locale', localeStore);

  $effect(() => {
    localeStore.set(locale);
  });

  const localeNames: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    ja: '日本語',
    'zh-cn': '简体中文',
    pt: 'Português',
    it: 'Italiano',
    ru: 'Русский',
    ko: '한국어',
    nl: 'Nederlands',
    tr: 'Türkçe',
    th: 'ไทย'
  };

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const toggleLocaleDropdown = () => {
    localeOpen = !localeOpen;
  };

  $effect(() => {
    if (typeof document === 'undefined') return;
    const open = localeOpen;
    const el = localeDropdownEl;
    const handleMouseDown = (e: MouseEvent) => {
      if (!open || !el) return;
      const target = e.target as Node;
      if (el.contains(target)) return;
      localeOpen = false;
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  });
</script>

<div class="flex h-screen flex-col">
  <header class="flex items-center justify-between bg-zinc-800 p-2 text-white">
    <div class="flex items-center space-x-2">
      <div class="h-6 w-6 rounded bg-zinc-700">
        <a
          href={localizeHref('/')}
          class="flex h-full w-full items-center justify-center rounded border border-gray-600 hover:bg-zinc-700"
          aria-label={m.nav_ariaEditor({}, { locale })}
          data-sveltekit-reload
        >
          <img src="/logo.svg" alt={m.nav_ariaEditor({}, { locale })} class="h-6 w-6" />
        </a>
      </div>
      <span class="font-semibold"
        ><a href={localizeHref('/')} data-sveltekit-reload>{m.nav_brand({}, { locale })}</a></span
      >
    </div>
    <div class="flex items-center gap-2">
      <nav class="hidden items-center space-x-4 md:flex">
        <a href={localizeHref('/getting-started')} class="hover:text-zinc-300" data-sveltekit-reload
          >{m.nav_gettingStarted({}, { locale })}</a
        >
        <a href={localizeHref('/syntax')} class="hover:text-zinc-300" data-sveltekit-reload
          >{m.nav_syntax({}, { locale })}</a
        >
        <a href={localizeHref('/cheat-sheet')} class="hover:text-zinc-300" data-sveltekit-reload
          >{m.nav_cheatSheet({}, { locale })}</a
        >
        <a href={localizeHref('/tools')} class="hover:text-zinc-300" data-sveltekit-reload
          >{m.nav_tools({}, { locale })}</a
        >
        <a
          href={localizeHref('/')}
          class="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white no-underline transition hover:bg-blue-700"
          data-sveltekit-reload
          >{m.nav_openEditor({}, { locale })}</a
        >
      </nav>

      <div class="relative" bind:this={localeDropdownEl}>
        <button
          type="button"
          class="flex items-center gap-1 rounded px-2 py-1 text-sm hover:bg-zinc-700"
          onclick={toggleLocaleDropdown}
          aria-expanded={localeOpen}
          aria-haspopup="listbox"
          aria-label="Language"
        >
          <span class="hidden sm:inline">🌐</span>
          <span class="max-w-[4rem] truncate sm:max-w-[6rem]">
            {localeNames[locale] ?? locale}
          </span>
        </button>
        {#if localeOpen}
          <div
            class="absolute top-full right-0 z-50 mt-1 max-h-64 w-44 overflow-auto rounded border border-zinc-600 bg-zinc-800 py-1 shadow-lg"
            role="listbox"
          >
            {#each locales as loc}
              <a
                href={localizeHref($page.url.pathname, { locale: loc })}
                data-sveltekit-reload
                role="option"
                aria-selected={locale === loc}
                class="block w-full px-4 py-2 text-left text-sm text-white no-underline hover:bg-zinc-700"
              >
                {localeNames[loc] ?? loc}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <button
        class="block p-2 text-white focus:outline-none md:hidden"
        onclick={toggleMobileMenu}
        aria-label={m.nav_toggleMenu({}, { locale })}
      >
        {#if mobileMenuOpen}
          <X class="h-6 w-6" />
        {:else}
          <Menu class="h-6 w-6" />
        {/if}
      </button>
    </div>
  </header>

  {#if mobileMenuOpen}
    <div class="block bg-zinc-800 text-white md:hidden">
      <nav class="flex flex-col space-y-2 p-4">
        <a
          href={localizeHref('/getting-started')}
          class="rounded px-4 py-2 hover:bg-zinc-700"
          data-sveltekit-reload
          >{m.nav_gettingStarted({}, { locale })}</a
        >
        <a href={localizeHref('/syntax')} class="rounded px-4 py-2 hover:bg-zinc-700" data-sveltekit-reload
          >{m.nav_syntax({}, { locale })}</a
        >
        <a
          href={localizeHref('/cheat-sheet')}
          class="rounded px-4 py-2 hover:bg-zinc-700"
          data-sveltekit-reload
          >{m.nav_cheatSheet({}, { locale })}</a
        >
        <a href={localizeHref('/tools')} class="rounded px-4 py-2 hover:bg-zinc-700" data-sveltekit-reload
          >{m.nav_tools({}, { locale })}</a
        >
        <a
          href={localizeHref('/')}
          class="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white no-underline transition hover:bg-blue-700"
          data-sveltekit-reload
          >{m.nav_openEditor({}, { locale })}</a
        >
      </nav>
    </div>
  {/if}

  <main class="flex-1"><slot /></main>

  {#if $page.url.pathname !== '/' && !/^\/[a-z]{2}(-[a-z]+)?\/?$/.test($page.url.pathname)}
    <Footer {locale} />
  {/if}
</div>

<!-- SSG: crawl locale variants (visibility + position so it never overlays) -->
<div
  style="visibility:hidden;position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden"
  aria-hidden="true"
>
  {#each locales as loc}
    <a href={localizeHref($page.url.pathname, { locale: loc })}>{loc}</a>
  {/each}
</div>

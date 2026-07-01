<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import { Menu, X } from 'lucide-svelte';

  const AD_BLOCK_CHECKER_URL = 'https://cdn.jsdelivr.net/npm/adblock-checker@0.2.4/+esm';

  let mobileMenuOpen = $state(false);
  let localeOpen = $state(false);
  let localeDropdownEl: HTMLDivElement | null = $state(null);
  let adblockDetected = $state(false);
  let checkingAdblock = $state(false);

  const locale = $derived($page.data?.locale ?? 'en');
  const adblockCopy = $derived.by(() => {
    if (locale.startsWith('th')) {
      return {
        title: 'ตรวจพบ AdBlock',
        message:
          'เว็บไซต์นี้ต้องใช้การแสดงผลโฆษณาบางส่วนเพื่อให้บริการต่อได้ กรุณาปิดส่วนขยายบล็อกโฆษณาและโหลดใหม่',
        stepsTitle: 'วิธีปิด AdBlock แบบเร็ว',
        steps: [
          'กดไอคอนส่วนขยาย AdBlock/uBlock บนเบราว์เซอร์',
          'เลือก Pause หรือ Disable สำหรับเว็บไซต์นี้',
          'รีเฟรชหน้า แล้วกดปุ่มตรวจสอบอีกครั้ง',
        ],
        recheck: 'ตรวจสอบอีกครั้ง',
        checking: 'กำลังตรวจสอบ...',
      };
    }

    return {
      title: 'Ad blocker detected',
      message:
        'This site relies on ad delivery for essential functionality. Please disable your ad blocker for this website and reload.',
      stepsTitle: 'Quick steps to disable ad blocker',
      steps: [
        'Click your AdBlock/uBlock extension icon in the browser toolbar.',
        'Choose Pause or Disable on this site.',
        'Refresh the page, then press Recheck.',
      ],
      recheck: 'Recheck',
      checking: 'Checking...',
    };
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
    th: 'ไทย',
    'zh-tw': '繁體中文',
    ar: 'العربية',
    hi: 'हिन्दी',
    vi: 'Tiếng Việt',
    id: 'Bahasa Indonesia',
    ms: 'Bahasa Melayu',
    pl: 'Polski',
    uk: 'Українська',
    ro: 'Română',
    hu: 'Magyar',
    cs: 'Čeština',
    el: 'Ελληνικά',
    sv: 'Svenska',
    da: 'Dansk',
    no: 'Norsk',
    fi: 'Suomi',
    he: 'עברית',
    fa: 'فارسی',
    bn: 'বাংলা',
    fil: 'Filipino',
    bg: 'Български',
    hr: 'Hrvatski',
    sk: 'Slovenčina',
    sr: 'Српски',
    ca: 'Català',
    af: 'Afrikaans',
    sw: 'Kiswahili',
    ta: 'தமிழ்',
    te: 'తెలుగు',
    mr: 'मराठी',
    gu: 'ગુજરાતી',
    ur: 'اردو',
    pa: 'ਪੰਜਾਬੀ',
    kn: 'ಕನ್ನಡ',
    ml: 'മലയാളം',
    am: 'አማርኛ',
    ha: 'Hausa',
  };

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const toggleLocaleDropdown = () => {
    localeOpen = !localeOpen;
  };

  const runAdblockCheck = async () => {
    checkingAdblock = true;
    try {
      const { checkAdBlock } = (await import(AD_BLOCK_CHECKER_URL)) as {
        checkAdBlock: () => Promise<boolean>;
      };
      adblockDetected = await checkAdBlock();
    } catch {
      adblockDetected = false;
    } finally {
      checkingAdblock = false;
    }
  };

  onMount(() => {
    void runAdblockCheck();
  });

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

  $effect(() => {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('overflow-hidden', adblockDetected);
    return () => document.body.classList.remove('overflow-hidden');
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

  {#if adblockDetected}
    <div class="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),rgba(0,0,0,0.88)_55%)] p-4 backdrop-blur-sm">
      <div class="w-full max-w-lg rounded-2xl border border-white/15 bg-white/95 p-6 text-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div class="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
          AdBlock Protection
        </div>

        <h2 class="text-2xl font-extrabold tracking-tight text-zinc-900">{adblockCopy.title}</h2>
        <p class="mt-3 text-sm leading-6 text-zinc-700">{adblockCopy.message}</p>

        <div class="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p class="text-sm font-semibold text-zinc-900">{adblockCopy.stepsTitle}</p>
          <ol class="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-zinc-700">
            {#each adblockCopy.steps as step}
              <li>{step}</li>
            {/each}
          </ol>
        </div>

        <div class="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            class="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
            onclick={() => void runAdblockCheck()}
            disabled={checkingAdblock}
          >
            {checkingAdblock ? adblockCopy.checking : adblockCopy.recheck}
          </button>
        </div>
      </div>
    </div>
  {/if}

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

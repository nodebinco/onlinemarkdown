<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const locale = $derived($page.data?.locale ?? 'en');
</script>

<svelte:head>
  <title>{m.tools_title({}, { locale: locale })}</title>
  <meta name="description" content={m.tools_description({}, { locale: locale })} />
  <meta name="keywords" content={m.tools_keywords({}, { locale: locale })} />
</svelte:head>

<div class="mx-auto mt-4 max-w-6xl p-5 font-sans leading-relaxed text-gray-800">
  <h1 class="mb-8 text-4xl font-bold">{m.tools_h1({}, { locale: locale })}</h1>
  <p class="mb-8 text-lg text-gray-600">
    {m.tools_introPrefix({}, { locale: locale })}<a href={localizeHref('/markdown-to-pdf')} class="text-blue-600 hover:underline" data-sveltekit-reload
      >{m.tools_introLink({}, { locale: locale })}</a
    >{m.tools_introSuffix({}, { locale: locale })}
  </p>

  <div class="prose prose-lg max-w-none">
    <div class="not-prose mb-8">
      <a
        href={localizeHref('/markdown-to-pdf')}
        class="group block rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 p-6 shadow-sm ring-1 ring-emerald-200/60 transition hover:shadow-md hover:ring-emerald-300/80"
        data-sveltekit-reload
      >
        <h2 class="mb-1.5 text-xl font-bold text-slate-800 group-hover:text-emerald-600">
          {m.tools_md2pdfTitle({}, { locale: locale })}
        </h2>
        <p class="mb-4 text-[15px] leading-relaxed text-slate-600">
          {m.tools_md2pdfDesc({}, { locale: locale })}
        </p>
        <span
          class="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 no-underline"
        >
          {m.tools_md2pdfCta({}, { locale: locale })}
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </a>
    </div>
    <div class="not-prose grid grid-cols-1 gap-6">
      <a
        href="https://timeutcnow.com/"
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="group block rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-md hover:ring-slate-300/80"
      >
        <h2 class="mb-1.5 text-xl font-bold text-slate-800 group-hover:text-blue-600">
          {m.tools_timeutcnowTitle({}, { locale: locale })}
        </h2>
        <p class="mb-4 text-[15px] leading-relaxed text-slate-600">
          {m.tools_timeutcnowDesc({}, { locale: locale })}
        </p>
        <span
          class="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 no-underline"
        >
          {m.tools_visitTimeutcnow({}, { locale: locale })}
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </a>
    </div>

    <div class="mt-12 rounded-2xl bg-slate-50/80 px-6 py-5 not-prose">
      <h2 class="mb-2 text-lg font-bold text-slate-800">{m.tools_suggestTitle({}, { locale: locale })}</h2>
      <p class="text-[15px] text-slate-600">
        {m.tools_suggestPrefix({}, { locale: locale })}<a href={localizeHref('/contact')} class="text-blue-600 hover:underline" data-sveltekit-reload
          >{m.tools_suggestLink({}, { locale: locale })}</a
        >{m.tools_suggestSuffix({}, { locale: locale })}
      </p>
    </div>

    <div class="mt-8 flex flex-wrap gap-4">
      <a href={localizeHref('/markdown-to-pdf')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.tools_md2pdfTitle({}, { locale: locale })}</a
      >
      <a href={localizeHref('/getting-started')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.tools_backGettingStarted({}, { locale: locale })}</a
      >
      <a href={localizeHref('/cheat-sheet')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.tools_cheatSheet({}, { locale: locale })}</a
      >
    </div>
  </div>
</div>

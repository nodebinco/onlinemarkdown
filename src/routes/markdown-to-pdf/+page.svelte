<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.markdownToPdf_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.markdownToPdf_description({}, { locale: $localeStore })} />
  <meta name="keywords" content={m.markdownToPdf_keywords({}, { locale: $localeStore })} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://onlinemarkdown.com/markdown-to-pdf" />
  <meta property="og:title" content={m.markdownToPdf_ogTitle({}, { locale: $localeStore })} />
  <meta property="og:description" content={m.markdownToPdf_ogDescription({}, { locale: $localeStore })} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://onlinemarkdown.com/markdown-to-pdf" />
  <meta property="og:image" content="/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={m.markdownToPdf_twitterTitle({}, { locale: $localeStore })} />
  <meta name="twitter:description" content={m.markdownToPdf_twitterDescription({}, { locale: $localeStore })} />
</svelte:head>

<div class="mx-auto mt-4 max-w-6xl p-5 font-sans leading-relaxed text-gray-800">
  <h1 class="mb-8 text-4xl font-bold">{m.markdownToPdf_h1({}, { locale: $localeStore })}</h1>

  <div class="prose prose-lg max-w-none">
    <p class="mb-6 text-lg text-gray-600">{m.markdownToPdf_intro({}, { locale: $localeStore })}</p>

    <div class="not-prose my-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 ring-1 ring-blue-200/60">
      <h2 class="mb-3 text-xl font-bold text-slate-800">{m.markdownToPdf_howtoTitle({}, { locale: $localeStore })}</h2>
      <ol class="list-decimal space-y-2 pl-5 text-base text-slate-700">
        <li>
          {m.markdownToPdf_step1({}, { locale: $localeStore })}
          <a href={localizeHref('/')} class="font-medium text-blue-600 hover:underline" data-sveltekit-reload
            >{m.markdownToPdf_step1Link({}, { locale: $localeStore })}</a
          >
        </li>
        <li>{m.markdownToPdf_step2({}, { locale: $localeStore })}</li>
        <li>{m.markdownToPdf_step3({}, { locale: $localeStore })}</li>
        <li>{m.markdownToPdf_step4({}, { locale: $localeStore })}</li>
        <li>{m.markdownToPdf_step5({}, { locale: $localeStore })}</li>
      </ol>
      <a
        href={localizeHref('/')}
        class="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-white no-underline transition hover:bg-blue-700"
        data-sveltekit-reload
        >{m.markdownToPdf_cta1({}, { locale: $localeStore })}</a
      >
    </div>

    <h2 class="mt-10 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.markdownToPdf_useCasesTitle({}, { locale: $localeStore })}
    </h2>
    <p class="mb-4 text-base text-gray-800">{m.markdownToPdf_useCasesIntro({}, { locale: $localeStore })}</p>
    <ul class="mb-6 list-disc space-y-2 pl-5 text-base text-gray-800">
      <li>{m.markdownToPdf_use1({}, { locale: $localeStore })}</li>
      <li>{m.markdownToPdf_use2({}, { locale: $localeStore })}</li>
      <li>{m.markdownToPdf_use3({}, { locale: $localeStore })}</li>
      <li>{m.markdownToPdf_use4({}, { locale: $localeStore })}</li>
    </ul>

    <h2 class="mt-10 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.markdownToPdf_whyTitle({}, { locale: $localeStore })}
    </h2>
    <p class="mb-4 text-base text-gray-800">{m.markdownToPdf_whyIntro({}, { locale: $localeStore })}</p>
    <ul class="mb-6 list-disc space-y-2 pl-5 text-base text-gray-800">
      <li>{m.markdownToPdf_why1({}, { locale: $localeStore })}</li>
      <li>{m.markdownToPdf_why2({}, { locale: $localeStore })}</li>
      <li>{m.markdownToPdf_why3({}, { locale: $localeStore })}</li>
      <li>{m.markdownToPdf_why4({}, { locale: $localeStore })}</li>
    </ul>

    <h2 class="mt-10 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.markdownToPdf_faqTitle({}, { locale: $localeStore })}
    </h2>

    <h3 class="mt-6 text-lg font-bold text-gray-800">{m.markdownToPdf_faq1q({}, { locale: $localeStore })}</h3>
    <p class="mb-4 text-base text-gray-800">{m.markdownToPdf_faq1a({}, { locale: $localeStore })}</p>

    <h3 class="mt-6 text-lg font-bold text-gray-800">{m.markdownToPdf_faq2q({}, { locale: $localeStore })}</h3>
    <p class="mb-4 text-base text-gray-800">{m.markdownToPdf_faq2a({}, { locale: $localeStore })}</p>

    <h3 class="mt-6 text-lg font-bold text-gray-800">{m.markdownToPdf_faq3q({}, { locale: $localeStore })}</h3>
    <p class="mb-4 text-base text-gray-800">{m.markdownToPdf_faq3a({}, { locale: $localeStore })}</p>

    <div class="mt-10 rounded-lg bg-blue-50 p-6">
      <h2 class="mb-4 text-2xl font-bold text-blue-800">{m.markdownToPdf_cta2Title({}, { locale: $localeStore })}</h2>
      <p class="mb-4 text-base text-blue-700">{m.markdownToPdf_cta2Text({}, { locale: $localeStore })}</p>
      <a
        href={localizeHref('/')}
        class="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white no-underline transition hover:bg-blue-700"
        data-sveltekit-reload
        >{m.markdownToPdf_cta2Button({}, { locale: $localeStore })}</a
      >
    </div>

    <div class="mt-8 flex flex-wrap gap-4 border-t border-gray-200 pt-6">
      <a href={localizeHref('/')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.markdownToPdf_navEditor({}, { locale: $localeStore })}</a
      >
      <a href={localizeHref('/getting-started')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.nav_gettingStarted({}, { locale: $localeStore })}</a
      >
      <a href={localizeHref('/syntax')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.nav_syntax({}, { locale: $localeStore })}</a
      >
      <a href={localizeHref('/cheat-sheet')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.nav_cheatSheet({}, { locale: $localeStore })}</a
      >
      <a href={localizeHref('/tools')} class="text-blue-600 hover:underline" data-sveltekit-reload
        >{m.nav_tools({}, { locale: $localeStore })}</a
      >
    </div>
  </div>
</div>

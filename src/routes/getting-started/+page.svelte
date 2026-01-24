<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.gettingStarted_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.gettingStarted_description({}, { locale: $localeStore })} />
  <meta name="keywords" content={m.gettingStarted_keywords({}, { locale: $localeStore })} />
</svelte:head>

<div class="mx-auto mt-4 max-w-6xl p-5 font-sans leading-relaxed text-gray-800">
  <h1 class="mb-8 text-4xl font-bold">{m.gettingStarted_h1({}, { locale: $localeStore })}</h1>

  <div class="prose prose-lg max-w-none">
    <h2 class="mt-8 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.gettingStarted_whatTitle({}, { locale: $localeStore })}
    </h2>
    <p class="mb-4 text-base text-gray-800">{m.gettingStarted_what1({}, { locale: $localeStore })}</p>
    <p class="mb-4 text-base text-gray-800">{m.gettingStarted_what2({}, { locale: $localeStore })}</p>

    <h2 class="mt-8 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.gettingStarted_whyTitle({}, { locale: $localeStore })}
    </h2>
    <ul class="mb-4 text-base text-gray-800">
      <li><strong>{m.gettingStarted_why1({}, { locale: $localeStore })}:</strong> {m.gettingStarted_why1Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_why2({}, { locale: $localeStore })}:</strong> {m.gettingStarted_why2Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_why3({}, { locale: $localeStore })}:</strong> {m.gettingStarted_why3Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_why4({}, { locale: $localeStore })}:</strong> {m.gettingStarted_why4Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_why5({}, { locale: $localeStore })}:</strong> {m.gettingStarted_why5Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_why6({}, { locale: $localeStore })}:</strong> {m.gettingStarted_why6Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_why7({}, { locale: $localeStore })}:</strong> {m.gettingStarted_why7Text({}, { locale: $localeStore })}</li>
    </ul>

    <h2 class="mt-8 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.gettingStarted_editorTitle({}, { locale: $localeStore })}
    </h2>
    <p class="mb-4 text-base text-gray-800">{m.gettingStarted_editorIntro({}, { locale: $localeStore })}</p>
    <ol class="mb-4 text-base text-gray-800">
      <li><strong>{m.gettingStarted_step1({}, { locale: $localeStore })}</strong> {m.gettingStarted_step1Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_step2({}, { locale: $localeStore })}</strong> {m.gettingStarted_step2Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_step3({}, { locale: $localeStore })}</strong> {m.gettingStarted_step3Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_step4({}, { locale: $localeStore })}</strong> {m.gettingStarted_step4Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_step5({}, { locale: $localeStore })}</strong> {m.gettingStarted_step5Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_step6({}, { locale: $localeStore })}</strong> {m.gettingStarted_step6Text({}, { locale: $localeStore })}</li>
    </ol>

    <h3>{m.gettingStarted_featuresTitle({}, { locale: $localeStore })}</h3>
    <ul class="mb-4 text-base text-gray-800">
      <li><strong>{m.gettingStarted_feature1({}, { locale: $localeStore })}:</strong> {m.gettingStarted_feature1Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_feature2({}, { locale: $localeStore })}:</strong> {m.gettingStarted_feature2Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_feature3({}, { locale: $localeStore })}:</strong> {m.gettingStarted_feature3Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_feature4({}, { locale: $localeStore })}:</strong> {m.gettingStarted_feature4Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_feature5({}, { locale: $localeStore })}:</strong> {m.gettingStarted_feature5Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_feature6({}, { locale: $localeStore })}:</strong> {m.gettingStarted_feature6Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_feature7({}, { locale: $localeStore })}:</strong> {m.gettingStarted_feature7Text({}, { locale: $localeStore })}</li>
    </ul>

    <h3>{m.gettingStarted_shortcutsTitle({}, { locale: $localeStore })}</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2 text-left">{m.gettingStarted_action({}, { locale: $localeStore })}</th>
            <th class="border border-gray-300 px-4 py-2 text-left">{m.gettingStarted_winLinux({}, { locale: $localeStore })}</th>
            <th class="border border-gray-300 px-4 py-2 text-left">{m.gettingStarted_macos({}, { locale: $localeStore })}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{m.toolbar_bold({}, { locale: $localeStore })}</td>
            <td class="border border-gray-300 px-4 py-2"><code>Ctrl+B</code></td>
            <td class="border border-gray-300 px-4 py-2"><code>⌘+B</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{m.toolbar_italic({}, { locale: $localeStore })}</td>
            <td class="border border-gray-300 px-4 py-2"><code>Ctrl+I</code></td>
            <td class="border border-gray-300 px-4 py-2"><code>⌘+I</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{m.toolbar_link({}, { locale: $localeStore })}</td>
            <td class="border border-gray-300 px-4 py-2"><code>Ctrl+K</code></td>
            <td class="border border-gray-300 px-4 py-2"><code>⌘+K</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{m.toolbar_code({}, { locale: $localeStore })}</td>
            <td class="border border-gray-300 px-4 py-2"><code>Ctrl+`</code></td>
            <td class="border border-gray-300 px-4 py-2"><code>⌘+`</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{m.gettingStarted_save({}, { locale: $localeStore })}</td>
            <td class="border border-gray-300 px-4 py-2"><code>Ctrl+S</code></td>
            <td class="border border-gray-300 px-4 py-2"><code>⌘+S</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">{m.gettingStarted_togglePreview({}, { locale: $localeStore })}</td>
            <td class="border border-gray-300 px-4 py-2"><code>Ctrl+P</code></td>
            <td class="border border-gray-300 px-4 py-2"><code>⌘+P</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="mt-8 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.gettingStarted_bestPracticesTitle({}, { locale: $localeStore })}
    </h2>
    <ul class="mb-4 text-base text-gray-800">
      <li><strong>{m.gettingStarted_bp1({}, { locale: $localeStore })}:</strong> {m.gettingStarted_bp1Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_bp2({}, { locale: $localeStore })}:</strong> {m.gettingStarted_bp2Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_bp3({}, { locale: $localeStore })}:</strong> {m.gettingStarted_bp3Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_bp4({}, { locale: $localeStore })}:</strong> {m.gettingStarted_bp4Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_bp5({}, { locale: $localeStore })}:</strong> {m.gettingStarted_bp5Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_bp6({}, { locale: $localeStore })}:</strong> {m.gettingStarted_bp6Text({}, { locale: $localeStore })}</li>
      <li><strong>{m.gettingStarted_bp7({}, { locale: $localeStore })}:</strong> {m.gettingStarted_bp7Text({}, { locale: $localeStore })}</li>
    </ul>

    <h2 class="mt-8 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.gettingStarted_useCasesTitle({}, { locale: $localeStore })}
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div class="rounded-lg border border-zinc-200 p-4">
        <h3 class="mb-2 text-xl font-semibold">{m.gettingStarted_docTitle({}, { locale: $localeStore })}</h3>
        <p class="mb-4 text-base text-gray-800">{m.gettingStarted_docText({}, { locale: $localeStore })}</p>
        <ul class="mt-2 list-disc pl-5 text-base text-gray-800">
          <li>{m.gettingStarted_doc1({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_doc2({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_doc3({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_doc4({}, { locale: $localeStore })}</li>
        </ul>
      </div>
      <div class="rounded-lg border border-zinc-200 p-4">
        <h3 class="mb-2 text-xl font-semibold">{m.gettingStarted_notesTitle({}, { locale: $localeStore })}</h3>
        <p class="mb-4 text-base text-gray-800">{m.gettingStarted_notesText({}, { locale: $localeStore })}</p>
        <ul class="mt-2 list-disc pl-5 text-base text-gray-800">
          <li>{m.gettingStarted_notes1({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_notes2({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_notes3({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_notes4({}, { locale: $localeStore })}</li>
        </ul>
      </div>
      <div class="rounded-lg border border-zinc-200 p-4">
        <h3 class="mb-2 text-xl font-semibold">{m.gettingStarted_contentTitle({}, { locale: $localeStore })}</h3>
        <p class="mb-4 text-base text-gray-800">{m.gettingStarted_contentText({}, { locale: $localeStore })}</p>
        <ul class="mt-2 list-disc pl-5 text-base text-gray-800">
          <li>{m.gettingStarted_content1({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_content2({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_content3({}, { locale: $localeStore })}</li>
          <li>{m.gettingStarted_content4({}, { locale: $localeStore })}</li>
        </ul>
      </div>
    </div>

    <h2 class="mt-8 mb-4 border-b border-gray-200 pb-2 text-2xl font-bold">
      {m.gettingStarted_nextStepsTitle({}, { locale: $localeStore })}
    </h2>
    <p class="mb-4 text-base text-gray-800">{m.gettingStarted_nextStepsIntro({}, { locale: $localeStore })}</p>
    <ul class="mb-4 text-base text-gray-800">
      <li>
        <a href={localizeHref('/markdown-to-pdf')} class="text-blue-600 hover:underline" data-sveltekit-reload
          >{m.gettingStarted_next0({}, { locale: $localeStore })}</a
        > - {m.gettingStarted_next0Text({}, { locale: $localeStore })}
      </li>
      <li>
        <a href={localizeHref('/syntax')} class="text-blue-600 hover:underline" data-sveltekit-reload
          >{m.gettingStarted_next1({}, { locale: $localeStore })}</a
        > - {m.gettingStarted_next1Text({}, { locale: $localeStore })}
      </li>
      <li>
        <a href={localizeHref('/cheat-sheet')} class="text-blue-600 hover:underline" data-sveltekit-reload
          >{m.gettingStarted_next2({}, { locale: $localeStore })}</a
        > - {m.gettingStarted_next2Text({}, { locale: $localeStore })}
      </li>
      <li>
        <a href={localizeHref('/tools')} class="text-blue-600 hover:underline" data-sveltekit-reload
          >{m.gettingStarted_next3({}, { locale: $localeStore })}</a
        > - {m.gettingStarted_next3Text({}, { locale: $localeStore })}
      </li>
    </ul>

    <div class="mt-8 rounded-lg bg-blue-50 p-6">
      <h2 class="mb-4 text-2xl font-bold text-blue-800">{m.gettingStarted_ctaTitle({}, { locale: $localeStore })}</h2>
      <p class="mb-4 text-base text-blue-700">{m.gettingStarted_ctaText({}, { locale: $localeStore })}</p>
      <a
        href={localizeHref('/')}
        class="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white no-underline transition hover:bg-blue-700"
        data-sveltekit-reload
        >{m.gettingStarted_ctaButton({}, { locale: $localeStore })}</a
      >
    </div>
  </div>
</div>

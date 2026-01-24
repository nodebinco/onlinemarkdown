<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const locale = $derived($page.data?.locale ?? 'en');
</script>

<svelte:head>
  <title>{m.terms_title({}, { locale: locale })}</title>
  <meta name="description" content={m.terms_description({}, { locale: locale })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.terms_h1({}, { locale: locale })}</h1>
  <div class="prose max-w-none">
    <p>{m.terms_lastUpdated({}, { locale: locale })} {new Date().toLocaleDateString()}</p>

    <h2>{m.terms_s1Title({}, { locale: locale })}</h2>
    <p>{m.terms_s1({}, { locale: locale })}</p>

    <h2>{m.terms_s2Title({}, { locale: locale })}</h2>
    <p>{m.terms_s2({}, { locale: locale })}</p>

    <h2>{m.terms_s3Title({}, { locale: locale })}</h2>
    <p>{m.terms_s3({}, { locale: locale })}</p>

    <h2>{m.terms_s4Title({}, { locale: locale })}</h2>
    <p>{m.terms_s4({}, { locale: locale })}</p>

    <h2>{m.terms_s5Title({}, { locale: locale })}</h2>
    <p>{m.terms_s5({}, { locale: locale })}</p>

    <h2>{m.terms_s6Title({}, { locale: locale })}</h2>
    <p>
      {m.terms_s6Prefix({}, { locale: locale })}<a href={localizeHref('/privacy')} data-sveltekit-reload
        >{m.terms_s6Link({}, { locale: locale })}</a
      >{m.terms_s6Suffix({}, { locale: locale })}
    </p>

    <h2>{m.terms_s7Title({}, { locale: locale })}</h2>
    <p>{m.terms_s7({}, { locale: locale })}</p>

    <h2>{m.terms_s8Title({}, { locale: locale })}</h2>
    <p>{m.terms_s8({}, { locale: locale })}</p>

    <h2>{m.terms_s9Title({}, { locale: locale })}</h2>
    <p>{m.terms_s9({}, { locale: locale })}</p>

    <h2>{m.terms_s10Title({}, { locale: locale })}</h2>
    <p>{m.terms_s10({}, { locale: locale })}</p>

    <h2>{m.terms_s11Title({}, { locale: locale })}</h2>
    <p>
      {m.terms_s11Prefix({}, { locale: locale })}
      <a href="mailto:contact@onlinemarkdown.com">contact@onlinemarkdown.com</a>
      {m.terms_s11Suffix({}, { locale: locale })}
    </p>
  </div>
</div>

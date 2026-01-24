<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.terms_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.terms_description({}, { locale: $localeStore })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.terms_h1({}, { locale: $localeStore })}</h1>
  <div class="prose max-w-none">
    <p>{m.terms_lastUpdated({}, { locale: $localeStore })} {new Date().toLocaleDateString()}</p>

    <h2>{m.terms_s1Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s1({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s2Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s2({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s3Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s3({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s4Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s4({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s5Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s5({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s6Title({}, { locale: $localeStore })}</h2>
    <p>
      {m.terms_s6Prefix({}, { locale: $localeStore })}<a href={localizeHref('/privacy')} data-sveltekit-reload
        >{m.terms_s6Link({}, { locale: $localeStore })}</a
      >{m.terms_s6Suffix({}, { locale: $localeStore })}
    </p>

    <h2>{m.terms_s7Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s7({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s8Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s8({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s9Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s9({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s10Title({}, { locale: $localeStore })}</h2>
    <p>{m.terms_s10({}, { locale: $localeStore })}</p>

    <h2>{m.terms_s11Title({}, { locale: $localeStore })}</h2>
    <p>
      {m.terms_s11Prefix({}, { locale: $localeStore })}
      <a href="mailto:contact@onlinemarkdown.com">contact@onlinemarkdown.com</a>
      {m.terms_s11Suffix({}, { locale: $localeStore })}
    </p>
  </div>
</div>

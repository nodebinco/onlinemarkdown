<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.privacy_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.privacy_description({}, { locale: $localeStore })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.privacy_h1({}, { locale: $localeStore })}</h1>
  <div class="prose max-w-none">
    <p>{m.privacy_lastUpdated({}, { locale: $localeStore })} {new Date().toLocaleDateString()}</p>

    <h2>{m.privacy_s1Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s1({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s2Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s2({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s3Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s3({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s4Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s4({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s5Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s5({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s6Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s6({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s7Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s7({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s8Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s8({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s9Title({}, { locale: $localeStore })}</h2>
    <p>{m.privacy_s9({}, { locale: $localeStore })}</p>

    <h2>{m.privacy_s10Title({}, { locale: $localeStore })}</h2>
    <p>
      {m.privacy_s10Prefix({}, { locale: $localeStore })}
      <a href="mailto:contact@onlinemarkdown.com">contact@onlinemarkdown.com</a>
      {m.privacy_s10Suffix({}, { locale: $localeStore })}
    </p>
  </div>
</div>

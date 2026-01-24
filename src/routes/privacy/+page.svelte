<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';

  const locale = $derived($page.data?.locale ?? 'en');
</script>

<svelte:head>
  <title>{m.privacy_title({}, { locale: locale })}</title>
  <meta name="description" content={m.privacy_description({}, { locale: locale })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.privacy_h1({}, { locale: locale })}</h1>
  <div class="prose max-w-none">
    <p>{m.privacy_lastUpdated({}, { locale: locale })} {new Date().toLocaleDateString()}</p>

    <h2>{m.privacy_s1Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s1({}, { locale: locale })}</p>

    <h2>{m.privacy_s2Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s2({}, { locale: locale })}</p>

    <h2>{m.privacy_s3Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s3({}, { locale: locale })}</p>

    <h2>{m.privacy_s4Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s4({}, { locale: locale })}</p>

    <h2>{m.privacy_s5Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s5({}, { locale: locale })}</p>

    <h2>{m.privacy_s6Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s6({}, { locale: locale })}</p>

    <h2>{m.privacy_s7Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s7({}, { locale: locale })}</p>

    <h2>{m.privacy_s8Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s8({}, { locale: locale })}</p>

    <h2>{m.privacy_s9Title({}, { locale: locale })}</h2>
    <p>{m.privacy_s9({}, { locale: locale })}</p>

    <h2>{m.privacy_s10Title({}, { locale: locale })}</h2>
    <p>
      {m.privacy_s10Prefix({}, { locale: locale })}
      <a href="mailto:contact@onlinemarkdown.com">contact@onlinemarkdown.com</a>
      {m.privacy_s10Suffix({}, { locale: locale })}
    </p>
  </div>
</div>

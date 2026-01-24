<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { getLocaleStore } from '$lib/i18n';
  import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.home_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.home_description({}, { locale: $localeStore })} />
  <meta name="keywords" content={m.home_keywords({}, { locale: $localeStore })} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content={m.home_ogTitle({}, { locale: $localeStore })} />
  <meta property="og:description" content={m.home_ogDescription({}, { locale: $localeStore })} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://onlinemarkdown.com" />
  <meta property="og:image" content="/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={m.home_twitterTitle({}, { locale: $localeStore })} />
  <meta name="twitter:description" content={m.home_twitterDescription({}, { locale: $localeStore })} />
</svelte:head>

<MarkdownEditor />

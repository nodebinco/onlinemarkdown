<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';
  import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';

  const locale = $derived($page.data?.locale ?? 'en');
</script>

<svelte:head>
  <title>{m.home_title({}, { locale: locale })}</title>
  <meta name="description" content={m.home_description({}, { locale: locale })} />
  <meta name="keywords" content={m.home_keywords({}, { locale: locale })} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content={m.home_ogTitle({}, { locale: locale })} />
  <meta property="og:description" content={m.home_ogDescription({}, { locale: locale })} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://onlinemarkdown.com" />
  <meta property="og:image" content="/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={m.home_twitterTitle({}, { locale: locale })} />
  <meta name="twitter:description" content={m.home_twitterDescription({}, { locale: locale })} />
</svelte:head>

<MarkdownEditor />

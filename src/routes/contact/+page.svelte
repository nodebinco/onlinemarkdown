<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';

  const locale = $derived($page.data?.locale ?? 'en');
</script>

<svelte:head>
  <title>{m.contact_title({}, { locale: locale })}</title>
  <meta name="description" content={m.contact_description({}, { locale: locale })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.contact_h1({}, { locale: locale })}</h1>
  <div class="prose max-w-none">
    <p>{m.contact_intro({}, { locale: locale })}</p>
    <ul>
      <li>
        <strong>{m.contact_github({}, { locale: locale })}:</strong> {m.contact_githubPrefix({}, { locale: locale })}
        <a
          href="https://github.com/nodebinco/onlinemarkdown"
          target="_blank"
          rel="noopener noreferrer"
        >
          {m.contact_githubLink({}, { locale: locale })}
        </a>
        {m.contact_githubSuffix({}, { locale: locale })}
      </li>
      <li>
        <strong>{m.contact_email({}, { locale: locale })}:</strong> {m.contact_emailPrefix({}, { locale: locale })}
        <a href="mailto:contact@onlinemarkdown.com">contact@onlinemarkdown.com</a>
      </li>
    </ul>
    <p>{m.contact_closing({}, { locale: locale })}</p>
  </div>
</div>

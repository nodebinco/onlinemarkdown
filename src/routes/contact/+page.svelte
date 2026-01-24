<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.contact_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.contact_description({}, { locale: $localeStore })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.contact_h1({}, { locale: $localeStore })}</h1>
  <div class="prose max-w-none">
    <p>{m.contact_intro({}, { locale: $localeStore })}</p>
    <ul>
      <li>
        <strong>{m.contact_github({}, { locale: $localeStore })}:</strong> {m.contact_githubPrefix({}, { locale: $localeStore })}
        <a
          href="https://github.com/nodebinco/onlinemarkdown"
          target="_blank"
          rel="noopener noreferrer"
        >
          {m.contact_githubLink({}, { locale: $localeStore })}
        </a>
        {m.contact_githubSuffix({}, { locale: $localeStore })}
      </li>
      <li>
        <strong>{m.contact_email({}, { locale: $localeStore })}:</strong> {m.contact_emailPrefix({}, { locale: $localeStore })}
        <a href="mailto:contact@onlinemarkdown.com">contact@onlinemarkdown.com</a>
      </li>
    </ul>
    <p>{m.contact_closing({}, { locale: $localeStore })}</p>
  </div>
</div>

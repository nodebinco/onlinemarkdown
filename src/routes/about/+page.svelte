<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.about_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.about_description({}, { locale: $localeStore })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.about_h1({}, { locale: $localeStore })}</h1>
  <div class="prose max-w-none">
    <p>{m.about_intro1({}, { locale: $localeStore })}</p>
    <p>{m.about_intro2({}, { locale: $localeStore })}</p>
    <p>{m.about_intro3({}, { locale: $localeStore })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_storyTitle({}, { locale: $localeStore })}</h2>
    <p>{m.about_story({}, { locale: $localeStore })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_missionTitle({}, { locale: $localeStore })}</h2>
    <p>{m.about_mission1({}, { locale: $localeStore })}</p>
    <p>{m.about_mission2({}, { locale: $localeStore })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_communityTitle({}, { locale: $localeStore })}</h2>
    <p>{m.about_community1({}, { locale: $localeStore })}</p>
    <p>{m.about_community2({}, { locale: $localeStore })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_whyTitle({}, { locale: $localeStore })}</h2>
    <ul>
      <li>{m.about_why1({}, { locale: $localeStore })}</li>
      <li>{m.about_why2({}, { locale: $localeStore })}</li>
      <li>{m.about_why3({}, { locale: $localeStore })}</li>
      <li>{m.about_why4({}, { locale: $localeStore })}</li>
    </ul>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_contactTitle({}, { locale: $localeStore })}</h2>
    <p>
      {m.about_contactPrefix({}, { locale: $localeStore })}<a href={localizeHref('/contact')} data-sveltekit-reload
        >{m.about_contactLink({}, { locale: $localeStore })}</a
      >{m.about_contactSuffix({}, { locale: $localeStore })}
    </p>
  </div>
</div>

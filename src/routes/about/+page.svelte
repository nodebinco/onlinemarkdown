<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const locale = $derived($page.data?.locale ?? 'en');
</script>

<svelte:head>
  <title>{m.about_title({}, { locale: locale })}</title>
  <meta name="description" content={m.about_description({}, { locale: locale })} />
</svelte:head>

<div class="container mx-auto py-8">
  <h1 class="mb-6 text-3xl font-bold">{m.about_h1({}, { locale: locale })}</h1>
  <div class="prose max-w-none">
    <p>{m.about_intro1({}, { locale: locale })}</p>
    <p>{m.about_intro2({}, { locale: locale })}</p>
    <p>{m.about_intro3({}, { locale: locale })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_storyTitle({}, { locale: locale })}</h2>
    <p>{m.about_story({}, { locale: locale })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_missionTitle({}, { locale: locale })}</h2>
    <p>{m.about_mission1({}, { locale: locale })}</p>
    <p>{m.about_mission2({}, { locale: locale })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_communityTitle({}, { locale: locale })}</h2>
    <p>{m.about_community1({}, { locale: locale })}</p>
    <p>{m.about_community2({}, { locale: locale })}</p>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_whyTitle({}, { locale: locale })}</h2>
    <ul>
      <li>{m.about_why1({}, { locale: locale })}</li>
      <li>{m.about_why2({}, { locale: locale })}</li>
      <li>{m.about_why3({}, { locale: locale })}</li>
      <li>{m.about_why4({}, { locale: locale })}</li>
    </ul>

    <h2 class="mt-10 text-2xl font-semibold">{m.about_contactTitle({}, { locale: locale })}</h2>
    <p>
      {m.about_contactPrefix({}, { locale: locale })}<a href={localizeHref('/contact')} data-sveltekit-reload
        >{m.about_contactLink({}, { locale: locale })}</a
      >{m.about_contactSuffix({}, { locale: locale })}
    </p>
  </div>
</div>

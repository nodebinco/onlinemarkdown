<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  type Props = { locale: string };
  let { locale = 'en' }: Props = $props();
</script>

<footer class="border-t border-gray-200 bg-gray-100">
  <div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
    <ul class="flex flex-wrap justify-center gap-x-4 gap-y-2">
      <li>
        <a href={localizeHref('/tools')} class="text-base text-gray-500 hover:text-gray-900" data-sveltekit-reload
          >{m.footer_tools({}, { locale })}</a
        >
      </li>
      <li>
        <a href={localizeHref('/about')} class="text-base text-gray-500 hover:text-gray-900" data-sveltekit-reload
          >{m.footer_about({}, { locale })}</a
        >
      </li>
      <li>
        <a href={localizeHref('/contact')} class="text-base text-gray-500 hover:text-gray-900" data-sveltekit-reload
          >{m.footer_contact({}, { locale })}</a
        >
      </li>
      <li>
        <a href={localizeHref('/privacy')} class="text-base text-gray-500 hover:text-gray-900" data-sveltekit-reload
          >{m.footer_privacy({}, { locale })}</a
        >
      </li>
      <li>
        <a href={localizeHref('/terms')} class="text-base text-gray-500 hover:text-gray-900" data-sveltekit-reload
          >{m.footer_terms({}, { locale })}</a
        >
      </li>
    </ul>
  </div>
  <div class="py-8">
    <p class="text-center text-base text-gray-400">
      &copy; {new Date().getFullYear()}
      <a href={localizeHref('/')} class="text-gray-500 hover:text-gray-900" data-sveltekit-reload
        >OnlineMarkdown.com</a
      >. {m.footer_rights({}, { locale })}
    </p>
  </div>
</footer>

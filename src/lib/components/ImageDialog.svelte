<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';

  const locale = $derived($page.data?.locale ?? 'en');

  let { open = false, onInsert, onClose } = $props();

  let url = $state('');
  let alt = $state('');

  const handleInsert = () => {
    if (url.trim()) {
      onInsert({ url, alt });
      url = '';
      alt = '';
      onClose?.();
    }
  };

  const handleClose = () => {
    onClose?.();
  };
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center rounded-lg">
    <div class="w-full max-w-md rounded-lg border border-gray-300 bg-white shadow-md">
      <div class="border-b border-gray-300 bg-gray-100 p-4">
        <h2 class="text-lg font-semibold">{m.imageDialog_title({}, { locale: locale })}</h2>
      </div>

      <div class="p-4">
        <div class="grid gap-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <label for="image-url" class="text-right text-sm font-medium">{m.imageDialog_url({}, { locale: locale })}</label>
            <input
              id="image-url"
              bind:value={url}
              placeholder={m.imageDialog_urlPlaceholder({}, { locale: locale })}
              class="col-span-3 rounded border border-gray-300 p-2"
            />
          </div>

          <div class="grid grid-cols-4 items-center gap-4">
            <label for="image-alt" class="text-right text-sm font-medium">{m.imageDialog_altText({}, { locale: locale })}</label>
            <input
              id="image-alt"
              bind:value={alt}
              placeholder={m.imageDialog_altPlaceholder({}, { locale: locale })}
              class="col-span-3 rounded border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end border-t border-gray-300 bg-gray-100 p-4">
        <button
          class="mr-2 cursor-pointer rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
          onclick={handleClose}
        >
          {m.imageDialog_cancel({}, { locale: locale })}
        </button>
        <button
          class="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onclick={handleInsert}
        >
          {m.imageDialog_insert({}, { locale: locale })}
        </button>
      </div>
    </div>
  </div>
{/if}

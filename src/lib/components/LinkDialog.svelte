<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();

  let { open = false, selectedText = '', onInsert, onClose } = $props();

  let url = $state('');
  let text = $state('');

  $effect(() => {
    if (open && selectedText) {
      text = selectedText;
    }
  });

  const handleInsert = () => {
    if (url.trim() && text.trim()) {
      onInsert({ url, text });
      url = '';
      text = '';
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
        <h2 class="text-lg font-semibold">{m.linkDialog_title({}, { locale: $localeStore })}</h2>
      </div>

      <div class="p-4">
        <div class="grid gap-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <label for="link-text" class="text-right text-sm font-medium">{m.linkDialog_text({}, { locale: $localeStore })}</label>
            <input
              id="link-text"
              bind:value={text}
              placeholder={m.linkDialog_textPlaceholder({}, { locale: $localeStore })}
              class="col-span-3 rounded border border-gray-300 p-2"
            />
          </div>

          <div class="grid grid-cols-4 items-center gap-4">
            <label for="link-url" class="text-right text-sm font-medium">{m.linkDialog_url({}, { locale: $localeStore })}</label>
            <input
              id="link-url"
              bind:value={url}
              placeholder={m.linkDialog_urlPlaceholder({}, { locale: $localeStore })}
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
          {m.linkDialog_cancel({}, { locale: $localeStore })}
        </button>
        <button
          class="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onclick={handleInsert}
        >
          {m.linkDialog_insert({}, { locale: $localeStore })}
        </button>
      </div>
    </div>
  </div>
{/if}

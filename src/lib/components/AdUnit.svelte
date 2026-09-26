<script lang="ts">
  import { onMount } from 'svelte';
  import { ADSENSE_CLIENT } from '$lib/ads';

  type Props = {
    slot: string;
    format?: 'auto' | 'fluid';
    class?: string;
  };

  let { slot, format = 'auto', class: className = '' }: Props = $props();

  onMount(() => {
    if (!slot) return;
    try {
      const w = window as Window & { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle || []).push({});
    } catch {
      // Ad blocker / script not ready
    }
  });
</script>

{#if slot}
  <div class="ad-unit w-full overflow-hidden {className}">
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    ></ins>
  </div>
{/if}

<script>
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';
  import { Menu, X, FileText } from 'lucide-svelte';

  let mobileMenuOpen = false;

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };
</script>

<div class="flex h-screen flex-col">
  <header class="flex items-center justify-between bg-zinc-800 p-2 text-white">
    <div class="flex items-center space-x-2">
      <div class="h-6 w-6 rounded bg-zinc-700">
        <a
          href="/"
          class="flex h-full w-full items-center justify-center rounded border border-gray-600 hover:bg-zinc-700"
          aria-label="Markdown Editor"
        >
          <img src="/logo.svg" alt="Markdown Editor" class="h-6 w-6" />
        </a>
      </div>
      <span class="font-semibold"><a href="/">Online Markdown Editor</a></span>
    </div>

    <div class="flex items-center">
      <nav class="hidden items-center space-x-4 md:flex">
        <a href="/getting-started" class="hover:text-zinc-300">Getting Started</a>
        <a href="/syntax" class="hover:text-zinc-300">Syntax</a>
        <a href="/cheat-sheet" class="hover:text-zinc-300">Cheat Sheet</a>
      </nav>

      <button
        class="block p-2 text-white focus:outline-none md:hidden"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {#if mobileMenuOpen}
          <X class="h-6 w-6" />
        {:else}
          <Menu class="h-6 w-6" />
        {/if}
      </button>
    </div>
  </header>

  {#if mobileMenuOpen}
    <div class="block bg-zinc-800 text-white md:hidden">
      <nav class="flex flex-col space-y-2 p-4">
        <a href="/getting-started" class="rounded px-4 py-2 hover:bg-zinc-700">Getting Started</a>
        <a href="/syntax" class="rounded px-4 py-2 hover:bg-zinc-700">Syntax</a>
        <a href="/cheat-sheet" class="rounded px-4 py-2 hover:bg-zinc-700">Cheat Sheet</a>
      </nav>
    </div>
  {/if}

  <main class="flex-1">
    <slot></slot>
  </main>

  {#if $page.url.pathname !== '/'}
    <Footer />
  {/if}
</div>

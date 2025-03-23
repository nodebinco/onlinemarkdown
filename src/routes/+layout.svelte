<script>
  import '../app.css';

  let mobileMenuOpen = false;

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
    console.log('Mobile menu toggled:', mobileMenuOpen); // Debug log
  };
</script>

<div class="flex h-screen flex-col">
  <header class="flex items-center justify-between bg-zinc-800 p-2 text-white">
    <div class="flex items-center space-x-2">
      <div class="h-6 w-6 rounded bg-zinc-700">
        <a
          href="/"
          class="flex h-full w-full items-center justify-center rounded hover:bg-zinc-700"
          aria-label="Markdown Editor"
        >
          <svg class="h-5 w-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="15" fill="black" />
            <path d="M20 70V30H35L50 50L65 30H80V70H65V45L50 65L35 45V70H20Z" fill="white" />
          </svg>
        </a>
      </div>
      <span class="font-semibold"><a href="/">Online Markdown Editor</a></span>
    </div>

    <!-- Desktop Navigation -->
    <div class="flex items-center">
      <nav class="hidden items-center space-x-4 md:flex">
        <a href="/syntax" class="hover:text-zinc-300">Syntax</a>
        <a href="/cheat-sheet" class="hover:text-zinc-300">Cheat Sheet</a>
      </nav>

      <!-- Hamburger Menu Button - Visible only on mobile -->
      <button
        class="block p-2 text-white focus:outline-none md:hidden"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {#if mobileMenuOpen}
            <!-- X icon when menu is open -->
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          {:else}
            <!-- Hamburger icon when menu is closed -->
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          {/if}
        </svg>
      </button>
    </div>
  </header>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="block bg-zinc-800 text-white md:hidden">
      <nav class="flex flex-col space-y-2 p-4">
        <a href="/syntax" class="rounded px-4 py-2 hover:bg-zinc-700">Syntax</a>
        <a href="/cheat-sheet" class="rounded px-4 py-2 hover:bg-zinc-700">Cheat Sheet</a>
      </nav>
    </div>
  {/if}

  <slot></slot>
</div>

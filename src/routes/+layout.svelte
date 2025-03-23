<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<div class="flex h-screen flex-col">
  <header class="flex items-center justify-between bg-zinc-800 p-2 text-white">
    <div class="navbar flex items-center space-x-2">
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
  </header>
  {@render children()}
</div>

<style>
  .navbar {
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: #ffffff;
  }
</style>

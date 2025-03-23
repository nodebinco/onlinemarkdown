<script lang="ts">
  import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';
</script>

<svelte:head>
  <title>Online Markdown Editor - Simple, Fast & Live Preview</title>
  <meta
    name="description"
    content="Write and preview Markdown instantly with our Online Markdown Editor. Supports GitHub Flavored Markdown (GFM), tables, code blocks, and Mermaid diagrams. No installation required—just start typing!"
  />
  <meta
    name="keywords"
    content="Markdown editor, online markdown, markdown preview, GitHub Flavored Markdown, Markdown to HTML, live markdown editor, code blocks, tables, mermaid diagrams, svelte markdown editor, free markdown tool"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="Online Markdown Editor - Simple, Fast & Live Preview" />
  <meta
    property="og:description"
    content="Write and preview Markdown instantly with our Online Markdown Editor. Supports GitHub Flavored Markdown (GFM), tables, code blocks, and Mermaid diagrams."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://onlinemarkdown.com" />
  <meta property="og:image" content="/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Online Markdown Editor" />
  <meta
    name="twitter:description"
    content="Fast, simple, and live Markdown editing with GitHub Flavored Markdown support."
  />
</svelte:head>

<MarkdownEditor />

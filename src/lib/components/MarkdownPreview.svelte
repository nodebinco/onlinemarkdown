<script lang="ts">
  import { marked } from 'marked';
  import { markedHighlight } from 'marked-highlight';
  import hljs from 'highlight.js';
  import mermaid from 'mermaid';
  import { onMount } from 'svelte';

  export let markdown = '';

  let html = '';
  let isClient = false;

  onMount(() => {
    isClient = true;
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose'
    });
  });

  marked.use(
    markedHighlight({
      async: true,
      langPrefix: 'hljs language-',
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
    })
  );

  const renderer = new marked.Renderer();

  renderer.code = (code: { text: string; lang?: string }) => {
    if (code.lang === 'mermaid') {
      return `<div class="mermaid">${code.text}</div>`;
    }
    const language = code.lang || 'plaintext';
    return `<pre><code class="hljs language-${language}">${code.text}</code></pre>`;
  };

  $: {
    convertMarkdown(markdown);
  }

  const convertMarkdown = async (text: string) => {
    try {
      marked.setOptions({
        breaks: true,
        gfm: true,
        renderer
      });

      html = await marked.parse(markdown);

      if (isClient) {
        const mermaidDivs = document.querySelectorAll('.mermaid');
        mermaidDivs.forEach(async (element) => {
          try {
            const graphDefinition = element.textContent || '';
            const { svg } = await mermaid.render('mermaid-' + Math.random(), graphDefinition);
            element.innerHTML = svg;
          } catch (error) {
            console.error('Error rendering mermaid diagram:', error);
            element.innerHTML = '<p>Error rendering diagram</p>';
          }
        });
      }
    } catch (error) {
      console.error('Error parsing markdown:', error);
      html = '<p>Error rendering markdown</p>';
    }
  };
</script>

<div class="markdown-preview prose prose-sm max-w-none p-4">
  {@html html}
</div>

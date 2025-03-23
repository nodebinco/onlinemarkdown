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

<style>
  .markdown-preview {
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  :global(.markdown-preview h1),
  :global(.markdown-preview h2),
  :global(.markdown-preview h3),
  :global(.markdown-preview h4),
  :global(.markdown-preview h5),
  :global(.markdown-preview h6) {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: 600;
  }

  :global(.markdown-preview h1) {
    font-size: 2em;
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
  }

  :global(.markdown-preview h2) {
    font-size: 1.5em;
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
  }

  :global(.markdown-preview pre) {
    background-color: #f6f8fa;
    border-radius: 3px;
    padding: 16px;
    overflow: auto;
    position: relative;
  }

  :global(.markdown-preview pre code) {
    background-color: transparent;
    padding: 0;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    line-height: 1.45;
  }

  :global(.markdown-preview .hljs) {
    background: transparent;
    padding: 0;
  }

  :global(.markdown-preview .mermaid) {
    margin: 1em 0;
    text-align: center;
  }

  :global(.markdown-preview .mermaid svg) {
    max-width: 100%;
    height: auto;
  }

  :global(.markdown-preview code) {
    background-color: rgba(27, 31, 35, 0.05);
    color: #333000;
    font-size: 0.875rem;
    border-radius: 3px;
    padding: 0.2em 0.4em;
    font-family: 'Courier New', monospace;
  }

  :global(.markdown-preview blockquote) {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  :global(.markdown-preview table) {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 16px;
  }

  :global(.markdown-preview table th),
  :global(.markdown-preview table td) {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  :global(.markdown-preview table tr) {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  :global(.markdown-preview table tr:nth-child(2n)) {
    background-color: #f6f8fa;
  }

  /* Mermaid Diagram Styles */
  :global(.mermaid-diagram) {
    margin: 1em 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
  }

  :global(.mermaid-header) {
    background-color: #f0f0f0;
    padding: 0.5em 1em;
    border-bottom: 1px solid #ddd;
    font-size: 0.9em;
    color: #333;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :global(.mermaid-title) {
    display: flex;
    align-items: center;
  }

  :global(.mermaid-title::before) {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: #569cd6;
    margin-right: 8px;
    border-radius: 3px;
  }

  :global(.mermaid-code) {
    background-color: #f8f8f8;
    padding: 1em;
    overflow-x: auto;
  }

  :global(.mermaid-code pre) {
    margin: 0;
    background-color: transparent;
  }

  :global(.mermaid-code code) {
    display: block;
    color: #333;
    background-color: transparent;
    padding: 0;
    white-space: pre;
  }

  :global(.markdown-preview .hljs) {
    background: transparent;
    padding: 0;
    color: #1e1e1e;
  }

  :global(.markdown-preview .hljs-keyword) {
    color: #ff6a00;
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-title) {
    color: #ffd700;
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-title.function_) {
    color: #005cc5;
  }

  :global(.markdown-preview .hljs-params) {
    color: #005f87;
  }

  :global(.markdown-preview .hljs-string) {
    color: #d10000;
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-comment) {
    color: #008000;
    font-style: italic;
  }

  :global(.markdown-preview .hljs-number) {
    color: #0000ff;
  }

  :global(.markdown-preview .hljs-built_in) {
    color: #00b7eb;
  }

  :global(.markdown-preview .hljs-variable) {
    color: #a31515;
  }

  :global(.markdown-preview .hljs-subst) {
    color: #b4009e;
  }

  :global(.markdown-preview .hljs-literal) {
    color: #ff4500;
  }

  :global(.markdown-preview .hljs-type) {
    color: #2b91af;
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-symbol) {
    color: #6600cc;
  }

  :global(.markdown-preview .hljs-punctuation) {
    color: #333;
  }

  :global(.markdown-preview .hljs-property) {
    color: #005cc5;
  }

  :global(.markdown-preview .hljs-operator) {
    color: #ff00ff;
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-decorator) {
    color: #ff1493;
  }

  :global(.markdown-preview .hljs-meta) {
    color: #ff4500;
  }

  :global(.markdown-preview .hljs-tag) {
    color: #005cc5;
  }

  :global(.markdown-preview .hljs-attr) {
    color: #ff1493;
  }

  :global(.markdown-preview .hljs-section) {
    color: #dcdcaa;
  }

  :global(.markdown-preview .hljs-emphasis) {
    font-style: italic;
  }

  :global(.markdown-preview .hljs-strong) {
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-addition) {
    color: #008000;
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-deletion) {
    color: #ff0000;
    font-weight: bold;
  }

  :global(.markdown-preview .hljs-selector-tag) {
    color: #000080;
  }

  :global(.markdown-preview .hljs-selector-id) {
    color: #800000;
  }

  :global(.markdown-preview .hljs-selector-class) {
    color: #007700;
  }

  :global(.markdown-preview .hljs-link) {
    color: #005cc5;
    text-decoration: underline;
  }

  :global(.markdown-preview .hljs-char) {
    color: #ff4500;
  }

  :global(.markdown-preview .hljs-escape) {
    color: #ff4500;
  }

  :global(.markdown-preview .hljs-regexp) {
    color: #ff0000;
  }

  :global(.markdown-preview .hljs-doctag) {
    color: #ff1493;
  }

  :global(.markdown-preview .hljs-name) {
    color: #005cc5;
  }

  :global(.markdown-preview .hljs-namespace) {
    color: #2b91af;
  }
</style>

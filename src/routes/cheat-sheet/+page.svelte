<script lang="ts">
  import MarkdownPreview from '$lib/components/MarkdownPreview.svelte';
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="mb-8 text-4xl font-bold">Markdown Cheat Sheet</h1>

  <div class="prose prose-lg max-w-none">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="rounded-lg border border-zinc-200 p-6">
        <h2 class="mb-4 text-2xl font-bold">Basic Syntax</h2>
        <table class="w-full">
          <thead>
            <tr>
              <th class="border-b p-2 text-left">Element</th>
              <th class="border-b p-2 text-left">Markdown Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2">Heading 1</td>
              <td class="border-b p-2"><code># Heading 1</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Heading 2</td>
              <td class="border-b p-2"><code>## Heading 2</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Bold</td>
              <td class="border-b p-2"><code>**bold text**</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Italic</td>
              <td class="border-b p-2"><code>*italic text*</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Strikethrough</td>
              <td class="border-b p-2"><code>~~strikethrough~~</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Unordered List</td>
              <td class="border-b p-2"><code>- List item</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Ordered List</td>
              <td class="border-b p-2"><code>1. List item</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Link</td>
              <td class="border-b p-2"><code>[Link text](URL)</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Image</td>
              <td class="border-b p-2"><code>![Alt text](image.jpg)</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Code</td>
              <td class="border-b p-2"><code>`code`</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Blockquote</td>
              <td class="border-b p-2"><code>> Blockquote text</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Horizontal Rule</td>
              <td class="border-b p-2"><code>---</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="rounded-lg border border-zinc-200 p-6">
        <h2 class="mb-4 text-2xl font-bold">Extended Syntax</h2>
        <table class="w-full">
          <thead>
            <tr>
              <th class="border-b p-2 text-left">Element</th>
              <th class="border-b p-2 text-left">Markdown Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2">Table</td>
              <td class="border-b p-2"
                ><code>| Header | Header |<br />|--------|--------|<br />| Cell | Cell |</code></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">Task List</td>
              <td class="border-b p-2"><code>- [ ] Task<br />- [x] Done</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Footnote</td>
              <td class="border-b p-2"><code>Text[^1]<br />[^1]: Footnote</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Definition List</td>
              <td class="border-b p-2"><code>Term<br />: Definition</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Mermaid Diagram</td>
              <td class="border-b p-2"
                ><code>```mermaid<br />graph TD<br />A --> B<br />```</code></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">Math Equation</td>
              <td class="border-b p-2"><code>$E = mc^2$</code></td>
            </tr>
            <tr>
              <td class="border-b p-2">Emoji</td>
              <td class="border-b p-2"><code>:smile: :heart:</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="mb-4 text-2xl font-bold">Quick Reference Examples</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="rounded-lg border border-zinc-200 p-4">
          <h3 class="mb-2 font-semibold">Basic Document Structure</h3>
          <pre class="rounded bg-zinc-100 p-4 whitespace-pre-wrap"># Main Title
## Section 1
Content goes here...

## Section 2
- List item 1
- List item 2

> Important note here</pre>
        </div>
        <div class="rounded-lg border border-zinc-200 p-4">
          <h3 class="mb-2 font-semibold">Advanced Formatting</h3>
          <pre class="rounded bg-zinc-100 p-4 whitespace-pre-wrap">| Feature | Support |
|---------|---------|
| Tables  | ✅      |
| Lists   | ✅      |
| Code    | ✅      |

- [ ] Task 1
- [x] Task 2

:smile: Happy coding!</pre>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="mb-4 text-2xl font-bold">Tips & Tricks</h2>
      <ul class="list-inside list-disc space-y-2">
        <li>Use <code>#</code> for headings (1-6 levels)</li>
        <li>Use <code>**</code> or <code>__</code> for bold text</li>
        <li>Use <code>*</code> or <code>_</code> for italic text</li>
        <li>Use <code>`</code> for inline code</li>
        <li>Use <code>```</code> for code blocks with syntax highlighting</li>
        <li>Use <code>></code> for blockquotes</li>
        <li>Use <code>-</code> or <code>*</code> for unordered lists</li>
        <li>Use <code>1.</code> for ordered lists</li>
        <li>Use <code>---</code> for horizontal rules</li>
        <li>Use <code>[text](url)</code> for links</li>
        <li>Use <code>![alt](url)</code> for images</li>
      </ul>
    </div>
  </div>
</div>

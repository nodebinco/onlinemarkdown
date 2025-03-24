<script lang="ts">
</script>

<svelte:head>
  <title>Markdown Cheat Sheet | OnlineMarkdown.com</title>
  <meta name="description" content="A comprehensive Markdown cheat sheet with basic and advanced syntax, examples, tips, and best practices for efficient Markdown writing." />
  <meta name="keywords" content="markdown, cheat sheet, quick reference, syntax, formatting, documentation, markdown editor, code blocks, tables, lists" />
</svelte:head>

<div class="max-w-6xl mx-auto mt-4 p-5 font-sans leading-relaxed text-gray-800">
  <h1 class="text-4xl font-bold mb-4">Markdown Cheat Sheet</h1>
  <p class="text-xl text-gray-600 mb-8">
    This cheat sheet provides a quick reference for the most commonly used Markdown syntax elements.
    Use it as a handy guide while writing your Markdown documents.
  </p>
  <div class="prose prose-lg max-w-none">


    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="rounded-lg border border-zinc-200 px-6 shadow-sm">
        <h2 class="text-2xl font-bold">Basic Syntax</h2>
        <table class="w-full text-base text-gray-800">
          <thead>
            <tr>
              <th class="border-b p-2 text-left">Element</th>
              <th class="border-b p-2 text-left">Markdown Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2">Heading 1</td>
              <td class="border-b p-2 font-mono text-sm"><strong># Heading 1</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Heading 2</td>
              <td class="border-b p-2 font-mono text-sm"><strong>## Heading 2</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Heading 3</td>
              <td class="border-b p-2 font-mono text-sm"><strong>### Heading 3</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Bold</td>
              <td class="border-b p-2 font-mono text-sm"><strong>**bold text**</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Italic</td>
              <td class="border-b p-2 font-mono text-sm"><strong>*italic text*</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Bold & Italic</td>
              <td class="border-b p-2 font-mono text-sm"><strong>***bold & italic***</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Strikethrough</td>
              <td class="border-b p-2 font-mono text-sm"><strong>~~strikethrough~~</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Unordered List</td>
              <td class="border-b p-2 font-mono text-sm"><strong>- List item<br>- Another item</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Ordered List</td>
              <td class="border-b p-2 font-mono text-sm"><strong>1. First item<br>2. Second item</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Link</td>
              <td class="border-b p-2 font-mono text-sm"><strong>[Link text](URL)</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Image</td>
              <td class="border-b p-2 font-mono text-sm"><strong>![Alt text](image.jpg)</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Inline Code</td>
              <td class="border-b p-2 font-mono text-sm"><strong>`code`</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Blockquote</td>
              <td class="border-b p-2 font-mono text-sm"><strong>> Blockquote text</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Horizontal Rule</td>
              <td class="border-b p-2 font-mono text-sm"><strong>---</strong> or <strong>***</strong> or <strong>___</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Line Break</td>
              <td class="border-b p-2 font-mono text-sm">End a line with two spaces</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="rounded-lg border border-zinc-200 px-6 shadow-sm">
        <h2 class="text-2xl font-bold">Extended Syntax</h2>
        <table class="w-full text-base text-gray-800">
          <thead>
            <tr>
              <th class="border-b p-2 text-left">Element</th>
              <th class="border-b p-2 text-left">Markdown Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2">Table</td>
              <td class="border-b p-2 font-mono text-sm"
                ><strong>| Header | Header |<br />|--------|--------|<br />| Cell | Cell |</strong></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">Aligned Table</td>
              <td class="border-b p-2 font-mono text-sm"
                ><strong>| Left | Center | Right |<br />|:-----|:------:|------:|<br />| Cell | Cell | Cell |</strong></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">Task List</td>
              <td class="border-b p-2 font-mono text-sm"><strong>- [ ] Task<br />- [x] Done</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Fenced Code Block</td>
              <td class="border-b p-2 font-mono text-sm"><strong>```language<br>code block<br>```</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Footnote</td>
              <td class="border-b p-2 font-mono text-sm"><strong>Text[^1]<br />[^1]: Footnote</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Definition List</td>
              <td class="border-b p-2 font-mono text-sm"><strong>Term<br />: Definition</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Mermaid Diagram</td>
              <td class="border-b p-2 font-mono text-sm"
                ><strong>```mermaid<br />graph TD<br />A --> B<br />```</strong></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">Math Equation</td>
              <td class="border-b p-2 font-mono text-sm"><strong>$E = mc^2$</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Emoji</td>
              <td class="border-b p-2 font-mono text-sm"><strong>:smile: :heart:</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Highlight</td>
              <td class="border-b p-2 font-mono text-sm"><strong>==highlighted text==</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Subscript</td>
              <td class="border-b p-2 font-mono text-sm"><strong>H~2~O</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">Superscript</td>
              <td class="border-b p-2 font-mono text-sm"><strong>X^2^</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="mb-4 text-2xl font-bold">Quick Reference Examples</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="rounded-lg border border-zinc-200 px-6">
          <h3 class="mb-2 font-semibold">Basic Document Structure</h3>
          <pre class="rounded bg-zinc-100 p-4 whitespace-pre-wrap text-gray-800 text-base"># Main Title
## Section 1
Content goes here...

## Section 2
- List item 1
- List item 2

> Important note here</pre>
        </div>
        <div class="rounded-lg border border-zinc-200 px-6">
          <h3 class="mb-2 font-semibold">Advanced Formatting</h3>
          <pre class="rounded bg-zinc-100 p-4 whitespace-pre-wrap text-gray-800 text-base">| Feature | Support |
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
      <ul class="list-inside list-disc space-y-2 text-base text-gray-800">
        <li>Use <strong>#</strong> for headings (1-6 levels)</li>
        <li>Use <strong>**</strong> or <strong>__</strong> for bold text</li>
        <li>Use <strong>*</strong> or <strong>_</strong> for italic text</li>
        <li>Use <strong>`</strong> for inline code</li>
        <li>Use <strong>```</strong> for code blocks with syntax highlighting</li>
        <li>Use <strong>></strong> for blockquotes</li>
        <li>Use <strong>-</strong> or <strong>*</strong> for unordered lists</li>
        <li>Use <strong>1.</strong> for ordered lists</li>
        <li>Use <strong>---</strong> for horizontal rules</li>
        <li>Use <strong>[text](url)</strong> for links</li>
        <li>Use <strong>![alt](url)</strong> for images</li>
      </ul>
    </div>
  </div>
</div>
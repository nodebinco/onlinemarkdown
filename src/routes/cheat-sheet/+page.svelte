<script lang="ts">
  import * as m from '$lib/paraglide/messages';
  import { getLocaleStore } from '$lib/i18n';

  const localeStore = getLocaleStore();
</script>

<svelte:head>
  <title>{m.cheatSheet_title({}, { locale: $localeStore })}</title>
  <meta name="description" content={m.cheatSheet_description({}, { locale: $localeStore })} />
  <meta name="keywords" content={m.cheatSheet_keywords({}, { locale: $localeStore })} />
</svelte:head>

<div class="mx-auto mt-4 max-w-6xl p-5 font-sans leading-relaxed text-gray-800">
  <h1 class="mb-4 text-4xl font-bold">{m.cheatSheet_h1({}, { locale: $localeStore })}</h1>
  <p class="mb-8 text-xl text-gray-600">{m.cheatSheet_intro({}, { locale: $localeStore })}</p>
  <div class="prose prose-lg max-w-none">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="rounded-lg border border-zinc-200 px-6 shadow-sm">
        <h2 class="text-2xl font-bold">{m.cheatSheet_basicTitle({}, { locale: $localeStore })}</h2>
        <table class="w-full text-base text-gray-800">
          <thead>
            <tr>
              <th class="border-b p-2 text-left">{m.cheatSheet_element({}, { locale: $localeStore })}</th>
              <th class="border-b p-2 text-left">{m.cheatSheet_markdownSyntax({}, { locale: $localeStore })}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_heading1({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong># Heading 1</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_heading2({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>## Heading 2</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_heading3({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>### Heading 3</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_bold({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>**bold text**</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_italic({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>*italic text*</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_boldItalic({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>***bold & italic***</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_strikethrough({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>~~strikethrough~~</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_unorderedList({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>- List item<br>- Another item</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_orderedList({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>1. First item<br>2. Second item</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_link({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>[Link text](URL)</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_image({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>![Alt text](image.jpg)</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_inlineCode({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>`code`</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_blockquote({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>> Blockquote text</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_horizontalRule({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>---</strong> or <strong>***</strong> or <strong>___</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_lineBreak({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm">{m.cheatSheet_lineBreakHint({}, { locale: $localeStore })}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="rounded-lg border border-zinc-200 px-6 shadow-sm">
        <h2 class="text-2xl font-bold">{m.cheatSheet_extendedTitle({}, { locale: $localeStore })}</h2>
        <table class="w-full text-base text-gray-800">
          <thead>
            <tr>
              <th class="border-b p-2 text-left">{m.cheatSheet_element({}, { locale: $localeStore })}</th>
              <th class="border-b p-2 text-left">{m.cheatSheet_markdownSyntax({}, { locale: $localeStore })}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_table({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"
                ><strong>| Header | Header |<br />|--------|--------|<br />| Cell | Cell |</strong></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_alignedTable({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"
                ><strong>| Left | Center | Right |<br />|:-----|:------:|------:|<br />| Cell | Cell | Cell |</strong></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_taskList({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>- [ ] Task<br />- [x] Done</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_fencedCodeBlock({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>```language<br>code block<br>```</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_footnote({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>Text[^1]<br />[^1]: Footnote</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_definitionList({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>Term<br />: Definition</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_mermaidDiagram({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"
                ><strong>```mermaid<br />graph TD<br />A --> B<br />```</strong></td
              >
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_mathEquation({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>$E = mc^2$</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_emoji({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>:smile: :heart:</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_highlight({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>==highlighted text==</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_subscript({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>H~2~O</strong></td>
            </tr>
            <tr>
              <td class="border-b p-2">{m.cheatSheet_superscript({}, { locale: $localeStore })}</td>
              <td class="border-b p-2 font-mono text-sm"><strong>X^2^</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="mb-4 text-2xl font-bold">{m.cheatSheet_examplesTitle({}, { locale: $localeStore })}</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="rounded-lg border border-zinc-200 px-6">
          <h3 class="mb-2 font-semibold">{m.cheatSheet_basicDocTitle({}, { locale: $localeStore })}</h3>
          <pre class="rounded bg-zinc-100 p-4 text-base whitespace-pre-wrap text-gray-800"># Main Title
## Section 1
Content goes here...

## Section 2
- List item 1
- List item 2

> Important note here</pre>
        </div>
        <div class="rounded-lg border border-zinc-200 px-6">
          <h3 class="mb-2 font-semibold">{m.cheatSheet_advancedFormatTitle({}, { locale: $localeStore })}</h3>
          <pre class="rounded bg-zinc-100 p-4 text-base whitespace-pre-wrap text-gray-800">| Feature | Support |
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
      <h2 class="mb-4 text-2xl font-bold">{m.cheatSheet_tipsTitle({}, { locale: $localeStore })}</h2>
      <ul class="list-inside list-disc space-y-2 text-base text-gray-800">
        <li>{m.cheatSheet_tip1({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip2({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip3({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip4({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip5({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip6({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip7({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip8({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip9({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip10({}, { locale: $localeStore })}</li>
        <li>{m.cheatSheet_tip11({}, { locale: $localeStore })}</li>
      </ul>
    </div>
  </div>
</div>

<script lang="ts">
  import { page } from '$app/stores';
  import * as m from '$lib/paraglide/messages';

  const locale = $derived($page.data?.locale ?? 'en');
</script>

<svelte:head>
  <title>{m.syntax_title({}, { locale: locale })}</title>
  <meta name="description" content={m.syntax_description({}, { locale: locale })} />
  <meta name="keywords" content={m.syntax_keywords({}, { locale: locale })} />
</svelte:head>

<div class="max-w-6xl mx-auto mt-4 p-5 font-sans leading-relaxed text-gray-800">
  <h1 class="text-4xl font-bold mb-4">{m.syntax_h1({}, { locale: locale })}</h1>
  <p class="text-xl text-gray-600 mb-8">{m.syntax_subtitle({}, { locale: locale })}</p>

  <section id="overview" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_overviewTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_overview1({}, { locale: locale })}</p>
    <p class="mb-4">{m.syntax_overview2({}, { locale: locale })}</p>
  </section>

  <section id="headings" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_headingsTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_headingsIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300"># Heading level 1</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;h1&gt;Heading level 1&lt;/h1&gt;</div>
        <div class="p-3"><h1 class="text-2xl font-bold">Heading level 1</h1></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">## Heading level 2</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;h2&gt;Heading level 2&lt;/h2&gt;</div>
        <div class="p-3"><h2 class="text-xl font-bold">Heading level 2</h2></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">### Heading level 3</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;h3&gt;Heading level 3&lt;/h3&gt;</div>
        <div class="p-3"><h3 class="text-lg font-bold">Heading level 3</h3></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">#### Heading level 4</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;h4&gt;Heading level 4&lt;/h4&gt;</div>
        <div class="p-3"><h4 class="text-base font-bold">Heading level 4</h4></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">##### Heading level 5</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;h5&gt;Heading level 5&lt;/h5&gt;</div>
        <div class="p-3"><h5 class="text-sm font-bold">Heading level 5</h5></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">###### Heading level 6</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;h6&gt;Heading level 6&lt;/h6&gt;</div>
        <div class="p-3"><h6 class="text-xs font-bold">Heading level 6</h6></div>
      </div>
    </div>
  </section>

  <section id="paragraphs" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_paragraphsTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_paragraphsIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          I really like using Markdown.<br><br>It lets me write easily.
        </div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          &lt;p&gt;I really like using Markdown.&lt;/p&gt;<br>&lt;p&gt;It lets me write easily.&lt;/p&gt;
        </div>
        <div class="p-3">
          <p class="mb-4">I really like using Markdown.</p><p>It lets me write easily.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="line-breaks" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_lineBreaksTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_lineBreaksIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          This is the first line.  <br>And this is the second line.
        </div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          &lt;p&gt;This is the first line.&lt;br&gt;<br>
          And this is the second line.&lt;/p&gt;
        </div>
        <div class="p-3">
          <p>This is the first line.<br>And this is the second line.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="emphasis" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_emphasisTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_emphasisIntro({}, { locale: locale })}</p>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_boldTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_boldIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">I just love **bold text**.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">I just love &lt;strong&gt;bold text&lt;/strong&gt;.</div>
        <div class="p-3"><p>I just love <strong>bold text</strong>.</p></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">I just love __bold text__.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">I just love &lt;strong&gt;bold text&lt;/strong&gt;.</div>
        <div class="p-3"><p>I just love <strong>bold text</strong>.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_italicTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_italicIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">The *cat* meows.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">The &lt;em&gt;cat&lt;/em&gt; meows.</div>
        <div class="p-3"><p>The <em>cat</em> meows.</p></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">The _cat_ meows.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">The &lt;em&gt;cat&lt;/em&gt; meows.</div>
        <div class="p-3"><p>The <em>cat</em> meows.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_boldItalicTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_boldItalicIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">This text is ***really important***.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">This text is &lt;strong&gt;&lt;em&gt;really important&lt;/em&gt;&lt;/strong&gt;.</div>
        <div class="p-3"><p>This text is <strong><em>really important</em></strong>.</p></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">This text is ___really important___.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">This text is &lt;strong&gt;&lt;em&gt;really important&lt;/em&gt;&lt;/strong&gt;.</div>
        <div class="p-3"><p>This text is <strong><em>really important</em></strong>.</p></div>
      </div>
    </div>
  </section>

  <section id="blockquotes" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_blockquotesTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_blockquotesIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">> Dorothy followed her through many of the beautiful rooms in her castle.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;blockquote&gt;&lt;p&gt;Dorothy followed her through many of the beautiful rooms in her castle.&lt;/p&gt;&lt;/blockquote&gt;</div>
        <div class="p-3">
          <blockquote class="pl-4 border-l-4 border-gray-300 text-gray-600">
            <p>Dorothy followed her through many of the beautiful rooms in her castle.</p>
          </blockquote>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_nestedBlockquotesTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_nestedBlockquotesIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          > Dorothy followed her through many of the beautiful rooms in her castle.<br>><br>>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
        </div>
        <div class="p-3">
          <blockquote class="pl-4 border-l-4 border-gray-300 text-gray-600">
            <p>Dorothy followed her through many of the beautiful rooms in her castle.</p>
            <blockquote class="pl-4 border-l-4 border-gray-300 text-gray-600 mt-2">
              <p>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.</p>
            </blockquote>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <section id="lists" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_listsTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_listsIntro({}, { locale: locale })}</p>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_orderedListsTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_orderedListsIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          1. First item<br>2. Second item<br>3. Third item<br>4. Fourth item
        </div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          &lt;ol&gt;<br>&nbsp;&nbsp;&lt;li&gt;First item&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Second item&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Third item&lt;/li&gt;<br>&nbsp;&nbsp;&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ol&gt;
        </div>
        <div class="p-3">
          <ol class="list-decimal pl-5">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
          </ol>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_unorderedListsTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_unorderedListsIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          - First item<br>
          - Second item<br>
          - Third item<br>
          - Fourth item
        </div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          &lt;ul&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;First item&lt;/li&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;Second item&lt;/li&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;Third item&lt;/li&gt;<br>
          &nbsp;&nbsp;&lt;li&gt;Fourth item&lt;/li&gt;<br>
          &lt;/ul&gt;
        </div>
        <div class="p-3">
          <ul class="list-disc pl-5">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="code" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_codeTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_codeIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">At the command prompt, type `nano`.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">At the command prompt, type &lt;code&gt;nano&lt;/code&gt;.</div>
        <div class="p-3"><p>At the command prompt, type <code class="bg-gray-100 px-1 rounded font-mono">nano</code>.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_codeBlocksTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_codeBlocksIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          ```<br>
          &#123;<br>
          &nbsp;&nbsp;"firstName": "John",<br>
          &nbsp;&nbsp;"lastName": "Smith",<br>
          &nbsp;&nbsp;"age": 25<br>
          &#125;<br>
          ```
        </div>
        <div class="p-3">
          <pre class="bg-gray-100 p-4 rounded font-mono text-sm"><code>&#123;
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
&#125;</code></pre>
        </div>
      </div>
    </div>
  </section>

  <section id="horizontal-rules" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_horizontalRulesTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_horizontalRulesIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">***</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;hr&gt;</div>
        <div class="p-3"><hr class="border-t border-gray-300"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">---</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;hr&gt;</div>
        <div class="p-3"><hr class="border-t border-gray-300"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">___</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">&lt;hr&gt;</div>
        <div class="p-3"><hr class="border-t border-gray-300"></div>
      </div>
    </div>
  </section>

  <section id="links" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_linksTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_linksIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is [Duck Duck Go](https://duckduckgo.com).</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is &lt;a href="https://duckduckgo.com"&gt;Duck Duck Go&lt;/a&gt;.</div>
        <div class="p-3"><p>My favorite search engine is <a href="https://duckduckgo.com" class="hover:underline" rel="noopener noreferrer">Duck Duck Go</a>.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_addingTitlesTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_addingTitlesIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_html({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is &lt;a href="https://duckduckgo.com" title="The best search engine for privacy"&gt;Duck Duck Go&lt;/a&gt;.</div>
        <div class="p-3"><p>My favorite search engine is <a href="https://duckduckgo.com" title="The best search engine for privacy" class="hover:underline"  rel="noopener noreferrer">Duck Duck Go</a>.</p></div>
      </div>
    </div>
  </section>

  <section id="images" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_imagesTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_imagesIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3">HTML</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">![The San Juan Mountains](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg "San Juan Mountains")</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all">&lt;img src="https://mdg.imgix.net/assets/images/san-juan-mountains.jpg" alt="The San Juan Mountains" title="San Juan Mountains"&gt;</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all"><img src="https://mdg.imgix.net/assets/images/san-juan-mountains.jpg" alt="The San Juan Mountains" title="San Juan Mountains"></div>
      </div>
    </div>
  </section>

  <section id="escaping-characters" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_escapingTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_escapingIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">\* Without the backslash, this would be a bullet in an unordered list.</div>
        <div class="p-3"><p>* Without the backslash, this would be a bullet in an unordered list.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_escapingCharsTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_escapingCharsIntro({}, { locale: locale })}</p>

    <table class="w-full border-collapse mb-6">
      <tbody>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">\</td>
          <td class="p-2 border border-gray-300">backslash</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">`</td>
          <td class="p-2 border border-gray-300">backtick</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">*</td>
          <td class="p-2 border border-gray-300">asterisk</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">_</td>
          <td class="p-2 border border-gray-300">underscore</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">&#123; &#125;</td>
          <td class="p-2 border border-gray-300">curly braces</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">[ ]</td>
          <td class="p-2 border border-gray-300">brackets</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">( )</td>
          <td class="p-2 border border-gray-300">parentheses</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">#</td>
          <td class="p-2 border border-gray-300">pound sign</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">+</td>
          <td class="p-2 border border-gray-300">plus sign</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">-</td>
          <td class="p-2 border border-gray-300">minus sign (hyphen)</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">.</td>
          <td class="p-2 border border-gray-300">dot</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">!</td>
          <td class="p-2 border border-gray-300">exclamation mark</td>
        </tr>
        <tr class="border border-gray-300">
          <td class="p-2 border border-gray-300 font-mono text-center w-12">|</td>
          <td class="p-2 border border-gray-300">pipe</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="tables" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">{m.syntax_tablesTitle({}, { locale: locale })}</h2>
    <p class="mb-4">{m.syntax_tablesIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          | Syntax&nbsp;&nbsp;&nbsp; | Description |<br>| --------- | ----------- |<br>| Header&nbsp;&nbsp;&nbsp;&nbsp;| Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |<br>| Paragraph | Text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
        </div>
        <div class="p-3">
          <table class="min-w-full border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="p-2 border border-gray-300 text-left">Syntax</th>
                <th class="p-2 border border-gray-300 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-gray-300">Header</td>
                <td class="p-2 border border-gray-300">Title</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300">Paragraph</td>
                <td class="p-2 border border-gray-300">Text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">{m.syntax_alignmentTitle({}, { locale: locale })}</h3>
    <p class="mb-4">{m.syntax_alignmentIntro({}, { locale: locale })}</p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">{m.syntax_markdown({}, { locale: locale })}</div>
        <div class="p-3">{m.syntax_renderedOutput({}, { locale: locale })}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          | Align Left | Align Center | Align Right |<br>| :--- | :---: | ---: |<br>| This | This | This |<br>| column | column | column |<br>| will | will | will |<br>| align | align | align |<br>| left | center | right |
        </div>
        <div class="p-3">
          <table class="min-w-full border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="p-2 border border-gray-300 text-left">{m.syntax_alignLeft({}, { locale: locale })}</th>
                <th class="p-2 border border-gray-300 text-center">{m.syntax_alignCenter({}, { locale: locale })}</th>
                <th class="p-2 border border-gray-300 text-right">{m.syntax_alignRight({}, { locale: locale })}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border border-gray-300 text-left">This</td>
                <td class="p-2 border border-gray-300 text-center">This</td>
                <td class="p-2 border border-gray-300 text-right">This</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 text-left">column</td>
                <td class="p-2 border border-gray-300 text-center">column</td>
                <td class="p-2 border border-gray-300 text-right">column</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 text-left">will</td>
                <td class="p-2 border border-gray-300 text-center">will</td>
                <td class="p-2 border border-gray-300 text-right">will</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 text-left">align</td>
                <td class="p-2 border border-gray-300 text-center">align</td>
                <td class="p-2 border border-gray-300 text-right">align</td>
              </tr>
              <tr>
                <td class="p-2 border border-gray-300 text-left">left</td>
                <td class="p-2 border border-gray-300 text-center">center</td>
                <td class="p-2 border border-gray-300 text-right">right</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

</div>
<svelte:head>
  <title>Markdown Syntax Guide | Online Markdown Editor</title>
  <meta name="description" content="A comprehensive guide to Markdown syntax, including headings, paragraphs, formatting, lists, code blocks, and more. Learn how to format your documents with Markdown." />
  <meta name="keywords" content="markdown, syntax, guide, formatting, documentation, text editor, markdown editor, headings, lists, code blocks, links, images, tables" />
</svelte:head>

<div class="max-w-6xl mx-auto mt-4 p-5 font-sans leading-relaxed text-gray-800">
  <h1 class="text-4xl font-bold mb-2">Markdown Syntax Guide</h1>
  <p class="text-xl text-gray-600 mb-8">Essential syntax for formatting your documents</p>

  <section id="overview" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Overview</h2>
    <p class="mb-4">
      Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. 
      Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.
    </p>
    <p class="mb-4">
      Using Markdown is different than using a WYSIWYG editor. In an application like Microsoft Word, you click buttons 
      to format words and phrases, and the changes are visible immediately. Markdown isn't like that. When you create a 
      Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.
    </p>
  </section>

  <section id="headings" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Headings</h2>
    <p class="mb-4">
      To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond 
      to the heading level. For example, to create a heading level three, use three number signs (e.g., ### My Heading).
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Paragraphs</h2>
    <p class="mb-4">
      To create paragraphs, use a blank line to separate one or more lines of text.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Line Breaks</h2>
    <p class="mb-4">
      To create a line break or new line, end a line with two or more spaces, and then press return.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Emphasis</h2>
    <p class="mb-4">
      You can add emphasis by making text bold or italic.
    </p>

    <h3 class="text-xl font-bold mt-6 mb-3">Bold</h3>
    <p class="mb-4">
      To bold text, add two asterisks (**) or underscores (__) before and after a word or phrase.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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

    <h3 class="text-xl font-bold mt-6 mb-3">Italic</h3>
    <p class="mb-4">
      To italicize text, add one asterisk (*) or underscore (_) before and after a word or phrase.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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

    <h3 class="text-xl font-bold mt-6 mb-3">Bold and Italic</h3>
    <p class="mb-4">
      To emphasize text with bold and italics at the same time, add three asterisks (***) or underscores (___) before and after a word or phrase.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Blockquotes</h2>
    <p class="mb-4">
      To create a blockquote, add a > in front of a paragraph.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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

    <h3 class="text-xl font-bold mt-6 mb-3">Nested Blockquotes</h3>
    <p class="mb-4">
      Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Lists</h2>
    <p class="mb-4">
      You can organize items into ordered and unordered lists.
    </p>

    <h3 class="text-xl font-bold mt-6 mb-3">Ordered Lists</h3>
    <p class="mb-4">
      To create an ordered list, add line items with numbers followed by periods. The numbers don't have to be in numerical order, but the list should start with the number one.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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

    <h3 class="text-xl font-bold mt-6 mb-3">Unordered Lists</h3>
    <p class="mb-4">
      To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Code</h2>
    <p class="mb-4">
      To denote a word or phrase as code, enclose it in backticks (`).
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">At the command prompt, type `nano`.</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">At the command prompt, type &lt;code&gt;nano&lt;/code&gt;.</div>
        <div class="p-3"><p>At the command prompt, type <code class="bg-gray-100 px-1 rounded font-mono">nano</code>.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">Code Blocks</h3>
    <p class="mb-4">
      To create code blocks, indent every line of the block by at least four spaces or one tab, or use triple backticks (```) before and after the code block.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Horizontal Rules</h2>
    <p class="mb-4">
      To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Links</h2>
    <p class="mb-4">
      To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is [Duck Duck Go](https://duckduckgo.com).</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is &lt;a href="https://duckduckgo.com"&gt;Duck Duck Go&lt;/a&gt;.</div>
        <div class="p-3"><p>My favorite search engine is <a href="https://duckduckgo.com" class="hover:underline" rel="noopener noreferrer">Duck Duck Go</a>.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">Adding Titles</h3>
    <p class="mb-4">
      You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in quotation marks after the URL.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">HTML</div>
        <div class="p-3">Rendered Output</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">My favorite search engine is &lt;a href="https://duckduckgo.com" title="The best search engine for privacy"&gt;Duck Duck Go&lt;/a&gt;.</div>
        <div class="p-3"><p>My favorite search engine is <a href="https://duckduckgo.com" title="The best search engine for privacy" class="hover:underline"  rel="noopener noreferrer">Duck Duck Go</a>.</p></div>
      </div>
    </div>
  </section>

  <section id="images" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Images</h2>
    <p class="mb-4">
      To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3">HTML</div>
        <div class="p-3">Rendered Output</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">![The San Juan Mountains](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg "San Juan Mountains")</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all">&lt;img src="https://mdg.imgix.net/assets/images/san-juan-mountains.jpg" alt="The San Juan Mountains" title="San Juan Mountains"&gt;</div>
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all"><img src="https://mdg.imgix.net/assets/images/san-juan-mountains.jpg" alt="The San Juan Mountains" title="San Juan Mountains"></div>
      </div>
    </div>
  </section>

  <section id="escaping-characters" class="mb-8">
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Escaping Characters</h2>
    <p class="mb-4">
      To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (\) in front of the character.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3">Rendered Output</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">\* Without the backslash, this would be a bullet in an unordered list.</div>
        <div class="p-3"><p>* Without the backslash, this would be a bullet in an unordered list.</p></div>
      </div>
    </div>

    <h3 class="text-xl font-bold mt-6 mb-3">Characters You Can Escape</h3>
    <p class="mb-4">
      You can use a backslash to escape the following characters:
    </p>

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
    <h2 class="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-gray-200">Tables</h2>
    <p class="mb-4">
      To add a table, use three or more hyphens (---) to create each column's header, and use pipes (|) to separate each column. You can optionally add pipes on either end of the table.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3">Rendered Output</div>
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

    <h3 class="text-xl font-bold mt-6 mb-3">Alignment</h3>
    <p class="mb-4">
      You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both sides of the hyphens within the header row.
    </p>

    <div class="border border-gray-300 rounded-md overflow-hidden mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 bg-gray-100 font-bold">
        <div class="p-3 border-b md:border-b-0 md:border-r border-gray-300">Markdown</div>
        <div class="p-3">Rendered Output</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
        <div class="p-3 font-mono text-sm bg-gray-50 whitespace-pre-wrap break-all border-b md:border-b-0 md:border-r border-gray-300">
          | Align Left | Align Center | Align Right |<br>| :--- | :---: | ---: |<br>| This | This | This |<br>| column | column | column |<br>| will | will | will |<br>| align | align | align |<br>| left | center | right |
        </div>
        <div class="p-3">
          <table class="min-w-full border border-gray-300">
            <thead>
              <tr class="bg-gray-100">
                <th class="p-2 border border-gray-300 text-left">Align Left</th>
                <th class="p-2 border border-gray-300 text-center">Align Center</th>
                <th class="p-2 border border-gray-300 text-right">Align Right</th>
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
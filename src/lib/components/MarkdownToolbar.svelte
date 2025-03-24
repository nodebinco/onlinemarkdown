<script lang="ts">
  import {
    File,
    LayoutGrid,
    Undo,
    Redo,
    Heading,
    ChevronDown,
    List,
    ListOrdered,
    Quote,
    Code,
    Table,
    Link,
    Image,
    Printer,
    Maximize,
    Minimize,
    Save,
    SplitSquareVertical
  } from 'lucide-svelte';
  import ImageDialog from './ImageDialog.svelte';
  import LinkDialog from './LinkDialog.svelte';
  import { createEventDispatcher } from 'svelte';
  import { on } from 'svelte/events';

  let {
    editorElement = $bindable(),
    markdown = '',
    isSplitView = true,
    isFullScreen = false,
    isSidebarOpen = false,
    currentFileName = 'Untitled',
    onToggleSidebar,
    onToggleFullScreen,
    onToggleSplitView,
    onSaveToDisk,
    onContentChange,
    onUndo,
    onRedo,
    onNewFile
  } = $props();

  let imageDialogOpen = $state(false);
  let linkDialogOpen = $state(false);
  let showHeadingMenu = $state(false);
  let selectedText = $state('');

  const getSelectedText = () => {
    if (!editorElement) return '';

    const start = editorElement.selectionStart;
    const end = editorElement.selectionEnd;

    return markdown.substring(start, end);
  };

  const insertText = (before: string, after = '') => {
    if (!editorElement) return;

    const start = editorElement.selectionStart;
    const end = editorElement.selectionEnd;
    selectedText = markdown.substring(start, end);

    const newText =
      markdown.substring(0, start) + before + selectedText + after + markdown.substring(end);

    onContentChange?.(newText);

    setTimeout(() => {
      if (editorElement) {
        const newPosition = start + before.length + selectedText.length + after.length;
        editorElement.selectionStart = editorElement.selectionEnd = newPosition;
        editorElement.focus();
      }
    }, 0);
  };

  const formatBold = () => insertText('**', '**');
  const formatItalic = () => insertText('*', '*');
  const formatCode = () => insertText('`', '`');
  const formatStrikethrough = () => insertText('~~', '~~');
  const formatHeading = (level: number) => insertText(`${'#'.repeat(level)} `);
  const formatSuperscript = () => insertText('<sup>', '</sup>');
  const formatSubscript = () => insertText('<sub>', '</sub>');
  const formatBulletList = () => insertText('- ');
  const formatNumberedList = () => insertText('1. ');
  const formatBlockquote = () => insertText('> ');
  const formatCodeBlock = () => insertText('```\n', '\n```');
  const formatTable = () =>
    insertText('| Header | Header |\n| ------ | ------ |\n| Cell   | Cell   |\n');

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const previewContent = document.querySelector('.markdown-preview')?.innerHTML || '';

    const htmlContent = [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<title>OnlineMarkdown.com</title>',
      '<style>',
      'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 800px; margin: 0 auto; }',
      'pre { background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto; }',
      'code { background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px; }',
      'table { border-collapse: collapse; width: 100%; }',
      'table, th, td { border: 1px solid #ddd; }',
      'th, td { padding: 8px; text-align: left; }',
      'blockquote { border-left: 4px solid #ddd; padding-left: 16px; margin-left: 0; color: #666; }',
      'img { max-width: 100%; }',
      '@media print { body { padding: 0; } }',
      '</style>',
      '</head>',
      '<body>',
      '<div id="content"></div>',
      '<script>',
      `document.getElementById("content").innerHTML = ${JSON.stringify(previewContent)};`,
      'window.onload = function() { window.print(); }',
      '<\/script>',
      '</body>',
      '</html>'
    ].join('');

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleImageInsert = ({ url, alt }: { url: string; alt: string }) => {
    insertText(`![${alt}](${url})`);
    imageDialogOpen = false;
  };

  const handleLinkInsert = ({ url, text }: { url: string; text: string }) => {
    insertText(`[${text}](${url})`);
    linkDialogOpen = false;
  };
</script>

<div
  class="z-10 flex items-center space-x-1 overflow-x-auto overflow-y-hidden border-b border-gray-300 bg-gray-100 p-1"
>
  <div class="flex items-center">
    <button
      onclick={onNewFile}
      class="cursor-pointer rounded p-1 hover:bg-gray-200"
      title="New File"
    >
      <File size={24} />
    </button>

    <button
      onclick={onToggleSidebar}
      class="ml-1 cursor-pointer rounded p-1 hover:bg-gray-200"
      title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
    >
      <LayoutGrid size={24} />
    </button>
  </div>

  <button
    onclick={onToggleSplitView}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title={isSplitView ? 'Hide Preview' : 'Show Preview'}
  >
    <SplitSquareVertical size={24} />
  </button>

  <div class="mx-1 h-6 border-l"></div>

  <button onclick={onUndo} class="cursor-pointer rounded p-1 hover:bg-gray-200" title="Undo">
    <Undo size={24} />
  </button>

  <button onclick={onRedo} class="cursor-pointer rounded p-1 hover:bg-gray-200" title="Redo">
    <Redo size={24} />
  </button>

  <div class="mx-1 h-6 border-l"></div>

  <div class="static">
    <button
      onclick={() => (showHeadingMenu = !showHeadingMenu)}
      class="flex cursor-pointer items-center rounded p-1 hover:bg-gray-200"
      title="Headings"
    >
      <Heading size={24} />
      <ChevronDown size={16} class="ml-1" />
    </button>

    {#if showHeadingMenu}
      <div class="absolute top-23 left-35 z-60 mt-1 w-40 rounded border bg-white shadow-lg">
        <button
          onclick={() => {
            formatHeading(1);
            showHeadingMenu = false;
          }}
          class="block w-full cursor-pointer px-4 py-2 text-left text-xl font-bold hover:bg-gray-100"
        >
          Heading 1
        </button>
        <button
          onclick={() => {
            formatHeading(2);
            showHeadingMenu = false;
          }}
          class="block w-full cursor-pointer px-4 py-2 text-left text-lg font-bold hover:bg-gray-100"
        >
          Heading 2
        </button>
        <button
          onclick={() => {
            formatHeading(3);
            showHeadingMenu = false;
          }}
          class="block w-full cursor-pointer px-4 py-2 text-left text-base font-bold hover:bg-gray-100"
        >
          Heading 3
        </button>
        <button
          onclick={() => {
            formatHeading(4);
            showHeadingMenu = false;
          }}
          class="block w-full cursor-pointer px-4 py-2 text-left text-sm font-bold hover:bg-gray-100"
        >
          Heading 4
        </button>
        <button
          onclick={() => {
            formatHeading(5);
            showHeadingMenu = false;
          }}
          class="block w-full cursor-pointer px-4 py-2 text-left text-xs font-bold hover:bg-gray-100"
        >
          Heading 5
        </button>
        <button
          onclick={() => {
            formatHeading(6);
            showHeadingMenu = false;
          }}
          class="block w-full cursor-pointer px-4 py-2 text-left text-xs font-bold hover:bg-gray-100"
        >
          Heading 6
        </button>
      </div>
    {/if}
  </div>

  <button
    onclick={formatBold}
    class="cursor-pointer rounded p-1 font-bold hover:bg-gray-200"
    title="Bold"
  >
    B
  </button>

  <button
    onclick={formatItalic}
    class="cursor-pointer rounded p-1 italic hover:bg-gray-200"
    title="Italic"
  >
    I
  </button>

  <button
    onclick={formatStrikethrough}
    class="cursor-pointer rounded p-1 line-through hover:bg-gray-200"
    title="Strikethrough"
  >
    S
  </button>

  <button
    onclick={formatSuperscript}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Superscript"
  >
    X<sup>2</sup>
  </button>

  <button
    onclick={formatSubscript}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Subscript"
  >
    X<sub>2</sub>
  </button>

  <div class="mx-1 h-6 border-l"></div>

  <button
    onclick={formatBulletList}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Bullet List"
  >
    <List size={24} />
  </button>

  <button
    onclick={formatNumberedList}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Numbered List"
  >
    <ListOrdered size={24} />
  </button>

  <button
    onclick={formatBlockquote}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Quote"
  >
    <Quote size={24} />
  </button>

  <button
    onclick={formatCodeBlock}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Code"
  >
    <Code size={24} />
  </button>

  <button onclick={formatTable} class="cursor-pointer rounded p-1 hover:bg-gray-200" title="Table">
    <Table size={24} />
  </button>

  <button
    onclick={() => {
      selectedText = getSelectedText();
      linkDialogOpen = true;
    }}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Link"
  >
    <Link size={24} />
  </button>

  <button
    onclick={() => {
      imageDialogOpen = true;
    }}
    class="cursor-pointer rounded p-1 hover:bg-gray-200"
    title="Image"
  >
    <Image size={24} />
  </button>

  <div class="mx-1 h-6 border-l md:hidden"></div>

  <div class="ml-auto flex items-center">
    <button
      onclick={handlePrint}
      class="mr-2 cursor-pointer rounded p-1 hover:bg-gray-200"
      title="Print"
    >
      <Printer size={24} />
    </button>

    <button
      onclick={onToggleFullScreen}
      class="mr-2 cursor-pointer rounded p-1 hover:bg-gray-200"
      title={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
    >
      {#if isFullScreen}
        <Minimize size={24} />
      {:else}
        <Maximize size={24} />
      {/if}
    </button>

    <button
      onclick={onSaveToDisk}
      class="mr-2 cursor-pointer rounded p-1 hover:bg-gray-200"
      title="Save to Disk"
    >
      <Save size={24} />
    </button>
  </div>
</div>

{#if imageDialogOpen}
  <ImageDialog
    open={imageDialogOpen}
    onInsert={handleImageInsert}
    onClose={() => (imageDialogOpen = false)}
  />
{/if}

{#if linkDialogOpen}
  <LinkDialog
    open={linkDialogOpen}
    {selectedText}
    onInsert={handleLinkInsert}
    onClose={() => (linkDialogOpen = false)}
  />
{/if}

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

	let {
		editorElement,
		markdown = '',
		isSplitView = true,
		isFullScreen = false,
		isSidebarOpen = false,
		currentFileName = 'Untitled',
		onContentChange,
		onToggleSidebar,
		onToggleFullScreen,
		onToggleSplitView,
		onSaveToDisk
	} = $props();

	let imageDialogOpen = false;
	let linkDialogOpen = false;
	let showHeadingMenu = false;
	let selectedText = '';

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

		// Set cursor position after insertion
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
		window.print();
	};
</script>

<div class="flex items-center space-x-1 border-b bg-gray-100 p-1">
	<div class="flex items-center">
		<button class="rounded p-1 hover:bg-gray-200" title="File">
			<File size={20} />
		</button>

		<button
			on:click={() => onToggleSidebar()}
			class="ml-1 rounded p-1 hover:bg-gray-200"
			title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
		>
			<LayoutGrid size={20} />
		</button>
	</div>

	<div class="mx-1 h-6 border-l"></div>

	<button class="rounded p-1 hover:bg-gray-200" title="Undo">
		<Undo size={20} />
	</button>

	<button class="rounded p-1 hover:bg-gray-200" title="Redo">
		<Redo size={20} />
	</button>

	<div class="mx-1 h-6 border-l"></div>

	<div class="relative">
		<button
			on:click={() => (showHeadingMenu = !showHeadingMenu)}
			class="flex items-center rounded p-1 hover:bg-gray-200"
			title="Headings"
		>
			<Heading size={20} />
			<ChevronDown size={16} class="ml-1" />
		</button>

		{#if showHeadingMenu}
			<div class="absolute top-full left-0 z-10 mt-1 rounded border bg-white shadow-lg">
				<button
					on:click={() => {
						formatHeading(1);
						showHeadingMenu = false;
					}}
					class="block w-full px-4 py-2 text-left text-xl font-bold hover:bg-gray-100"
				>
					Heading 1
				</button>
				<button
					on:click={() => {
						formatHeading(2);
						showHeadingMenu = false;
					}}
					class="block w-full px-4 py-2 text-left text-lg font-bold hover:bg-gray-100"
				>
					Heading 2
				</button>
				<button
					on:click={() => {
						formatHeading(3);
						showHeadingMenu = false;
					}}
					class="block w-full px-4 py-2 text-left text-base font-bold hover:bg-gray-100"
				>
					Heading 3
				</button>
				<button
					on:click={() => {
						formatHeading(4);
						showHeadingMenu = false;
					}}
					class="block w-full px-4 py-2 text-left text-sm font-bold hover:bg-gray-100"
				>
					Heading 4
				</button>
				<button
					on:click={() => {
						formatHeading(5);
						showHeadingMenu = false;
					}}
					class="block w-full px-4 py-2 text-left text-xs font-bold hover:bg-gray-100"
				>
					Heading 5
				</button>
				<button
					on:click={() => {
						formatHeading(6);
						showHeadingMenu = false;
					}}
					class="block w-full px-4 py-2 text-left text-xs font-bold hover:bg-gray-100"
				>
					Heading 6
				</button>
			</div>
		{/if}
	</div>

	<button on:click={formatBold} class="rounded p-1 font-bold hover:bg-gray-200" title="Bold">
		B
	</button>

	<button on:click={formatItalic} class="rounded p-1 italic hover:bg-gray-200" title="Italic">
		I
	</button>

	<button
		on:click={formatStrikethrough}
		class="rounded p-1 line-through hover:bg-gray-200"
		title="Strikethrough"
	>
		S
	</button>

	<button on:click={formatSuperscript} class="rounded p-1 hover:bg-gray-200" title="Superscript">
		X<sup>2</sup>
	</button>

	<button on:click={formatSubscript} class="rounded p-1 hover:bg-gray-200" title="Subscript">
		X<sub>2</sub>
	</button>

	<div class="mx-1 h-6 border-l"></div>

	<button on:click={formatBulletList} class="rounded p-1 hover:bg-gray-200" title="Bullet List">
		<List size={20} />
	</button>

	<button on:click={formatNumberedList} class="rounded p-1 hover:bg-gray-200" title="Numbered List">
		<ListOrdered size={20} />
	</button>

	<button on:click={formatBlockquote} class="rounded p-1 hover:bg-gray-200" title="Quote">
		<Quote size={20} />
	</button>

	<button on:click={formatCodeBlock} class="rounded p-1 hover:bg-gray-200" title="Code">
		<Code size={20} />
	</button>

	<button on:click={formatTable} class="rounded p-1 hover:bg-gray-200" title="Table">
		<Table size={20} />
	</button>

	<button
		on:click={() => (linkDialogOpen = true)}
		class="rounded p-1 hover:bg-gray-200"
		title="Link"
	>
		<Link size={20} />
	</button>

	<button
		on:click={() => (imageDialogOpen = true)}
		class="rounded p-1 hover:bg-gray-200"
		title="Image"
	>
		<Image size={20} />
	</button>

	<div class="ml-auto flex items-center">
		<button on:click={handlePrint} class="mr-2 rounded p-1 hover:bg-gray-200" title="Print">
			<Printer size={20} />
		</button>

		<button
			on:click={() => onToggleFullScreen()}
			class="mr-2 rounded p-1 hover:bg-gray-200"
			title={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
		>
			{#if isFullScreen}
				<Minimize size={20} />
			{:else}
				<Maximize size={20} />
			{/if}
		</button>

		<button
			on:click={() => onSaveToDisk()}
			class="mr-2 rounded p-1 hover:bg-gray-200"
			title="Save to Disk"
		>
			<Save size={20} />
		</button>

		<button
			on:click={() => onToggleSplitView()}
			class="rounded p-1 hover:bg-gray-200"
			title={isSplitView ? 'Hide Preview' : 'Show Preview'}
		>
			<SplitSquareVertical size={20} />
		</button>
	</div>
</div>

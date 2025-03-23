<script lang="ts">
	import { onMount } from 'svelte';
	import MarkdownPreview from './MarkdownPreview.svelte';
	import MarkdownToolbar from './MarkdownToolbar.svelte';
	import FileSidebar from './FileSidebar.svelte';
	import { genFileId } from '$lib/utils';
	export let markdown = '';

	let isSplitView = true;
	let isSidebarOpen = false;
	let isFullScreen = false;
	let editorElement: HTMLTextAreaElement;
	let files = [];
	let currentFile = {
		id: genFileId(),
		name: 'Untitled',
		content: markdown,
		updatedAt: Date.now()
	};

	let history: string[] = [];
	let historyIndex = -1;
	let debounceTimer: number;

	const handleContentChange = () => {
		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}

		debounceTimer = setTimeout(() => {
			history = history.slice(0, historyIndex + 1);
			history.push(currentFile.content);
			historyIndex++;
		}, 500);
	};

	const handleUndo = () => {
		if (historyIndex > 0) {
			historyIndex--;
			currentFile.content = history[historyIndex];
			markdown = currentFile.content;
		}
	};

	const handleRedo = () => {
		if (historyIndex < history.length - 1) {
			historyIndex++;
			currentFile.content = history[historyIndex];
			markdown = currentFile.content;
		}
	};

	const handleFullScreen = () => {
		isFullScreen = !isFullScreen;
		if (isFullScreen) {
			document.documentElement.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	};

	onMount(() => {
		console.log('onMount');

		loadFiles();
		const interval = setInterval(saveFiles, 5000);

		history = [currentFile.content];
		historyIndex = 0;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && document.fullscreenElement) {
				handleFullScreen();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			clearInterval(interval);
			clearTimeout(debounceTimer);
			saveFiles();
			document.removeEventListener('keydown', handleKeyDown);
		};
	});

	const loadFiles = () => {
		try {
			const storedFiles = localStorage.getItem('markdown-editor-files');
			console.log(storedFiles);
			if (storedFiles) {
				const parsedFiles = JSON.parse(storedFiles);
				if (Array.isArray(parsedFiles) && parsedFiles.length > 0) {
					files = parsedFiles;
					currentFile = [...parsedFiles].sort((a, b) => b.updatedAt - a.updatedAt)[0];
				} else {
					files = [currentFile];
				}
			}
		} catch (error) {
			console.error('Error loading files:', error);
		}
	};

	const saveFiles = () => {
		try {
			const fileIndex = files.findIndex((f) => f.id === currentFile.id);
			const updatedFile = { ...currentFile, updatedAt: Date.now() };

			let updatedFiles;
			if (fileIndex >= 0) {
				updatedFiles = [...files];
				updatedFiles[fileIndex] = updatedFile;
			} else {
				updatedFiles = [...files, updatedFile];
			}

			localStorage.setItem('markdown-editor-files', JSON.stringify(updatedFiles));
			files = updatedFiles;
		} catch (error) {
			console.error('Error saving:', error);
		}
	};

	const handleSaveToDisk = () => {
		const blob = new Blob([currentFile.content], { type: 'text/markdown' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = `${currentFile.name}.md`;
		document.body.appendChild(a);
		a.click();

		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const handleNewFile = () => {
		const newFile = {
			id: genFileId(),
			name: 'Untitled',
			content: '',
			createdAt: Date.now(),
			updatedAt: Date.now()
		};
		files = [...files, newFile];
		currentFile = newFile;
		markdown = '';
		history = [''];
		historyIndex = 0;
	};

	const handleDeleteFile = (fileId: string) => {
		files = files.filter((f) => f.id !== fileId);
		if (currentFile.id === fileId && files.length > 0) {
			currentFile = files[0];
			markdown = currentFile.content;
		} else if (files.length === 0) {
			handleNewFile();
		}
	};

	const handleFileSelect = (file: any) => {
		currentFile = file;
		markdown = file.content;
		history = [file.content];
		historyIndex = 0;
	};

	const handleFileRename = (file: any) => {
		const fileIndex = files.findIndex((f) => f.id === file.id);
		if (fileIndex !== -1) {
			files = files.map((f) =>
				f.id === file.id ? { ...f, name: file.name, updatedAt: Date.now() } : f
			);
			if (currentFile.id === file.id) {
				currentFile = { ...currentFile, name: file.name };
			}
		}
	};
</script>

<div class="flex h-[calc(100vh-50px)] flex-1 flex-col overflow-hidden">
	<MarkdownToolbar
		bind:editorElement
		markdown={currentFile.content}
		{isSplitView}
		{isFullScreen}
		{isSidebarOpen}
		currentFileName={currentFile.name}
		onContentChange={(newContent) => {
			currentFile.content = newContent;
			markdown = newContent;
		}}
		onToggleSplitView={() => (isSplitView = !isSplitView)}
		onToggleFullScreen={handleFullScreen}
		onToggleSidebar={() => (isSidebarOpen = !isSidebarOpen)}
		onSaveToDisk={handleSaveToDisk}
		onUndo={handleUndo}
		onRedo={handleRedo}
		onNewFile={handleNewFile}
	/>

	<div class="flex flex-1 overflow-hidden">
		{#if isSidebarOpen}
			<div class="transition-all duration-300 ease-in-out">
				<FileSidebar
					{currentFile}
					{files}
					onNewFile={handleNewFile}
					onDeleteFile={handleDeleteFile}
					onFileSelect={handleFileSelect}
					onFileRename={handleFileRename}
				/>
			</div>
		{/if}

		<div class={`${isSplitView ? 'w-1/2' : 'w-full'} overflow-auto`}>
			<textarea
				bind:this={editorElement}
				bind:value={currentFile.content}
				on:input={handleContentChange}
				class="h-[calc(100vh-120px)] w-full resize-none overflow-auto border-none p-4 font-mono text-sm"
				spellcheck="false"
			></textarea>
		</div>

		{#if isSplitView}
			<div class="h-full w-1/2 overflow-auto border-l border-gray-300 bg-gray-50">
				<MarkdownPreview markdown={currentFile.content} />
			</div>
		{/if}
	</div>

	<div class="flex justify-between border-t border-gray-300 bg-gray-100 p-1 text-xs text-gray-500">
		<div class="flex items-center">
			<span class="mr-1 font-medium">File:</span>
			<span class="mr-4 text-gray-700">{currentFile.name}</span>
		</div>
		<div class="flex space-x-4">
			<span>{currentFile.content.length} characters</span>
			<span>{currentFile.content.split(/\s+/).filter(Boolean).length} words</span>
			<span>{currentFile.content.split(/\n\n+/).filter(Boolean).length} paragraphs</span>
		</div>
	</div>
</div>

<style>
	textarea {
		font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
	}
</style>

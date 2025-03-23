<script lang="ts">
	import { onMount } from 'svelte';
	import MarkdownPreview from './MarkdownPreview.svelte';
	import MarkdownToolbar from './MarkdownToolbar.svelte';
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
		lastModified: Date.now()
	};

	onMount(() => {
		console.log('onMount');

		loadFiles();
		const interval = setInterval(saveFiles, 5000);

		return () => {
			clearInterval(interval);
			saveFiles();
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
					currentFile = [...parsedFiles].sort((a, b) => b.lastModified - a.lastModified)[0];
				} else {
					files = [currentFile];
				}
			}
		} catch (error) {
			console.error('Error loading files:', error);
		}
	};

	function saveFiles() {
		try {
			const fileIndex = files.findIndex((f) => f.id === currentFile.id);
			const updatedFile = { ...currentFile, lastModified: Date.now() };

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
	}
</script>

<div class="flex h-[calc(100vh-50px)] flex-1 flex-col overflow-hidden">
	<MarkdownToolbar
		bind:editorElement
		markdown={currentFile.content}
		{isSplitView}
		{isFullScreen}
		{isSidebarOpen}
		currentFileName={currentFile.name}
		on:toggleSplitView={() => (isSplitView = !isSplitView)}
		on:toggleFullScreen={() => (isFullScreen = !isFullScreen)}
		on:toggleSidebar={() => (isSidebarOpen = !isSidebarOpen)}
		on:saveToDisk={handleSaveToDisk}
	/>

	<div class="flex flex-1 overflow-hidden">
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

<script lang="ts">
	import MarkdownPreview from './MarkdownPreview.svelte';
	export let markdown = '';

	let isSplitView = true;
	let currentFile = {
		id: 123,
		name: 'Untitled',
		content: markdown,
		lastModified: Date.now()
	};
</script>

<div class="flex h-[calc(100vh-40px)] flex-1 overflow-hidden">
	<div class="flex flex-1 overflow-hidden">
		<div class={`${isSplitView ? 'w-1/2' : 'w-full'} overflow-auto`}>
			<textarea
				bind:this={editorElement}
				bind:value={currentFile.content}
				on:input={handleContentChange}
				class="h-full w-full resize-none overflow-hidden p-4 font-mono text-sm focus:outline-none"
				spellcheck="false"
			></textarea>
		</div>

		{#if isSplitView}
			<div class="w-1/2 overflow-auto border-l bg-gray-50">
				<MarkdownPreview markdown={currentFile.content} />
			</div>
		{/if}
	</div>
</div>

<style>
	textarea {
		font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
	}
</style>

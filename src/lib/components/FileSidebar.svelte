<script lang="ts">
	import { FileText, Plus, Check, X, Pencil, Trash2, FileEdit } from 'lucide-svelte';

	let { currentFile, files, onNewFile, onDeleteFile, onFileSelect, onFileRename } = $props();

	let editingFileId: string | null = null;
	let editingFileName = '';

	let sortedFiles = $derived([...files].sort((a, b) => b.createdAt - a.createdAt));

	const handleRenameFile = (fileId: string) => {
		if (editingFileName.trim()) {
			const updatedFile = files.find((f: { id: string }) => f.id === fileId);
			if (updatedFile) {
				const newFile = { ...updatedFile, name: editingFileName };
				onFileRename?.(newFile);
			}
			editingFileId = null;
			editingFileName = '';
		}
	};

	const startEditing = (file: any) => {
		editingFileId = file.id;
		editingFileName = file.name;
	};

	const cancelEditing = () => {
		editingFileId = null;
		editingFileName = '';
	};
</script>

<div
	class="flex h-full w-64 flex-shrink-0 flex-col border-r border-gray-300 bg-gray-100 transition-all duration-300 ease-in-out"
>
	<div class="flex items-center justify-between border-b border-gray-300 bg-gray-200 p-4">
		<h2 class="text-lg font-semibold">Files</h2>
		<button
			onclick={() => onNewFile()}
			class="cursor-pointer rounded p-1 hover:bg-gray-300"
			title="New File"
		>
			<Plus size={20} />
		</button>
	</div>

	<div class="flex-1 overflow-auto">
		{#if sortedFiles.length === 0}
			<div class="p-4 text-center text-gray-500">
				No files yet. Create a new file to get started.
			</div>
		{:else}
			<ul class="divide-y">
				{#each sortedFiles as file (file.id)}
					<li
						class={`border-b border-gray-300 p-2 hover:bg-gray-200 ${currentFile.id === file.id ? 'bg-gray-300' : ''}`}
					>
						{#if editingFileId === file.id}
							<div class="flex items-center">
								<input
									bind:value={editingFileName}
									class="h-8 flex-1 rounded border border-gray-300 px-2 text-sm"
								/>
								<button
									class="flex h-8 w-8 cursor-pointer items-center justify-center"
									onclick={() => handleRenameFile(file.id)}
								>
									<Check size={16} />
								</button>
								<button
									class="flex h-8 w-8 cursor-pointer items-center justify-center"
									onclick={cancelEditing}
								>
									<X size={16} />
								</button>
							</div>
						{:else}
							<div class="group flex items-center justify-between">
								<button
									class="flex flex-1 cursor-pointer items-center text-left"
									onclick={() => onFileSelect?.(file)}
								>
									<FileText size={16} class="mr-2 flex-shrink-0" />
									<span class="truncate">{file.name}</span>
								</button>
								<div class="flex opacity-0 transition-opacity group-hover:opacity-100">
									<button
										class="flex h-6 w-6 cursor-pointer items-center justify-center"
										onclick={() => startEditing(file)}
									>
										<Pencil size={12} />
									</button>
									<button
										class="flex h-6 w-6 cursor-pointer items-center justify-center text-red-500"
										onclick={(e) => {
											e.stopPropagation();
											onDeleteFile?.(file.id);
										}}
									>
										<Trash2 size={12} />
									</button>
								</div>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

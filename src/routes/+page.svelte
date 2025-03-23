<script lang="ts">
	import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';

	let markdown = `# Enhanced Markdown Editor

Welcome to the enhanced markdown editor with file management!

## Features

- **File Management**: Create, edit, rename, and delete files
- **Auto-save**: Your work is automatically saved to localStorage
- **Image Insertion**: Click the image button to add images with a popup dialog
- **Link Creation**: Click the link button to add links with a popup dialog
- **Save to Disk**: Download your markdown files to your computer
- **Print**: Print your formatted markdown document
- **Full Screen**: Edit in distraction-free full screen mode
- **Headings**: Format text with H1-H6 headings
- **Text Formatting**: Bold, italic, strikethrough, superscript, and subscript

## Markdown Examples

### Text Formatting

You can make text **bold**, *italic*, or ~~strikethrough~~.

You can also use <sup>superscript</sup> and <sub>subscript</sub>.

### Lists

Unordered list:
- Item 1
- Item 2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item

### Code

Inline \`code\` and code blocks:

\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\`

### Tables

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

### Mermaid Diagrams

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
`;

	function handleMarkdownChange(event: CustomEvent<string>) {
		markdown = event.detail;
	}
</script>

<div class="flex h-screen flex-col">
	<header class="flex items-center justify-between bg-zinc-800 p-2 text-white">
		<div class="flex items-center space-x-2">
			<div class="h-6 w-6 rounded bg-zinc-700"></div>
			<span>Markdown Editor</span>
		</div>
		<div class="flex items-center space-x-2">
			<a
				href="https://github.com/yourusername/markdown-editor"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded p-1 hover:bg-zinc-700"
				aria-label="View on GitHub"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					></path>
				</svg>
			</a>
		</div>
	</header>

	<MarkdownEditor {markdown} on:change={handleMarkdownChange} />
</div>

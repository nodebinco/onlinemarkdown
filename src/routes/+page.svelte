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
			<span>Online Markdown Editor</span>
		</div>
		<div class="flex items-center space-x-2">
			
		</div>
	</header>

	<MarkdownEditor {markdown} on:change={handleMarkdownChange} />
</div>

<script lang="ts">
	import { marked } from 'marked';

	export let markdown = '';

	let html = '';

	$: {
		convertMarkdown(markdown);
	}

	const convertMarkdown = async (text: string) => {
		try {
			marked.setOptions({
				breaks: true,
				gfm: true
			});

			html = await marked.parse(markdown);
		} catch (error) {
			console.error('Error parsing markdown:', error);
			html = '<p>Error rendering markdown</p>';
		}
	};
</script>

<div class="markdown-preview prose prose-sm max-w-none p-4">
	{@html html}
</div>

<style>
	.markdown-preview {
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		line-height: 1.6;
		color: #333;
	}

	:global(.markdown-preview h1),
	:global(.markdown-preview h2),
	:global(.markdown-preview h3),
	:global(.markdown-preview h4),
	:global(.markdown-preview h5),
	:global(.markdown-preview h6) {
		margin-top: 1.5em;
		margin-bottom: 0.5em;
		font-weight: 600;
	}

	:global(.markdown-preview h1) {
		font-size: 2em;
		border-bottom: 1px solid #eaecef;
		padding-bottom: 0.3em;
	}

	:global(.markdown-preview h2) {
		font-size: 1.5em;
		border-bottom: 1px solid #eaecef;
		padding-bottom: 0.3em;
	}

	:global(.markdown-preview pre) {
		background-color: #f6f8fa;
		border-radius: 3px;
		padding: 16px;
		overflow: auto;
	}

	:global(.markdown-preview code) {
		background-color: rgba(27, 31, 35, 0.05);
		color: #333000;
		font-size: 0.875rem;
		border-radius: 3px;
		padding: 0.2em 0.4em;
		font-family: 'Courier New', monospace;
	}

	:global(.markdown-preview pre code) {
		background-color: transparent;
		padding: 0;
	}

	:global(.markdown-preview blockquote) {
		padding: 0 1em;
		color: #6a737d;
		border-left: 0.25em solid #dfe2e5;
	}

	:global(.markdown-preview table) {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 16px;
	}

	:global(.markdown-preview table th),
	:global(.markdown-preview table td) {
		padding: 6px 13px;
		border: 1px solid #dfe2e5;
	}

	:global(.markdown-preview table tr) {
		background-color: #fff;
		border-top: 1px solid #c6cbd1;
	}

	:global(.markdown-preview table tr:nth-child(2n)) {
		background-color: #f6f8fa;
	}

	/* Mermaid Diagram Styles */
	:global(.mermaid-diagram) {
		margin: 1em 0;
		border: 1px solid #ddd;
		border-radius: 4px;
		overflow: hidden;
	}

	:global(.mermaid-header) {
		background-color: #f0f0f0;
		padding: 0.5em 1em;
		border-bottom: 1px solid #ddd;
		font-size: 0.9em;
		color: #333;
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	:global(.mermaid-title) {
		display: flex;
		align-items: center;
	}

	:global(.mermaid-title::before) {
		content: '';
		display: inline-block;
		width: 16px;
		height: 16px;
		background-color: #569cd6;
		margin-right: 8px;
		border-radius: 3px;
	}

	:global(.mermaid-code) {
		background-color: #f8f8f8;
		padding: 1em;
		overflow-x: auto;
	}

	:global(.mermaid-code pre) {
		margin: 0;
		background-color: transparent;
	}

	:global(.mermaid-code code) {
		display: block;
		color: #333;
		background-color: transparent;
		padding: 0;
		white-space: pre;
	}
</style>

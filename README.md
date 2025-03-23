# Online Markdown Editor

A powerful, browser-based markdown editor built with Svelte. Try it now at [OnlineMarkdown.com](https://onlinemarkdown.com)!

## Features

- **Live Preview**: See your markdown rendered in real-time
- **File Management**: Create, edit, rename, and delete files easily
- **Auto-save**: Never lose your work with automatic local storage
- **Syntax Highlighting**: Makes your markdown code more readable
- **Mermaid Diagrams**: Visualize concepts with flowcharts and graphs
- **Export Options**: Download your markdown files to your computer
- **Mobile Friendly**: Responsive design works on all devices
- **Text Formatting**: Support for bold, italic, strikethrough, superscript, and more

## Quick Links

- [Editor](https://onlinemarkdown.com/) - Start writing markdown right away
- [Getting Started](https://onlinemarkdown.com/getting-started) - Learn the basics of markdown
- [Syntax Guide](https://onlinemarkdown.com/syntax) - Comprehensive markdown syntax reference
- [Cheat Sheet](https://onlinemarkdown.com/cheat-sheet) - Quick reference for all markdown syntax

## About This Project

This project is built with [Svelte](https://svelte.dev), a radical new approach to building user interfaces. The editor leverages Svelte's reactivity and component model to create a fast, efficient markdown editing experience.

### Technology Stack

- [Svelte](https://svelte.dev) - Frontend framework
- [SvelteKit](https://kit.svelte.dev) - Application framework
- [marked](https://marked.js.org/) - Markdown parser and compiler
- [marked-highlight
](https://github.com/markedjs/marked-highlight) - Syntax highlighting
- [mermaid](https://mermaid.js.org/) - Diagramming and charting tool
- [Bun](https://bun.sh) - JavaScript runtime & package manager for fast development

## Why Use OnlineMarkdown.com?

- **Fast and Responsive**: Built with Svelte for optimal performance
- **No Installation Required**: Works directly in your browser
- **GitHub Flavored Markdown**: Full support for GFM syntax
- **Free to Use**: No account or subscription needed
- **Privacy-Focused**: Your content stays in your browser with local storage
- **Keyboard Shortcuts**: Boost your productivity with shortcuts
- **Clean Interface**: Distraction-free writing environment

### Development Setup

Once you've created a project, install dependencies with Bun

```shellscript
# Install dependencies
bun install
```

Start the development server:

```shellscript
# Start the development server
bun dev
```

### Building for Production

To create a production version of your app:

```shellscript
bun run build
```

You can preview the production build with:

```shellscript
bun run preview
```
> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.



## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
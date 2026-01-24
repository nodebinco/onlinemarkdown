<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';
  import { getLocaleStore } from '$lib/i18n';
  import MarkdownPreview from './MarkdownPreview.svelte';
  import MarkdownToolbar from './MarkdownToolbar.svelte';
  import FileSidebar from './FileSidebar.svelte';
  import { genFileId } from '$lib/utils';

  const localeStore = getLocaleStore();

  interface File {
    id: string;
    name: string;
    content: string;
    createdAt: number;
    updatedAt: number;
  }

  let markdownExample = `# Online Markdown Editor - The Best Free Markdown Tool 🚀

Experience the **fastest**, *most intuitive*, and ~~hassle-free~~ Markdown editor online!  
Create and preview Markdown instantly with **GitHub Flavored Markdown (GFM)** support.  

## ✨ Features of Online Markdown Editor

- **Live Preview**: Instantly see how your Markdown renders  
- **Auto-save**: Never lose your work with local storage backup  
- **File Management**: Create, edit, rename, and delete files easily  
- **Text Formatting**: Supports **bold**, *italic*, ~~strikethrough~~, <sup>superscript</sup>, and <sub>subscript</sub>  
- **Lists**: Easily create **bullet lists** and **numbered lists**  
- **Code Blocks**: Format your code with syntax highlighting  
- **Tables**: Create structured data with Markdown tables  
- **Mermaid Diagrams**: Visualize concepts with flowcharts and graphs  
- **Image & Link Insertion**: Easily add images and links  
- **Print & Download**: Save as a Markdown file or print directly  

---

## 📌 Markdown Syntax Guide  

### Headings  

# H1 - Largest Heading  
## H2 - Second Largest  
### H3 - Subheading  
#### H4 - Smaller Heading  
##### H5 - Tiny Heading  
###### H6 - Smallest Heading  

### ✍️ Text Formatting  

- **Bold** → \`**Bold**\` → **Bold**  
- *Italic* → \`*Italic*\` → *Italic*  
- ~~Strikethrough~~ → \`~~Strikethrough~~\` → ~~Strikethrough~~  
- <sup>Superscript</sup> → \`<sup>Superscript</sup>\`  
- <sub>Subscript</sub> → \`<sub>Subscript</sub>\`  

### 📋 Lists  

#### Bullet List  
- Item 1  
- Item 2  
- Item 3  

#### Numbered List  
1. First Item  
2. Second Item  
3. Third Item  

### 🔗 Links & Images  

[Visit Online Markdown Editor](https://onlinemarkdown.com)  

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

### 📝 Blockquotes

> "Markdown is a lightweight markup language for creating formatted text using a plain-text editor."
– John Gruber

### Code Blocks

#### JavaScript Example
\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

// Call the function
greet('Markdown');
\`\`\`

#### Python Example
\`\`\`python
def calculate_sum(numbers):
    return sum(numbers)

# Example usage
result = calculate_sum([1, 2, 3, 4, 5])
print(f"The sum is: {result}")
\`\`\`

### 📊 Tables
| Feature | Supported |
| ------------- | ------ |
| Bold/Italic   | ✅ Yes |
| Lists         | ✅ Yes |
| Code Blocks   | ✅ Yes |
| Tables        | ✅ Yes |
| Image         | ✅ Yes |
| Link          | ✅ Yes |

### 📢 Try It Now!

Start writing Markdown at [Online Markdown Editor](https://onlinemarkdown.com) and boost your productivity today! 🚀
`;

  let isSplitView = $state(true);
  let isSidebarOpen = $state(false);
  let isFullScreen = $state(false);
  let editorElement = $state<HTMLTextAreaElement | null>(null);
  let files: File[] = $state([]);
  const UNTITLED = 'Untitled';
  let currentFile: File = $state({
    id: genFileId(),
    name: UNTITLED,
    content: '',
    createdAt: Date.now(),
    updatedAt: Date.now()
  });

  let history: string[] = [];
  let historyIndex = -1;
  let debounceTimer: ReturnType<typeof setTimeout>;

  onMount(() => {
    loadFiles();
    const interval = setInterval(saveFiles, 2000);

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
      if (storedFiles) {
        const parsedFiles = JSON.parse(storedFiles) as File[];
        if (Array.isArray(parsedFiles) && parsedFiles.length > 0) {
          files = parsedFiles;
          currentFile = [...parsedFiles].sort((a, b) => b.createdAt - a.createdAt)[0];
          currentFile.content = currentFile.content;
        } else {
          currentFile.content = markdownExample;
          files = [currentFile];
        }
      } else {
        currentFile.content = markdownExample;
        files = [currentFile];
      }
    } catch (error) {
      console.error('Error loading files:', error);
    }
  };

  const saveFiles = () => {
    try {
      const fileIndex = files.findIndex((f) => f.id === currentFile.id);
      const updatedFile = { ...currentFile, updatedAt: Date.now() };

      let updatedFiles: File[];
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
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      currentFile.content = history[historyIndex];
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
    const newFile: File = {
      id: genFileId(),
      name: UNTITLED,
      content: '',
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    files = [...files, newFile];
    currentFile = newFile;
    history = [''];
    historyIndex = 0;
  };

  const handleDeleteFile = (fileId: string) => {
    files = files.filter((f) => f.id !== fileId);
    if (currentFile.id === fileId && files.length > 0) {
      currentFile = files[files.length - 1];
    } else if (files.length === 0) {
      handleNewFile();
    }
  };

  const handleFileSelect = (file: File) => {
    currentFile = file;
    history = [file.content];
    historyIndex = 0;
  };

  const handleFileRename = (file: File) => {
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

<div class="flex h-[calc(100vh-60px)] flex-1 flex-col overflow-hidden">
  <MarkdownToolbar
    bind:editorElement
    markdown={currentFile.content}
    {isSplitView}
    {isFullScreen}
    {isSidebarOpen}
    onNewFile={handleNewFile}
    currentFileName={currentFile.name}
    onContentChange={(newContent: string) => {
      currentFile.content = newContent;
    }}
    onToggleSplitView={() => (isSplitView = !isSplitView)}
    onToggleFullScreen={handleFullScreen}
    onToggleSidebar={() => {
      isSidebarOpen = !isSidebarOpen;
      if (window.innerWidth < 768) {
        isSplitView = !isSidebarOpen;
      }
    }}
    onSaveToDisk={handleSaveToDisk}
    onUndo={handleUndo}
    onRedo={handleRedo}
  />

  <div class="flex flex-1 overflow-hidden">
    {#if isSidebarOpen}
      <FileSidebar
        {currentFile}
        {files}
        onNewFile={handleNewFile}
        onDeleteFile={handleDeleteFile}
        onFileSelect={handleFileSelect}
        onFileRename={handleFileRename}
      />
    {/if}

    <div class={`${isSplitView ? 'w-1/2' : 'w-full'} z-0 overflow-hidden`}>
      <textarea
        bind:this={editorElement}
        bind:value={currentFile.content}
        oninput={handleContentChange}
        class="h-full w-full resize-none overflow-auto border-none p-4 font-mono text-sm"
        spellcheck="false"
      ></textarea>
    </div>

    {#if isSplitView}
      <div class="z-0 h-full w-1/2 overflow-auto border-l border-gray-300 bg-gray-50">
        <MarkdownPreview markdown={currentFile.content} />
      </div>
    {/if}
  </div>

  <div class="flex justify-between border-t border-gray-300 bg-gray-100 p-1 text-xs text-gray-500">
    <div class="flex items-center">
<span class="mr-1 font-medium">{m.editor_file({}, { locale: $localeStore })}:</span>
        <span class="mr-4 text-gray-700"
          >{currentFile.name === UNTITLED ? m.editor_untitled({}, { locale: $localeStore }) : currentFile.name}</span
        >
    </div>
    <div class="flex space-x-4">
      <span>{currentFile.content.length.toLocaleString()} {m.editor_characters({}, { locale: $localeStore })}</span>
      <span
        >{currentFile.content.split(/\s+/).filter(Boolean).length.toLocaleString()} {m.editor_words({}, { locale: $localeStore })}</span
      >
      <span
        >{currentFile.content.split(/\n\n+/).filter(Boolean).length.toLocaleString()} {m.editor_paragraphs({}, { locale: $localeStore })}</span
      >
    </div>
  </div>
</div>

<style>
  textarea {
    font-family: monospace;
  }
</style>

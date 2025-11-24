# Streamdown

A drop-in replacement for react-markdown, designed for AI-powered streaming.

[![GitHub Package](https://img.shields.io/badge/GitHub-Package-blue)](https://github.com/chkp-haimma/streamdown/packages)

## Overview

Formatting Markdown is easy, but when you tokenize and stream it, new challenges arise. Streamdown is built specifically to handle the unique requirements of streaming Markdown content from AI models, providing seamless formatting even with incomplete or unterminated Markdown blocks.

Streamdown powers the [AI Elements Message](https://ai-sdk.dev/elements/components/message) component but can be installed as a standalone package for your own streaming needs.

## Features

- 🚀 **Drop-in replacement** for `react-markdown`
- 🔄 **Streaming-optimized** - Handles incomplete Markdown gracefully
- 🎨 **Unterminated block parsing** - Styles incomplete bold, italic, code, links, and headings
- 📊 **GitHub Flavored Markdown** - Tables, task lists, and strikethrough support
- 🔢 **Math rendering** - LaTeX equations via KaTeX
- 📈 **Mermaid diagrams** - Render Mermaid diagrams as code blocks with a button to render them
- 🎯 **Code syntax highlighting** - Beautiful code blocks with Shiki
- 🛡️ **Security-first** - Built with rehype-harden for safe rendering
- ⚡ **Performance optimized** - Memoized rendering for efficient updates

## Installation

First, create a `.npmrc` file in your project root:

```
@chkp-haimma:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Replace `YOUR_GITHUB_TOKEN` with a GitHub Personal Access Token that has `read:packages` permission.

Then install the package:

```bash
npm install @chkp-haimma/streamdown
```

Update your Tailwind `globals.css` to include the following:

```css
@source "../node_modules/@chkp-haimma/streamdown/dist/*.js";
```

Make sure the path matches the location of the `node_modules` folder in your project. This will ensure that the Streamdown styles are applied to your project.

## Usage

You can use Streamdown in your React application like this:

```tsx
import { Streamdown } from "@chkp-haimma/streamdown";

export default function Page() {
  const markdown = "# Hello World\n\nThis is **streaming** markdown!";

  return <Streamdown>{markdown}</Streamdown>;
}
```

For more info, see the [documentation](https://streamdown.ai/docs).

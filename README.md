<p align="center">
  <img width="100" src="apps/site/public/logo.png" />
  <h1 align="center">CSS Blobs Generator</h1>
  <p align="center">
  Generate customizable, beautiful gradient blob shapes for your websites
  </p>
  <div align="center">
    <a href="https://github.com/yuvalkarif/gradient-blob/actions/workflows/main.yml" target="__blank"><img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/yuvalkarif/gradient-blob/main.yml?color=blue" /></a>
     <a href="https://www.npmjs.com/package/@yuvalkarif/gradient-blob" target="__blank"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40yuvalkarif%2Fgradient-blob?color=lavender"></a>
    <a href="https://yuvalkarif.github.io/gradient-blob/" target="__blank"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fgradient-blob.yuvalkarif.com%2F" /></a>
  </div>
</p>

> [!NOTE]
> This project was created mainly for learning purposes such as repo management, CI/CD, monorepo, package maintenance, etc.

## Features 🌟
- **Customizable Blobs** 🛠: Adjust the size, color, and complexity of your blobs.
- **Live Preview** 👀: See changes in real-time as you customize your blob.
- **Copy CSS** 📄: Easily copy the CSS of your customized blob to your clipboard.
- **Nuxt 3 Powered** 🔥: Enjoy the latest features and optimizations of Nuxt 3.
- **TypeScript Support** 📚: Reliable and maintainable codebase with TypeScript.
- **Fully Tested** 🧪: Unit and E2E tests utilizing Vitest and Playwright.
- **Formatted and Linted** 🧹: The entire repo is formatted and linted using ESLint.
- **Published Package** 📦: A package that powers the interactive website.

## Package
### Installation
```bash
npm i @yuvalkarif/gradient-blob
```

### Usage Example
```ts
import { gb, gbc } from '@yuvalkarif/gradient-blob'

// Basic Usage
const gradientBlob = gb(10)
//     ^ -> "96% 25%, 19% 32%, 42% 91%, 82% 3%, 46% 52%, 35% 19%, 17% 24%, 83% 88%, 78% 86%, 26% 18%"

// Complicated Usage
const { gb } = gbc({ cacheChance: 50 })
const gradientBlob = gb(10, { clipPathProperty: true })
//     ^ -> "clip-path: polygon(96% 25%, 19% 32%, 42% 91%, 82% 3%, 46% 52%, 35% 19%, 17% 24%, 83% 88%, 78% 86%, 26% 18%)"
```
## Local Development 🚀
To run CSS Blobs Generator locally, clone the repository and install the dependencies:

```bash
npm install && npm run dev
```

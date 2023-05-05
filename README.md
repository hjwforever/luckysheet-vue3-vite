# Luckysheet + Vue 3 + Vite

  [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hjwforever/luckysheet-vue3-vite)

English | [简体中文](./README-zh.md)

## Introduction
This is a simple project that shows the use of [Luckysheet](https://github.com/mengshukeji/Luckysheet/) and [Luckyexcel](https://github.com/mengshukeji/Luckyexcel) in [Vue3](https://vuejs.org/) project with [Vite](https://vitejs.dev/).

## Live Demo
> Tips： There may be some problems with exporting files in the demo website, but running the project locally can export files normally
  1. [Live Demo](https://luckysheet.vercel.app/)
  2. [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hjwforever/luckysheet-vue3-vite)

## Note
  1. In addition to the need to install the dependencies of [luckyexcel](https://www.npmjs.com/package/luckyexcel), you also need to introduce the style files and js files of `LuckySheet`.
   - import `LuckySheet` globally: Import related files directly from the cdn source in [index.html](./index.html).
   - For more importing solutions, please refer to the [official Luckysheet Docs](https://dream-num.github.io/LuckysheetDocs/guide/#guide).
  2. The core code is in [src/components/LuckySheet.vue](./src/components/LuckySheet.vue)

## Development
  You can choose one of three package managers: `npm`, `yarn`, `pnpm`.

<details>
  <summary><code>npm</code></summary>

  <h5>Installation</h5>
  <pre><code>
  npm install
  </code></pre>
  <h5>Run</h5>
  <pre><code>
  npm run dev
  </code></pre>
  <h5>Build</h5>
  <pre><code>
  npm run build
  </code></pre>
</details>

<details>
  <summary><code>yarn</code></summary>

  <h5>Installation</h5>
  <pre><code>
  yarn install
  </code></pre>
  <h5>Run</h5>
  <pre><code>
  yarn run dev
  </code></pre>
  <h5>Build</h5>
  <pre><code>
  yarn run build
  </code></pre>
</details>

<details>
  <summary><code>pnpm</code></summary>

  <h5>Installation</h5>
  <pre><code>
  pnpm install
  </code></pre>
  <h5>Run</h5>
  <pre><code>
  pnpm run dev
  </code></pre>
  <h5>Build</h5>
  <pre><code>
  pnpm run build
  </code></pre>
</details>

## Resources
- [Luckysheet](https://github.com/mengshukeji/Luckysheet)
- [Luckyexcel](https://github.com/mengshukeji/Luckyexcel)
- [Vue3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)

## License
[MIT](http://opensource.org/licenses/MIT)

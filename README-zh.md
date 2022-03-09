# Luckysheet + Vue 3 + Vite

  [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hjwforever/luckysheet-vue3-vite)

[English](./README.md) | 简体中文

## 简介
  这是一个简单的示例项目，展示了如何在 [Vue3](https://vuejs.org/) 及 [Vite](https://vitejs.dev/) 的项目中使用 [Luckysheet](https://github.com/mengshukeji/Luckysheet/) 和 [Luckyexcel](https://github.com/mengshukeji/Luckyexcel)。

## 在线示例
> 提示： 演示网站中导出文件可能会出现一些问题，但是本地运行该项目可以正常导出文件
  1. [Live Demo](https://luckysheet.vercel.app/)
  2. [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hjwforever/luckysheet-vue3-vite)

## 注意
  1. 除了需要安装[luckyexcel](https://www.npmjs.com/package/luckyexcel)的依赖，还需要引入`LuckySheet`的样式文件和js文件。
      - 全局引入`LuckySheet`： 在[index.html](./index.html)中从cdn源直接引入相关的文件。
      - 更多引入方式请参照[官方文档](https://mengshukeji.github.io/LuckysheetDocs/guide/#steps-for-usage)。
  2. 关键代码在 [src/components/LuckySheet.vue](./src/components/LuckySheet.vue)。

## 开发
  你可以从`npm`、`yarn`、`pnpm`三种包管理器中任选一种。
<details>
  <summary><code>npm</code></summary>

  <h5>安装依赖</h5>
  <pre><code>
  npm install
  </code></pre>
  <h5>运行项目</h5>
  <pre><code>
  npm run dev
  </code></pre>
  <h5>构建项目</h5>
  <pre><code>
  npm run build
  </code></pre>
</details>

<details>
  <summary><code>yarn</code></summary>

  <h5>安装依赖</h5>
  <pre><code>
  yarn install
  </code></pre>
  <h5>运行项目</h5>
  <pre><code>
  yarn run dev
  </code></pre>
  <h5>构建项目</h5>
  <pre><code>
  yarn run build
  </code></pre>
</details>

<details>
  <summary><code>pnpm</code></summary>

  <h5>安装依赖</h5>
  <pre><code>
  pnpm install
  </code></pre>
  <h5>运行项目</h5>
  <pre><code>
  pnpm run dev
  </code></pre>
  <h5>构建项目</h5>
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

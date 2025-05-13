---
url: /guide/installation.md
---
# 安装

## 环境支持

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                              | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                         |

### 版本

`PlusProComponents` 目前处于功能稳定阶段。

[![ElementPlus version badge](https://img.shields.io/npm/v/plus-pro-components.svg?style=flat-square)](https://www.npmjs.org/package/plus-pro-components)

## 使用包管理器 推荐

::: warning 注意
`plus-pro-components`大于等于 `0.0.11` 版本，`element-plus`不再作为`plus-pro-components`的依赖，需要单独安装。

:::

**建议您使用包管理器 ([pnpm](https://pnpm.io/)推荐 ， [yarn](https://classic.yarnpkg.com/lang/en/)，[npm](https://www.npmjs.com/)) 安装 plus-pro-components**。

::: code-group

```sh [pnpm]
pnpm install plus-pro-components
```

```sh [yarn]
yarn add plus-pro-components
```

```sh [npm]
npm install plus-pro-components   --save
```

:::

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 plus-pro-components，然后就可以使用全局变量 `PlusProComponents` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以[unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

```html{10,12}
<head>
  <!-- 导入element-plus样式 -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- 导入vue3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- 导入element-plus -->
  <script src="//unpkg.com/element-plus"></script>

  <!-- 导入plus-pro-components样式 -->
  <link rel="stylesheet" href="//unpkg.com/plus-pro-components/index.css" />
  <!--导入plus-pro-components"  -->
  <script src="//unpkg.com/plus-pro-components"></script>
</head>
```

### jsDelivr

```html{10,12}
<head>
  <!-- 导入element-plus样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css" />
  <!-- 导入vue3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- 导入element-plus -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>

  <!-- 导入plus-pro-components样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/plus-pro-components/index.css" />
  <!--导入plus-pro-components"  -->
  <script src="//cdn.jsdelivr.net/npm/plus-pro-components"></script>
</head>
```

::: warning 注意
默认使用最新版本，使用时建议加上版本号 如使用`0.0.1`版本，防止因版本导致应用出现问题。

<https://cdn.jsdelivr.net/npm/plus-pro-components@0.0.1/index.min.js>
:::

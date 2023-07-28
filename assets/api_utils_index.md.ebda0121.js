import{_ as s,o as n,c as a,V as l}from"./chunks/framework.c44586f4.js";const C=JSON.parse('{"title":"@plus-pro-components/utils","description":"","frontmatter":{},"headers":[],"relativePath":"api/utils/index.md","filePath":"api/utils/index.md"}'),e={name:"api/utils/index.md"},p=l(`<h1 id="plus-pro-components-utils" tabindex="-1">@plus-pro-components/utils <a class="header-anchor" href="#plus-pro-components-utils" aria-label="Permalink to &quot;@plus-pro-components/utils&quot;">​</a></h1><p><a href="https://www.npmjs.org/package/@plus-pro-components/utils" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@plus-pro-components/utils.svg?style=flat-square" alt="@plus-pro-components/utils version badge"></a></p><p>有新的工具需求 👉 欢迎 <a href="https://github.com/plus-pro-components/plus-pro-components/issues" target="_blank" rel="noreferrer">issues</a></p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><code>@plus-pro-components/utils</code> 提供了 web 开发常用的工具库，结合 plus-pro-components 使用会非常方便，它具有以下优点：</p><ul><li>会随着主包一起下载，无需单独安装。</li><li>独立的 npm 包，也可以独立安装后用于其他项目。</li><li>它提供了基于 ES Module 的开箱即用的 <a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noreferrer">Tree Shaking</a> 功能，无需担心引入会导致打包体积增大。</li><li>使用 TypeScript 编写，提供 d.ts，使用起来安全又便捷。</li></ul><h2 id="独立安装" tabindex="-1">独立安装 <a class="header-anchor" href="#独立安装" aria-label="Permalink to &quot;独立安装&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 选择一个你喜欢的包管理器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># NPM</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@plus-pro-components/utils</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">--save</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@plus-pro-components/utils</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@plus-pro-components/utils</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">formatMoney</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@plus-pro-components/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">formatMoney</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// ￥100.00</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10),o=[p];function t(r,c,i,u,y,m){return n(),a("div",null,o)}const h=s(e,[["render",t]]);export{C as __pageData,h as default};

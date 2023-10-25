import{_ as l,v as e,b as p,F as n,L as s,E as o,O as t,R as c,M as r}from"./chunks/framework.b5e5a3e8.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/namespace.md","filePath":"guide/namespace.md","lastUpdated":1698215488000}'),i={name:"guide/namespace.md"},D={id:"自定义命名空间-v0-0-1-beta-18",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#自定义命名空间-v0-0-1-beta-18","aria-label":'Permalink to "自定义命名空间 <el-tag>v0.0.1-beta.18</el-tag>"'},"​",-1),F=c(`<p>支持 element-plus 的命名空间</p><p>Element Plus 提供的默认命名空间为 el。 在特殊情况下，我们需要自定义命名空间。</p><p>由于我们使用 sass 书写样式，如果您需要自定义所有命名空间， 我们假定用户使用了 sass 书写样式。</p><p>您必须同时设置 <code>ElConfigProvider</code> 和 <code>scss</code> <code>$namespace</code> 以及 <code>plus-pro-components</code> <code>scss</code>的 <code>$el-namespace</code></p><h3 id="设置-elconfigprovider" tabindex="-1">设置 ElConfigProvider <a class="header-anchor" href="#设置-elconfigprovider" aria-label="Permalink to &quot;设置 ElConfigProvider&quot;">​</a></h3><p>使用 ElConfigProvider 包装您的根组件。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- App.vue --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-config-provider</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ep</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-config-provider</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="设置-scss-和-css-变量" tabindex="-1">设置 SCSS 和 CSS 变量 <a class="header-anchor" href="#设置-scss-和-css-变量" aria-label="Permalink to &quot;设置 SCSS 和 CSS 变量&quot;">​</a></h3><p>创建 <code>styles/element/index.scss</code>:</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@forward</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-plus/theme-chalk/src/mixins/config.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">with</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  $namespace: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ep</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#89DDFF;font-style:italic;">@forward</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plus-pro-components/theme-chalk/src/mixins/config.scss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">with</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  $el-namespace: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ep</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在 <code>vite.config.ts</code> 中导入 <code>styles/element/index.scss</code>：</p><blockquote><p>Webpack 也是如此，它需要在 preprocessorOptions 中设置</p></blockquote><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">preprocessorOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">scss</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">additionalData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">@use &quot;~/styles/element/index.scss&quot; as *;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,13);function d(C,m,b,u,A,h){const a=r("el-tag");return e(),p("div",null,[n("h2",D,[s("自定义命名空间 "),o(a,null,{default:t(()=>[s("v0.0.1-beta.18")]),_:1}),s(),y]),F])}const v=l(i,[["render",d]]);export{f as __pageData,v as default};

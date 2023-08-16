import{_ as a,o as s,c as l,V as e}from"./chunks/framework.93de3b7d.js";const m=JSON.parse('{"title":"贡献指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/contribution.md","filePath":"guide/contribution.md","lastUpdated":null}'),n={name:"guide/contribution.md"},t=e(`<h1 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor" href="#贡献指南" aria-label="Permalink to &quot;贡献指南&quot;">​</a></h1><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>感谢您使用 PlusProComponents。</p><p>以下是关于向 PlusProComponents 提交反馈或代码的指南。在向 PlusProComponents 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下内容。</p><h3 id="issue-规范" tabindex="-1">Issue 规范 <a class="header-anchor" href="#issue-规范" aria-label="Permalink to &quot;Issue 规范&quot;">​</a></h3><ul><li>遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。</li><li>提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。</li></ul><h2 id="参与开发" tabindex="-1">参与开发 <a class="header-anchor" href="#参与开发" aria-label="Permalink to &quot;参与开发&quot;">​</a></h2><h3 id="参考本地开发" tabindex="-1"><a href="/guide/dev.html">参考本地开发</a> <a class="header-anchor" href="#参考本地开发" aria-label="Permalink to &quot;[参考本地开发](/guide/dev.html)&quot;">​</a></h3><h3 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h3><p>在编写代码时，请注意：</p><ul><li>确保代码可以通过仓库的 ESLint 校验。</li><li>确保代码格式是规范的，使用 prettier 进行代码格式化。</li><li>确保没有使用超出兼容性范围的 API.</li></ul><h2 id="提交-pull-request" tabindex="-1">提交 Pull Request <a class="header-anchor" href="#提交-pull-request" aria-label="Permalink to &quot;提交 Pull Request&quot;">​</a></h2><h3 id="参考指南" tabindex="-1">参考指南 <a class="header-anchor" href="#参考指南" aria-label="Permalink to &quot;参考指南&quot;">​</a></h3><p>如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：</p><ul><li><a href="https://github.com/firstcontributions/first-contributions/blob/main/translations/README.zh-cn.md" target="_blank" rel="noreferrer">第一次参与开源</a></li><li><a href="https://segmentfault.com/a/1190000000736629" target="_blank" rel="noreferrer">如何优雅地在 GitHub 上贡献代码</a></li></ul><h3 id="pull-request-规范" tabindex="-1">Pull Request 规范 <a class="header-anchor" href="#pull-request-规范" aria-label="Permalink to &quot;Pull Request 规范&quot;">​</a></h3><p>在提交 Pull Request 时，请注意：</p><ul><li>保持你的 PR 足够小，一个 PR 只解决单个问题或添加单个功能。</li><li>当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。</li><li>在 PR 中请添加合适的描述，并关联相关的 Issue。</li></ul><h3 id="pull-request-流程" tabindex="-1">Pull Request 流程 <a class="header-anchor" href="#pull-request-流程" aria-label="Permalink to &quot;Pull Request 流程&quot;">​</a></h3><ol><li>fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码。</li><li>基于 fork 后仓库的 dev 分支新建一个分支，比如 <code>feature/docs</code>。</li><li>在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 dev 分支。</li><li>Pull Request 会在 Review 通过后被合并到主仓库。</li><li>等待 PlusProComponents 发布新版本，一般是每周一次。</li></ol><h3 id="pull-request-标题格式" tabindex="-1">Pull Request 标题格式 <a class="header-anchor" href="#pull-request-标题格式" aria-label="Permalink to &quot;Pull Request 标题格式&quot;">​</a></h3><p>Pull Request 的标题应该遵循以下格式：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;">(ComponentName?)：commit message</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>示例：</p><ul><li>docs: fix typo in quickstart</li><li>build: optimize build speed</li><li>fix(Button): incorrect style</li><li>feat(Button): add color prop</li></ul><p>可选的类型：</p><ul><li>feat</li><li>fix</li><li>build</li><li>docs</li><li>test</li><li>style</li><li>ci</li><li>refactor</li><li>perf</li><li>chore</li><li>revert</li></ul><h3 id="同步最新代码" tabindex="-1">同步最新代码 <a class="header-anchor" href="#同步最新代码" aria-label="Permalink to &quot;同步最新代码&quot;">​</a></h3><p>提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 添加主仓库到 remote</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/plus-pro-components/plus-pro-components.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取主仓库最新代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upstream</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换至 dev 分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并主仓库代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upstream/dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,30),i=[t];function o(r,p,u,c,d,h){return s(),l("div",null,i)}const q=a(n,[["render",o]]);export{m as __pageData,q as default};

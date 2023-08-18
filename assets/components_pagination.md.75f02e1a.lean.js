import{_ as e,v as p,b as c,E as t,O as i,F as n,L as a,R as u,M as l}from"./chunks/framework.b5e5a3e8.js";const H=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md","lastUpdated":1692264923000}'),d={name:"components/pagination.md"},r=n("h1",{id:"pagination-分页",tabindex:"-1"},[a("Pagination 分页 "),n("a",{class:"header-anchor",href:"#pagination-分页","aria-label":'Permalink to "Pagination 分页"'},"​")],-1),E=n("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),C=n("p",null,"pagination/basic",-1),D=n("h2",{id:"pagination-api",tabindex:"-1"},[a("Pagination API "),n("a",{class:"header-anchor",href:"#pagination-api","aria-label":'Permalink to "Pagination API"'},"​")],-1),h=n("h2",{id:"pagination-attributes",tabindex:"-1"},[a("Pagination Attributes "),n("a",{class:"header-anchor",href:"#pagination-attributes","aria-label":'Permalink to "Pagination Attributes"'},"​")],-1),F=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"是否必须")])],-1),_=n("td",null,[n("code",null,"align")],-1),g=n("td",null,"对齐方式",-1),k=n("code",null,"string",-1),m=n("td",null,[n("code",null,"right")],-1),b=n("td",null,"否",-1),v=n("tr",null,[n("td",null,[n("code",null,"model-value / v-model")]),n("td",null,"分页值"),n("td",null,[n("code",null,"object"),a(),n("a",{href:"/components/type.html#pageinfo"},"PageInfo")]),n("td",null,[n("code",null,"{ page: 1,pageSize: 20}")]),n("td",null,"否")],-1),f=n("tr",null,[n("td",null,[n("code",null,"total")]),n("td",null,"总数"),n("td",null,[n("code",null,"number")]),n("td",null,[n("code",null,"0")]),n("td",null,"否")],-1),P=n("td",null,[n("code",null,"pageSizeList")],-1),A=n("td",null,"分页列表",-1),y=n("code",null,"array",-1),x=n("td",null,[n("code",null,"[10, 20, 30, 40, 50, 100, 200, 300, 400, 500]")],-1),B=n("td",null,"否",-1),q=n("tr",null,[n("td",null,"..."),n("td",null,"..."),n("td",null,"..."),n("td",null,"..."),n("td",null,"...")],-1),w=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"提示"),n("p",null,[n("strong",null,[n("code",null,"..."),a("表示同时支持所有 "),n("code",null,"el-pagination"),a(" Attributes")])])],-1),I=n("h2",{id:"pagination-events",tabindex:"-1"},[a("Pagination Events "),n("a",{class:"header-anchor",href:"#pagination-events","aria-label":'Permalink to "Pagination Events"'},"​")],-1),S=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"说明"),n("th",null,"类型")])],-1),$=n("td",null,[n("code",null,"change")],-1),z=n("td",null,"分页组件 page 或者 pageSize 改变触发",-1),L=n("code",null,"function",-1),O=u('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>el-pagination 的其他事件的支持写法 如 prev-click</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PlusPagination</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@prev-click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handlePrevClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>',1);function j(M,R,J,N,T,U){const o=l("DocsCodeDemo"),s=l("docs-tip");return p(),c("div",null,[r,E,t(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EPlusPagination%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epage%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Atotal%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E100%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20page%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"pagination/basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3CPlusPagination%20v-model%3D%22page%22%20%3Atotal%3D%22100%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aconst%20page%20%3D%20ref()%0D%0A%3C%2Fscript%3E%0D%0A"},{default:i(()=>[C]),_:1}),D,h,n("table",null,[F,n("tbody",null,[n("tr",null,[_,g,n("td",null,[k,a(),t(s,{content:"'left' / 'right'"})]),m,b]),v,f,n("tr",null,[P,A,n("td",null,[y,a(),t(s,{content:"number[]"})]),x,B]),q])]),w,I,n("table",null,[S,n("tbody",null,[n("tr",null,[$,z,n("td",null,[L,a(),t(s,{content:"(pageInfo:PageInfo) => void"})])])])]),O])}const K=e(d,[["render",j]]);export{H as __pageData,K as default};

import{_ as p,v as c,b as r,E as n,O as d,F as s,L as l,R as e,M as a}from"./chunks/framework.b5e5a3e8.js";const rs=JSON.parse('{"title":"DatePicker","description":"","frontmatter":{},"headers":[],"relativePath":"components/date-picker.md","filePath":"components/date-picker.md","lastUpdated":1692264923000}'),i={name:"components/date-picker.md"},u=e('<h1 id="datepicker" tabindex="-1">DatePicker <a class="header-anchor" href="#datepicker" aria-label="Permalink to &quot;DatePicker&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>PlusDatePicker 是由两个 el-date-picker （属性 type 不包含 range）组件组成，核心功能点是两个选择可以独立开来。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',4),D=s("p",null,"date-picker/basic",-1),F=s("h2",{id:"datepicker-api",tabindex:"-1"},[l("DatePicker API "),s("a",{class:"header-anchor",href:"#datepicker-api","aria-label":'Permalink to "DatePicker API"'},"​")],-1),y=s("h2",{id:"datepicker-attributes",tabindex:"-1"},[l("DatePicker Attributes "),s("a",{class:"header-anchor",href:"#datepicker-attributes","aria-label":'Permalink to "DatePicker Attributes"'},"​")],-1),h=s("thead",null,[s("tr",null,[s("th",null,"名称"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"默认值"),s("th",null,"是否必须")])],-1),_=s("td",null,[s("code",null,"model-value / v-model")],-1),C=s("td",null,"绑定值",-1),b=s("code",null,"array",-1),m=s("td",null,[s("code",null,"false")],-1),A=s("td",null,"否",-1),k=s("td",null,[s("code",null,"type")],-1),E=s("td",null,"el-date-picker 的类型",-1),f=s("code",null,"string",-1),g=s("td",null,[s("code",null,"datetime")],-1),P=s("td",null,"否",-1),v=s("tr",null,[s("td",null,[s("code",null,"format")]),s("td",null,"显示在输入框中的格式"),s("td",null,[s("code",null,"string")]),s("td",null,[s("code",null,"YYYY-MM-DD HH:mm:ss")]),s("td",null,"否")],-1),q=s("tr",null,[s("td",null,[s("code",null,"valueFormat")]),s("td",null,"绑定值的格式。 不指定则绑定值为 Date 对象"),s("td",null,[s("code",null,"string")]),s("td",null,[s("code",null,"YYYY-MM-DD HH:mm:ss")]),s("td",null,"否")],-1),x=s("tr",null,[s("td",null,[s("code",null,"rangeSeparator")]),s("td",null,"开始时间和结束时间中间的分隔符"),s("td",null,[s("code",null,"string")]),s("td",null,[s("code",null,"/")]),s("td",null,"否")],-1),T=s("tr",null,[s("td",null,[s("code",null,"startProps")]),s("td",null,[l("开始的"),s("code",null,"el-date-picker"),l(" 的 props（支持所有）")]),s("td",null,[s("code",null,"object")]),s("td",null,[s("code",null,"{}")]),s("td",null,"否")],-1),j=s("tr",null,[s("td",null,[s("code",null,"endProps")]),s("td",null,[l("结束的"),s("code",null,"el-date-picker"),l(" 的 props （支持所有）")]),s("td",null,[s("code",null,"object")]),s("td",null,[s("code",null,"{}")]),s("td",null,"否")],-1),V=s("td",null,[s("code",null,"startDisabledDate")],-1),Y=s("td",null,[l("开始的"),s("code",null,"el-date-picker"),l(" 的 disabledDate")],-1),w=s("code",null,"function",-1),I=s("td",null,[s("a",{href:"/components/date-picker.html#startdisableddate"},"startDisabledDate")],-1),M=s("td",null,"否",-1),B=s("td",null,[s("code",null,"endDisabledDate")],-1),H=s("td",null,[l("结束的"),s("code",null,"el-date-picker"),l(" 的 disabledDate")],-1),$=s("code",null,"function",-1),O=s("td",null,[s("a",{href:"/components/date-picker.html#enddisableddate"},"endDisabledDate")],-1),L=s("td",null,"否",-1),R=e(`<h3 id="startdisableddate" tabindex="-1">startDisabledDate <a class="header-anchor" href="#startdisableddate" aria-label="Permalink to &quot;startDisabledDate&quot;">​</a></h3><p>默认值</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> startDisabledDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">startTime</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">endValue</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">endValue</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">startTime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">endValue</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="enddisableddate" tabindex="-1">endDisabledDate <a class="header-anchor" href="#enddisableddate" aria-label="Permalink to &quot;endDisabledDate&quot;">​</a></h3><p>默认值</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> endDisabledDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endTime</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">startValue</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">startValue</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endTime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">startValue</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="datepicker-events" tabindex="-1">DatePicker Events <a class="header-anchor" href="#datepicker-events" aria-label="Permalink to &quot;DatePicker Events&quot;">​</a></h2>`,7),S=s("thead",null,[s("tr",null,[s("th",null,"名称"),s("th",null,"说明"),s("th",null,"类型")])],-1),J=s("td",null,[s("code",null,"change")],-1),N=s("td",null,"用户选值时触发",-1),U=s("code",null,"function",-1),z=e('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>el-date-picker 的其他事件的支持写法 如 blur</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PlusDatePicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:start-props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{onBlur: () =&gt; {} }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:end-props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{onBlur: () =&gt; {} }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h2>',2),G=s("thead",null,[s("tr",null,[s("th",null,"名称"),s("th",null,"说明"),s("th",null,"类型")])],-1),K=s("td",null,[s("code",null,"startPickerInstance")],-1),Q=s("td",null,[l("开始的"),s("code",null,"el-date-picker")],-1),W=s("code",null,"object",-1),X=s("td",null,[s("code",null,"endPickerInstance")],-1),Z=s("td",null,[l("结束的"),s("code",null,"el-date-picker")],-1),ss=s("code",null,"object",-1);function ls(ns,ts,es,as,os,ps){const o=a("DocsCodeDemo"),t=a("docs-tip");return c(),r("div",null,[u,n(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EPlusDatePicker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"date-picker/basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3CPlusDatePicker%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A"},{default:d(()=>[D]),_:1}),F,y,s("table",null,[h,s("tbody",null,[s("tr",null,[_,C,s("td",null,[b,l(),n(t,{content:"string[]"})]),m,A]),s("tr",null,[k,E,s("td",null,[f,l(),n(t,{content:"'year' / 'month' / 'date' / 'dates' / 'datetime' / 'week'"})]),g,P]),v,q,x,T,j,s("tr",null,[V,Y,s("td",null,[w,l(),n(t,{content:"(startTime: Date, endValue: string) => boolean"})]),I,M]),s("tr",null,[B,H,s("td",null,[$,l(),n(t,{content:"`(endTime: Date, startValue: string) => boolean`"})]),O,L])])]),R,s("table",null,[S,s("tbody",null,[s("tr",null,[J,N,s("td",null,[U,l(),n(t,{content:"value:string[]) => void"})])])])]),z,s("table",null,[G,s("tbody",null,[s("tr",null,[K,Q,s("td",null,[W,n(t,{content:"InstanceType<typeof ElDatePicker>"})])]),s("tr",null,[X,Z,s("td",null,[ss,n(t,{content:"InstanceType<typeof ElDatePicker>"})])])])])])}const ds=p(i,[["render",ls]]);export{rs as __pageData,ds as default};

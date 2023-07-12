import{_ as a,H as s,o as n,c as o,J as l,E as p,V as e,C as d}from"./chunks/framework.c44586f4.js";const k=JSON.parse('{"title":"date-picker","description":"","frontmatter":{},"headers":[],"relativePath":"components/date-picker.md","filePath":"components/date-picker.md"}'),c={name:"components/date-picker.md"},r=e('<h1 id="date-picker" tabindex="-1">date-picker <a class="header-anchor" href="#date-picker" aria-label="Permalink to &quot;date-picker&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>PlusDatePicker 是由两个 el-date-picker （属性 type 不包含 range）组件组成，核心功能点是两个选择可以独立开来。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',4),i=d("p",null,"date-picker/basic",-1),D=e(`<h2 id="datepicker-api" tabindex="-1">DatePicker API <a class="header-anchor" href="#datepicker-api" aria-label="Permalink to &quot;DatePicker API&quot;">​</a></h2><h3 id="datepicker-attributes" tabindex="-1">DatePicker Attributes <a class="header-anchor" href="#datepicker-attributes" aria-label="Permalink to &quot;DatePicker Attributes&quot;">​</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>是否必须</th></tr></thead><tbody><tr><td><code>model-value / v-model</code></td><td>绑定值</td><td><code>string[]</code></td><td><code>false</code></td><td>否</td></tr><tr><td><code>type</code></td><td>el-date-picker 的类型</td><td><code>year/month/date/dates/datetime/week</code></td><td><code>datetime</code></td><td>否</td></tr><tr><td><code>format</code></td><td>显示在输入框中的格式</td><td><code>string</code></td><td><code>YYYY-MM-DD HH:mm:ss</code></td><td>否</td></tr><tr><td><code>valueFormat</code></td><td>绑定值的格式。 不指定则绑定值为 Date 对象</td><td><code>string</code></td><td><code>YYYY-MM-DD HH:mm:ss</code></td><td>否</td></tr><tr><td><code>rangeSeparator</code></td><td>开始时间和结束时间中间的分隔符</td><td><code>string</code></td><td><code>/</code></td><td>否</td></tr><tr><td><code>startProps</code></td><td>开始的<code>el-date-picker</code> 的 props</td><td><code>object</code></td><td><code>{}</code></td><td>否</td></tr><tr><td><code>endProps</code></td><td>结束的<code>el-date-picker</code> 的 props</td><td><code>object</code></td><td><code>{}</code></td><td>否</td></tr><tr><td><code>startDisabledDate</code></td><td>开始的<code>el-date-picker</code> 的 disabledDate</td><td><code>(startTime: Date, endValue: string) =&gt; boolean</code></td><td><a href="/components/date-picker.html#startdisableddate">startDisabledDate</a></td><td>否</td></tr><tr><td><code>endDisabledDate</code></td><td>结束的<code>el-date-picker</code> 的 disabledDate</td><td><code>(endTime: Date, startValue: string) =&gt; boolean</code></td><td><a href="/components/date-picker.html#enddisableddate">endDisabledDate</a>\`</td><td>否</td></tr></tbody></table><h4 id="startdisableddate" tabindex="-1">startDisabledDate <a class="header-anchor" href="#startdisableddate" aria-label="Permalink to &quot;startDisabledDate&quot;">​</a></h4><p>默认值</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> startDisabledDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">startTime</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">endValue</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">endValue</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">startTime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">endValue</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="enddisableddate" tabindex="-1">endDisabledDate <a class="header-anchor" href="#enddisableddate" aria-label="Permalink to &quot;endDisabledDate&quot;">​</a></h4><p>默认值</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> endDisabledDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">endTime</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">startValue</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">startValue</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">endTime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">startValue</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="datepicker-events" tabindex="-1">DatePicker Events <a class="header-anchor" href="#datepicker-events" aria-label="Permalink to &quot;DatePicker Events&quot;">​</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>change</code></td><td>用户选值时触发</td><td>[Function] <code>(value:string[]) =&gt; void</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><p>el-date-picker 的其他事件的支持写法 如 blur</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PlusDatePicker</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:start-props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{onBlur:()=&gt;{ } }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:end-props</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{onBlur:()=&gt;{ } }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>startPickerInstance</code></td><td>开始的<code>el-date-picker</code></td><td><code>InstanceType&lt;typeof ElDatePicker&gt;</code></td></tr><tr><td><code>endPickerInstance</code></td><td>结束的<code>el-date-picker</code></td><td><code>InstanceType&lt;typeof ElDatePicker&gt;</code></td></tr></tbody></table>`,14);function F(y,h,u,C,b,m){const t=s("code-demo");return n(),o("div",null,[r,l(t,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EPlusDatePicker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"date-picker/basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3CPlusDatePicker%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A"},{default:p(()=>[i]),_:1}),D])}const E=a(c,[["render",F]]);export{k as __pageData,E as default};

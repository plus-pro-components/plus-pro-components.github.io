import{_ as t,o as d,c as e,V as o}from"./chunks/framework.c44586f4.js";const f=JSON.parse('{"title":"columns 通用配置","description":"","frontmatter":{},"headers":[],"relativePath":"components/config.md","filePath":"components/config.md"}'),c={name:"components/config.md"},r=o('<h1 id="columns-通用配置" tabindex="-1">columns 通用配置 <a class="header-anchor" href="#columns-通用配置" aria-label="Permalink to &quot;columns 通用配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>文中的一些类型来自 <a href="/components/type.html">基础 Ts 类型</a>章节，建议先阅读。</p></div><h2 id="ts-类型-pluscolumn" tabindex="-1">TS 类型 PlusColumn <a class="header-anchor" href="#ts-类型-pluscolumn" aria-label="Permalink to &quot;TS 类型 PlusColumn&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th><th>是否必须</th></tr></thead><tbody><tr><td><code>label</code></td><td>表格表头显示的标题 ；在 form 中是 el-form-item 的 label；在 descriptions 是 el-descriptions-item 的 label；</td><td><code>string</code></td><td></td><td>是</td></tr><tr><td><code>prop</code></td><td>表格对应列内容的字段名 ；在 form 中是 el-input 等所有表单项的双向绑定的值；在 descriptions 是 el-descriptions-item 的值对应的字段；</td><td><code>string</code></td><td></td><td>是</td></tr><tr><td><code>width</code></td><td>表格列宽</td><td><code>string/number</code></td><td></td><td>否</td></tr><tr><td><code>minWidth</code></td><td>表格最小宽</td><td><code>string/number</code></td><td></td><td>否</td></tr><tr><td><code>valueType</code></td><td>值的类型</td><td><a href="/components/type.html#tablevaluetype">TableValueType</a> / <a href="/components/type.html#formitemvaluetype">FormItemValueType</a></td><td></td><td>否</td></tr><tr><td><code>editable</code></td><td>当值为<code>true</code>时，表格中整列显示的是<code>valueType</code>取值对应的可编辑的表单，<code>valueType</code>取值为 <a href="/components/type.html#formitemvaluetype">FormItemValueType</a> 默认为 <code>text</code></td><td><code>boolean</code></td><td><code>false</code></td><td>否</td></tr><tr><td><code>headerFilter</code></td><td>禁止表头过滤</td><td><code>boolean</code></td><td><code>false</code></td><td>否</td></tr><tr><td><code>tableColumnProps</code></td><td>支持所有<a href="https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">el-table-column 属性</a> （不包含 label,prop,width,minWidth）</td><td><a href="/components/type.html#recordtype">RecordType</a></td><td><code>true</code></td><td>否</td></tr><tr><td><code>preview</code></td><td>仅当 valueType 等于 img 时生效； el-image 图片预览 默认开启 给 false 关闭</td><td><code>boolean</code></td><td></td><td>否</td></tr><tr><td><code>linkText</code></td><td>valueType 等于 link 时生效；默认取得是 prop 对应的表格数据</td><td><code>string</code></td><td></td><td>否</td></tr><tr><td><code>descriptionsItemProps</code></td><td>描述行，el-descriptions-item 的 props</td><td><a href="/components/type.html#recordtype">RecordType</a></td><td></td><td>否</td></tr><tr><td><code>fieldProps</code></td><td>支持类似 el-input，el-select 等所有表单项的 props 以及 表格显示的每行 props</td><td><a href="/components/type.html#propsitemtype">PropsItemType</a></td><td></td><td>否</td></tr><tr><td><code>options</code></td><td>el-select，el-radio-group，el-checkbox-group 选项 ，支持数组，函数，和 Promise</td><td><a href="/components/type.html#optionstype">OptionsType</a></td><td></td><td>否</td></tr><tr><td><code>tooltip</code></td><td>展示一个 icon，hover 是展示一些提示信息</td><td><a href="https://element-plus.org/zh-CN/component/tooltip.html#attributes" target="_blank" rel="noreferrer">ElTooltipProps</a> /<code>string</code></td><td></td><td>否</td></tr><tr><td><code>render</code></td><td>自定义渲染单行显示内容 需要返回一个 VNode，<code>render</code>的优先级最高,高于<code>renderHTML</code> 和 <code>valueType</code></td><td><code>(value?: any, row?: </code><a href="/components/type.html#recordtype">RecordType</a><code>, column?:</code><a href="/components/config.html#ts-类型-pluscolumn">PlusColumn</a><code>) =&gt; VNode</code></td><td></td><td>否</td></tr><tr><td><code>renderHTML</code></td><td>自定义渲染单行显示内容 需要返回一个 html 字符串，<code>renderHTML</code>的优先级低于<code>render</code>，高于 <code>valueType</code>。</td><td><code>(value?: any, row?: </code><a href="/components/type.html#recordtype">RecordType</a><code>, column?:</code><a href="/components/config.html#ts-类型-pluscolumn">PlusColumn</a><code>) =&gt; VNode</code></td><td></td><td>否</td></tr><tr><td><code>hideInDescriptions</code></td><td>在 PlusDescriptions 组件中 隐藏</td><td><code>boolean</code></td><td><code>false</code></td><td>否</td></tr><tr><td><code>hideInForm</code></td><td>在 PlusForm 组件中 隐藏</td><td><code>boolean</code></td><td><code>false</code></td><td>否</td></tr><tr><td><code>hideInTable</code></td><td>在 PlusTable 组件中 隐藏</td><td><code>boolean</code></td><td><code>false</code></td><td>否</td></tr><tr><td><code>hideInSearch</code></td><td>在 PlusSearch 组件中 隐藏</td><td><code>boolean</code></td><td><code>false</code></td><td>否</td></tr><tr><td><code>renderFormItem</code></td><td>自定义渲染 el-form-item 下的 field-item 组件</td><td><code>(props: any, onChange: (value: any) =&gt; void,formItemInstance: InstanceType&lt;typeof ElFormItem&gt;) =&gt; VNode</code></td><td></td><td>否</td></tr><tr><td><code>formProps</code></td><td>支持所有 PlusForm 的 props，表格编辑状态有效。</td><td><a href="/components/type.html#propsitemtype">PropsItemType</a></td><td></td><td>否</td></tr><tr><td><code>formItemProps</code></td><td>支持所有 el-form-item 的 props</td><td><a href="/components/type.html#propsitemtype">PropsItemType</a></td><td></td><td>否</td></tr></tbody></table>',4),l=[r];function n(a,p,s,m,i,h){return d(),e("div",null,l)}const y=t(c,[["render",n]]);export{f as __pageData,y as default};

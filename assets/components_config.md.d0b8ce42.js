import{_ as d,v as r,b as c,F as t,L as e,E as o,R as n,M as u}from"./chunks/framework.2bc4b62d.js";const Ut=JSON.parse('{"title":"通用配置","description":"","frontmatter":{},"headers":[],"relativePath":"components/config.md","filePath":"components/config.md","lastUpdated":1706603582000}'),s={name:"components/config.md"},a=n('<h1 id="通用配置" tabindex="-1">通用配置 <a class="header-anchor" href="#通用配置" aria-label="Permalink to &quot;通用配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>文中的一些类型来自 <a href="/components/type.html" style="text-decoration:underline;">基础 Ts 类型</a> 章节，建议先阅读。</p></div><p>高级组件中除了布局组件<a href="/components/layout.html">Layout</a>和多选卡片<a href="/components/check-card-group.html">CheckCardGroup </a>之外的组件通用配置。</p><p>配置的核心字段是<code>valueType</code>，渲染的 key 是<code>prop</code>（所以需要保证唯一）。</p><h2 id="columns-配置" tabindex="-1">columns 配置 <a class="header-anchor" href="#columns-配置" aria-label="Permalink to &quot;columns 配置&quot;">​</a></h2><p>TS 类型 <code>PlusColumn</code></p>',6),i=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"是否必须")])],-1),p=t("tr",null,[t("td",null,[t("code",null,"label")]),t("td",null,"表格表头显示的标题 ；在 form 中是 el-form-item 的 label；在 descriptions 是 el-descriptions-item 的 label；"),t("td",null,[t("code",null,"string")]),t("td"),t("td",null,"是")],-1),h=t("tr",null,[t("td",null,[t("code",null,"prop"),e(" （"),t("strong",null,"不可重复"),e("）")]),t("td",null,[e("表格对应列内容的字段名 ；在 form/search 中是 el-input 等所有表单项的双向绑定的值；在 descriptions 是 el-descriptions-item 的值对应的字段； "),t("strong",null,[e("支持"),t("code",null,"x.y.z"),e("形式的多（无限）级数据形式。")])]),t("td",null,[t("code",null,"string")]),t("td"),t("td",null,"是")],-1),m=t("tr",null,[t("td",null,[t("code",null,"width")]),t("td",null,"表格列宽"),t("td",null,[t("code",null,"string/number")]),t("td"),t("td",null,"否")],-1),_=t("tr",null,[t("td",null,[t("code",null,"minWidth")]),t("td",null,"表格列最小宽"),t("td",null,[t("code",null,"string/number")]),t("td"),t("td",null,"否")],-1),f=t("tr",null,[t("td",null,[t("code",null,"valueType")]),t("td",null,"值的类型"),t("td",null,[t("code",null,"string"),e("("),t("a",{href:"/components/type.html#tablevaluetype"},"TableValueType"),e(" / "),t("a",{href:"/components/type.html#formitemvaluetype"},"FormItemValueType"),e(" )")]),t("td"),t("td",null,"否")],-1),b=t("tr",null,[t("td",null,[t("code",null,"editable")]),t("td",null,[e("当值为"),t("code",null,"true"),e("时，表格中整列显示的是"),t("code",null,"valueType"),e("取值对应的可编辑的表单，"),t("code",null,"valueType"),e("取值为 "),t("a",{href:"/components/type.html#formitemvaluetype"},"FormItemValueType"),e(" 默认为 "),t("code",null,"text")]),t("td",null,[t("code",null,"boolean")]),t("td",null,[t("code",null,"false")]),t("td",null,"否")],-1),g=t("tr",null,[t("td",null,[t("code",null,"headerFilter")]),t("td",null,"禁止表格当前列的表头过滤"),t("td",null,[t("code",null,"boolean")]),t("td",null,[t("code",null,"false")]),t("td",null,"否")],-1),y=t("tr",null,[t("td",null,[t("code",null,"tableColumnProps")]),t("td",null,[e("支持所有"),t("a",{href:"https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noreferrer"},"el-table-column 属性"),e(" （不包含 label,prop,width,minWidth）")]),t("td",null,[t("code",null,"object")]),t("td"),t("td",null,"否")],-1),k=t("tr",null,[t("td",null,[t("code",null,"preview")]),t("td",null,"仅当 valueType 等于 img 时生效； el-image 图片预览 默认开启 给 false 关闭"),t("td",null,[t("code",null,"boolean")]),t("td"),t("td",null,"否")],-1),C=t("tr",null,[t("td",null,[t("code",null,"linkText")]),t("td",null,"valueType 等于 link 时生效；有值时则表格的整列都会显示这个值，默认取得是 prop 对应的表格数据"),t("td",null,[t("code",null,"string")]),t("td"),t("td",null,"否")],-1),v=t("tr",null,[t("td",null,[t("code",null,"descriptionsItemProps")]),t("td",null,"描述行，el-descriptions-item 的 props"),t("td",null,[t("code",null,"object")]),t("td"),t("td",null,"否")],-1),P=t("tr",null,[t("td",null,[t("code",null,"options")]),t("td",null,"el-select、el-radio-group、el-checkbox-group、el-cascader 和 PlusRadio 的选项 ，支持数组，computed，函数，和 Promise"),t("td",null,[t("code",null,"array/function/promise"),t("a",{href:"/components/type.html#optionstype"},"OptionsType")]),t("td"),t("td",null,"否")],-1),N=t("td",null,[t("code",null,"customGetStatus")],-1),T=t("td",null,[e("自定义 options 的显示逻辑，需要返回一个"),t("a",{href:"/components/type.html#optionsrow"},"OptionsRow"),e("对象。")],-1),z=t("code",null,"function",-1),x=t("td",null,null,-1),R=t("td",null,"否",-1),w=t("tr",null,[t("td",null,[t("code",null,"tooltip")]),t("td",null,"展示一个 icon，hover 时展示一些提示信息"),t("td",null,[t("code",null,"string"),e(" / ( "),t("code",null,"object"),e(),t("a",{href:"https://element-plus.org/zh-CN/component/tooltip.html#attributes",target:"_blank",rel:"noreferrer"},"ElTooltipProps"),e(" )")]),t("td"),t("td",null,"否")],-1),j=t("td",null,[t("code",null,"render")],-1),F=t("td",null,[e("自定义渲染表格单行显示内容，"),t("code",null,"render"),e("的优先级最高，高于"),t("code",null,"renderHTML"),e(" 和 "),t("code",null,"valueType")],-1),I=t("code",null,"function",-1),L=t("td",null,null,-1),E=t("td",null,"否",-1),V=t("td",null,[t("code",null,"renderHTML")],-1),q=t("td",null,[e("自定义渲染表格单行显示内容 需要返回一个 html 字符串，"),t("code",null,"renderHTML"),e("的优先级低于"),t("code",null,"render"),e("，高于 "),t("code",null,"valueType"),e("。"),t("strong",null,"谨慎使用，确保 HTML 字符串可信。")],-1),M=t("code",null,"function",-1),H=t("td",null,null,-1),S=t("td",null,"否",-1),D=t("td",null,[t("code",null,"renderHeader")],-1),O=t("td",null,"自定义渲染表格表头显示内容",-1),Y=t("code",null,"function",-1),$=t("td",null,null,-1),A=t("td",null,"否",-1),G=t("tr",null,[t("td",null,[t("code",null,"formProps")]),t("td",null,"传递给 PlusForm 的配置，支持所有 PlusForm 的 props，表格编辑状态有效。"),t("td",null,[t("code",null,"object")]),t("td"),t("td",null,"否")],-1),W=t("tr",null,[t("td",null,[t("code",null,"formItemProps")]),t("td",null,"传递给 el-form-item 的配置，支持所有 el-form-item 的 props。值支持对象 object，computed，函数和 Promise。"),t("td",null,[t("code",null,"object/function/promise"),t("a",{href:"/components/type.html#propsitemtype"},"PropsItemType")]),t("td"),t("td",null,"否")],-1),B=t("tr",null,[t("td",null,[t("code",null,"fieldProps")]),t("td",null,"传递给具体表单项和表格显示的配置，如 el-input，el-select 的 props。 值支持对象 object，computed，函数和 Promise。"),t("td",null,[t("code",null,"object/function/promise"),e(),t("a",{href:"/components/type.html#propsitemtype"},"PropsItemType")]),t("td"),t("td",null,"否")],-1),J=t("td",null,[t("code",null,"fieldSlots")],-1),U=t("td",null,"表单（表格）单个项目的插槽，支持类似 el-input，el-select， el-image ，el-link 等所有表单（表格）单项的插槽",-1),K=t("code",null,"object",-1),Q=t("td",null,null,-1),X=t("td",null,"否",-1),Z=t("td",null,[t("code",null,"renderField")],-1),tt=t("td",null,[e("自定义渲染 el-form-item 下的 field-item 组件，自定义渲染表单数据双向绑定的核心方法是调用回调函数 "),t("code",null,"onChange"),e(" 把值传给表单")],-1),et=t("code",null,"function",-1),lt=t("td",null,null,-1),ot=t("td",null,"否",-1),nt=t("td",null,[t("code",null,"renderLabel")],-1),dt=t("td",null,"自定义渲染 el-form-item 下 label 行显示内容",-1),rt=t("code",null,"function",-1),ct=t("td",null,null,-1),ut=t("td",null,"否",-1),st=t("td",null,[t("code",null,"hasLabel")],-1),at=t("td",null,"表单中单个项目是否需要 label，默认 undefined，优先级高于表单的整体的 hasLabel",-1),it=t("code",null,"boolean",-1),pt=t("td",null,[t("code",null,"undefined")],-1),ht=t("td",null,"否",-1),mt=t("td",null,[t("code",null,"renderExtra")],-1),_t=t("td",null,"自定义渲染 el-form-item 下一行额外的内容容",-1),ft=t("code",null,"function",-1),bt=t("td",null,null,-1),gt=t("td",null,"否",-1),yt=t("tr",null,[t("td",null,[t("code",null,"colProps")]),t("td",null,"el-col 的 props"),t("td",null,[t("code",null,"object"),e(),t("a",{href:"https://element-plus.org/zh-CN/component/layout.html#col-attributes",target:"_blank",rel:"noreferrer"},"ColProps")]),t("td"),t("td",null,"否")],-1),kt=t("td",null,[t("code",null,"hideInDescriptions")],-1),Ct=t("td",null,"在 PlusDescriptions 组件中 隐藏",-1),vt=t("code",null,"boolean",-1),Pt=t("td",null,[t("code",null,"false")],-1),Nt=t("td",null,"否",-1),Tt=t("td",null,[t("code",null,"hideInForm")],-1),zt=t("td",null,"在 PlusForm 组件中 隐藏",-1),xt=t("code",null,"boolean",-1),Rt=t("td",null,[t("code",null,"false")],-1),wt=t("td",null,"否",-1),jt=t("td",null,[t("code",null,"hideInTable")],-1),Ft=t("td",null,"在 PlusTable 组件中 隐藏",-1),It=t("code",null,"boolean",-1),Lt=t("td",null,[t("code",null,"false")],-1),Et=t("td",null,"否",-1),Vt=t("td",null,[t("code",null,"hideInSearch")],-1),qt=t("td",null,"在 PlusSearch 组件中 隐藏",-1),Mt=t("code",null,"boolean",-1),Ht=t("td",null,[t("code",null,"false")],-1),St=t("td",null,"否",-1),Dt=n('<h2 id="valuetype-可选的表单值" tabindex="-1">valueType 可选的表单值 <a class="header-anchor" href="#valuetype-可选的表单值" aria-label="Permalink to &quot;valueType 可选的表单值&quot;">​</a></h2><table><thead><tr><th>valueType 表单值</th><th>对应 element-plus 的组件</th><th>对应 plus-pro-components 的组件</th><th>对应的表格显示</th></tr></thead><tbody><tr><td><code>autocomplete</code></td><td><a href="https://element-plus.org/zh-CN/component/autocomplete.html" target="_blank" rel="noreferrer">el-autocomplete</a></td><td></td><td>文本显示</td></tr><tr><td><code>cascader</code></td><td><a href="https://element-plus.org/zh-CN/component/cascader.html" target="_blank" rel="noreferrer">el-cascader</a></td><td></td><td>文本显示</td></tr><tr><td><code>checkbox</code></td><td><a href="https://element-plus.org/zh-CN/component/checkbox.html" target="_blank" rel="noreferrer">el-checkbox-group,el-checkbox </a></td><td></td><td>显示值对应<code>options</code>的 <code>label</code></td></tr><tr><td><code>color-picker</code></td><td><a href="https://element-plus.org/zh-CN/component/color-picker.html" target="_blank" rel="noreferrer">el-color-picker</a></td><td></td><td>文本显示</td></tr><tr><td><code>date-picker</code></td><td><a href="https://element-plus.org/zh-CN/component/date-picker.html" target="_blank" rel="noreferrer">el-date-picker</a></td><td></td><td>文本显示 格式化成<code> YYYY-MM-DD HH:mm:ss</code></td></tr><tr><td><code>input-number</code></td><td><a href="https://element-plus.org/zh-CN/component/input-number.html" target="_blank" rel="noreferrer">el-input-number</a></td><td></td><td>文本显示</td></tr><tr><td><code>radio</code></td><td><a href="https://element-plus.org/zh-CN/component/radio.html" target="_blank" rel="noreferrer">el-radio-radio,el-radio</a></td><td></td><td>显示值对应<code>options</code>的 <code>label</code></td></tr><tr><td><code>rate</code></td><td><a href="https://element-plus.org/zh-CN/component/rate.html" target="_blank" rel="noreferrer">el-rate</a></td><td></td><td>文本显示</td></tr><tr><td><code>select</code></td><td><a href="https://element-plus.org/zh-CN/component/select.html" target="_blank" rel="noreferrer">el-select</a></td><td></td><td>显示值对应<code>options</code>的 <code>label</code></td></tr><tr><td><code>slider</code></td><td><a href="https://element-plus.org/zh-CN/component/slider.html" target="_blank" rel="noreferrer">el-slider</a></td><td></td><td>文本显示</td></tr><tr><td><code>switch</code></td><td><a href="https://element-plus.org/zh-CN/component/switch.html" target="_blank" rel="noreferrer">el-switch</a></td><td></td><td>文本显示</td></tr><tr><td><code>time-picker</code></td><td><a href="https://element-plus.org/zh-CN/component/time-picker.html" target="_blank" rel="noreferrer">el-time-picker</a></td><td></td><td>文本显示</td></tr><tr><td><code>time-select</code></td><td><a href="https://element-plus.org/zh-CN/component/time-select.html" target="_blank" rel="noreferrer">el-time-select</a></td><td></td><td>文本显示</td></tr><tr><td><code>textarea</code></td><td><a href="https://element-plus.org/zh-CN/component/input.html#%E6%96%87%E6%9C%AC%E5%9F%9F" target="_blank" rel="noreferrer">el-input </a> (type=textarea)</td><td></td><td>文本显示</td></tr><tr><td><code>input</code></td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input</a> 表单默认值</td><td></td><td>文本显示</td></tr><tr><td><code>text</code></td><td>文本显示</td><td></td><td>文本显示</td></tr><tr><td><code>plus-radio</code></td><td></td><td><a href="/components/radio.html"> plus-radio</a></td><td>显示值对应<code>options</code>的 <code>label</code></td></tr><tr><td><code>plus-date-picker</code></td><td></td><td><a href="/components/date-picker.html">plus-date-picker</a></td><td>文本显示</td></tr><tr><td><code>plus-input-tag</code></td><td></td><td><a href="/components/input-tag.html">plus-input-tag</a></td><td>文本显示</td></tr></tbody></table><h2 id="valuetype-可选的显示值" tabindex="-1">valueType 可选的显示值 <a class="header-anchor" href="#valuetype-可选的显示值" aria-label="Permalink to &quot;valueType 可选的显示值&quot;">​</a></h2><table><thead><tr><th>valueType 表单值</th><th>说明</th><th>对应的编辑状态组件</th></tr></thead><tbody><tr><td><code>undefined</code></td><td>显示默认值，显示文本</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr><tr><td><code>img</code></td><td>显示图片，自带预览，可使用配置项<code>preview</code>禁止</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr><tr><td><code>link</code></td><td>显示 el-link ，配合配置项<code>fieldProps</code>和<code>linkText</code> 使用</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr><tr><td><code>money</code></td><td>显示金钱</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr><tr><td><code>tag</code></td><td>显示 el-tag，配合配置项<code>fieldProps</code> 使用</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr><tr><td><code>progress</code></td><td>显示 el-progress，配合配置项<code>fieldProps</code> 使用</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr><tr><td><code>copy</code></td><td>文本后面有可以复制按钮</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr><tr><td><code>code</code></td><td>显示代码</td><td><a href="https://element-plus.org/zh-CN/component/input.html" target="_blank" rel="noreferrer">el-input </a></td></tr></tbody></table>',4);function Ot(Yt,$t,At,Gt,Wt,Bt){const l=u("docs-tip");return r(),c("div",null,[a,t("table",null,[i,t("tbody",null,[p,h,m,_,f,b,g,y,k,C,v,P,t("tr",null,[N,T,t("td",null,[z,e(),o(l,{content:" (data: {options: OptionsRow[]; value: string / number;row: RecordType }) => OptionsRow"})]),x,R]),w,t("tr",null,[j,F,t("td",null,[I,e(),o(l,{content:"(value: any, data:{ row: object; index: number; column: PlusColumn}) =>  VNode / string "})]),L,E]),t("tr",null,[V,q,t("td",null,[M,e(),o(l,{content:"(value: any, data:{ row: object; index: number; column: PlusColumn}) => string"})]),H,S]),t("tr",null,[D,O,t("td",null,[Y,e(),o(l,{content:"(label: any, data:{ row: object; index: number; column: PlusColumn}) => VNode / string "})]),$,A]),G,W,B,t("tr",null,[J,U,t("td",null,[K,e(),o(l,{content:" { [slotName: string]: (data?: any) => VNode / string }"})]),Q,X]),t("tr",null,[Z,tt,t("td",null,[et,e(),o(l,{content:"(value:any,onChange: (value: any) => void,props: any, ) => VNode / string"})]),lt,ot]),t("tr",null,[nt,dt,t("td",null,[rt,e(),o(l,{content:"(label: any, data:{ row: object; index: number; column: PlusColumn}) =>  VNode / string"})]),ct,ut]),t("tr",null,[st,at,t("td",null,[it,e(),o(l,{content:"boolean / Ref<boolean> / ComputedRef<boolean>"})]),pt,ht]),t("tr",null,[mt,_t,t("td",null,[ft,e(),o(l,{content:"( column: PlusColumn) =>  VNode / string"})]),bt,gt]),yt,t("tr",null,[kt,Ct,t("td",null,[vt,e(),o(l,{content:"boolean / Ref<boolean> / ComputedRef<boolean>"})]),Pt,Nt]),t("tr",null,[Tt,zt,t("td",null,[xt,e(),o(l,{content:"boolean / Ref<boolean> / ComputedRef<boolean>"})]),Rt,wt]),t("tr",null,[jt,Ft,t("td",null,[It,e(),o(l,{content:"boolean / Ref<boolean> / ComputedRef<boolean>"})]),Lt,Et]),t("tr",null,[Vt,qt,t("td",null,[Mt,e(),o(l,{content:"boolean / Ref<boolean> / ComputedRef<boolean>"})]),Ht,St])])]),Dt])}const Kt=d(s,[["render",Ot]]);export{Ut as __pageData,Kt as default};

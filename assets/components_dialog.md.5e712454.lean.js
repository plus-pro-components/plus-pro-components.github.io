import{_ as n,H as o,o as e,c as p,J as c,E,C as a,a as t,V as l}from"./chunks/framework.c44586f4.js";const b=JSON.parse('{"title":"Dialog 弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md"}'),d={name:"components/dialog.md"},C=a("h1",{id:"dialog-弹窗",tabindex:"-1"},[t("Dialog 弹窗 "),a("a",{class:"header-anchor",href:"#dialog-弹窗","aria-label":'Permalink to "Dialog 弹窗"'},"​")],-1),D=a("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),r=a("p",null,"dialog/basic",-1),i=l("",8);function u(F,k,A,h,g,m){const s=o("DocsCodeDemo");return e(),p("div",null,[C,D,c(s,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleOpen%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EPlusDialog%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eshow%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eheader%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E6%A0%87%E9%A2%98%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecancel-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%8F%96%E6%B6%88%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Econfirm-text%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%A1%AE%E5%AE%9A%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40confirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleConfirm%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%E7%A1%AE%E8%AE%A4%E5%88%A0%E9%99%A4%E6%AD%A4%E8%A1%8C%E6%95%B0%E6%8D%AE%E5%90%97%EF%BC%9F%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EPlusDialog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ElMessage%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'element-plus'%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20show%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleConfirm%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20ElMessage%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Esuccess%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'%E5%88%A0%E9%99%A4%E6%88%90%E5%8A%9F'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%20%20show%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleOpen%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20show%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"dialog/basic","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3Cel-button%20%40click%3D%22handleOpen%22%3E%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%3C%2Fel-button%3E%0D%0A%0D%0A%20%20%3CPlusDialog%0D%0A%20%20%20%20v-model%3D%22show%22%0D%0A%20%20%20%20header%3D%22%E6%A0%87%E9%A2%98%22%0D%0A%20%20%20%20cancel-text%3D%22%E5%8F%96%E6%B6%88%22%0D%0A%20%20%20%20confirm-text%3D%22%E7%A1%AE%E5%AE%9A%22%0D%0A%20%20%20%20%40confirm%3D%22handleConfirm%22%0D%0A%20%20%3E%0D%0A%20%20%20%20%E7%A1%AE%E8%AE%A4%E5%88%A0%E9%99%A4%E6%AD%A4%E8%A1%8C%E6%95%B0%E6%8D%AE%E5%90%97%EF%BC%9F%0D%0A%20%20%3C%2FPlusDialog%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20ElMessage%20%7D%20from%20'element-plus'%0D%0Aconst%20show%20%3D%20ref(false)%0D%0A%0D%0Aconst%20handleConfirm%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20ElMessage.success('%E5%88%A0%E9%99%A4%E6%88%90%E5%8A%9F')%0D%0A%20%20show.value%20%3D%20false%0D%0A%7D%0D%0Aconst%20handleOpen%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20show.value%20%3D%20true%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A"},{default:E(()=>[r]),_:1}),i])}const _=n(d,[["render",u]]);export{b as __pageData,_ as default};

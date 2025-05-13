---
url: /components/rule.md
---
# 组件自定义总则

* 组件都可以自定义。

* 组件自定义方式都有三种方式，优先级`render*`最高，插槽次之。

  * 渲染函数（`render*` ）
  * `j(t)sx`
  * 插槽

* 组件同时包含`整体插槽`和`单项插槽`的，`单项插槽`的优先级更高。 （`单项插槽`也叫`个性化插槽`）

* 组件同时包含`整体渲染函数`和`单项渲染函数`的，`单项渲染函数`的优先级更高。

## 概念详解

`整体插槽/整体渲染函数`和`单项插槽/单项渲染函数`的概念是对于循环产生组件(元素)，需要自定义循环每一项的时候。

| 概念                   | 含义                             | 优先级(同时存在时) |
| ---------------------- | -------------------------------- | ------------------ |
| 单项渲染函数           | 循环每一项的渲染函数都可以自定义 | 最高               |
| 整体渲染函数           | 循环每一项的渲染函数都相同       | 高                 |
| 单项插槽（个性化插槽） | 循环每一项的插槽都可以自定义     | 低                 |
| 整体插槽               | 循环每一项的插槽都相同           | 最低               |

参考以下伪代码示例：

> 整体渲染函数

```html
<template>
  <div v-for="item in list" :key="item.value">
    <!--渲染出来的每一项都是 a 标签  -->
    <component :is="allRender(item)"></component>
  </div>
</template>

<script lang="ts" setup>
  import { h } from 'vue'

  type Item = {
    value: number
  }
  const list = [{ value: 1 }, { value: 2 }]
  const allRender = (item: Item) => h('a', null, String(item.value))
</script>
```

> 单项渲染函数

```html
<template>
  <div v-for="item in list" :key="item.value">
    <!--渲染出来的第一项是 a 标签，渲染出来的第二项是 p 标签  -->
    <component :is="item.render(item)"></component>
  </div>
</template>

<script lang="ts" setup>
  import type { VNode } from 'vue'
  import { h } from 'vue'

  type Item = {
    value: number
    render: (item: Item) => VNode
  }
  const list = [
    { value: 1, render: (item: Item) => h('a', null, String(item.value)) },
    { value: 2, render: (item: Item) => h('p', null, String(item.value)) }
  ]
</script>
```

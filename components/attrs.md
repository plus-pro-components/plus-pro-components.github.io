---
url: /components/attrs.md
---
# 事件和样式透传

## 事件透传

### vue3 的事件透传原则如下

**`以 on 开头，并跟着大写字母的 props 会被当作事件监听器。`**

**比如，onClick 与模板中的 @click 等价，onVisibleChange 与模板中的 @visible-change 等价**

参考 vue 官方文档 **[透传 Attributes](https://cn.vuejs.org/guide/components/attrs.html)**

参考 vue 官方文档 **[渲染函数 & JSX](https://cn.vuejs.org/guide/extras/render-function.html)**

### `PlusProComponents` 组件的事件透传

具备以下条件的都支持事件透传

* **[columns](/components/config.html) 配置中的`*Props`字段**

* **其他组件中的`*Props`字段**

* **文档中说明这个字段是组件的 props 的字段**

### `fieldProps` 事件示例

[columns](/components/config.html) 配置中的`fieldProps`字段表示的是 传递给具体表单项和表格显示的配置，如 el-input，el-select，el-tag，el-image 的 props ，同时还支持事件透传

```js
const columns = [
  {
    label: '状态',
    prop: 'status',
    // 对应的element-plus 的组件el-select
    valueType: 'select',
    options: [],
    fieldProps: {
      // https://element-plus.org/zh-CN/component/select.html#select-events
      // el-select 的事件 `change`，对应的配置就是 `onChange`
      onChange: () => {
        console.log('onChange')
      },
      // el-select 的事件 `visible-change`，对应的配置就是 `onVisibleChange`
      onVisibleChange: () => {
        console.log('visibleChange')
      },
      // el-select 的事件 `remove-tag`，对应的配置就是 `onRemoveTag`
      onRemoveTag: () => {
        console.log('onRemoveTag')
      }
    }
  },
  {
    label: '名称',
    prop: 'name',
    // 对应的element-plus 的组件el-input
    valueType: 'input',
    fieldProps: {
      // https://element-plus.org/zh-CN/component/input.html#input-events
      // el-input 的事件 `blur`，对应的配置就是 `onBlur`
      onBlur: () => {
        console.log('onBlur')
      },
      // el-input 的事件 `focus`，对应的配置就是 `onFocus`
      onFocus: () => {
        console.log('onFocus')
      },
      // el-input 的事件 `change`，对应的配置就是 `onChange`
      onChange: () => {
        console.log('onChange')
      },
      // el-input 的事件 `input`，对应的配置就是 `onInput`
      onInput: () => {
        console.log('onInput')
      },
      // el-input 的事件 `clear`，对应的配置就是 `onClear`
      onClear: () => {
        console.log('onClear')
      }
    }
  }
]
```

### 需要 `事件修饰符` 和 `按键修饰符`的事件写法示例

[参考 Vue 官方写法](https://cn.vuejs.org/guide/extras/render-function.html#event-modifiers)

* 对于 `.passive`、`.capture` 和 `.once` 事件修饰符，可以使用驼峰写法将他们拼接在事件名后面。

  示例

  ```ts
  import type { PlusColumn } from 'plus-pro-components'

  const columns: PlusColumn[] = [
    {
      label: '文本',
      prop: 'text',
      valueType: 'text',
      fieldProps: {
        onClickCapture() {
          /* 捕捉模式中的监听器 */
        },
        onKeyupOnce() {
          /* 只触发一次 */
        },
        onMouseoverOnceCapture() {
          /* 单次 + 捕捉 */
        }
      }
    }
  ]
  ```

* 其他`修饰符`写法，需要使用`withKeys`、[withModifiers](https://cn.vuejs.org/api/render-function.html#withmodifiers)

  以`fieldProps`为例，支持点击阻止事件冒泡, 按下 Enter 键提交搜索等。

  ```html
  <template>
    <div @click="handleClickWrapper">
      <PlusSearch v-model="state" :columns="columns" :has-unfold="false" @search="handleSearch" />
    </div>
  </template>

  <script lang="ts" setup>
    import { ref, withKeys, withModifiers } from 'vue'
    import type { PlusColumn } from 'plus-pro-components'

    const state = ref({
      text: '我是一段有想法的文本',
      name: '名字',
      time: new Date().toString()
    })

    const columns: PlusColumn[] = [
      {
        label: '文本',
        prop: 'text',
        valueType: 'text',
        fieldProps: {
          style: {
            cursor: 'pointer',
            userSelect: 'none'
          },
          // 阻止事件冒泡，只有点击自己时触发
          onClick: withModifiers(() => {
            console.log('点击文本了')
          }, ['stop', 'self'])
        }
      },
      // valueType 没有的情况下，默认为'input'，对应el-input组件
      {
        label: '名称1',
        prop: 'name',
        fieldProps: {
          // 当前输入框聚焦状态，按下Enter 键提交搜索
          onKeyup: withKeys(() => {
            handleSearch()
          }, ['enter'])
        }
      },
      /**
       * 凑数的
       * 当一个表单中只有一个单行文本输入字段时， 浏览器应当将在此字段中按下 Enter （回车键）的行为视为提交表单的请求。
       */
      {
        label: '时间',
        prop: 'time',
        valueType: 'date-picker'
      }
    ]
    const handleSearch = () => {
      console.log('Enter 键触发了')
    }
    const handleClickWrapper = () => {
      console.log('点击第一个文本时，不会被事件冒泡机制触发，点击其他地方正常触发')
    }
  </script>
  ```

[vue 官方建议使用 withModifiers，为什么使用 withKeys？](https://github.com/vuejs/babel-plugin-jsx/issues/269)

### PlusLayout 子组件事件写法示例

[PlusLayout](/components/layout.html) 的 `sidebarProps` 和`headerProps`表示的就是子组件的 props。

如 [PlusSidebar ](/components/sidebar.html) 的事件 `toggleCollapse`和 [PlusHeader ](/components/header.html)的事件`clickDropdownItem`。

示例：

> 模板中

```html
<PlusLayout
  :sidebarProps="{ onToggleCollapse: handleToggleCollapse }"
  :headerProps="{ onClickDropdownItem: handleClickDropdownItem}"
/>
```

> setup 中

```ts
const handleClickDropdownItem = (dropdownItem: { label: string; value: string }) => {
  console.log(dropdownItem)
}

const handleToggleCollapse = (collapse: boolean) => {
  console.log(collapse)
}
```

### 其他\*Props 和高级组件事件写法参考上面示例

## 样式透传

支持事件透传的一般都支持样式透传

### `fieldProps` 样式透传示例

```js
const columns = [
  {
    label: '状态',
    prop: 'status',
    // 对应的element-plus 的组件el-select
    valueType: 'select',
    options: [],
    fieldProps: {
      // 对应的 el-select 的样式
      style: {
        width: '100%'
      }
    }
  }
]
```

### `colProps` 样式透传示例

```js
const columns = [
  {
    label: '名称',
    prop: 'name',
    colProps: {
      // 对应的 el-col 的样式
      style: {
        marginLeft: '10px'
      }
    }
  }
]
```

### 其他参考上面示例

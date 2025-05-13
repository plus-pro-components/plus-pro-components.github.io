---
url: /guide/upgrade.md
---
# 版本升级

本记录只记录影响较大变更，对于一般[新功能、性能提升和问题修复](/guide/changelog.html)不在此记录。

## 从 v0.1.18 升级到 v0.1.19

* [PlusLayout](/components/layout.html) 布局样式发生变化，注意适配。

## 从 v0.1.14 升级到 v0.1.15

* [PlusSearch](/components/search.html#search-attributes) 新增了折叠动画

  默认开启，不需要的话，设置 `collapseTransition` 为 `false`即可。

  ```html
  <PlusSearch :collapseTransition="false" />
  ```

* [PlusColumn](/components/config.html) 中对 `options` 新增了 `optionsMap`,可以对 `options` 中的字段显示进行自定义。 [参考](/components/config.html)

* [PlusColumn](/components/config.html) 中 `tooltip` 新增了计算属性支持。 [参考](/components/config.html)

## 从 v0.1.13 升级到 v0.1.14

* [PlusPage](/components/page.html) Exposes 变更 [参考](/components/page.html#page-exposes)

  `handleRest` 方法已废弃（未来会在 v0.2.0 版本中移除），请使用 `handleReset `代替。 [参考](/components/page.html#page-exposes)

## 从 v0.1.8 升级到 v0.1.11

* 提升了组件 TS 类型兼容性

  在 v0.1.8 版本的基础上，提升了组件的 TS 类型兼容性，不存在的类型不再会提示类型错误。

## 从 v0.1.7 升级到 v0.1.8

* [PlusColumn](/components/config.html) 中的 `formItemProps` 中的 `labelWidth` 开始生效，原来[PlusColumn](/components/config.html) 中的配置 `labelWidth` 不再生效。

```ts
import type { PlusColumn } from 'plus-pro-components'

const columns: PlusColumn[] = [
  {
    label: 'test',
    prop: 'test',
    labelWidth: '100px', // [!code --]
    formItemProps: {
      labelWidth: '100px' // [!code ++]
    }
  }
]
```

* 组件 TS 类型更加严格

  组件的 TS 类型更加严格了，提示性更好了，兼容性降低了，不影响功能，但是会提示类型错误。

## 从 v0.1.4 升级到 v0.1.6

### [PlusDrawerForm](/components/drawer-form.html)

* 废弃了 `drawer` props，el-drawer 的 props 直接在 [PlusDrawerForm](/components/drawer-form.html) 上写。

## v0.1.0

### 更加友好

* 重构了 [PlusFormItem](/components/form-item.html) 和重 [PlusDisplay](/components/display-item.html) 组件，对新功能扩展更加友好。
* 重构了 d.ts 生成工具，ts 提示由原来的 `80%` 提升至 `100%`，对用户使用更加友好。

### 体积更小

* 整包体积由原来的 `39.5MB` 优化至 `9.5MB`，体积减少了 `76%`。
* CSS 体积由原来的 `17.7kB` 优化至 `12.8KB`，体积减少了 `28%`。

### 更高的单元测试覆盖率

* 单元测试覆盖率由原来的 `90%` 提升至 `92.5%`。

## 从 v0.0.9 升级到 v0.0.10

### PlusDrawerForm 抽屉表单 事件修改

* [PlusDrawerForm](/components/drawer-form.html#drawerform-events) 的事件`submit` 已废弃，请使用`confirm` 代替。[ 参考 DrawerForm-events](/components/drawer-form.html#drawerform-events)

## 从 v0.0.7 升级到 v0.0.8

### 国际化文件导入方式修改

* 导入文件报错

```sh
ERROR  failed to resolve import "plus-pro-components/locale/zh-cn.mjs"
ERROR  failed to resolve import "plus-pro-components/locale/en.mjs"
```

* 解决方案

```js
import plusZhCn from 'plus-pro-components/locale/zh-cn.mjs' // [!code --]
import plusZhCn from 'plus-pro-components/locale/zh-cn' // [!code ++]

import plusEn from 'plus-pro-components/locale/en.mjs' // [!code --]
import plusEn from 'plus-pro-components/locale/en' // [!code ++]
```

或者

```js
import plusZhCn from 'plus-pro-components/locale/zh-cn.mjs' // [!code --]
import plusZhCn from 'plus-pro-components/es/locale/lang/zh-cn' // [!code ++]

import plusEn from 'plus-pro-components/locale/en.mjs' // [!code --]
import plusEn from 'plus-pro-components/es/locale/lang/en' // [!code ++]
```

## 从 v0.0.4 升级到 v0.0.5

### PlusSearch 搜索组件

* 搜索按钮现在默认靠右，要恢复以前的顺序排布可使用以下代码

  ```css
  .plus-search .plus-search__button__wrapper.el-form-item {
    flex: none;
  }
  ```

## 从 v0.0.3 升级到 v0.0.4

### PlusFormItem 表单单项组件

* 表单单项组件 移除了 `valueType === 'date-picker'`时，`el-date-picker` 组件的默认属性 `format` 和`value-format`，原来的默认值都为 `YYYY-MM-DD HH:mm:ss`。

* 受影响的组件 [PlusForm](/components/form.html)， [PlusDialogForm](/components/dialog-form.html)，[PlusDrawerForm ](/components/drawer-form.html)， [PlusStepsForm ](/components/steps-form.html)，[PlusSearch ](/components/search.html)，[PlusDisplayItem ](/components/display-item.html)，[PlusTable ](/components/table.html)，[PlusPage ](/components/page.html)

## 从 v0.0.2 升级到 v0.0.3

### 高级组件通用配置 columns

* `headerFilter`参数已废弃，请使用 `disabledHeaderFilter`代替。[ 参考 columns](/components/config.html)

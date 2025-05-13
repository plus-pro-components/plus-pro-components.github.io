---
url: /components/descriptions.md
---
# Descriptions 描述列表

[描述列表 ](/components/descriptions.html) 是在 [PlusDisplayItem ](/components/display-item.html) 组件上构建而来， 支持其属性、方法 、定义函数和插槽。

## 基础用法

:::demo

descriptions/basic

:::

## 自定义内容 (插槽)

v0.0.2

PlusDescriptions 组件会自动根据配置项的 prop 生成对应的插槽， 插槽的生成规则就是 固定 key 值 **\[ plus-desc- ]** 然后加上 配置项的 prop。

:::warning 注意
**插槽 的优先级低于 `renderDescriptionsItem`，高于`render`和`renderHTML`**。
:::

:::demo

descriptions/slot

:::

## 自定义内容 (renderDescriptionsItem/jsx)

v0.0.2

自定义内容支持 `renderDescriptionsItem`，`render`和`renderHTML`，优先级从高到低。 参考配置[columns](/components/config.html)

:::demo

descriptions/render

:::

## 自定义 label (插槽)

v0.0.2

PlusDescriptions 组件会自动根据配置项的 prop 生成对应的插槽， 插槽的生成规则就是 固定 key 值 **\[ plus-desc-label- ]** 然后加上 配置项的 prop。

:::warning 注意
**插槽 的优先级低于 renderDescriptionsLabel**。
:::

:::demo

descriptions/slot-label

:::

## 自定义 label (renderDescriptionsLabel/jsx)

v0.0.2

:::warning 注意
**renderDescriptionsLabel 的优先级高于插槽**。
:::

:::demo

descriptions/render-label

:::

## 可编辑描述列表

v0.1.17

::: warning 注意
描述列表中表单数据不会主动和描述列表数据同步，需要结合 [formChange](/components/table.html#table-events) 事件手动同步。
:::

:::demo

descriptions/form

:::

## Descriptions API

## Descriptions Attributes

| 名称                                            | 说明                                                                                                                                                          | 类型                                                                                                                    | 默认值  | 是否必须 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| `columns`                                       | 描述列表配置信息                                                                                                                                              | `array`[PlusColumn\[\]](/components/config.html)                                                                          | `[]`    | 是       |
| `data`                                          | 描述列表数据                                                                                                                                                  | `object`                                                                                                                | `{}`    | 是       |
| `border`v0.1.17                | 是否带有边框 ，不会作用于 el-descriptions 本身的 border 属性 。 v0.1.18支持作用于 el-descriptions，仅在不可编辑时（`editable` 为 `false`）生效。 | `boolean`                                                                                                               | `true`  | 否       |
| `editable`v0.1.17              | 描述列表整体可编辑 ，优先级低于单个 [PlusColumn\[editable\]](/components/config.html) 的配置项                                                                  | `boolean`                                                                                                               | `false` | 否       |
| `formProps`v0.1.17             | 描述列表表单的 props，优先级低于单个 [PlusColumn\[formProps\]](/components/config.html) 的配置项                                                                | `object`[PlusFormProps](/components/form.html#form-attributes)                                                          |         | 否       |
| `descriptionsItemProps`v0.1.17 | el-descriptions-item 整体的 props ，优先级低于单个 [PlusColumn\[descriptionsItemProps\] ](/components/config.html)的配置项                                      | `object`[DescriptionsItemProps](https://element-plus.org/zh-CN/component/descriptions.html#descriptionsitem-attributes) |         | 否       |
| ...                                             | ...                                                                                                                                                           | ...                                                                                                                     | ...     | ...      |

:::tip 提示
**`...`表示同时支持所有 [el-descriptions](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-attributes) Attributes ， border 属性除外。v0.1.18 border 属性支持作用于 el-descriptions，仅在不可编辑时生效。**
:::

## Descriptions Events

| 名称                                 | 说明                                     | 类型                                                                                                                                                          |
| ------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formChange`v0.1.17 | 描述列表中有可以编辑的表单项目改变时触发 | `function`  [FormChangeCallBackParams](/components/type.html#formchangecallbackparams) |

## Descriptions Slots

| 插槽名                                      | 说明                                                         | 作用域插槽参数         |
| ------------------------------------------- | ------------------------------------------------------------ | ---------------------- |
| `plus-desc-*` v0.0.2       | 自定义描述，组件会自动根据配置项的 prop 生成对应的插槽       | `{value,data,column}`  |
| `plus-desc-label-*` v0.0.2 | 自定义描述 label，组件会自动根据配置项的 prop 生成对应的插槽 | `{label,data, column}` |
| ...                                         | ...                                                          | ...                    |

:::tip 提示
**`...`表示同时支持所有 [el-descriptions](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-slots) Slots**
:::

## Exposes

| 名称                                    | 说明                         | 类型                                                           |
| --------------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| `validate`v0.1.17      | 表单校验                     | `function`  |
| `clearValidate`v0.1.17 | 清除所有表单校验             | `function`          |
| `formRefs`v0.1.17      | 描述列表中所有 form 的实例。 | `array`       |

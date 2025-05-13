---
url: /components/input-tag.md
---
# InputTag 输入标签

InputTag 组件由 [ElTag](https://element-plus.org/zh-CN/component/tag.html) 和[ElInput](https://element-plus.org/zh-CN/component/input.html) 组成。

::: tip 提示

element-plus 官方已经在v2.9.0版本中支持了 [input-tag](https://element-plus.org/zh-CN/component/input-tag.html) 组件。
:::

## 基础用法

:::demo

input-tag/basic

:::

## 数量限制

:::demo

input-tag/limit

:::

## 禁用

:::demo

input-tag/disabled

:::

## 触发方式

默认 `失去焦点`、`按回车键`、`按空格键`都可以触发，这几种触发方式可以任意组合。
:::demo

input-tag/trigger

:::

## InputTag API

## InputTag Attributes

| 名称                                      | 说明                                                                               | 类型                                                               | 默认值                       | 是否必须 |
| ----------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------- | -------- |
| `model-value / v-model`                   | 输入标签组件绑定值 （**不可重复**）                                                | `array`                    |                              | 否       |
| `trigger`                                 | 触发输入内容变成标签的方式                                                         | `array`/`string`    | `['blur', 'enter', 'space']` | 否       |
| `limit`                                   | tag 的最大数量                                                                     | `number`                                                           |                              | 否       |
| `formatTag`v0.0.3        | 格式化标签内容                                                                     | `function`  |                              | 否       |
| `retainInputValue`v0.0.3 | 是否保留输入框的内容                                                               | `boolean`                                                          | `false`                      | 否       |
| `tagProps`                                | [ElTag](https://element-plus.org/zh-CN/component/tag.html#tag-attributes) 的 props | `object`                                                           |                              | 否       |
| `inputProps`                              | [ElInput](https://element-plus.org/zh-CN/component/input.html) 的 props            | `object`                                                           |                              | 否       |
| `disabled` v0.1.14       | 禁用                                                                               | `boolean`                                                          | `false`                      | 否       |

## InputTag Events

| 名称                            | 说明                 | 类型                                                                                  |
| ------------------------------- | -------------------- | ------------------------------------------------------------------------------------- |
| `change`                        | tag 数据改变时触发   | `function`                     |
| `remove`v0.0.3 | 移除 tag 触发        | `function`                        |
| `blur`v0.0.3   | 输入框失去焦点时触发 | `function`  |
| `enter`v0.0.3  | 按下回车键触发       | `function`  |
| `space`v0.0.3  | 按下空格键触发       | `function`  |

## Exposes

| 名称            | 说明                                                                | 类型                                                                             |
| --------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `inputInstance` | [ElInput](https://element-plus.org/zh-CN/component/input.html) 实例 | `object`  |
| `tagInstance`   | [ElTag](https://element-plus.org/zh-CN/component/tag.html) 实例     | `object`    |

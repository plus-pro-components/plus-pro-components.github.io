---
url: /components/date-picker.md
---
# DatePicker

## 简介

PlusDatePicker 是由两个 el-date-picker （属性 type 不包含 range）组件组成，核心功能点是两个选择可以独立开来。

## 基础用法

:::demo

date-picker/basic

:::

## DatePicker API

## DatePicker Attributes

| 名称                                                                                   | 说明                                                                                                    | 类型                                                                                                       | 默认值                                                              | 是否必须 |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------- |
| `model-value / v-model`                                                                | 绑定值                                                                                                  | `array`                                                            |                                                                     | 否       |
| `type`                                                                                 | [el-date-picker](https://element-plus.org/zh-CN/component/date-picker.html) 的类型                      | `string`          | `datetime`                                                          | 否       |
| `format` deprecated v0.1.0 | 显示在输入框中的格式,已废弃                                                                             | `string`                                                                                                   | `YYYY-MM-DD HH:mm:ss`                                               | 否       |
| `valueFormat`                                                                          | 绑定值的格式。 不指定则绑定值为 Date 对象                                                               | `string`                                                                                                   | `YYYY-MM-DD HH:mm:ss`                                               | 否       |
| `rangeSeparator`                                                                       | 开始时间和结束时间中间的分隔符                                                                          | `string`                                                                                                   | `/`                                                                 | 否       |
| `disabled` v0.1.14                                                    | 禁用                                                                                                    | `boolean`                                                                                                  | `false`                                                             | 否       |
| `startProps`                                                                           | 开始的[el-date-picker](https://element-plus.org/zh-CN/component/date-picker.html) 的 props（支持所有）  | `object` [ElDatePickerProps](https://element-plus.org/zh-CN/component/date-picker.html#%E5%B1%9E%E6%80%A7) | `{}`                                                                | 否       |
| `endProps`                                                                             | 结束的[el-date-picker](https://element-plus.org/zh-CN/component/date-picker.html) 的 props （支持所有） | `object`[ElDatePickerProps](https://element-plus.org/zh-CN/component/date-picker.html#%E5%B1%9E%E6%80%A7)  | `{}`                                                                | 否       |
| `startDisabledDate`                                                                    | 开始的[el-date-picker](https://element-plus.org/zh-CN/component/date-picker.html) 的 disabledDate       | `function`                   | [startDisabledDate](/components/date-picker.html#startdisableddate) | 否       |
| `endDisabledDate`                                                                      | 结束的[el-date-picker](https://element-plus.org/zh-CN/component/date-picker.html) 的 disabledDate       | `function`                 | [endDisabledDate](/components/date-picker.html#enddisableddate)     | 否       |
| ...                                                                                    | ...                                                                                                     | ...                                                                                                        | ...                                                                 | ...      |

:::tip 提示
v0.1.0
**`...`表示同时支持所有 [el-date-picker](https://element-plus.org/en-US/component/date-picker.html#attributes) Attributes**，**startProps 和 endProps 里面配置的属性优先级更高**
:::

### startDisabledDate

默认值

```js
const startDisabledDate = (startTime, endValue) => {
  if (!endValue) return false
  return startTime.getTime() > new Date(endValue).getTime()
}
```

### endDisabledDate

默认值

```js
const endDisabledDate = (endTime, startValue) => {
  if (!startValue) return false
  return endTime.getTime() < new Date(startValue).getTime()
}
```

## DatePicker Events

| 名称     | 说明           | 类型                                                                |
| -------- | -------------- | ------------------------------------------------------------------- |
| `change` | 用户选值时触发 | `function`  |

::: tip 提示
el-date-picker 的其他事件的支持写法 如 `blur`，如下示例
:::

示例：

```html
<PlusDatePicker :start-props="{onBlur: () => {} }" :end-props="{onBlur: () => {} }" />
```

## Exposes

| 名称                  | 说明                   | 类型                                                                      |
| --------------------- | ---------------------- | ------------------------------------------------------------------------- |
| `startPickerInstance` | 开始的`el-date-picker` | `object` |
| `endPickerInstance`   | 结束的`el-date-picker` | `object` |

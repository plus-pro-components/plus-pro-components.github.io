---
url: /components/header.md
---
# Header 页头

## 简介

PlusHeader 页面头部。

## 基础用法

:::demo

header/basic

:::

## 自定义左侧和右侧 (renderHeaderLeft/renderHeaderRight)

:::demo

header/render

:::

## 自定义左侧和右侧 (插槽)

:::demo

header/slots

:::

## 用户下拉自定义

:::demo

header/dropdown

:::

## Header API

## Header Attributes

| 名称                | 说明                  | 类型                                                                                                                          | 默认值                                     | 是否必须 |
| ------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------- |
| `logo`              | logo                  | `string`                                                                                                                      | `https://plus-pro-components.com/logo.png` | 否       |
| `title`             | 标题                  | `string`                                                                                                                      | `PlusProComponents`                        | 否       |
| `trigger`           | 名称头像下拉触发方式  | `string`                                                                       | `click`                                    | 否       |
| `hasUserInfo`       | 是否需要用户信息      | `boolean`                                                                                                                     | `true`                                     | 否       |
| `userInfo`          | 用户信息              | `object`                                               | `{}`                                       | 否       |
| `logoutText`        | 退出登录文字          | `string`                                                                                                                      | `退出登录`                                 | 否       |
| `dropdownList`      | 下拉其他选项          | `array`                                                      | `[]`                                       | 否       |
| `renderHeaderLeft`  | 自定义左侧            | `function`                                      |                                            | 否       |
| `renderHeaderRight` | 自定义右侧            | `function` |                                            | 否       |

## Header Events

| 名称                | 说明               | 类型                                                      |
| ------------------- | ------------------ | --------------------------------------------------------- |
| `clickDropdownItem` | 点击下拉单项时触发 | `function`  |

## Header Slots

| 插槽名         | 说明           | 作用域插槽参数     |
| -------------- | -------------- | ------------------ |
| `header-left`  | 自定义头部左侧 | `{logo,title}`     |
| `header-right` | 自定义头部右侧 | `{userInfo,title}` |

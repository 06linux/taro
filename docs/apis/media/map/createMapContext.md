---
title: Taro.createMapContext(mapId, component)
sidebar_label: createMapContext
---

创建 [map](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) 上下文 [MapContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html) 对象。

## 类型

```tsx
(mapId: string, component?: Record<string, any>) => MapContext
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mapId | `string` | Map 组件的 id |
| component | `Record<string, any>` | 在自定义组件下，当前组件实例的this，以操作组件内 Map 组件 |

## 示例代码

```tsx
const mapCtx = Taro.createMapContext('myMap')
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.createMapContext | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html)

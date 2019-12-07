---
title: Animation
sidebar_label: Animation
---

## 方法

### export

导出动画队列。**export 方法每次调用后会清掉之前的动画操作。**

```tsx
() => Record<string, any>[]
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.export.html)

### backgroundColor

设置背景色

```tsx
(value: string) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string` | 颜色值 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.backgroundColor.html)

### bottom

设置 bottom 值

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string | number` | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.bottom.html)

### height

设置高度

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string | number` | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.height.html)

### left

设置 left 值

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string | number` | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.left.html)

### matrix

同 [transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)

```tsx
() => Animation
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix.html)

### matrix3d

同 [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)

```tsx
() => Animation
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix3d.html)

### opacity

设置透明度

```tsx
(value: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `number` | 透明度，范围 0-1 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.opacity.html)

### right

设置 right 值

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string | number` | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.right.html)

### rotate

从原点顺时针旋转一个角度

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate.html)

### rotate3d

从 固定 轴顺时针旋转一个角度

```tsx
(x: number, y: number, z: number, angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 旋转轴的 x 坐标 |
| y | `number` | 旋转轴的 y 坐标 |
| z | `number` | 旋转轴的 z 坐标 |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate3d.html)

### rotateX

从 X 轴顺时针旋转一个角度

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateX.html)

### rotateY

从 Y 轴顺时针旋转一个角度

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateY.html)

### rotateZ

从 Z 轴顺时针旋转一个角度

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 旋转的角度。范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateZ.html)

### scale

缩放

```tsx
(sx: number, sy?: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sx | `number` | 当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放sx倍数 |
| sy | `number` | 在 Y 轴缩放 sy 倍数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale.html)

### scale3d

缩放

```tsx
(sx: number, sy: number, sz: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sx | `number` | x 轴的缩放倍数 |
| sy | `number` | y 轴的缩放倍数 |
| sz | `number` | z 轴的缩放倍数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale3d.html)

### scaleX

缩放 X 轴

```tsx
(scale: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scale | `number` | X 轴的缩放倍数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleX.html)

### scaleY

缩放 Y 轴

```tsx
(scale: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scale | `number` | Y 轴的缩放倍数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleY.html)

### scaleZ

缩放 Z 轴

```tsx
(scale: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scale | `number` | Z 轴的缩放倍数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleZ.html)

### skew

对 X、Y 轴坐标进行倾斜

```tsx
(ax: number, ay: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ax | `number` | 对 X 轴坐标倾斜的角度，范围 [-180, 180] |
| ay | `number` | 对 Y 轴坐标倾斜的角度，范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skew.html)

### skewX

对 X 轴坐标进行倾斜

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 倾斜的角度，范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewX.html)

### skewY

对 Y 轴坐标进行倾斜

```tsx
(angle: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| angle | `number` | 倾斜的角度，范围 [-180, 180] |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewY.html)

### step

表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。

```tsx
(option?: StepOption) => Animation
```

| 参数 | 类型 |
| --- | --- |
| option | `StepOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.step.html)

### top

设置 top 值

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string | number` | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.top.html)

### translate

平移变换

```tsx
(tx?: number, ty?: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tx | `number` | 当仅有该参数时表示在 X 轴偏移 tx，单位 px |
| ty | `number` | 在 Y 轴平移的距离，单位为 px |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate.html)

### translate3d

对 xyz 坐标进行平移变换

```tsx
(tx?: number, ty?: number, tz?: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tx | `number` | 在 X 轴平移的距离，单位为 px |
| ty | `number` | 在 Y 轴平移的距离，单位为 px |
| tz | `number` | 在 Z 轴平移的距离，单位为 px |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate3d.html)

### translateX

对 X 轴平移

```tsx
(translation: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| translation | `number` | 在 X 轴平移的距离，单位为 px |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateX.html)

### translateY

对 Y 轴平移

```tsx
(translation: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| translation | `number` | 在 Y 轴平移的距离，单位为 px |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateY.html)

### translateZ

对 Z 轴平移

```tsx
(translation: number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| translation | `number` | 在 Z 轴平移的距离，单位为 px |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateZ.html)

### width

设置宽度

```tsx
(value: string | number) => Animation
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| value | `string | number` | 长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.width.html)

## 参数

### StepOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| delay | `number` | 否 | 动画延迟时间，单位 ms |
| duration | `number` | 否 | 动画持续时间，单位 ms |
| timingFunction | `"linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end"` | 否 | 动画的效果 |
| transformOrigin | `string` | 否 |  |

### timingFunction

| 参数 | 说明 |
| --- | --- |
| linear | 动画从头到尾的速度是相同的 |
| ease | 动画以低速开始，然后加快，在结束前变慢 |
| ease-in | 动画以低速开始 |
| ease-in-out | 动画以低速开始和结束 |
| ease-out | 动画以低速结束 |
| step-start | 动画第一帧就跳至结束状态直到结束 |
| step-end | 动画一直保持开始状态，最后一帧跳到结束状态 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Animation.export | ✔️ |  |  |  |  |  |  |  |
| Animation.backgroundColor | ✔️ |  |  |  |  |  |  |  |
| Animation.bottom | ✔️ |  |  |  |  |  |  |  |
| Animation.height | ✔️ |  |  |  |  |  |  |  |
| Animation.left | ✔️ |  |  |  |  |  |  |  |
| Animation.matrix | ✔️ |  |  |  |  |  |  |  |
| Animation.matrix3d | ✔️ |  |  |  |  |  |  |  |
| Animation.opacity | ✔️ |  |  |  |  |  |  |  |
| Animation.right | ✔️ |  |  |  |  |  |  |  |
| Animation.rotate | ✔️ |  |  |  |  |  |  |  |
| Animation.rotate3d | ✔️ |  |  |  |  |  |  |  |
| Animation.rotateX | ✔️ |  |  |  |  |  |  |  |
| Animation.rotateY | ✔️ |  |  |  |  |  |  |  |
| Animation.rotateZ | ✔️ |  |  |  |  |  |  |  |
| Animation.scale | ✔️ |  |  |  |  |  |  |  |
| Animation.scale3d | ✔️ |  |  |  |  |  |  |  |
| Animation.scaleX | ✔️ |  |  |  |  |  |  |  |
| Animation.scaleY | ✔️ |  |  |  |  |  |  |  |
| Animation.scaleZ | ✔️ |  |  |  |  |  |  |  |
| Animation.skew | ✔️ |  |  |  |  |  |  |  |
| Animation.skewX | ✔️ |  |  |  |  |  |  |  |
| Animation.skewY | ✔️ |  |  |  |  |  |  |  |
| Animation.step | ✔️ |  |  |  |  |  |  |  |
| Animation.top | ✔️ |  |  |  |  |  |  |  |
| Animation.translate | ✔️ |  |  |  |  |  |  |  |
| Animation.translate3d | ✔️ |  |  |  |  |  |  |  |
| Animation.translateX | ✔️ |  |  |  |  |  |  |  |
| Animation.translateY | ✔️ |  |  |  |  |  |  |  |
| Animation.translateZ | ✔️ |  |  |  |  |  |  |  |
| Animation.width | ✔️ |  |  |  |  |  |  |  |

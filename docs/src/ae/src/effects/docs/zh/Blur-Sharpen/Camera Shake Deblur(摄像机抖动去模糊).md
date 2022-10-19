---
title: Camera Shake Deblur(摄像机抖动去模糊)
order: 4
category:
  - AE
---

## 简述

解决摄像机抖动造成的素材模糊。可以用变形稳定器 VFX
来稳定抖动的素材，但是运动模糊可能仍会存在。而本效果可减少不必要的虚影，以产生更好的结果。此效果的应用对象是模糊帧，通过锐化模糊帧的两侧来重建。使用的是光流法来混合清晰帧与模糊帧。

## 效果展示

应用摄像机抖动去模糊效果前后的对比

![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/list/Blur-Sharpen-Camera_Deshake_blur.gif)

## 参数中英日对照

![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Blur-Sharpen-Camera_Shake_Deblur.png)
![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Blur-Sharpen-Camera_Shake_Deblur_cn.png)

| Camera Shake Deblur | 摄像机抖动去模糊 | カメラぶれ除去       |     |     |     |
| ------------------- | ---------------- | -------------------- | --- | --- | --- |
| Blur Duration       | 模糊持续时间     | ブラーデュレーション |     |     |     |
| Deblur Method       | 去模糊方法       | ぶれ除去方法         |     |     |     |
| Strength            | 强度             | 密度                 |     |     |     |
| Shake Sensitivity   | 抖动敏感度       | シェイク感度         |     |     |     |

## 参数详解

### Blur Duration 模糊持续时间

更改与模糊帧对比的帧数。模糊持续时间属性控制运动模糊持续的帧数。抖动时间短选择更低的值（5 帧），抖动时间长选择更高的值（9 帧）。(5/7/9 帧)

### **Deblur Method 去模糊方法**

使用的是光流法，此方法影响像素从非运动模糊帧映射到模糊帧的方式。可以选择高品质（速度更慢）和标准品质。高品质提供更准确的结果，但是处理时间更长。标准速度更快，品质正常。

### **Strength 强度**

控制应用到模糊帧的校正量。可以将强度值从 100%（默认）调整到
200%，具体取决于帧的模糊程度。如果模糊持续时间内的非运动模糊帧未与模糊帧正确对齐，值太高会造成伪影。

### **Shake Sensitivity 抖动敏感度**

确定是否将帧视为足够模糊而需去模糊的阈值。抖动敏感度值较低则只会对非常模糊的帧进行模糊处理，不能识别其他运动模糊。较高的值对更多运动模糊敏感，并且可尝试对识别到的任何运动模糊去模糊。

**提示**

要获得最佳结果，请在稳定素材之后应用摄像机抖动去模糊效果。例如，先应用变形稳定器 VFX 效果，然后应用摄像机抖动去模糊效果。

对于难以去模糊的影像，用低强度值应用多个摄像机抖动去模糊副本可获得更好的效果。

###

---
title: FootageSource 素材源
order: 3
category:
  - AE
---
    ## 素材源对象 #

app.project.item(index).mainSource  
app.project.item(index).proxySource

描述：素材源对象（FootageSource）对象保存描述某些素材来源的信息。它被用作mainSource一个的FootageItem对象，或者proxySource一个的COMPITEM对象或FootageItem。

子级关系：素材源（footageSource）是纯色源（SolidSource）对象的基类，因此素材源的属性和方法，纯色源都可以使用。

![](https://cdn.yuelili.com/20211012170742.png)

# 属性 #

## alphaMode 素材Alpha #

app.project.item(index).mainSource.alphaMode  
app.project.item(index).proxySource.alphaMode

描述：定义如何解释素材中的Alpha信息。等同于 文件>解释素材>主要>Alpha。如果hasAlpha为false，则此属性无效。

类型：Alpha模式，枚举值；读/写：

  * AlphaMode.IGNORE：忽略
  * AlphaMode.STRAIGHT：直接
  * AlphaMode.PREMULTIPLIED：预乘

## conformFrameRate 素材自定义帧速率 #

app.project.item(index).mainSource.conformFrameRate  
app.project.item(index).proxySource.conformFrameRate

描述：使用自定义帧速率而不是原始帧速率（nativeFrameRate）。等同于 文件>解释素材>主要>帧速率。

说明：如果设置为0，则使用原始帧速率。如果素材是静止的，则无效。如果removePulldown不是PulldownPhase.OFF，则将该值设置为0会报错。如果该值是0，把removePulldown设置为除PulldownPhase.OFF的其他值，则自动设置为原始帧速率。

类型：浮点值，0.0~99.0；读/写。

## displayFrameRate 素材显示帧速率 #

app.project.item(index).mainSource.displayFrameRate  
app.project.item(index).proxySource.displayFrameRate

描述：由After Effects在合成中显示和渲染的有效帧速率。

说明：如果removePulldown为PulldownPhase.OFF，则与conformFrameRate(非零时)或nativeFrameRate(如果conformFrameRate为0时)相同。如果removePulldown不是PulldownPhase.OFF，则为conformFrameRate
* 0.8，每5帧中删除1帧后的有效帧率。

类型：浮点值，0.0~99.0；只读。

## fieldSeparationType 素材场分离类型 #

app.project.item(index).mainSource.fieldSeparationType  
app.project.item(index).proxySource.fieldSeparationType

描述：如何在非静止画面中分离字段。

说明：如果isStill为true
，则设置此属性是错误的。如果removePulldown不是PulldownPhase.OFF，则将此值设置为FieldSeparationType.OFF报错。

类型：FieldSeparationType，枚举值; 读/写：

  * FieldSeparationType.OFF
  * FieldSeparationType.UPPER_FIELD_FIRST
  * FieldSeparationType.LOWER_FIELD_FIRST

## hasAlpha 素材含Alpha信息 #

app.project.item(index).mainSource.hasAlpha  
app.project.item(index).proxySource.hasAlpha

描述：如果为true，则素材包含alpha分量。此时，属性alphaMode，invertAlpha和premulColor具有有效值。为false，则这些属性与素材无关。

类型：布尔值 只读。

## highQualityFieldSeparation 高质量的场分离 #

app.project.item(index).mainSource.highQualityFieldSeparation  
app.project.item(index).proxySource.highQualityFieldSeparation

描述：如果为true，则After Effects使用特殊算法来确定如何执行高质量的场分离。

说明：如果isStill是true，或者fieldSeparationType是FieldSeparationType.OFF，则设置该属性报错。

类型：布尔值 读/写。

## invertAlpha 反转Alpha通道 #

app.project.item(index).mainSource.invertAlpha  
app.project.item(index).proxySource.invertAlpha

描述：如果为true，则应反转素材片段或代理中的Alpha通道。仅当存在alpha时，此属性才有效。如果hasAlpha为false，或者alphaMode为is
AlphaMode.IGNORE，则忽略此属性。

类型：布尔值 读/写。

## isStill 是否静止素材 #

app.project.item(index).mainSource.isStill  
app.project.item(index).proxySource.isStill

描述：为true则镜头静止；如果为false，则它具有基于时间的变换。

说明：静态镜头

示例：持续时间为0的JPEG文件，纯色层和占位符。非静态镜头的示例：电影文件，声音，序列和占位符。

类型：布尔值 只读。

## loop 素材循环 #

app.project.item(index).mainSource.loop  
app.project.item(index).proxySource.loop

描述：在合成中使用素材时，连续播放素材的次数。如果isStill为true ，则设置此属性报错。

类型：整数1~9999， 默认为1; 读/写。

## nativeFrameRate 素材原始帧速率 #

app.project.item(index).mainSource.nativeFrameRate  
app.project.item(index).proxySource.nativeFrameRate

描述：素材的原始帧速率。

类型：浮点; 只读。

## premulColor 素材颜色预乘 #

app.project.item(index).mainSource.premulColor  
app.project.item(index).proxySource.premulColor

描述：颜色要预乘。此属性才有效，即alphaMode是alphaMode.PREMULTIPLIED。

类型：三个浮点值的数组，范围0~1；读/写。

## removePulldown 删除下拉菜单 #

app.project.item(index).mainSource.removePulldown  
app.project.item(index).proxySource.removePulldown

描述：使用场分离时如何删除下拉菜单。

说明：如果isStill为true
，则设置此属性报错。将其设置为PulldownPhase.OFF以外的值在fieldSeparationType是FieldSeparationType.OFF的情况下，也会报错。

类型：PulldownPhase，枚举值; 读/写：

  * PulldownPhase.RemovePulldown.OFF
  * PulldownPhase.RemovePulldown.WSSWW
  * PulldownPhase.RemovePulldown.SSWWW
  * PulldownPhase.RemovePulldown.SWWWS
  * PulldownPhase.RemovePulldown.WWWSS
  * PulldownPhase.RemovePulldown.WWSSW
  * PulldownPhase.RemovePulldown.WSSWW_24P_ADVANCE
  * PulldownPhase.RemovePulldown.SSWWW_24P_ADVANCE
  * PulldownPhase.RemovePulldown.SWWWS_24P_ADVANCE
  * PulldownPhase.RemovePulldown.WWWSS_24P_ADVANCE
  * PulldownPhase.RemovePulldown.WWSSW_24P_ADVANCE

# 方法 #

## guessAlphaMode() 获取Alpha模式 #

app.project.item(index).mainSource.guessAlphaMode()  
app.project.item(index).proxySource.guessAlphaMode()

描述：设置alphaMode，premulColor并invertAlpha，为此素材源进行最佳判断。如果hasAlpha为false，则不进行任何更改。

参数：无。

返回：无。

## guessPulldown() 最佳猜测值 #

app.project.item(index).mainSource.guessPulldown(method)  
app.project.item(index).proxySource.guessPulldown(method)

描述：设置fieldSeparationType，并将removePulldown设置为此素材源的最佳猜测值。如果isStill为true，则不进行任何更改。

参数：

  * method，用于估计的方法。
  * PulldownMethod，枚举值： 
    * PulldownMethod.PULLDOWN_3_2
    * PulldownMethod.ADVANCE_24P

返回：无。


---
title: Bigger Differences
order: 6
category:
  - AE 插件开发
---

# Bigger Differences

只要一个效果只支持After Effects所支持的基本ARGB_8u像素格式，Premiere Pro就会尝试模仿After Effects的托管行为，并隐藏各种差异，因为渲染管道架构不同。但是如果一个效果想要支持额外的像素格式，比如32位RGB，就要准备好处理进一步的分歧行为。

## Pixel Formats

Premiere Pro提供了函数套件，用于声明对After Effects使用的8位RGB格式--ARGB_8u以外的像素格式的支持。这些像素格式包括Premiere Pro本地的8位RGB格式--BGRA_8u，以及YUV、32位格式等等。关于各种像素格式的详细讨论，请参见《Premiere Pro SDK指南》中的 "像素格式和色彩空间"（http://ppro-plugin-sdk.aenhancers.com/universals/pixel-formats-and-color-spaces.html）。

使用PF像素格式套件（定义在PRAESDKSupport.h中）来注册其他像素格式的[PF_EffectWorld / PF_LayerDef](.../effect-basics/PF_EffectWorld.html)（#effect-basics-pf-effectworld）。使用Premiere像素格式套件（定义在恰如其分的PrSDKPixelFormatSuite.h）来获得这些像素格式的黑白值。

像PF_BLEND()这样的After Effects函数还没有被增强到可以处理8位RGB以上的像素格式。

## 32-Bit Float Support

Premiere Pro不支持After Effects的16位渲染或SmartFX。对于Premiere Pro中的32位渲染，你需要声明对32位像素格式之一的支持（见上一节），然后为PF_Cmd_RENDER实现32位渲染。你可以通过这种方式支持多种渲染深度。请看SDK Noise示例项目中的一个例子。

根据应用效果的片段，32位处理并不总是必要的，以保持源输入的质量。但是有一些设置可以强制进行32位渲染，如果需要的话，可以给效果处理提供更精细的颗粒度和更多的空间。进入设置>序列设置>视频预览>最大比特深度，以控制从时间线上的预览。对于导出文件，使用导出设置>视频>基本设置>以最大深度渲染。

## PF_CHECKOUT_PARAM and Pixel Formats

在CS6之前，PF_CHECKOUT_PARAM()只返回8位ARGB缓冲区，而不考虑当前用于渲染的像素格式。从CS6开始，一个效果可以选择以与渲染请求相同的格式获取帧，无论它是32位浮点、YUV等。

插件可以请求这种行为，但现有的插件将继续工作，接收8位ARGB帧。这个调用是EffectWantsCheckedOutFramesToMatch RenderPixelFormat()，在PF Utility Suite中，定义在PrSDKAESupport.h中。这个调用应该在PF_Cmd_GLOBAL_SETUP中进行，同样的选择器，一个效果已经使用AddSupportedPixelFormat()宣传支持超过8位RGB。
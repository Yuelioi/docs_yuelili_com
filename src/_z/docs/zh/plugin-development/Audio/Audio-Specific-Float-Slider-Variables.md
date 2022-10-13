---
title: Audio-Specific Float Slider Variables
order: 5
category:
  - AE 插件开发
---

# Audio-Specific Float Slider Variables

`PF_Param_FLOAT_SLIDER'包含其他滑块中没有的几个参数；标志、相位和曲线公差。

## Flags

唯一可用的标志是`PF_FSliderFlag_WANT_PHASE`。

这个标志将效果注册为在音频渲染过程中从After Effects接收更新的相位信息。

为了了解这个标志的作用，把它关掉，然后检查你的输出。

## Phase

这就是所要求的相位值被存储的地方。

## Curve Tolerance

曲线公差是After Effects用来细分音频效果的时间变化参数的。将此设置为零为默认行为(或为非音频`FLOAT_SLIDER`参数)。

## What’s Zero, Really?

当振幅为零时，After Effects处于-192db。
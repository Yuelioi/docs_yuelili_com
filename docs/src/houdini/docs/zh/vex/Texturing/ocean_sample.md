---
title: ocean_sample
order: 8
category:
  - vex
---

`vector ocean\_sample(string geometry, int phase, int frequency, int amplitude, float hscale, float time, int mode, int downsample, vector pos)`

在给定的时间和位置评估输入的海洋光谱，并返回由`mode`指定的值。输入通常是(海洋光谱](././nodes/sop/oceanspectrum.html)（"生成包含模拟海洋波浪信息的卷。"）SOP 的输出。

## Arguments

`geometry`

要参考的几何文件的名称。在 Houdini 中，这可能是`op:full_path_to_sop`来引用一个 SOP。

`phase`

代表波相的体积的原始编号。

`frequency`

代表波形频率的体积的原始编号。

`amplitude`

代表波幅的体积的原始编号。

`hscale`

缩放海浪中任何水平运动的量。

`mode`

从海洋光谱中采样的数值类型，其中 0 表示位移，1 表示速度，2 表示水平空间导数。

`downsample`

评估前对输入频谱进行降采样的次数。每一个降采样级别都会使输入的分辨率减半。

`pos`

在物体空间中对被评估的海洋进行采样的位置。

## Examples



用存储在文件中的海洋光谱取代点的位置。

```c
@P += ocean\_sample("spectrum.bgeo", 0, 1, 2, 0.7, @Time, 0, 0, @P);

```

## See also

- [Ocean Spectrum](../../nodes/sop/oceanspectrum.html)

|
ocean

[ocean_sample](ocean_sample.html)

---
title: ocean_sample
order: 7
category:
  - houdini
---
    
## 描述

Evaluates an ocean spectrum and samples the result at a given time and
location.

`vector ocean_sample(string geometry, int phase, int frequency, int amplitude, float hscale, float time, int mode, int downsample, vector pos)`

Evaluates the input ocean spectrum at the given time and position and returns
the value specified by `mode`.The input is typically the output of the
[![](../../icons/SHELF/wave.svg)Ocean
Spectrum](../../nodes/sop/oceanspectrum.html "Generates volumes containing
information for simulating ocean waves.") SOP.

在给定的时间和位置评估输入的海洋光谱，并返回由 ymode 指定的值。 输入通常是海洋光谱 SOP 的输出。

`geometry`

The name of the geometry file to reference.Inside Houdini, this may be

```c
op:full_path_to_sop
```

to reference a SOP.

要参考的几何文件的名称。 在 Houdini 中，这可能是 op:full_path_to_sop 来引用一个 SOP。

`phase`

The primitive number of the volume representing wave phase.

代表波相的体积的原始编号。

`frequency`

The primitive number of the volume representing wave frequency.

代表波浪频率的体积的原始编号。

`amplitude`

The primitive number of the volume representing wave amplitude.

代表波幅的体积的原始编号。

`hscale`

The amount to scale any horizontal motion in the ocean waves.

海浪中任何水平运动的比例。

`mode`

The type of value to sample from the ocean spectrum, where 0 means
displacement, 1 means velocity, and 2 means horizontal spatial derivatives.

从海洋光谱中取样的值的类型，0 表示位移，1 表示速度，2 表示水平空间导数。

`downsample`

The number of times to downsample the input spectrum before evaluation.Each
downsample level halves the resolution of the input.

评估前对输入频谱进行降样的次数。 每一次降样都会使输入的分辨率降低一半。

`pos`

The position in object space at which to sample the evaluated ocean.

在物体空间中对所评估的海洋进行采样的位置。

## Examples

Displace the point position by an ocean spectrum stored in a file.

用存储在文件中的海洋频谱替换该点的位置。

    @P += ocean_sample("spectrum.bgeo", 0, 1, 2, 0.7, @Time, 0, 0, @P);

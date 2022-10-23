---
title: Iteration Suites
order: 7
category:
  - AE 插件开发
---

# Iteration Suites

Effects 经常对图像中的所有像素进行迭代，对每个像素进行过滤。通过利用 After Effects 的迭代套件，你可以让 After Effects 把你的任务分到尽可能多的处理器上，利用特定硬件加速。

After Effects 还将自动管理进度报告和用户取消。

使用这些套件! 确保你传递给这些迭代器回调的像素处理函数是可重入的。

::: tip

2021 年 10 月的 SDK 更新增加了并发迭代线程的数量，最多可达可用的系统 CPU 核心，而不是以前硬编码的 32 个限制。

:::

## PF_Iterate8Suite1, PF_Iterate16Suite1, PF_IterateFloatSuite1

### iterate

遍历源图像的像素，改变它们，并填充到目标图像中。

你可以指定一个长方形的像素区域来进行迭代；如果你不这样做，After Effects 会在每个重叠的像素上进行迭代。你给了一个 refcon，这个函数会被调用，并加上当前像素的 x 和 y 坐标，以及该像素在源图像和目标图像中的指针。如果你传递一个空的源图像，它将在目的地图像上进行迭代。这个函数是独立于质量的。

不要依赖像素以任何特定的顺序被遍历。The image may be subset to different CPUs, so consider all the parameters (except dst) to be read-only while After Effects is processing. This callback automatically includes progress and abort checking, so don’t do so in your pixel function.

```cpp
iterate(
PF_InData*in_data,
A_longprogress_base,
A_longprogress_final,
PF_EffectWorld*src,
constPF_Rect*area,
void*refcon,
PF_Err(*pix_fn)(
void*refcon,
A_longx,
A_longy,
PF_Pixel*in,
PF_Pixel*out),
PF_EffectWorld*dst);
```

### iterate_origin

Lets you specify an offset from the input into the output. For example, if your output buffer is smaller than your input buffer, pass (in - data>output_origin_x, in_data>output_origin_y)` as the origin, and NULL for area, and this function will offset the src pixel pointer appropriately for your pixel function.

```cpp
iterate_origin(
PF_InData*in_data,
A_longprogress_base,
A_longprogress_final,
PF_EffectWorld*src,
constPF_Rect*area,
constPF_Point*origin,
void*refcon,
PF_Err(*pix_fn)(
void*refcon,
A_longx,
A_longy,
PF_Pixel*in,
PF_Pixel*out),
PF_EffectWorld*dst);
```

### iterate_lut

PF_Iterate8Suite` only. Allows a Look-Up Table (LUT) to be passed for iteration; you can pass the same or different LUTs for each color channel. If no LUT is passed, an identity LUT is used.

```cpp
iterate_lut(
PF_InData*in_data,
A_longprog_base,
A_longprog_final,
PF_EffectWorld*src,
constPF_Rect*area,
A_u_char*a_lut0,
A_u_char*r_lut0,
A_u_char*g_lut0,
A_u_char*b_lut0,
PF_EffectWorld*dst);
```

### iterate_origin_non_clip_src

Allows for iteration across pixels outside the intersection of the source and destination layers. For these pixels, you will be passed a

PF_Pixel with values {0,0,0,0}.

```cpp
iterate_origin_non_clip_src(
PF_InData*in_data,
A_longprogress_base,
A_longprogress_final,
PF_EffectWorld*src,
constPF_Rect*area,
constPF_Point*origin,
void*refcon,
PF_Err(*pix_fn)(
void*refcon,
A_longx,
A_longy,
PF_Pixel*in,
PF_Pixel*out),
PF_EffectWorld*dst);
```

### iterate_generic

PF_Iterate8Suite only. If you want to do something once per available CPU, this is the function to use (pass PF_Iterations_ONCE_PER_PROCESSOR for iterationsL). 只能从线程索引 0 调用中止和进度函数。

注意：你可以对多个像素进行迭代。在内部，我们将其用于基于行的图像处理，以及复杂序列数据的每实体一次的更新。

```cpp
iterate_generic(
A_longiterationsL,
void*refconPV,
PF_Err(*fn_func)(
void*refconPV,
A_longthread_idxL,
A_longi,
A_longitrtL));
```

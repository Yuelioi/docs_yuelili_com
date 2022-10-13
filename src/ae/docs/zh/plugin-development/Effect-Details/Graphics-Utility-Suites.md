---
title: Graphics Utility Suites
order: 8
category:
  - AE 插件开发
---

# Graphics Utility Suites[¶]

After Effects通过以下函数套件公开了其内部的变换和图形实用程序。

---

## Transform Worlds[¶]

这些函数以有趣的方式组合`PF_EffectWorlds`。当你使用这些函数时，你使用的是After Effects内部的相同代码。

### PF_WorldTransformSuite1[¶]

#### composite_rect

使用After Effects的传输模式，将一个矩形从一个`PF_EffectWorld`合成到另一个。

```cpp
PF_Err composite_rect (
 PF_ProgPtr effect_ref,
 PF_Rect *src_rect,
 A_long src_opacity,
 PF_EffectWorld *src_world,
 A_long dst_x,
 A_long dst_y,
 PF_Field field_rdr,
 PF_XferMode xfer_mode,
 PF_EffectWorld *dst);

```

`field_rdr`可以是上层，下层或两者都是。
`xfer_mode`是以下的一种。

- `PF_Xfer_COPY`
- `PF_Xfer_BEHIND`
- `PF_Xfer_IN_FRONT`

#### blend

混合两幅图像，α-加权。不处理不同大小的源，尽管目标可以是PF_EffectWorld。

```cpp
PF_Err blend (
 PF_ProgPtr effect_ref,
 const PF_EffectWorld *src1,
 const PF_EffectWorld *src2,
 PF_Fixed ratio,
 PF_EffectWorld *dst);

```

#### convolve

在a、r、g和b通道上分别用一个任意大小的核对图像进行卷积。
你可以指定一个矩形来进行卷积（例如，[PF_EffectWorld结构](.../effect-basics/PF_EffectWorld.html#effect-basics-pf-effectworld-structure)中的`extent_hint`），或者通过0来卷积整个图像。
如果源码_是目标码，则不要使用。
使用[内核标志]（#effect-details-graphics-utility-suites-kernel-flags）描述卷积。

```cpp
PF_Err convolve(
 PF_EffectWorld *src,
 const PF_Rect *area,
 PF_KernelFlags flags,
 A_long kernel_size,
 void *a_kernel,
 void *r_kernel,
 void *g_kernel,
 void *b_kernel,
 PF_EffectWorld *dst);

```

#### copy

将一个区域从一个PF_EffectWorld复制到另一个，保留alpha（与macOS的CopyBits不同）。

```cpp
PF_Err copy (
 PF_EffectWorld *src,
 PF_EffectWorld *dst,
 PF_Rect *src_r,
 PF_Rect *dst_r);

```

#### copy_hq

上述的高保真版本（使用相同的参数）。

#### transfer_rect

使用传输模式进行混合，有一个可选的遮罩。

```cpp
PF_Err transfer_rect (
 PF_ProgPtr effect_ref,
 PF_Quality quality,
 PF_ModeFlags m_flags,
 PF_Field field,
 const PF_Rect *src_rec,
 const PF_EffectWorld *src_world,
 const PF_CompositeMode *comp_mode,
 const PF_MaskWorld *mask_world0,
 A_long dest_x,
 A_long dest_y,
 PF_EffectWorld *dst_world);

```

#### transform_world

给定一个PF_EffectWorld和一个矩阵（或矩阵数组），使用After Effects的转移模式进行转换和混合，并有一个可选的遮罩。
矩阵的指针指向一个用于运动模糊的矩阵阵列。
什么时候变换不是变换？Z-scale变换不是变换，除非被变换的层是其他层的父层，而这些层并不都在z=0平面内。

```cpp
PF_Err transform_world (
 PF_InData *in_data,
 PF_Quality quality,
 PF_ModeFlags m_flags,
 PF_Field field,
 const PF_EffectWorld *src_world,
 const PF_CompositeMode *comp_mode,
 const PF_MaskWorld *mask_world0,
 const PF_FloatMatrix *matrices,
 A_long num_matrices,
 Boolean src2dst_matrix,
 const PF_Rect *dest_rect,
 PF_EffectWorld *dst_world);

```

---

## Kernel Flags[¶]

像 "convolve "或高斯核这样的函数是与核或滤波器权重值的矩阵一起工作的。这些矩阵可以是任何格式的。内核标志描述了如何创建和使用这些矩阵。把你需要的任何标志放在一起。

与给定例程相关的标志与例程原型一起被记录下来。左栏的第一个条目总是默认的，其值为0。

内核标志表示

---

"PF_KernelFlag_2D"。
`PF_KernelFlag_1D`指定一个一维或二维内核。
`PF_KernelFlag_UNNORMALIZED`指定一个一维或二维内核。
`PF_KernelFlag_NORMALIZED` `NORMALIZED`均衡内核；内核表面下的体积与像素覆盖区域的体积相同。
`PF_KernelFlag_CLAMP
`PF_KernelFlag_NO_CLAMP` `CLAMP`将值限制在其数据类型的有效范围内。
`PF_KernelFlag_USE_LONG`是指："使用长字符串"。
"PF_KernelFlag_USE_CHAR "是指："使用字符"。
`PF_KernelFlag_USE_FIXED `PF_KernelFlag_USE_FIXED
`PF_KernelFlag_USE_UNDEFINED` `USE_LONG`将内核定义为一个从0到255的长字符串阵列。
`USE_CHAR`定义内核为一个0到255的无符号字符数组。
`USE_FIXED`将内核定义为一个0到1的固定数组。
`USE_LONG`是唯一实现的标志。
`PF_KernelFlag_HORIZONTAL`是唯一实现的标志。
`PF_KernelFlag_VERTICAL`指定卷积的方向。
`PF_KernelFlag_TRANSPARENT_BORDERS`指定卷积方向。
`PF_KernelFlag_REPLICATE_BORDERS`当在边缘取样时，使用`REPLICATE_BORDERS`来复制边界像素，使用`TRANSPARENT_BORDERS`将边缘的像素视为alpha零（黑色）。
`REPLICATE_BORDERS`没有实现，将被忽略。
`PF_KernelFlag_STRAIGHT_CONVOLVE`是不实现的，将被忽略。
`PF_KernelFlag_ALPHA_WEIGHT_CONVOLVE`使用`STRAIGHT_CONVOLVE`表示直接卷积，使用`ALPHA_WEIGHT_CONVOLVE`告诉卷积代码对像素的贡献进行alpha加权，从而得到卷积输出。
`ALPHA_WEIGHT_CONVOLVE`没有实现，将被忽略。

---

## Fill ‘Em Up![¶]

FillMatteSuite可以用来填充一个`PF_EffectWorld'，可以用一个特定的颜色或者预先乘以一个alpha值。

### PF_FillMatteSuite2[¶]

`fill`用一种颜色填充一个矩形（或者，如果颜色指针是空的，则用黑色和alpha值填充）。

如果矩形是空的，它将填充整个图像。

```cpp
PF_Err fill (
 PF_ProgPtr effect_ref,
 const PF_Pixel *color,
 const PF_Rect *dst_rect,
 PF_EffectWorld *world);

```

#### fill16

与fill相同，但需要一个指向PF_Pixel16颜色的指针。

#### fill_float

取一个指向PF_PixelFloat颜色的指针。

#### premultiply

转换为（或从）r、g和b的颜色值，预先与黑色相乘，以表示alpha通道。
Quality independent.\* `forward`是作为布尔值使用的。

- `true` means convert non-premultiplied to pre-multiplied,
- `false` mean un-pre-multiply.

```cpp
PF_Err premultiply (
 A_long forward,
 PF_EffectWorld *dst);

```

#### premultiply_color

转换为（或从）有r、g、b颜色值预乘以任何颜色来表示alpha通道。

```cpp
PF_Err premultiply_color (
 PF_ProgPtr effect_ref,
 PF_EffectWorld *src,
 PF_Pixel *color,
 A_long forward,
 PF_EffectWorld *dst);

```

#### premultiply_color16

和上面一样，但需要一个指向PF_Pixel16颜色的指针。

#### premultiply_color_float

取一个指向PF_PixelFloat颜色的指针。

---

## Sampling Images[¶]

:::tip: areas outside the bounds of the image being sampled are treated as zero alpha. For convenience, the functions from PF_Sampling8Suite1, PF_Sampling16Suite1, and PF_SamplingFloatSuite1 are all listed in this table.

### PF_SamplingSuite Functions (Multiple Suites)[¶]

#### nn_sample

执行近邻取样。

```cpp
PF_Err nn_sample (
 PF_ProgPtr effect_ref,
 PF_Fixed x,
 PF_Fixed y,
 const PF_SampPB *params,
 PF_Pixel *dst_pixel );

```

#### nn_sample16

与上述相同，但需要一个指向`PF_Pixel16``dst_pixel`的指针。

#### nn_sample_float

取一个指向`PF_PixelFloat`dst_pixel`的指针。

#### subpixel_sample

查询源图像中非积分点的适当的α加权插值颜色，质量高。低质量时使用近邻采样。
因为如果使用采样例程，通常会被多次调用，所以把函数指针复制到回调结构中，并复制到一个寄存器或堆栈中，以加快内循环的速度，是很方便的。
请看示例代码中的一个例子。
注意：采样时假设0,0是左上角像素的中心。

```cpp
PF_Err subpixel_sample (
 PF_ProgPtr effect_ref,
 PF_Fixed x,
 PF_Fixed y,
 const PF_SampPB *params,
 PF_Pixel *dst_pixel);

```

#### subpixel_sample16

和上面一样，但需要一个指向`PF_Pixel16*``dst_pixel`的指针。

#### subpixel_sample_float

取一个指向`PF_PixelFloat*``dst_pixel`的指针。

#### area_sample

用它来计算源图像中一个轴对齐的非积分矩形颜色的适当的阿尔法加权平均数，质量高。
低质量时使用最近的邻居采样。由于溢出问题，这最多只能平均256 x 256像素的区域（即x和y半径<128像素）。
注意：采样半径在x和y中都必须至少是一个。

```cpp
PF_Err area_sample (
 PF_ProgPtr effect_ref,
 PF_Fixed x,
 PF_Fixed y,
 const PF_SampPB *params,
 PF_Pixel *dst_pixel);

```

注意：在图层边界之外的区域被认为与零阿尔法相同，用于采样。

#### area_sample16

和上面一样，但需要一个`PF_Pixel16*``dst_pixel`。

### PF_BatchSamplingSuite1 Functions[¶]

#### begin_sampling

你的效果要进行一些批量采样。

After Effects将执行设置任务来优化你的采样。

```cpp
PF_Err (*begin_sampling)(
 PF_ProgPtr effect_ref,
 PF_Quality qual,
 PF_ModeFlags mf,
 PF_SampPB *params);

```

#### end_sampling

告诉After Effects你已经完成了采样。

```cpp
PF_Err (*end_sampling)(
 PF_ProgPtr effect_ref,
 PF_Quality qual,
 PF_ModeFlags mf,
 PF_SampPB *params);

```

#### get_batch_func

获得一个指向After Effects的批量采样功能的指针（高度优化）。

```cpp
PF_Err (*get_batch_func)(
 PF_ProgPtr effect_ref,
 PF_Quality quality,
 PF_ModeFlags mode_flags,
 const PF_SampPB *params,
 PF_BatchSampleFunc *batch);

```

#### get_batch_func16

获得一个指向After Effects的16-bpc批量取样功能的指针（也是高度优化的）。

```cpp
PF_Err (*get_batch_func16)(
 PF_ProgPtr effect_ref,
 PF_Quality quality,
 PF_ModeFlags mode_flags,
 const PF_SampPB *params,
 PF_BatchSample16Func *batch);

```

---

## Do The Math For Me[¶]

除了各种图形实用程序外，我们还提供了一个ANSI标准例程块，这样插件就不需要包含其他库来使用标准函数。

我们给出了大量数学函数的函数指针（三角函数、平方根、对数等）。

使用我们的套装函数提供了一些（应用层面的）错误处理，并防止了包含不同版本的多个 "标准 "库的问题。

所有函数都返回一个双数。所有的角度都用弧度表示，如果需要的话，可以使用`PF_RAD_PER_DEGREE`（AE_EffectCB.h中的一个常数）来从度数转换为弧度。

### PF_ANSICallbackSuite1[¶]

| **Function**                                                            | **Purpose**                                                  | **Replaces** |
| ----------------------------------------------------------------------- | ------------------------------------------------------------ | ------------ |
| `acos`                                                                  | Returns the arc cosine of x.                                 | `PF_ACOS`    |
| `asin`                                                                  | Returns the arc sine of x.                                   | `PF_ASIN`    |
| `atan`                                                                  | Returns the arc tangent of x.                                | `PF_ATAN`    |
| `atan2`                                                                 | Returns atan(y/x).                                           | `PF_ATAN2`   |
| `ceil`                                                                  | Returns the next integer above x.                            | `PF_CEIL`    |
| `cos`                                                                   | Returns the cosine of x.                                     | `PF_COS`     |
| `exp`                                                                   | Returns e to the power of x.                                 | `PF_EXP`     |
| `fabs`                                                                  | Returns the absolute value of x.                             | `PF_FABS`    |
| `floor`                                                                 | Returns the closest integer below x.                         | `PF_FLOOR`   |
| `fmod`                                                                  | Returns x modulus y.                                         | `PF_FMOD`    |
| `hypot`                                                                 | Returns the hypotenuse of x and y, which is sqrt(x*x + y*y). | `PF_HYPOT`   |
| `log`                                                                   | Returns the natural log (ln) of x.                           | `PF_LOG`     |
| `log10`                                                                 | Returns the log (base 10) of x.                              | `PF_LOG10`   |
| `pow`                                                                   | Returns x to the power of y.                                 | `PF_POW`     |
| `sin`                                                                   | Returns the sine of x.                                       | `PF_SIN`     |
| `sqrt`                                                                  | Returns the square root of x.                                | `PF_SQRT`    |
| `tan`                                                                   | Returns the tangent of x.                                    | `PF_TAN`     |
| _(while not strictly math functions, these emulate ANSI functionality)_ |
| `sprintf`                                                               | Emulates the C sprintf function.                             | `PF_SPRINTF` |
| `strcpy`                                                                | Emulates the C strcpy function.                              | `PF_STRCPY`  |
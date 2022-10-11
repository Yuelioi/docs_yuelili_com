---
title: Graphics Utility Suites
order: 8
category:
  - AE 插件开发
---
# Graphics Utility Suites

After Effects exposes its internal transform and graphic utility routines through the following function suites.

---

## Transform Worlds

These functions combine `PF\_EffectWorlds` in interesting ways. When you use these, you’re using the same code After Effects does internally.

### PF_WorldTransformSuite1

#### composite_rect


Composite a rectangle from one `<span class="pre">PF_EffectWorld</span>` into another, using one of After Effects’ transfer modes.

```
PF_Errcomposite_rect(
PF_ProgPtreffect_ref,
PF_Rect*src_rect,
A_longsrc_opacity,
PF_EffectWorld*src_world,
A_longdst_x,
A_longdst_y,
PF_Fieldfield_rdr,
PF_XferModexfer_mode,
PF_EffectWorld*dst);
```

`<span class="pre">field_rdr</span>` can be upper, lower or both.

`<span class="pre">xfer_mode</span>` is one of the following:

> * `<span class="pre">PF_Xfer_COPY</span>`
> * `<span class="pre">PF_Xfer_BEHIND</span>`
> * `<span class="pre">PF_Xfer_IN_FRONT</span>`

#### blend


Blends two images, alpha-weighted. Does not deal with different-sized sources, though the destination may be either PF_EffectWorld.

```
PF_Errblend(
PF_ProgPtreffect_ref,
constPF_EffectWorld*src1,
constPF_EffectWorld*src2,
PF_Fixedratio,
PF_EffectWorld*dst);
```

#### convolve


Convolve an image with an arbitrary size kernel on each of the a, r, g, and b channels separately.

You can specify a rectangle to convolve (for instance, the `<span class="pre">extent_hint</span>` from [PF_EffectWorld Structure](https://ae-plugins.docsforadobe.dev/effect-basics/PF_EffectWorld.html#effect-basics-pf-effectworld-structure)), or pass 0 to convolve the entire image.

Do not use if the source *is* the destination.

Describe the convolution using [Kernel Flags](https://ae-plugins.docsforadobe.dev/effect-details/graphics-utility-suites.html#effect-details-graphics-utility-suites-kernel-flags).

```
PF_Errconvolve(
PF_EffectWorld*src,
constPF_Rect*area,
PF_KernelFlagsflags,
A_longkernel_size,
void*a_kernel,
void*r_kernel,
void*g_kernel,
void*b_kernel,
PF_EffectWorld*dst);
```

#### copy


Copies a region from one PF_EffectWorld to another, preserving alpha (unlike the macOS CopyBits).

```
PF_Errcopy(
PF_EffectWorld*src,
PF_EffectWorld*dst,
PF_Rect*src_r,
PF_Rect*dst_r);
```

#### copy_hq

A higher fidelity version of the above (using the same parameters).


#### transfer_rect


Blends using a transfer mode, with an optional mask.

```
PF_Errtransfer_rect(
PF_ProgPtreffect_ref,
PF_Qualityquality,
PF_ModeFlagsm_flags,
PF_Fieldfield,
constPF_Rect*src_rec,
constPF_EffectWorld*src_world,
constPF_CompositeMode*comp_mode,
constPF_MaskWorld*mask_world0,
A_longdest_x,
A_longdest_y,
PF_EffectWorld*dst_world);
```

#### transform_world


Given a PF_EffectWorld and a matrix (or array of matrices), transforms and blends using an After Effects transfer mode, with an optional mask.

The matrices pointer points to a matrix array used for motion-blur.

When is a transform not a transform? A Z-scale transform is not a transform, unless the transformed layer is a parent of other layers that do not all lie in the z=0 plane.

```
PF_Errtransform_world(
PF_InData*in_data,
PF_Qualityquality,
PF_ModeFlagsm_flags,
PF_Fieldfield,
constPF_EffectWorld*src_world,
constPF_CompositeMode*comp_mode,
constPF_MaskWorld*mask_world0,
constPF_FloatMatrix*matrices,
A_longnum_matrices,
Booleansrc2dst_matrix,
constPF_Rect*dest_rect,
PF_EffectWorld*dst_world);
```


## Kernel Flags

Functions such as `<span class="pre">convolve</span>` or gaussian kernel work with kernels, or matrices of filter weight values. These matrices can be in any format. The kernel flags describe how the matrices should be created and used. OR together any flags you need.

The flags relevant to given routines are documented along with the routine prototype.The first entry in the left column is always the default and has value 0.


| Kernel Flags                                                                                                                                                                                                 | Indicates                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<span class="pre">PF_KernelFlag_2D</span>``<span class="pre">PF_KernelFlag_1D</span>`                                                                                                                     | Specifies a one or two dimensional kernel.                                                                                                                                                                                                                                                                                                                                                |
| `<span class="pre">PF_KernelFlag_UNNORMALIZED</span>``<span class="pre">PF_KernelFlag_NORMALIZED</span>`                                                                                                   | `<span class="pre">NORMALIZED</span>` equalizes the kernel; the volume under the kernel surface is the same as the volume under the covered area of pixels.                                                                                                                                                                                                                             |
| `<span class="pre">PF_KernelFlag_CLAMP</span>``<span class="pre">PF_KernelFlag_NO_CLAMP</span>`                                                                                                            | `<span class="pre">CLAMP</span>` restricts values to the valid range for their data type.                                                                                                                                                                                                                                                                                               |
| `<span class="pre">PF_KernelFlag_USE_LONG</span>``<span class="pre">PF_KernelFlag_USE_CHAR</span>``<span class="pre">PF_KernelFlag_USE_FIXED</span>``<span class="pre">PF_KernelFlag_USE_UNDEFINED</span>` | `<span class="pre">USE_LONG</span>` defines the kernel as an array of longs valued from 0 to 255.<br />`<span class="pre">USE_CHAR</span>` defines the kernel as an array of unsigned chars from 0 to 255.<br />`<span class="pre">USE_FIXED</span>` defines the kernel as an array of fixeds from 0 to 1.<br />`<span class="pre">USE_LONG</span>` is the only implemented flag. |
| `<span class="pre">PF_KernelFlag_HORIZONTAL</span>``<span class="pre">PF_KernelFlag_VERTICAL</span>`                                                                                                       | Specifies the direction of the convolution.                                                                                                                                                                                                                                                                                                                                               |
| `<span class="pre">PF_KernelFlag_TRANSPARENT_BORDERS</span>``<span class="pre">PF_KernelFlag_REPLICATE_BORDERS</span>`                                                                                     | Use `<span class="pre">REPLICATE_BORDERS</span>` to replicate border pixels when sampling off the edge, use `<span class="pre">TRANSPARENT_BORDERS</span>` to treat pixels off the edge as alpha zero (black).`<span class="pre">REPLICATE_BORDERS</span>` is not implemented and will be ignored.                                                                                  |
| `<span class="pre">PF_KernelFlag_STRAIGHT_CONVOLVE</span>``<span class="pre">PF_KernelFlag_ALPHA_WEIGHT_CONVOLVE</span>`                                                                                   | Use `<span class="pre">STRAIGHT_CONVOLVE</span>` to indicate straight convolution, use `<span class="pre">ALPHA_WEIGHT_CONVOLVE</span>` to tell the convolution code to alpha-weight the contributions of pixels to the resulting convolved output.`<span class="pre">ALPHA_WEIGHT_CONVOLVE</span>` is not implemented and will be ignored.                                         |

## Fill ‘Em Up!

The FillMatteSuite can be used to fill a `<span class="pre">PF_EffectWorld</span>`, either with a specific color or premultiplied with an alpha value.

### PF_FillMatteSuite2

#### fill

Fills a rect with a color (or, if the color pointer is null, fills with black and alpha zero).

If the rect is null, it fills the entire image.

```
PF_Errfill(
PF_ProgPtreffect_ref,
constPF_Pixel*color,
constPF_Rect*dst_rect,
PF_EffectWorld*world);
```

#### fill16

Same as fill, but takes a pointer to a PF_Pixel16 color.

#### fill_float

Takes a pointer to a PF_PixelFloat color.

#### premultiply


Converts to (and from) r, g, and b color values pre-multiplied with black to represent the alpha channel.

Quality independent.

* `<span class="pre">forward</span>` is used as a boolean;
* `<span class="pre">true</span>` means convert non-premultiplied to pre-multiplied,
* `<span class="pre">false</span>` mean un-pre-multiply.

```
PF_Errpremultiply(
A_longforward,
PF_EffectWorld*dst);
```

#### premultiply_color


Converts to (and from) having r, g, and b color values premultiplied with any color to represent the alpha channel.

```
PF_Errpremultiply_color(
PF_ProgPtreffect_ref,
PF_EffectWorld*src,
PF_Pixel*color,
A_longforward,
PF_EffectWorld*dst);
```

#### premultiply_color16

Same as above, but takes a pointer to a PF_Pixel16 color.

#### premultiply_color_float

Takes a pointer to a PF_PixelFloat color.


## Sampling Images

Note: areas outside the bounds of the image being sampled are treated as zero alpha. For convenience, the functions from PF_Sampling8Suite1, PF_Sampling16Suite1, and PF_SamplingFloatSuite1 are all listed in this table.

### PF_SamplingSuite Functions (Multiple Suites)

#### nn_sample


Performs nearest neighbor sampling.

```
PF_Errnn_sample(
PF_ProgPtreffect_ref,
PF_Fixedx,
PF_Fixedy,
constPF_SampPB*params,
PF_Pixel*dst_pixel);
```

#### nn_sample16

Same as above, but takes a pointer to a `<span class="pre">PF_Pixel16</span>` `<span class="pre">dst_pixel</span>`.

#### nn_sample_float

Takes a pointer to a `<span class="pre">PF_PixelFloat</span>` `<span class="pre">dst_pixel</span>`.

#### subpixel_sample


Queries the appropriate alpha-weighted interpolation of colors at a non-integral point in a source image, in high quality. Nearest neighbor sampling is used in low quality.

Because the sampling routine, if used, will typically be called many times, it is convenient to copy the function pointer out to the callbacks structure and into a register or onto the stack to speed up your inner loop.

See the sample code for an example.

NOTE: The sampling assumes that 0,0 is the center of the top left pixel.

```
PF_Errsubpixel_sample(
PF_ProgPtreffect_ref,
PF_Fixedx,
PF_Fixedy,
constPF_SampPB*params,
PF_Pixel*dst_pixel);
```

#### subpixel_sample16

Same as above, but takes a pointer to a `<span class="pre">PF_Pixel16*</span>` `<span class="pre">dst_pixel</span>`.

#### subpixel_sample_float

Takes a pointer to a `<span class="pre">PF_PixelFloat*</span>` `<span class="pre">dst_pixel</span>`.

#### area_sample


Use this to calculate the appropriate alpha weighted average of an axis-aligned non-integral rectangle of color in a source image, in high quality.

Nearest neighbor sampling is used in low quality. Because of overflow issues, this can only average a maximum of a 256 x 256 pixel area (i.e. x and y radius < 128 pixels).

NOTE: the sampling radius must be at least one in both x and y.

```
PF_Errarea_sample(
PF_ProgPtreffect_ref,
PF_Fixedx,
PF_Fixedy,
constPF_SampPB*params,
PF_Pixel*dst_pixel);
```

NOTE: Areas outside the boundaries of the layer are considered the same as zero alpha, for sampling purposes.

#### area_sample16

Same as above, but takes a `<span class="pre">PF_Pixel16*</span>` `<span class="pre">dst_pixel</span>`.


### PF_BatchSamplingSuite1 Functions

#### begin_sampling


Your effect is going to perform some batch sampling;

After Effects will perform setup tasks to optimize your sampling.

```
PF_Err(*begin_sampling)(
PF_ProgPtreffect_ref,
PF_Qualityqual,
PF_ModeFlagsmf,
PF_SampPB*params);
```


#### end_sampling


Tells After Effects you’re done sampling.

```
PF_Err(*end_sampling)(
PF_ProgPtreffect_ref,
PF_Qualityqual,
PF_ModeFlagsmf,
PF_SampPB*params);
```

#### get_batch_func


Obtains a pointer to After Effects’ batch sampling function (highly optimized).

```
PF_Err(*get_batch_func)(
PF_ProgPtreffect_ref,
PF_Qualityquality,
PF_ModeFlagsmode_flags,
constPF_SampPB*params,
PF_BatchSampleFunc*batch);
```

#### get_batch_func16


Obtains a pointer to After Effects’ 16-bpc batch sampling function (also highly optimized).

```
PF_Err(*get_batch_func16)(
PF_ProgPtreffect_ref,
PF_Qualityquality,
PF_ModeFlagsmode_flags,
constPF_SampPB*params,
PF_BatchSample16Func*batch);
```



## Do The Math For Me

Along with the variety of graphics utilities, we also provide a block of ANSI standard routines so that plug-ins will not need to include other libraries to use standard functions.

We give function pointers to a large number of math functions (trig functions, square root, logs, etc.).

Using our suite functions provides for some (application level) error handling, and prevents problems with including different versions of multiple “standard” libraries.

All functions return a double. All angles are expressed in radians, use `PF\_RAD\_PER\_DEGREE` (a constant from AE_EffectCB.h) to convert from degrees to radians if necessary.

### PF_ANSICallbackSuite1

| **Function**                                                        | **Purpose**                                              | **Replaces** |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------ |
| `acos`                                                                  | Returns the arc cosine of x.                                   | `PF\_ACOS`       |
| `asin`                                                                  | Returns the arc sine of x.                                     | `PF\_ASIN`       |
| `atan`                                                                  | Returns the arc tangent of x.                                  | `PF\_ATAN`       |
| `atan2`                                                                 | Returns atan(y/x).                                             | `PF\_ATAN2`      |
| `ceil`                                                                  | Returns the next integer above x.                              | `PF\_CEIL`       |
| `cos`                                                                   | Returns the cosine of x.                                       | `PF\_COS`        |
| `exp`                                                                   | Returns e to the power of x.                                   | `PF\_EXP`        |
| `fabs`                                                                  | Returns the absolute value of x.                               | `PF\_FABS`       |
| `floor`                                                                 | Returns the closest integer below x.                           | `PF\_FLOOR`      |
| `fmod`                                                                  | Returns x modulus y.                                           | `PF\_FMOD`       |
| `hypot`                                                                 | Returns the hypotenuse of x and y, which is sqrt(x\*x + y\*y). | `PF\_HYPOT`      |
| `log`                                                                   | Returns the natural log (ln) of x.                             | `PF\_LOG`        |
| `log10`                                                                 | Returns the log (base 10) of x.                                | `PF\_LOG10`      |
| `pow`                                                                   | Returns x to the power of y.                                   | `PF\_POW`        |
| `sin`                                                                   | Returns the sine of x.                                         | `PF\_SIN`        |
| `sqrt`                                                                  | Returns the square root of x.                                  | `PF\_SQRT`       |
| `tan`                                                                   | Returns the tangent of x.                                      | `PF\_TAN`        |
| _(while not strictly math functions, these emulate ANSI functionality)_ |                                                                |                    |
| `sprintf`                                                               | Emulates the C sprintf function.                               | `PF\_SPRINTF`    |
| `strcpy`                                                                | Emulates the C strcpy function.                                | `PF\_STRCPY`     |

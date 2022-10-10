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

| **Function**      | **Purpose**                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| `composite\_rect` | Composite a rectangle from one `PF\_EffectWorld` into another, using one of After Effects’ transfer modes. |

```cpp
PF\_Err composite\_rect (
 PF\_ProgPtr effect\_ref,
 PF\_Rect \*src\_rect,
 A\_long src\_opacity,
 PF\_EffectWorld \*src\_world,
 A\_long dst\_x,
 A\_long dst\_y,
 PF\_Field field\_rdr,
 PF\_XferMode xfer\_mode,
 PF\_EffectWorld \*dst);

```

`field\_rdr` can be upper, lower or both.
`xfer\_mode` is one of the following:

- `PF\_Xfer\_COPY`
- `PF\_Xfer\_BEHIND`
- `PF\_Xfer\_IN\_FRONT`

|
| `blend` | Blends two images, alpha-weighted. Does not deal with different-sized sources, though the destination may be either PF_EffectWorld.

```cpp
PF\_Err blend (
 PF\_ProgPtr effect\_ref,
 const PF\_EffectWorld \*src1,
 const PF\_EffectWorld \*src2,
 PF\_Fixed ratio,
 PF\_EffectWorld \*dst);

```

|
| `convolve` | Convolve an image with an arbitrary size kernel on each of the a, r, g, and b channels separately.
You can specify a rectangle to convolve (for instance, the `extent\_hint` from [PF_EffectWorld Structure](../effect-basics/PF_EffectWorld.html) (#effect-basics-pf-effectworld-structure)), or pass 0 to convolve the entire image.
Do not use if the source _is_ the destination.
Describe the convolution using [Kernel Flags](#effect-details-graphics-utility-suites-kernel-flags).

```cpp
PF\_Err convolve(
 PF\_EffectWorld \*src,
 const PF\_Rect \*area,
 PF\_KernelFlags flags,
 A\_long kernel\_size,
 void \*a\_kernel,
 void \*r\_kernel,
 void \*g\_kernel,
 void \*b\_kernel,
 PF\_EffectWorld \*dst);

```

|
| `copy` | Copies a region from one PF_EffectWorld to another, preserving alpha (unlike the macOS CopyBits).

```cpp
PF\_Err copy (
 PF\_EffectWorld \*src,
 PF\_EffectWorld \*dst,
 PF\_Rect \*src\_r,
 PF\_Rect \*dst\_r);

```

|
| `copy\_hq` | A higher fidelity version of the above (using the same parameters). |
| `transfer\_rect` | Blends using a transfer mode, with an optional mask.

```cpp
PF\_Err transfer\_rect (
 PF\_ProgPtr effect\_ref,
 PF\_Quality quality,
 PF\_ModeFlags m\_flags,
 PF\_Field field,
 const PF\_Rect \*src\_rec,
 const PF\_EffectWorld \*src\_world,
 const PF\_CompositeMode \*comp\_mode,
 const PF\_MaskWorld \*mask\_world0,
 A\_long dest\_x,
 A\_long dest\_y,
 PF\_EffectWorld \*dst\_world);

```

|
| `transform\_world` | Given a PF_EffectWorld and a matrix (or array of matrices), transforms and blends using an After Effects transfer mode, with an optional mask.
The matrices pointer points to a matrix array used for motion-blur.
When is a transform not a transform? A Z-scale transform is not a transform, unless the transformed layer is a parent of other layers that do not all lie in the z=0 plane.

```cpp
PF\_Err transform\_world (
 PF\_InData \*in\_data,
 PF\_Quality quality,
 PF\_ModeFlags m\_flags,
 PF\_Field field,
 const PF\_EffectWorld \*src\_world,
 const PF\_CompositeMode \*comp\_mode,
 const PF\_MaskWorld \*mask\_world0,
 const PF\_FloatMatrix \*matrices,
 A\_long num\_matrices,
 Boolean src2dst\_matrix,
 const PF\_Rect \*dest\_rect,
 PF\_EffectWorld \*dst\_world);

```

|

---

## Kernel Flags

Functions such as `convolve` or gaussian kernel work with kernels, or matrices of filter weight values. These matrices can be in any format. The kernel flags describe how the matrices should be created and used. OR together any flags you need.

The flags relevant to given routines are documented along with the routine prototype.The first entry in the left column is always the default and has value 0.

| Kernel Flags | Indicates |
| ------------ | --------- |

| `PF\_KernelFlag\_2D`
`PF\_KernelFlag\_1D` | Specifies a one or two dimensional kernel. |
| `PF\_KernelFlag\_UNNORMALIZED`
`PF\_KernelFlag\_NORMALIZED` | `NORMALIZED` equalizes the kernel; the volume under the kernel surface is the same as the volume under the covered area of pixels. |
| `PF\_KernelFlag\_CLAMP`
`PF\_KernelFlag\_NO\_CLAMP` | `CLAMP` restricts values to the valid range for their data type. |
| `PF\_KernelFlag\_USE\_LONG`
`PF\_KernelFlag\_USE\_CHAR`
`PF\_KernelFlag\_USE\_FIXED`
`PF\_KernelFlag\_USE\_UNDEFINED` | `USE\_LONG` defines the kernel as an array of longs valued from 0 to 255.
`USE\_CHAR` defines the kernel as an array of unsigned chars from 0 to 255.
`USE\_FIXED` defines the kernel as an array of fixeds from 0 to 1.
`USE\_LONG` is the only implemented flag. |
| `PF\_KernelFlag\_HORIZONTAL`
`PF\_KernelFlag\_VERTICAL` | Specifies the direction of the convolution. |
| `PF\_KernelFlag\_TRANSPARENT\_BORDERS`
`PF\_KernelFlag\_REPLICATE\_BORDERS` | Use `REPLICATE\_BORDERS` to replicate border pixels when sampling off the edge, use `TRANSPARENT\_BORDERS` to treat pixels off the edge as alpha zero (black).
`REPLICATE\_BORDERS` is not implemented and will be ignored. |
| `PF\_KernelFlag\_STRAIGHT\_CONVOLVE`
`PF\_KernelFlag\_ALPHA\_WEIGHT\_CONVOLVE` | Use `STRAIGHT\_CONVOLVE` to indicate straight convolution, use `ALPHA\_WEIGHT\_CONVOLVE` to tell the convolution code to alpha-weight the contributions of pixels to the resulting convolved output.
`ALPHA\_WEIGHT\_CONVOLVE` is not implemented and will be ignored. |

---

## Fill ‘Em Up!

The FillMatteSuite can be used to fill a `PF\_EffectWorld`, either with a specific color or premultiplied with an alpha value.

### PF_FillMatteSuite2

| **Function** | **Purpose**                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `fill`       | Fills a rect with a color (or, if the color pointer is null, fills with black and alpha zero). |

If the rect is null, it fills the entire image.

```cpp
PF\_Err fill (
 PF\_ProgPtr effect\_ref,
 const PF\_Pixel \*color,
 const PF\_Rect \*dst\_rect,
 PF\_EffectWorld \*world);

```

|
| `fill16` | Same as fill, but takes a pointer to a PF_Pixel16 color. |
| `fill\_float` | Takes a pointer to a PF_PixelFloat color. |
| `premultiply` | Converts to (and from) r, g, and b color values pre-multiplied with black to represent the alpha channel.
Quality independent.\* `forward` is used as a boolean;

- `true` means convert non-premultiplied to pre-multiplied,
- `false` mean un-pre-multiply.

```cpp
PF\_Err premultiply (
 A\_long forward,
 PF\_EffectWorld \*dst);

```

|
| `premultiply\_color` | Converts to (and from) having r, g, and b color values premultiplied with any color to represent the alpha channel.

```cpp
PF\_Err premultiply\_color (
 PF\_ProgPtr effect\_ref,
 PF\_EffectWorld \*src,
 PF\_Pixel \*color,
 A\_long forward,
 PF\_EffectWorld \*dst);

```

|
| `premultiply\_color16` | Same as above, but takes a pointer to a PF_Pixel16 color. |
| `premultiply\_color\_float` | Takes a pointer to a PF_PixelFloat color. |

---

## Sampling Images

:::tip: areas outside the bounds of the image being sampled are treated as zero alpha. For convenience, the functions from PF_Sampling8Suite1, PF_Sampling16Suite1, and PF_SamplingFloatSuite1 are all listed in this table.

### PF_SamplingSuite Functions (Multiple Suites)

| **Function** | **Purpose**                         |
| ------------ | ----------------------------------- |
| `nn\_sample` | Performs nearest neighbor sampling. |

```cpp
PF\_Err nn\_sample (
 PF\_ProgPtr effect\_ref,
 PF\_Fixed x,
 PF\_Fixed y,
 const PF\_SampPB \*params,
 PF\_Pixel \*dst\_pixel );

```

|
| `nn\_sample16` | Same as above, but takes a pointer to a `PF\_Pixel16` `dst\_pixel`. |
| `nn\_sample\_float` | Takes a pointer to a `PF\_PixelFloat` `dst\_pixel`. |
| `subpixel\_sample` | Queries the appropriate alpha-weighted interpolation of colors at a non-integral point in a source image, in high quality. Nearest neighbor sampling is used in low quality.
Because the sampling routine, if used, will typically be called many times, it is convenient to copy the function pointer out to the callbacks structure and into a register or onto the stack to speed up your inner loop.
See the sample code for an example.
NOTE: The sampling assumes that 0,0 is the center of the top left pixel.

```cpp
PF\_Err subpixel\_sample (
 PF\_ProgPtr effect\_ref,
 PF\_Fixed x,
 PF\_Fixed y,
 const PF\_SampPB \*params,
 PF\_Pixel \*dst\_pixel);

```

|
| `subpixel\_sample16` | Same as above, but takes a pointer to a `PF\_Pixel16\*` `dst\_pixel`. |
| `subpixel\_sample\_float` | Takes a pointer to a `PF\_PixelFloat\*` `dst\_pixel`. |
| `area\_sample` | Use this to calculate the appropriate alpha weighted average of an axis-aligned non-integral rectangle of color in a source image, in high quality.
Nearest neighbor sampling is used in low quality. Because of overflow issues, this can only average a maximum of a 256 x 256 pixel area (i.e. x and y radius < 128 pixels).
NOTE: the sampling radius must be at least one in both x and y.

```cpp
PF\_Err area\_sample (
 PF\_ProgPtr effect\_ref,
 PF\_Fixed x,
 PF\_Fixed y,
 const PF\_SampPB \*params,
 PF\_Pixel \*dst\_pixel);

```

NOTE: Areas outside the boundaries of the layer are considered the same as zero alpha, for sampling purposes. |
| `area\_sample16` | Same as above, but takes a `PF\_Pixel16\*` `dst\_pixel`. |

### PF_BatchSamplingSuite1 Functions

| **Function**      | **Purpose**                                          |
| ----------------- | ---------------------------------------------------- |
| `begin\_sampling` | Your effect is going to perform some batch sampling; |

After Effects will perform setup tasks to optimize your sampling.

```cpp
PF\_Err (\*begin\_sampling)(
 PF\_ProgPtr effect\_ref,
 PF\_Quality qual,
 PF\_ModeFlags mf,
 PF\_SampPB \*params);

```

|
| `end\_sampling` | Tells After Effects you’re done sampling.

```cpp
PF\_Err (\*end\_sampling)(
 PF\_ProgPtr effect\_ref,
 PF\_Quality qual,
 PF\_ModeFlags mf,
 PF\_SampPB \*params);

```

|
| `get\_batch\_func` | Obtains a pointer to After Effects’ batch sampling function (highly optimized).

```cpp
PF\_Err (\*get\_batch\_func)(
 PF\_ProgPtr effect\_ref,
 PF\_Quality quality,
 PF\_ModeFlags mode\_flags,
 const PF\_SampPB \*params,
 PF\_BatchSampleFunc \*batch);

```

|
| `get\_batch\_func16` | Obtains a pointer to After Effects’ 16-bpc batch sampling function (also highly optimized).

```cpp
PF\_Err (\*get\_batch\_func16)(
 PF\_ProgPtr effect\_ref,
 PF\_Quality quality,
 PF\_ModeFlags mode\_flags,
 const PF\_SampPB \*params,
 PF\_BatchSample16Func \*batch);

```

|

---

## Do The Math For Me

Along with the variety of graphics utilities, we also provide a block of ANSI standard routines so that plug-ins will not need to include other libraries to use standard functions.

We give function pointers to a large number of math functions (trig functions, square root, logs, etc.).

Using our suite functions provides for some (application level) error handling, and prevents problems with including different versions of multiple “standard” libraries.

All functions return a double. All angles are expressed in radians, use `PF\_RAD\_PER\_DEGREE` (a constant from AE_EffectCB.h) to convert from degrees to radians if necessary.

### PF_ANSICallbackSuite1

| **Function**                                                            | **Purpose**                                                    | **Replaces**  |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- | ------------- |
| `acos`                                                                  | Returns the arc cosine of x.                                   | `PF\_ACOS`    |
| `asin`                                                                  | Returns the arc sine of x.                                     | `PF\_ASIN`    |
| `atan`                                                                  | Returns the arc tangent of x.                                  | `PF\_ATAN`    |
| `atan2`                                                                 | Returns atan(y/x).                                             | `PF\_ATAN2`   |
| `ceil`                                                                  | Returns the next integer above x.                              | `PF\_CEIL`    |
| `cos`                                                                   | Returns the cosine of x.                                       | `PF\_COS`     |
| `exp`                                                                   | Returns e to the power of x.                                   | `PF\_EXP`     |
| `fabs`                                                                  | Returns the absolute value of x.                               | `PF\_FABS`    |
| `floor`                                                                 | Returns the closest integer below x.                           | `PF\_FLOOR`   |
| `fmod`                                                                  | Returns x modulus y.                                           | `PF\_FMOD`    |
| `hypot`                                                                 | Returns the hypotenuse of x and y, which is sqrt(x\*x + y\*y). | `PF\_HYPOT`   |
| `log`                                                                   | Returns the natural log (ln) of x.                             | `PF\_LOG`     |
| `log10`                                                                 | Returns the log (base 10) of x.                                | `PF\_LOG10`   |
| `pow`                                                                   | Returns x to the power of y.                                   | `PF\_POW`     |
| `sin`                                                                   | Returns the sine of x.                                         | `PF\_SIN`     |
| `sqrt`                                                                  | Returns the square root of x.                                  | `PF\_SQRT`    |
| `tan`                                                                   | Returns the tangent of x.                                      | `PF\_TAN`     |
| _(while not strictly math functions, these emulate ANSI functionality)_ |
| `sprintf`                                                               | Emulates the C sprintf function.                               | `PF\_SPRINTF` |
| `strcpy`                                                                | Emulates the C strcpy function.                                | `PF\_STRCPY`  |

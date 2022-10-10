---
title: Iteration Suites
order: 7
category:
  - AE 插件开发
---

# Iteration Suites

Effects often iterate over all pixels in an image, filtering each one. By taking advantage of After Effects’ iteration suites, you make it possible for After Effects to sub-allocate your task to as many processors are present, taking advantage of hardware-specific acceleration.

After Effects will also manage progress reporting and user cancellation automatically.

Use these suites! Make sure the pixel processing functions you pass to these iterator callbacks are re-entrant.

:::tip

The October 2021 SDK update increases the number of concurrent iterate threads up to the available system CPU cores instead of the previous hard-coded limit of 32.

---

## PF_Iterate8Suite1, PF_Iterate16Suite1, PF_IterateFloatSuite1

| **Function** | **Purpose**                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------- |
| `iterate`    | Iterates across pixels from a source image, alters them, and populates a destination image. |

You may specify a rectangular region of pixels across which to iterate; if you don’t, After Effects will iterate over every overlapping pixel.
You give a refcon, and the function is invoked with that refcon, plus the x and y coordinates of the current pixel, plus pointers to that pixel in the source and destination images.
If you pass a NULL source, it will iterate over the dst. This function is quality independent.
Don’t depend upon the pixels being traversed in any particular order.
The image may be subset to different CPUs, so consider all the parameters (except dst) to be read-only while After Effects is processing.
This callback automatically includes progress and abort checking, so don’t do so in your pixel function.

```cpp
iterate(
 PF\_InData \*in\_data,
 A\_long progress\_base,
 A\_long progress\_final,
 PF\_EffectWorld \*src,
 const PF\_Rect \*area,
 void \*refcon,
 PF\_Err (\*pix\_fn)(
 void \*refcon,
 A\_long x,
 A\_long y,
 PF\_Pixel \*in,
 PF\_Pixel \*out),
 PF\_EffectWorld \*dst);

```

|
| `iterate\_origin` | Lets you specify an offset from the input into the output.
For example, if your output buffer is smaller than your input buffer, pass `(in\_- data>output\_origin\_x, in\_data>output\_origin\_y)` as the origin,
and NULL for area, and this function will offset the src pixel pointer appropriately for your pixel function.

```cpp
iterate\_origin(
 PF\_InData \*in\_data,
 A\_long progress\_base,
 A\_long progress\_final,
 PF\_EffectWorld \*src,
 const PF\_Rect \*area,
 const PF\_Point \*origin,
 void \*refcon,
 PF\_Err (\*pix\_fn)(
 void \*refcon,
 A\_long x,
 A\_long y,
 PF\_Pixel \*in,
 PF\_Pixel \*out),
 PF\_EffectWorld \*dst);

```

|
| `iterate\_lut` | `PF\_Iterate8Suite` only. Allows a Look-Up Table (LUT) to be passed for iteration; you can pass the same or different LUTs for each color channel.
If no LUT is passed, an identity LUT is used.

```cpp
iterate\_lut(
 PF\_InData \*in\_data,
 A\_long prog\_base,
 A\_long prog\_final,
 PF\_EffectWorld \*src,
 const PF\_Rect \*area,
 A\_u\_char \*a\_lut0,
 A\_u\_char \*r\_lut0,
 A\_u\_char \*g\_lut0,
 A\_u\_char \*b\_lut0,
 PF\_EffectWorld \*dst);

```

|
| `iterate\_origin\_non\_clip\_src` | Allows for iteration across pixels outside the intersection of the source and destination layers. For these pixels, you will be passed a
PF_Pixel with values {0,0,0,0}.

```cpp
iterate\_origin\_non\_clip\_src(
 PF\_InData \*in\_data,
 A\_long progress\_base,
 A\_long progress\_final,
 PF\_EffectWorld \*src,
 const PF\_Rect \*area,
 const PF\_Point \*origin,
 void \*refcon,
 PF\_Err (\*pix\_fn)(
 void \*refcon,
 A\_long x,
 A\_long y,
 PF\_Pixel \*in,
 PF\_Pixel \*out),
 PF\_EffectWorld \*dst);

```

|
| `iterate\_generic` | PF_Iterate8Suite only. If you want to do something once per available CPU, this is the function to use (pass PF_Iterations_ONCE_PER_PROCESSOR for iterationsL).
Only call abort and progress functions from thread index 0.
:::tip: You can iterate over more than pixels. Internally, we use it for row-based image processing, and for once-per-entity updates of complex sequence data.

```cpp
iterate\_generic(
 A\_long iterationsL,
 void \*refconPV,
 PF\_Err (\*fn\_func)(
 void \*refconPV,
 A\_long thread\_idxL,
 A\_long i,
 A\_long itrtL));

```

|

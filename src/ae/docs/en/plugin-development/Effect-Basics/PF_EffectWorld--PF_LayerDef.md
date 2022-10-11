---
title: PF_EffectWorld   PF_LayerDef
order: 9
category:
  - AE 插件开发
---
# PF_EffectWorld / PF_LayerDef

After Effects represents images using PF_EffectWorlds, also called PF_LayerDefs.

---

## PF_EffectWorld Structure



| **Item**                                | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<span class="pre">world_flags</span>`      | Currently, the only flags are:> <br />*`<span class="pre">PF_WorldFlag_DEEP</span>` - set if the world is 16-bpc<br />* `<span class="pre">PF_WorldFlag_WRITEABLE</span>` - indicates that you are allowed to alter the image data of the world.<br />Normally effects cannot alter input image data; only output.                                                                                                                                                                                                                                                                                                                                                               |
| `<span class="pre">data</span>`             | Pointer to image data, stored as a `<span class="pre">PF_PixelPtr</span>`. Do not access directly; use the [PF_PixelPtr Accessor Macros](https://ae-plugins.docsforadobe.dev/effect-basics/PF_EffectWorld.html#effect-basics-pf-effectworld-pf-pixelptr-accessor-macros).<br />Image data in After Effects is always organized in sequential words each containing Alpha, Red, Green, Blue from the low byte to the high byte.                                                                                                                                                                                                                                                        |
| `<span class="pre">rowbytes</span>`         | The length, in bytes, of each row in the image’s block of pixels. The block of pixels contains height lines each with width pixels followed by som<br />e bytes of padding. The width pixels (times four, because each pixel is four bytes long) plus optional extra padding adds up to rowbytes bytes. Use this value to traverse the image data.Platform-specific padding at the end of rows makes it unwise to traverse the entire buffer. Instead, find the beginning of each row using height and rowbytes.NOTE: This value does not vary based on whether field rendering is active.NOTE: Input and output worlds with the same dimensions can use different rowbytes values. |
| `<span class="pre">width</span>`            | Width and height of the pixel buffer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `<span class="pre">height</span>`           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `<span class="pre">extent_hint</span>`      | The smallest rectangle encompassing all opaque (non-zero alpha) pixels in the layer. This defines the area which needs to be output.<br />If your plug-in varies with extent (like a diffusion dither), ignore this and render the full frame each time.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `<span class="pre">pix_aspect_ratio</span>` | The pixel aspect ratio expressed as a `<span class="pre">PF_Rational</span>`.<br />NOTE: Effects can use this value for checked out layers, but must use `<span class="pre">PF_InData.pixel_aspect_ratio</span>` for the layer to which they’re applied. Sorry.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `<span class="pre">platform_ref</span>`     | No longer used in CS5.<br />Platform-specific reference information. On Windows, this contains an opaque value. On macOS,`<span class="pre">PF_GET_PLATFORM_REFS</span>` provides a `<span class="pre">CGrafPtr</span>` and a `<span class="pre">GDeviceHandle</span>` from a `<span class="pre">PF_EffectWorld</span>`.<br />NOTE: You cannot acquire a `<span class="pre">platform_ref</span>` during  *PF_Cmd_GLOBAL_SETUP* , as there isn’t any output context yet. Patience, my pet.                                                                                                                                                                               |
| `<span class="pre">dephault</span>`         | For layer parameters only.Either `<span class="pre">PF_LayerDefault_MYSELF</span>` or `<span class="pre">PF_LayerDefault_NONE</span>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## New In 16.0

During PF_Cmd_SMART_RENDER_GPU, PF_LayerDef will be filled out the same as it is for regular CPU renders, but PF_LayerDef.data will be null; all other fields will be valid.

---

## Rowbytes In PF_EffectWorlds

Don’t assume that you can get to the next scanline of a `PF\_EffectWorld` using `(width \* sizeof(current\_pixel\_type)) + 4`, or whatever; use the PF_EffectWorld’s `rowbytes` instead.

Never write outside the indicated region of a PF_EffectWorld; this can corrupt cached image buffers that don’t belong to you.

To test whether your effects are honoring the `PF\_EffectWorld>rowbytes`, apply the Grow Bounds effect _after_ your effect.

The output buffer will have larger rowbytes than the input (though it will still have the same logical size).

---

## Byte Alignment

The pixels in a `PF\_EffectWorld` are not guaranteed to be 16-byte-aligned. An effect may get a subregion of a larger PF_EffectWorld. Users of Apple’s sample code for pixel processing optimization, you have been warned.

Beyond 8-bit per channel color, After Effects supports 16 bit and 32-bit float per-channel color.

Effects will never receive input and output worlds with differing bit depths, nor will they receive worlds with higher bit depth than they have claimed to be able to handle.

---

## Accessor Macros For Opaque (Data Type) Pixels

Use the following macros to access the data within (opaque) PF_PixelPtrs.

It is, emphatically, _not_ safe to simply cast pointers of one type into another! To make it work at all requires a cast, and there’s nothing that prevents you from casting it incorrectly. We may change its implementation at a later date (at which time you’ll thank us for forcing this level of abstraction).

---

## PF_PixelPtr Accessor Macros

| **Macro**            | **Purpose**                                              |
| -------------------------- | -------------------------------------------------------------- |
| `PF\_GET\_PIXEL\_DATA16` | Obtain a pointer to a 16-bpc pixel within the specified world. |

The returned pixel pointer will be NULL if the world is not 16-bpc.
The second parameter is optional; if it is not NULL, the returned pixel will be
an interpretation of the values in the passed-in pixel, as if it were in the specified PF_EffectWorld.

```cpp
PF\_GET\_PIXEL\_DATA16 (
 PF\_EffectWorld wP,
 PF\_PixelPtr pP0,
 PF\_Pixel16 \*outPP);

```

|
| `PF\_GET\_PIXEL\_DATA8` | Obtain a pointer to a 8-bpc pixel within the specified world.
The returned pixel pointer will be NULL if the world is not 8- bpc.
The second parameter is optional; if it is not NULL, the returned pixel will be
an interpretation of the values in the passed-in pixel, as if it were in the specified PF_EffectWorld.

```cpp
PF\_GET\_PIXEL\_DATA8 (
 PF\_EffectWorld wP,
 PF\_PixelPtr pP0,
 PF\_Pixel8 \*outPP);

```

|

Think of `PF\_GET\_PIXEL\_DATA16` and `PF\_GET\_PIXEL\_DATA8` as safe (ahem) casting routines.

The code required is actually very simple to get a `PF\_Pixel16\*` out of the PF_EffectWorld output:

```cpp
{
 PF\_Pixel16 \*deep\_pixelP = NULL;
 PF\_Err err = PF\_Err\_NONE;
 err = PF\_GET\_PIXEL\_DATA16(output, NULL, &deep\_pixelP);
}

```

This returns deep_pixelP as NULL if the world does not have deep pixels.

The second parameter is not used very often and should be passed as NULL; pass a PF_PixelPtr that is _not_ contained in a PF_EffectWorld to coerce it to the depth of that PF_EffectWorld).

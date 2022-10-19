---
title: Image Buffer Management Functions
order: 6
category:
  - AE 插件开发
---

# Image Buffer Management Functions

Use these functions to create and destroy [PF_EffectWorld / PF_LayerDef](../effect-basics/PF_EffectWorld.html) (#effect-basics-pf-effectworld), and to find out their bit-depth.

## PF_WorldSuite2

### PF_NewWorld

Creates a new PF_EffectWorld`.

```cpp
PF_ErrPF_NewWorld(
PF_ProgPtreffect_ref,
A_longwidthL,
A_longheightL,
PF_Booleanclear_pixB,
PF_PixelFormatpixel_format,
PF_EffectWorld*worldP);
```

### PF_DisposeWorld

Disposes of a PF_EffectWorld`.

```cpp
PF_ErrPF_DisposeWorld(
PF_ProgPtreffect_ref,
PF_EffectWorld*worldP);
```

### PF_GetPixelFormat

Get the pixel format for a given PF_EffectWorld`.

```cpp
PF_ErrPF_GetPixelFormat(
constPF_EffectWorld*worldP,
PF_PixelFormat*pixel_formatP);
```

pixel_formatP` can be:

- PF_PixelFormat_ARGB32` - standard 8-bit RGB
- PF_PixelFormat_ARGB64` - 16-bit RGB
- PF_PixelFormat_ARGB128` - 32-bit floating point RGB

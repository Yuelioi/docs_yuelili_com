---
title: Image Buffer Management Functions
order: 6
category:
  - AE 插件开发
---

# Image Buffer Management Functions

使用这些函数来创建和销毁[PF_EffectWorld / PF_LayerDef](.../effect-basics/PF_EffectWorld.html) (#effect-basics-pf-effectworld)，并找出其位深。

## PF_WorldSuite2

### PF_NewWorld

创建一个新的PF_EffectWorld`。

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

处置一个PF_EffectWorld`。

```cpp
PF_ErrPF_DisposeWorld(
PF_ProgPtreffect_ref,
PF_EffectWorld*worldP);
```

### PF_GetPixelFormat

获取一个给定的PF_EffectWorld`的像素格式。

```cpp
PF_ErrPF_GetPixelFormat(
constPF_EffectWorld*worldP,
PF_PixelFormat*pixel_formatP);
```

pixel_formatP`可以是。

- PF_PixelFormat_ARGB32` - 标准8位RGB
- PF_PixelFormat_ARGB64` - 16-bit RGB
- PF_PixelFormat_ARGB128` - 32位浮点RGB
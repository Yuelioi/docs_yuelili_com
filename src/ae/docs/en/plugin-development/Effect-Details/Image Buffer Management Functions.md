---
title: Image Buffer Management Functions
order: 6
category:
  - AE 插件开发
---

# Image Buffer Management Functions

Use these functions to create and destroy [PF_EffectWorld / PF_LayerDef](../effect-basics/PF_EffectWorld.html) (#effect-basics-pf-effectworld), and to find out their bit-depth.

---

## PF_WorldSuite2

| **Function**   | **Description**                  |
| -------------- | -------------------------------- |
| `PF\_NewWorld` | Creates a new `PF\_EffectWorld`. |

```cpp
PF\_Err PF\_NewWorld(
 PF\_ProgPtr effect\_ref,
 A\_long widthL,
 A\_long heightL,
 PF\_Boolean clear\_pixB,
 PF\_PixelFormat pixel\_format,
 PF\_EffectWorld \*worldP);

```

|
| `PF\_DisposeWorld` | Disposes of a `PF\_EffectWorld`.

```cpp
PF\_Err PF\_DisposeWorld(
 PF\_ProgPtr effect\_ref,
 PF\_EffectWorld \*worldP);

```

|
| `PF\_GetPixelFormat` | Get the pixel format for a given `PF\_EffectWorld`.

```cpp
PF\_Err PF\_GetPixelFormat(
 const PF\_EffectWorld \*worldP,
 PF\_PixelFormat \*pixel\_formatP);

```

`pixel\_formatP` can be:

- `PF\_PixelFormat\_ARGB32` - standard 8-bit RGB
- `PF\_PixelFormat\_ARGB64` - 16-bit RGB
- `PF\_PixelFormat\_ARGB128` - 32-bit floating point RGB

|

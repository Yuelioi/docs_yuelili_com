---
title: rawcolormap
order: 9
category:
  - houdini
---
    
## 描述

Looks up an unfiltered color from a texture file.

```c
vector|vector4 rawcolormap(string filename, vector uvw, ...)
```

```c
vector|vector4 rawcolormap(string filename, float u, float v, ...)
```

`vector|vector4 rawcolormap(string filename, vector uv, vector du, vector dv, int samples, ...)`

`vector|vector4 rawcolormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, ...)`

`vector|vector4 rawcolormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, int samples, ...)`

`vector|vector4 rawcolormap(string filename, float u0, float v0, float u1, float v1, float u2, float v2, float u3, float v3, int samples, ...)`

This function has the same arguments as [colormap](colormap.html "Looks up a
(filtered) color from a texture file."), but does not do bilinear
interpolation of the pixel values. See [colormap](colormap.html "Looks up a
(filtered) color from a texture file.") for information on the arguments.

这个函数的参数与 olormap 相同，但不做像素值的双线性插值。有关参数的信息，请参见 olormap。

If you call the function with a `vector4` return type, the fourth component is
the alpha channel of the texture. If the image does not have alpha, the fourth
component is always `1`.

如果你调用这个函数的返回类型是 avctor4，第四个分量就是纹理的 alpha 通道。如果图像没有 alpha，第四分量总是 1。

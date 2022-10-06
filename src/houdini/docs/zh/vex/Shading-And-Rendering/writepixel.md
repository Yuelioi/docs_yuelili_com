---
title: writepixel
order: 81
category:
  - houdini
---
    
## 描述

Writes color information to a pixel in the output image

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
void  writepixel(string channel, float ndc_x, float ndc_y, vector clr)
```

This is an experimental function which can be used by the generator rendering
engine to write pixel values into the image.

这是一个实验性的函数，可以被生成器的渲染引擎用来将像素值写入图像中。

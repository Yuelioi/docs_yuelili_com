---
title: depthmap
order: 2
category:
  - houdini
---
    
## 描述

The depthmap functions work on an image which was rendered as a  
z-depth image from mantra.

```c
float  depthmap(string filename, vector uvw)
```

```c
float  depthmap(string filename, float u, float v)
```

The depthmap functions work on an image which was rendered as a z-depthimage
from mantra. They return the floating point distance from thecamera to the
pixel in question. There is no area sampling done whensampling depth values.
As well, if the u/v values are not in the range 0to 1, a value of 1E6 will be
returned (indicating a “far” value).

深度图函数在一个图像上工作，该图像被渲染成一个 Z-深度的

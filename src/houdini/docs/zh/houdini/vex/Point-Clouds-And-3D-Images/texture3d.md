---
title: texture3d
order: 35
category:
  - houdini
---
    
## 描述

Returns the value of the 3d image at the position specified by P.

```c
<type> texture3d(string filename, string channel, vector P, ...)
```

Returns the value of the 3d image at the position specified by P. If Pis
outside of the bounding box of the image, the value returned will be0. If the
channel specified contains more values than the return type(i.e. a vector
channel when a float return type is desired), the firstcomponent of the vector
will be returned. If the channel specifiedcontains fewer values than the
return type, the missing components willbe filled with the last valid channel.

返回 3D 图像在 P 指定位置的值。

Texture files will be searched for in the path specified by
the

```c
HOUDINI_TEXTURE_PATH
```

environment variable.

是在图像的边界范围之外，返回的值将是

You can pass additional arguments to control the evaluation
(see[colormap](colormap.html "Looks up a (filtered) color from a texture
file.")):

0\. 如果指定的通道包含比返回类型更多的值

`"filter"`

|

Specifies the filter for evaluation.

(例如，一个矢量通道，但需要一个浮动的返回类型)，那么矢量的第一个分量将被返回。

---|---

`"width"`

|

Specifies the filter width for evaluation.

矢量的第一个分量将被返回。如果指定的通道

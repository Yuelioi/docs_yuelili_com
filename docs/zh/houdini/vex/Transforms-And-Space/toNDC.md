---
title: toNDC
order: 31
category:
  - houdini
---
    
## 描述

Transforms a position into normal device coordinates.

```c
vector  toNDC(vector point)
```

```c
vector  toNDC(string camera_name, vector point)
```

Transforms a position to the normal device coordinates for a camera.The point
should be in the local space of the object (i.e. not in the space of the
camera).

将一个位置转换为摄像机的正常设备坐标。

toNDC() will return values above and below the 0-1 range outside the view of
the camera or light. To the right of the camera are values of 1+ and to the
left are values of 0-. The same goes for the range above and below the camera
or light.

该点应该在物体的本地空间（即不在摄像机的空间）。

Transforms a position into normal device coordinates. This space is onlywell-
defined for the [shading contexts](../contexts/shading_contexts.html).

toNDC()将返回在摄像机或灯光视野之外的 0-1 范围的上方和下方的值。摄像机的右边是 1+的值，左边是 0-的值，摄像机或灯光上方和下方的范围也是如此。

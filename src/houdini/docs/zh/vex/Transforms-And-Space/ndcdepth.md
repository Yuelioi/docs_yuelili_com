---
title: ndcdepth
order: 8
category:
  - houdini
---
    
## 描述

Returns the camera space z-depth of the NDC z-depth value.

| Since | 18.0 |
| ----- | ---- |

```c
float  ndcdepth(float z)
```

When Karma converts a position to NDC space, the z depth value is

当 Karma 将一个位置转换为 NDC 空间时，Z 深度值会根据渲染相机的投影和剪裁平面进行转换。

transformed based on the render camera projection and clipping
planes.Thisfunction converts the NDC z-depth into the camera space.That is,
the distancedown the z-axis in the space of the camera.

基于渲染相机的投影和剪裁平面进行转换。 这个

function returns the argument passed in.

函数将 NDC 的 Z 深度转换为摄像机空间。 也就是说，在

## Examples

    vector ndc = ptransform("space:ndc", P);float pz_camera = ndcspace(ndc.z);// This value can also be computed usingfloat pz_camera = -ptransform("space:camera", P).z;

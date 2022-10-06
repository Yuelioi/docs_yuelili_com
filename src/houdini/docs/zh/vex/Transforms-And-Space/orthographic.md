---
title: orthographic
order: 10
category:
  - houdini
---
    
## 描述

Create an orthographic projection matrix.

| Since | 17.5 |
| ----- | ---- |

`matrix orthographic(float zoom, float orthowidth, float image_aspect, float pixel_aspect, float clip_near, float clip_far)`

`matrix orthographic(float zoom, float orthowidth, float image_aspect, float pixel_aspect, float clip_near, float clip_far, vector4 window)`

Create an orthographic projection matrix with the given parameters. This can
be used to project points onto the so-called NDC coordinates of a camera.

用给定的参数创建一个正射投影矩阵。这可以用来将点投射到所谓的摄像机的 NDC 坐标上。

To make a single transform from world space to NDC space given a camera matrix
and a projection matrix, you would use, `worldToNDC = worldToCamera * projection;`

为了从世界空间到 NDC 空间进行一次转换，给定一个相机矩阵和一个投影矩阵，你可以使用，worldToNDC = worldToCamera \*
projection。

`zoom`

The zoom for the lens. Sometimes the zoom is expressed in terms of focal and
aperture.In this case,

```c
zoom = focal/aperture
```

.

镜头的变焦。有时变焦是用焦距和光圈来表示的。 在这种情况下，变焦=焦距/光圈。

`orthowidth`

An additional “zoom” factor.

一个额外的 "变焦 "因素。

arg:image_aspect

The aspect ratio of the image. Sometimes the image_aspect is expressed in
terms of `xres` and `yres`.In this case,

```c
image_aspect = xres / yres
```

.

图像的长宽比。有时图像的纵横比用 xresandyres 来表示。 在这种情况下，image_aspect = xres / yres。

arg::clip_near

The near clipping plane.

近剪裁平面。

arg::clip_far

The far clipping plane.

远剪裁面。

arg::window

The offset for the projection window encoded in a vector4.window.x and
window.y are the window min xy coordinates andwindow.z, window.w are the
window max xy coordinates.This argument is optional and defaults to {0,0,1,1}
when not given.

用矢量 4 编码的投影窗口的偏移量。

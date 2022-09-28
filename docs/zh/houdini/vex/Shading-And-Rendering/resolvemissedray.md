---
title: resolvemissedray
order: 65
category:
  - houdini
---
    
## 描述

Returns the background color for rays that exit the scene.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
vector  resolvemissedray(vector dir, float time, int mask, ...)
```

Returns the color of the background environment for rays that exit
thescene.When no environment or background color is specified, anyenvironment
lights in the scene using the mode “Ray Tracing Background”will be used to
look up the environment color.mask indicates the typeof ray that is being
resolved as an integer mask.

返回离开场景的光线的背景环境的颜色。

To use the default background (environment light) for a reflection ray:

场景的背景环境颜色。 当没有指定环境或背景颜色时，场景中的任何

    resolvemissedray(I, 0.0, PBR_REFLECT_MASK);

To define your own background:

场景中任何使用 "光线追踪背景 "模式的环境灯都将被用来查找环境颜色。

    resolvemissedray(I, 0.0, PBR_ALL_MASK, "environment", "Mandril.rat", "envtint", {1,2,1});resolvemissedray(I, 0.0, PBR_ALL_MASK, "background", {1,1,1});

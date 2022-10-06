---
title: sensor_panorama_getdepth
order: 4
category:
  - houdini
---
    
## 描述

Sensor function query a rendered GL scene.

```c
float  sensor_panorama_getdepth(int handle, vector dir)
```

This function will return the depth in the given direction from thescene
rendered previously with

```c
sensor_panorama_create
```

.

这个函数将返回给定方向的深度，该深度来自之前用 sensor_panorama_create 渲染的场景。

---
title: sensor_save
order: 5
category:
  - houdini
---
    
## 描述

Sensor function to save a rendered GL scene.

```c
int  sensor_save(int handle, string colorfile, string depthfile)
```

This will save to disk the image maps corresponding to the color and
depthinformation recorded in the given sensor handle.

这将把对应于给定的传感器句柄所记录的颜色和深度的图像图保存到磁盘上。

Returns 1 if successfully saved, otherwise 0.

的信息保存到磁盘。

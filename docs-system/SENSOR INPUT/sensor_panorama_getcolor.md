## 描述

Sensor function query a rendered GL scene.


```c
vector  sensor_panorama_getcolor(int handle, vector dir)
```


This function will return the color in the given direction from thescene
rendered previously with 
```c
sensor_panorama_create
```
.

这个函数将返回给定方向的颜色，这些颜色来自之前用sensor_panorama_create渲染的场景。


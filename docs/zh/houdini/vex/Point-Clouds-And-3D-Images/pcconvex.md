---
title: pcconvex
order: 7
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# pcconvex

VEX function

#

```c
float  pcconvex(int handle, string channel, vector N)
```

Calculates the 2D projected convex hull area for the given point cloud
`handle`along the given normal, where `handle` was returned by a prior call to
[pcopen](pcopen.html "Returns a handle to a point cloud file.").

计算给定的点云 handle 沿给定法线的二维投影凸壳面积，其中 handle 是由先前调用 topcopen 返回的。

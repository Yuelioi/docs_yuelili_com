[  
Houdini 19.0  
](../../index.html)  
__  
[  
VEX  
](../index.html)  
__  
[  
VEX Functions  
](index.html)  
__

#  pcconvex

VEX function  
#


```c
float  pcconvex(int handle, string channel, vector N)
```


Calculates the 2D projected convex hull area for the given point cloud
`handle`along the given normal, where `handle` was returned by a prior call to
[pcopen](pcopen.html "Returns a handle to a point cloud file.").

计算给定的点云handle沿给定法线的二维投影凸壳面积，其中handle是由先前调用topcopen返回的。


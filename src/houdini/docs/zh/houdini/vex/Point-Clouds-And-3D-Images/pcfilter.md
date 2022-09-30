---
title: pcfilter
order: 10
category:
  - houdini
---
    
## 描述

Filters points found by `pcopen` using a simple reconstruction filter.

```c
<type> pcfilter(int handle, string channel_name, ...)
```

Filters the points queued up by [pcopen](pcopen.html) "Returns a handle to a
point cloud file.")using a simple reconstruction filter.

使用一个简单的重构滤波器过滤由 copen 排队的点。

This function is roughly equivalent to:

这个函数大致等同于。

    float pcfilter(int handle; string channel){floatsum, w, d;floatvalue, result = 0;while (pciterate(handle)){pcimport(handle, "point.distance", d);pcimport(handle, channel, value);w = 1 - smooth(0, radius, d);sum += w;result += w * value;}result /= sum;return result;}

`pcfilter` takes the points that were opened by the point cloud and produces a
filtered value. The following equation shows how the individual points are
weighted.

pcfilter 取由点云打开的点并产生一个过滤的值。下面的公式显示了各个点是如何被加权的。

    w_i = 1-smooth(0, maxd*1.1, d_i);

`maxd` is the farthest point, and `w_i` is the weight for a given point at
distance (`d_i`). Points that are closer to the center will be weighted higher
with that formula, rather than it being an average.

maxd 是最远的点，w_i 是距离（d_i）给定的点的权重。离中心较近的点在该公式中的权重会更高，而不是它是一个平均值。

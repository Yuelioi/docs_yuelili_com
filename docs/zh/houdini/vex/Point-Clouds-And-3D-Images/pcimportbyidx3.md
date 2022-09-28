---
title: pcimportbyidx3
order: 34
category:
  - houdini
---
    
## 描述

Imports channel data from a point cloud outside a `pciterate` or a
`pcunshaded` loop.

```c
matrix3  pcimportbyidx3(int handle, string channel_name, int idx)
```

After a [pcopen](pcopen.html "Returns a handle to a point cloud file.") and a
[pcnumfound](pcnumfound.html "This node returns the number of points found by
pcopen."), this can be used to extractspecific search results from the found
points.

在 apcopen 和 apcnumfound 之后，这可以用来从发现的点中提取

This will return 0 if the channel doesn‘t exist.

从找到的点中提取特定的搜索结果。

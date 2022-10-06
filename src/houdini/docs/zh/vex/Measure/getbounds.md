---
title: getbounds
order: 7
category:
  - houdini
---
    
## 描述

Returns the bounding box of the geometry specified by the filename.

```c
int  getbounds(string filename, vector &min, vector &max)
```

```c
int  getbounds(string filename, string group, vector &min, vector &max)
```

Returns the bounding box of the geometry specified by the filename. Thepoint
corresponding to the minimum corner of the bounding box will bereturned in
min, while the maximum will be in max.Always returns 1.

返回由文件名指定的几何体的包围盒。边界框的最小角所对应的

If a group is specified, only primitives in that group will be used.The group
field‘sbehavior matches that in SOPs.An empty stringwill include all
primitives.Ad-hoc patterns like `0-10` and`@Cd.x>0` are also valid.

的最小角所对应的点将被

The `getbbox()` function should likely be used instead.

返回 inmin，而最大值将是 inmax。

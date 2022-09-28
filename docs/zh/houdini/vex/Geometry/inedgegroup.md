---
title: inedgegroup
order: 8
category:
  - houdini
---
    
## 描述

Returns 1 if the edge specified by the point pair is in the group specified by
the string.

`int inedgegroup(string filename, string groupname, int pointnum0, int pointnum1)`

```c
int  inedgegroup(int input, string groupname, int pointnum0, int pointnum1)
```

Returns 1 if the edge specified by the point pair is in the group specified by
the string. This function returns 0 if the group does not exist or if the edge
is not contained in the group.

如果点对所指定的边在字符串所指定的组中，则返回 1。如果组不存在或者边不包含在组中，这个函数返回 0。

This can use ad-hoc groups, like `p29-30`.It matches the SOP group
namingconvention, in particular that an empty string means all edges.

这可以使用特设的组，如 ep29-30。 它符合 SOP 组的命名惯例，特别是空字符串

---
title: pcimport
order: 14
category:
  - houdini
---
    
## 描述

Imports channel data from a point cloud inside a `pciterate` or a `pcunshaded`
loop.

This function is only valid while looping with `pciterate` or `pcunshaded`.

这个函数只在循环使用 pciterate 或 cunshaded 时有效。

```c
int  pcimport(int handle, string channel_name, <type>&value)
```

Imports data from the point cloud file into the given variable.

将点云文件中的数据导入给定的变量中。

`channel_name`

There are two special channel names you can import:

有两个特殊的通道名称可以导入。

`point.number`

The number of the point being processed.

被处理的点的编号。

```c
point.distance
```

The distance of the point being processed from the query point.This is only
available when iterating over unshaded points.

被处理的点与查询点的距离。

`value`

If the import succeeds the function overwrites this variable with the channel
value.

这只有在对无阴影的点进行迭代时才可用。

Returns

`1` if the import succeeded or `0` if the import failed (usually due to the
given channel name not existing).

如果导入成功，函数会用通道的值覆盖这个变量。

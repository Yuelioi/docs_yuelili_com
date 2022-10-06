---
title: setedgegroup
order: 35
category:
  - houdini
---
    
## 描述

Sets edge group membership in a geometry.

```c
int  setedgegroup(int geohandle, string name, int pt0, int pt1, int value)
```

Changes an edge group membership on the given geometry. If the group does not
exist, it will be created.

在给定的几何体上改变一个边缘组的成员。如果该组不存在，它将被创建。

`geohandle` is a handle to the geometry to write to.`geoself()` can be used to
get a handle to the current geometry.

geohandle 是要写入的几何体的句柄。geoself()可以用来获取当前几何体的句柄。

`name` is the name of the group to modify.

name 是要修改的组的名称。

`pt0`, `pt1` are the point pair the edge to change group membership for.

pt0,pt1 是要改变组成员资格的边上的点对。

If the `value` is anything other than 0, the point will be in the group.

如果值不是 0，那么该点将在组内。

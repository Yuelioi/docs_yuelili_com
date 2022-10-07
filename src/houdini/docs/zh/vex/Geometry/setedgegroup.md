---
title: setedgegroup
order: 37
category:
  - vex
---

`int setedgegroup(int geohandle, string name, int pt0, int pt1, int value)`

在给定的几何体上改变一个边缘组的成员。如果该组不存在，它将被创建。

`geohandle`是一个要写入的几何体的句柄。`geoself()`可以用来获取当前几何体的句柄。

`name`是要修改的组的名称。

`pt0', `pt1'是要改变组成员资格的边上的点对。

如果 "值 "是 0 以外的任何东西，该点将在组内。

::: info Note that only valid edges can be created this way, if a pair of points
不指定边的情况下，没有边会被添加到组中。

地质

[expandedgegroup](expandedgegroup.html)

[inedgegroup](inedgegroup.html)

[nedgesgroup](nedgesgroup.html)

[setedgegroup](setedgegroup.html)

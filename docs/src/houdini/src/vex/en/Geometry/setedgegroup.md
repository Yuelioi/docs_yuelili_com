---
title: setedgegroup
order: 37
category:
  - vex
---

`int setedgegroup(int geohandle, string name, int pt0, int pt1, int value)`

Changes an edge group membership on the given geometry. If the group does not exist, it will be created.

`geohandle` is a handle to the geometry to write to. `geoself()` can be used to get a handle to the current geometry.

`name` is the name of the group to modify.

`pt0`, `pt1` are the point pair the edge to change group membership for.

If the `value` is anything other than 0, the point will be in the group.

::: info Note that only valid edges can be created this way, if a pair of points
that do not specify an edge are given, no edge will be added to the
group.

geo

[expandedgegroup](expandedgegroup.html)

[inedgegroup](inedgegroup.html)

[nedgesgroup](nedgesgroup.html)

[setedgegroup](setedgegroup.html)

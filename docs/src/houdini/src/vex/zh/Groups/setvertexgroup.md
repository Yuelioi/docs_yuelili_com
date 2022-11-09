---
title: setvertexgroup
order: 12
category:
  - vex
---

`int setvertexgroup(int geohandle, string name, int prim_num, int vertex_num, int value, string mode="set")`

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

**要使用线性顶点索引**，将`prim_num`设置为**线性顶点编号，并将`vertex_num`设置为`-1`。注意，**这与其他大多数顶点函数的工作方式不同。

## Arguments

`name`

要修改的组的名称。

`prim_num`

包含希望添加/删除的顶点的基元的编号。

`vertex_num`

您希望添加/删除的顶点在基元上的顶点偏移。

`value`

`1`将顶点放入组中，`0`将顶点从组中移除。如果`mode`是`"toggle"`，这将被忽略。

`mode`

使用`"set"`根据`value`来设置顶点的成员资格。使用`"toggle"`来切换顶点的成员资格，与`value'无关。

## See also

- [Working with geometry groups in VEX](../groups.html)
- [setprimgroup](setprimgroup.html)
- [setpointgroup](setpointgroup.html)
- [vertexindex](vertexindex.html)

|
groups

[expandpointgroup](expandpointgroup.html)

[expandprimgroup](expandprimgroup.html)

[expandvertexgroup](expandvertexgroup.html)

[inpointgroup](inpointgroup.html)

[inprimgroup](inprimgroup.html)

[invertexgroup](invertexgroup.html)

[npointsgroup](npointsgroup.html)

[nprimitivesgroup](nprimitivesgroup.html)

[nverticesgroup](nverticesgroup.html)

[setpointgroup](setpointgroup.html)

[setprimgroup](setprimgroup.html)

[setvertexgroup](setvertexgroup.html)

|
vertex

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[hasvertexattrib](hasvertexattrib.html)

[hedge_postdstvertex](hedge_postdstvertex.html)

[hex_faceindex](hex_faceindex.html)

[invertexgroup](invertexgroup.html)

[nvertices](nvertices.html)

[nverticesgroup](nverticesgroup.html)

[osd_limitsurfacevertex](osd_limitsurfacevertex.html)

[pointvertex](pointvertex.html)

[pointvertices](pointvertices.html)

[primvertex](primvertex.html)

[primvertexcount](primvertexcount.html)

[primvertices](primvertices.html)

[removevertex](removevertex.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)

[setprimvertex](setprimvertex.html)

[setvertexattrib](setvertexattrib.html)

[setvertexgroup](setvertexgroup.html)

[setvertexpoint](setvertexpoint.html)

[tet_faceindex](tet_faceindex.html)

[vertex](vertex.html)

[vertexattrib](vertexattrib.html)

[vertexattribsize](vertexattribsize.html)

[vertexattribtype](vertexattribtype.html)

[vertexattribtypeinfo](vertexattribtypeinfo.html)

[vertexcurveparam](vertexcurveparam.html)

[vertexhedge](vertexhedge.html)

[vertexindex](vertexindex.html)

[vertexnext](vertexnext.html)

[vertexpoint](vertexpoint.html)

[vertexprev](vertexprev.html)

[vertexprim](vertexprim.html)

[vertexprimindex](vertexprimindex.html)

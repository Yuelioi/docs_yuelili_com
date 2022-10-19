---
title: addvertex
order: 4
category:
  - vex
---

`int addvertex(int geohandle, int prim\_num, int point\_num)`

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

`prim_num`

要添加顶点的原始编号。

`point_num`

连接新顶点的点号。

## Returns

返回一个*linear*顶点索引，如果顶点不能被添加，则返回`-1`。你可以在[setvertexattrib](setvertexattrib.html)（"在几何体中设置顶点属性。"）中使用这个数字来设置新顶点的属性，但是这个数字可能不是最终的顶点索引。

## See also

- [addprim](addprim.html)
- [addpoint](addpoint.html)

|
create

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[blackbody](blackbody.html)

[pcgenerate](pcgenerate.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[removeprimattrib](removeprimattrib.html)

[removeprimgroup](removeprimgroup.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)

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

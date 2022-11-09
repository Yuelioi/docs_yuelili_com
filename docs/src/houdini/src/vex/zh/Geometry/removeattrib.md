---
title: removeattrib
order: 33
category:
  - vex
---

`int removeattrib(int geohandle, string attribclass, string name)`

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

`attribclass`

是 "细节"（或 "全局"）、"点"、"基元 "或 "顶点 "之一。

你也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](.../groups.html)（"你可以在 VEX 中读取 primitive/point/vertex 组的内容，就像它们是属性一样。"）。

`name`

要删除的属性或组的名称。

## See also

- [removeattrib](removeattrib.html)
- [removedetailattrib](removedetailattrib.html)
- [removepointattrib](removepointattrib.html)
- [removepointgroup](removepointgroup.html)
- [removevertexattrib](removevertexattrib.html)
- [removevertexgroup](removevertexgroup.html)
- [removeprimattrib](removeprimattrib.html)
- [removeprimgroup](removeprimgroup.html)

|
delete

[removeattrib](removeattrib.html)

[removepoint](removepoint.html)

[removeprim](removeprim.html)

[removevertex](removevertex.html)

|
point

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[haspointattrib](haspointattrib.html)

[idtopoint](idtopoint.html)

[inpointgroup](inpointgroup.html)

[nametopoint](nametopoint.html)

[ndcdepth](ndcdepth.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[npoints](npoints.html)

[npointsgroup](npointsgroup.html)

[planepointdistance](planepointdistance.html)

[point](point.html)

[pointattrib](pointattrib.html)

[pointattribsize](pointattribsize.html)

[pointattribtype](pointattribtype.html)

[pointattribtypeinfo](pointattribtypeinfo.html)

[pointhedge](pointhedge.html)

[pointhedgenext](pointhedgenext.html)

[pointprims](pointprims.html)

[pointvertex](pointvertex.html)

[pointvertices](pointvertices.html)

[primpoint](primpoint.html)

[primpoints](primpoints.html)

[ptransform](ptransform.html)

[removeattrib](removeattrib.html)

[removepoint](removepoint.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[setpointattrib](setpointattrib.html)

[setpointgroup](setpointgroup.html)

[setvertexpoint](setvertexpoint.html)

[vertexpoint](vertexpoint.html)

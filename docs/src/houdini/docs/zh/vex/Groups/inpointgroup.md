---
title: inpointgroup
order: 5
category:
  - vex
---

`int inpointgroup(<geometry>geometry, string groupname, int pointnum)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

## Returns

如果该组存在并且该点在该组中，则为`1'，否则为`0'。

这可以使用特设的组，如`0-3`或`@Cd.x>0.5`。它符合 SOP 组的命名惯例，特别是空字符串意味着所有的点。

团体

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

|点

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

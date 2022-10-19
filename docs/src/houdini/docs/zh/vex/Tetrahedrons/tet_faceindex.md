---
title: tet_faceindex
order: 3
category:
  - vex
---

`int tet\_faceindex(int faceno, int vtxno)`

如果指定了一个无效的数字，则返回`-1'。

返回 "0 "到 "3"，指的是一个通用四面体的四个顶点。

## Arguments

`faceno`

四面体上的面。面 0 是指没有顶点 0 的三角形。

`vtxno`

要返回三角形上的哪个顶点，`0`到`2`。从最低的数字开始，并遵循胡迪尼的绕行惯例，即面 0 是顶点 1、2 和 3。

四

[tet_adjacent](tet_adjacent.html)

[tet_faceindex](tet_faceindex.html)

| 顶点

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

---
title: vertexnext
order: 43
category:
  - vex
---

`int vertexnext(<geometry>geometry, int linearvertex)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，`.bgeo'），以便从中读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`linearvertex`

一个顶点的线性索引。如果你有一个点编号和点顶点编号，你可以使用 [vertexindex](vertexindex.html) () ("将基元/顶点对转换为线性顶点。") 将它们转换为线性索引。

## Returns

与给定顶点共享相同点的下一个顶点的线性索引，如果该顶点没有后来的共享顶点，则为`-1`。(如果要换个方向，可以使用[vertexprev](vertexprev.html) () ("返回与给定顶点共享的前一个顶点的线性顶点编号。")。

## Examples



```c
int vtx;

// Get the next vertex of vertex 3
vtx = vertexnext("defgeo.bgeo", 3);

```

## See also

- [pointvertex](pointvertex.html)
- [vertexprev](vertexprev.html)
- [vertexindex](vertexindex.html)

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

---
title: setvertexpoint
order: 37
category:
  - houdini
---
    
## 描述

Rewires a vertex in the geometry to a different point.

```c
int  setvertexpoint(int geohandle, int prim, int vtxofprim, int pt)
```

Rewires a specified vertex to a point number.

将一个指定的顶点重新连接到一个点号。

If the point number is -1, no rewiring is done.

如果点号是-1，则不做任何重新布线。

If prim is -1, `vtxofprim` is treated as a linear index, and vice
versa.Otherwise, the pair (`prim`, `vtxofprim`) is used to identify a vertex
in a primitive‘svertex list.

如果 prim 是 -1，vtxofprim 就被当作线性索引，反之亦然。 否则，一对 (prim,vtxofprim)
被用来识别基元顶点列表中的一个顶点。

This function is a new name for the equivalent function
[setprimvertex](setprimvertex.html "Rewires a vertex in the geometry to a
different point."), added for clarity.

此函数是等效函数 etprimvertex 的新名称，是为了清晰起见而添加的。

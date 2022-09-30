---
title: setprimvertex
order: 36
category:
  - houdini
---
    
## 描述

Rewires a vertex in the geometry to a different point.

```c
int  setprimvertex(int geohandle, int prim, int vtxofprim, int pt)
```

Rewires a specified vertex to a point number.

将一个指定的顶点重新连接到一个点号。

If the point number is -1, no rewiring is done.

如果点号是-1，则不做任何重新布线。

If prim is -1, `vtxofprim` is treated as a linear index, and vice
versa.Otherwise, the pair (`prim`, `vtxofprim`) is used to identify a vertex
in a primitive‘svertex list.

如果 prim 是 -1，vtxofprim 就被当作线性索引，反之亦然。 否则，一对(prim,vtxofprim)被用来识别一个基元的顶点列表中的顶点。

Since this sets a vertex‘spoint, not a primitive‘svertex, it‘s
recommended to use the equivalent function
[setvertexpoint](setvertexpoint.html "Rewires a vertex in the geometry to a
different point.") for clarity, instead.

因为这是在设置一个顶点，而不是一个基元的顶点，所以建议使用等效的函数 etvertexpoint 来代替，这样更清楚。

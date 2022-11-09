---
title: hedge_equivcount
order: 4
category:
  - vex
---

`int hedge_equivcount(<geometry>geometry, int hedge)`

::: info Note

相等的半边形可以是相反的方向，即一个的源头可以是另一个的目的地，反之亦然。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`hedge`

输入半边缘。

## Returns

与`hedge`具有相同端点的半边形的数量（包括`hedge`），如果半边形无效，则为`-1`。

## Examples



```c
int is_boundary = 0;
int is_interior = 0;
int is_nonmanifold = 0;

// Determine the type of edge represented by half-edge number 3:
int numeq;
numeq = hedge_equivcount("defgeo.bgeo", 3);
if (numeq == 1)
is_boundary = 1;
else if (numeq >= 3)
is_nonmanifold = 1;
else
is_interior = 1;

```

hedge

[hedge_dstpoint](hedge_dstpoint.html)

[hedge_dstvertex](hedge_dstvertex.html)

[hedge_equivcount](hedge_equivcount.html)

[hedge_isequiv](hedge_isequiv.html)

[hedge_isprimary](hedge_isprimary.html)

[hedge_isvalid](hedge_isvalid.html)

[hedge_next](hedge_next.html)

[hedge_nextequiv](hedge_nextequiv.html)

[hedge_postdstpoint](hedge_postdstpoint.html)

[hedge_postdstvertex](hedge_postdstvertex.html)

[hedge_presrcpoint](hedge_presrcpoint.html)

[hedge_presrcvertex](hedge_presrcvertex.html)

[hedge_prev](hedge_prev.html)

[hedge_prim](hedge_prim.html)

[hedge_primary](hedge_primary.html)

[hedge_srcpoint](hedge_srcpoint.html)

[hedge_srcvertex](hedge_srcvertex.html)

[pointedge](pointedge.html)

[pointhedge](pointhedge.html)

[pointhedgenext](pointhedgenext.html)

[primhedge](primhedge.html)

[vertexhedge](vertexhedge.html)

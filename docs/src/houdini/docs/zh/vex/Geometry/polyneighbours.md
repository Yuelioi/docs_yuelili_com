---
title: polyneighbours
order: 26
category:
  - vex
---

自 17.0 以来

`int [] polyneighbours(<geometry>geometry, int primnum)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

这将返回一个与此多边形共享一条边的多边形的原始数字数组。它使用半边形数据结构，因此可以与支持半边形的几何体一起工作（即多边形）。

## Examples



这大致相当于以下代码。

```c
int[] polyneighbours(const string opname; const int primnum)
{
 int result[] = {};

 int start = primhedge(opname, primnum);

 for (int hedge = start; hedge != -1; )
 {
 for (int nh = hedge\_nextequiv(opname, hedge);
 nh != hedge;
 nh = hedge\_nextequiv(opname, nh))
 {
 int prim = hedge\_prim(opname, nh);
 if (prim != -1 && prim != primnum)
 {
 append(result, prim);
 }
 }
 hedge = hedge\_next(opname, hedge);
 if (hedge == start)
 break;
 }

 return result;
}

```

## See also

- [neighbours](neighbours.html)

|
proximity

[hex_adjacent](hex_adjacent.html)

[minpos](minpos.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[pccone](pccone.html)

[pccone_radius](pccone_radius.html)

[pcfarthest](pcfarthest.html)

[pcfind](pcfind.html)

[pcfind_radius](pcfind_radius.html)

[pcline](pcline.html)

[pcline_radius](pcline_radius.html)

[pcsegment](pcsegment.html)

[pcsegment_radius](pcsegment_radius.html)

[pgfind](pgfind.html)

[polyneighbours](polyneighbours.html)

[ptlined](ptlined.html)

[surfacedist](surfacedist.html)

[tet_adjacent](tet_adjacent.html)

[xyzdist](xyzdist.html)

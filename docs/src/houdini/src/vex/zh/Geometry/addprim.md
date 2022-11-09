---
title: addprim
order: 3
category:
  - vex
---

`int addprim(int geohandle, string type)`

创建一个没有任何点的多边形或多段线。然后可以用 [addvertex](addvertex.html) () ("向几何体中的基元添加一个顶点") 向基元添加顶点。

请确保向创建的基元至少添加一个顶点。虽然我们试图确保胡迪尼的代码能够处理空的多边形，但它们有可能导致奇怪的结果或失败。

`int addprim(int geohandle, string type, int pt0)`

`int addprim(int geohandle, string type, int pt0, int pt1)`

`int addprim(int geohandle, string type, int pt0, int pt1, int pt2)`

`int addprim(int geohandle, string type, int pt0, int pt1, int pt2, int pt3)`

`int addprim(int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int pt4, int pt5, int pt6, int pt7)`

使用由点编号指定的点创建一个基元。

`int addprim(int geohandle, string type, int points[])`

使用在一个点编号数组中指定的点创建一个基元。

`void addprim(int &prim_num, int geohandle, string type, int pt0, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int pt4, int pt5, int pt6, int pt7, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int points[], int &vertices[])`

这些签名向给定的`vertices`数组填充了与给定的点相对应的新基元的顶点编号。您可以使用这些数字与 [setvertexattrib](setvertexattrib.html) () ("在一个几何体中设置一个顶点属性。") 一起设置顶点的属性，但是，它们可能不是顶点的最终数字。

如果创建了基元，但有任何点是无效的，则数组中相应的顶点编号将是`-1'。

这些签名用新的基数覆盖了`primnum`变量，而不是返回它。

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

`type`

以下字符串中的一个。

`"poly"`封闭的多边形。可以使用 0 个或多个点。| `"polyline"`开放的多边形。可以使用 0 个或更多的点。| `"tet"` 四面体原始体。一个三角形的金字塔。需要正好 4 个点。不能向此原始体添加顶点。| "hex" 六面体基元。一个扭曲的立方体。需要正好 8 个点。不能向此基元添加顶点。| 球体、圆、管、元球、元四边形 球体、圆、管、元球或元四边形基元。半径和形状由变换基元的内在因素控制。要求正好是 1 个点。不能向这些基元添加顶点。| `"AlembicRef", `"PackedDisk"` 打包的 Alembic 或打包的磁盘基元。要求正好是 1 个点。不能向这些基元添加顶点。

## Returns

创建的基元的基元数，如果不能创建点，则为`-1'。

你可以用[setprimattrib](setprimattrib.html) ()("在一个几何体中设置一个原始属性。")的返回值来设置新点的属性，然而它可能不是点的最终数字。

例如，您可以使用 [setprimintrinsic](setprimintrinsic.html) () ("设置可写基元内在属性的值。") 来设置基元的变换。

```c
matrix3 transform_value = {{0, 0, 0}, {0, 0, 0}, {1, 1, 1}};
setprimintrinsic(geoself(), "transform", prim, transform_value);

```

You can also set Alembic and packed primitive intrinsics, for example:

```c
setprimintrinsic(geoself(), "unexpandedfilename", prim, "test.bgeo");`

```

## See also

- [addvertex](addvertex.html)
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
prim

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[curvearclen](curvearclen.html)

[hasprimattrib](hasprimattrib.html)

[hedge_prim](hedge_prim.html)

[idtoprim](idtoprim.html)

[inprimgroup](inprimgroup.html)

[nametoprim](nametoprim.html)

[nprimitives](nprimitives.html)

[nprimitivesgroup](nprimitivesgroup.html)

[pointprims](pointprims.html)

[prim](prim.html)

[prim_attribute](prim_attribute.html)

[prim_normal](prim_normal.html)

[primarclen](primarclen.html)

[primattrib](primattrib.html)

[primattribsize](primattribsize.html)

[primattribtype](primattribtype.html)

[primattribtypeinfo](primattribtypeinfo.html)

[primduv](primduv.html)

[primfind](primfind.html)

[primhedge](primhedge.html)

[priminteriorweights](priminteriorweights.html)

[primintrinsic](primintrinsic.html)

[primpoint](primpoint.html)

[primpoints](primpoints.html)

[primuv](primuv.html)

[primuvconvert](primuvconvert.html)

[primvertex](primvertex.html)

[primvertexcount](primvertexcount.html)

[primvertices](primvertices.html)

[removeprim](removeprim.html)

[setprimattrib](setprimattrib.html)

[setprimgroup](setprimgroup.html)

[setprimintrinsic](setprimintrinsic.html)

[setprimvertex](setprimvertex.html)

[vertexcurveparam](vertexcurveparam.html)

[vertexindex](vertexindex.html)

[vertexprim](vertexprim.html)

[vertexprimindex](vertexprimindex.html)

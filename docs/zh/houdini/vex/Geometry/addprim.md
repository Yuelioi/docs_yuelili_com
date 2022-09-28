---
title: addprim
order: 2
category:
  - houdini
---
    
## 描述

Adds a primitive to the geometry.

```c
int  addprim(int geohandle, string type)
```

Create a polygon or polyline without any points. You can then add vertices to
the primitive with [addvertex](addvertex.html "Adds a vertex to a primitive in
a geometry.").

创建一个没有任何点的多边形或多段线。然后可以使用 addvertex 向基元添加顶点。

Make sure to add at least one vertex to the created primitive. While we
attempt to make sure Houdini‘scode can deal with empty polygons, it‘s
possible they could cause strange results or failures.

请确保至少向创建的基元添加一个顶点。虽然我们试图确保胡迪尼的代码能够处理空的多边形，但它们有可能导致奇怪的结果或失败。

```c
int  addprim(int geohandle, string type, int pt0)
```

```c
int  addprim(int geohandle, string type, int pt0, int pt1)
```

```c
int  addprim(int geohandle, string type, int pt0, int pt1, int pt2)
```

```c
int  addprim(int geohandle, string type, int pt0, int pt1, int pt2, int pt3)
```

Create a primitive using points specified by point numbers.

使用由点编号指定的点创建一个基元。

```c
int  addprim(int geohandle, string type, int points[])
```

Create a primitive using points specified in an array of point numbers.

使用点编号数组中指定的点创建一个基元。

`void addprim(int &prim_num, int geohandle, string type, int pt0, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int &vertices[])`

`void addprim(int &prim_num, int geohandle, string type, int points[], int &vertices[])`

These signatures fill the given `vertices` array with the new primitive‘s
vertex numbers corresponding to the given points. You can use these numbers
with [setvertexattrib](setvertexattrib.html "Sets a vertex attribute in a
geometry.") to set attributes on the vertices, however they may not be the
final numbers of the vertices.

这些签名用与给定的点相对应的新基元的顶点编号填充给定的 verticesarray。您可以使用这些数字与 setvertexattrib 来设置顶点的属性，但它们可能不是顶点的最终数字。

If the primitive was created, but any points were invalid, the corresponding
vertex numbers in the array will be `-1`.

如果创建了基元，但有任何点是无效的，则数组中相应的顶点编号将为-1。

These signatures overwrite the `primnum` variable with the new primitive
number instead of returning it.

这些签名用新的基元数覆盖了 primnum 变量，而不是返回它。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其它几何体。)

`type`

One of the following strings:

以下字符串之一。

`"poly"`

|

Closed polygon. Can use 0 or more points.

封闭的多边形。可以使用 0 个或更多的点。

---|---

`"polyline"`

|

Open polygon. Can use 0 or more points.

开放的多边形。可以使用 0 个或更多的点。

`"tet"`

|

Tetrahedron primitive.Requires exactly 4 points.You cannot add vertices to
this primitive.

四面体原形。 需要正好 4 个点。 不能向此基元添加顶点。

`"sphere"`, `"circle"`, `"tube"`, `"metaball"`, `"metasquad"`

|

Sphere, circle, tube, metaball, or metasuperquadric primitive.Require exactly
1 point. You cannot add vertices to these primitives.

球体、圆、管、元球或元超四面体基元。 需要正好 1 点。不能向这些基元添加顶点。

`"AlembicRef"`, `"PackedDisk"`

|

Packed Alembic or packed disk primitive.Require exactly 1 point. You cannot
add vertices to these primitives.

打包的阿列克谢或打包的圆盘基元。 要求正好 1 点。不能向这些基元添加顶点。

Returns

A primitive number for the created primitive, or `-1` if the point could not
be created.

创建的基元的基元数，如果不能创建点，则为 1。

You can use the return value with [setprimattrib](setprimattrib.html "Sets a
primitive attribute in a geometry.") to set attributes on the new point,
however it may not be the final number of the point.

您可以使用 setprimattrib 的返回值来设置新点的属性，但它可能不是点的最终编号。

You can set a primitive‘stransforms using
[setprimintrinsic](setprimintrinsic.html "Sets the value of a writeable
primitive intrinsic attribute."), for example:

例如，您可以使用 setprimintrinsic 来设置一个基元的变换。

    matrix3 transform_value = {{0, 0, 0}, {0, 0, 0}, {1, 1, 1}};setprimintrinsic(geoself(), "transform", prim, transform_value);

You can also set Alembic and packed primitive intrinsics, for example:

您还可以设置阿列克谢和打包的基元本征，例如：。

    setprimintrinsic(geoself(), "unexpandedfilename", prim, "test.bgeo");`

---
title: addprim
order: 3
category:
  - vex
---

`int addprim(int geohandle, string type)`

Create a polygon or polyline without any points. You can then add vertices to the primitive with [addvertex](addvertex.html) ("Adds a vertex to a primitive in a geometry.").

Make sure to add at least one vertex to the created primitive. While we attempt to make sure Houdini’s code can deal with empty polygons, it’s possible they could cause strange results or failures.

`int addprim(int geohandle, string type, int pt0)`

`int addprim(int geohandle, string type, int pt0, int pt1)`

`int addprim(int geohandle, string type, int pt0, int pt1, int pt2)`

`int addprim(int geohandle, string type, int pt0, int pt1, int pt2, int pt3)`

`int addprim(int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int pt4, int pt5, int pt6, int pt7)`

Create a primitive using points specified by point numbers.

`int addprim(int geohandle, string type, int points[])`

Create a primitive using points specified in an array of point numbers.

`void addprim(int &prim\_num, int geohandle, string type, int pt0, int &vertices[])`

`void addprim(int &prim\_num, int geohandle, string type, int pt0, int pt1, int &vertices[])`

`void addprim(int &prim\_num, int geohandle, string type, int pt0, int pt1, int pt2, int &vertices[])`

`void addprim(int &prim\_num, int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int &vertices[])`

`void addprim(int &prim\_num, int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int pt4, int pt5, int pt6, int pt7, int &vertices[])`

`void addprim(int &prim\_num, int geohandle, string type, int points[], int &vertices[])`

These signatures fill the given `vertices` array with the new primitive’s vertex numbers corresponding to the given points. You can use these numbers with [setvertexattrib](setvertexattrib.html) ("Sets a vertex attribute in a geometry.") to set attributes on the vertices, however they may not be the final numbers of the vertices.

If the primitive was created, but any points were invalid, the corresponding vertex numbers in the array will be `-1`.

These signatures overwrite the `primnum` variable with the new primitive number instead of returning it.

## Arguments

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](geoself.html) ("Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`type`

One of the following strings:

`"poly"` Closed polygon. Can use 0 or more points.
|
`"polyline"` Open polygon. Can use 0 or more points.
|
`"tet"` Tetrahedron primitive. A triangular pyramid. Requires exactly 4 points. You cannot add vertices to this primitive.
|
“hex” Hexahedron primitive. A distorted cube. Requires eactly 8 points. You cannot add vertices to this primitive.
|
`"sphere"`, `"circle"`, `"tube"`, `"metaball"`, `"metasquad"` Sphere, circle, tube, metaball, or metasuperquadric primitive. The radius and shape are controled by transform primitive intrinsics. Require exactly 1 point. You cannot add vertices to these primitives.
|
`"AlembicRef"`, `"PackedDisk"` Packed Alembic or packed disk primitive. Require exactly 1 point. You cannot add vertices to these primitives.

## Returns

A primitive number for the created primitive, or `-1` if the point could not be created.

You can use the return value with [setprimattrib](setprimattrib.html) ("Sets a primitive attribute in a geometry.") to set attributes on the new point, however it may not be the final number of the point.

You can set a primitive’s transforms using [setprimintrinsic](setprimintrinsic.html) ("Sets the value of a writeable primitive intrinsic attribute."), for example:

```c
matrix3 transform\_value = {{0, 0, 0}, {0, 0, 0}, {1, 1, 1}};
setprimintrinsic(geoself(), "transform", prim, transform\_value);

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

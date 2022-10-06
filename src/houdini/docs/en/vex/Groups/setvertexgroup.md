---
title: setvertexgroup
order: 12
category:
  - houdini
---

## Description

`int setvertexgroup(int geohandle, string name, int prim_num, int vertex_num, int value, string mode="set")`

## Arguments

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

**To use a linear vertex index** , set the `prim_num` to the **linear vertex
number** and set `vertex_num` to `-1`. Note that **this is different** from
how most other vertex functions work.

## Arguments

`name`

The name of the group to modify.

`prim_num`

The number of the primitive containing the vertex you want to add/remove.

`vertex_num`

The vertex offset on the primitive of the vertex you want to add/remove.

`value`

`1` to put the vertex in the group, `0` to remove the vertex from the group.
This is ignored if `mode` is `"toggle"`.

`mode`

Use `"set"` to set the vertex’s membership according to the `value`. Use
`"toggle"` to toggle the vertex’s membership, regardless of the `value`.

## See also

- [Working with geometry groups in VEX](../groups.html)
- [setprimgroup](setprimgroup.html)
- [setpointgroup](setpointgroup.html)
- [vertexindex](vertexindex.html)

### groups

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

### vertex

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

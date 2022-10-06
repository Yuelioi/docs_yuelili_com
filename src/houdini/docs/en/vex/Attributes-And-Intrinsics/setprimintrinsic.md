---
title: setprimintrinsic
order: 73
category:
  - houdini
---

## Description

`int setprimintrinsic(int geohandle, string name, int prim_num, <type>value, string mode="set")`

`int setprimintrinsic(int geohandle, string name, int prim_num, <type>value[], string mode="set")`

Despite the name, some “intrinsic” attributes on primitives are writeable.

## Arguments

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

`name`

The name of the intrinsic to set.

`prim_num`

The number of the primitive to change the value on.

`mode`

(Optional) if given, this controls how the function modifies any existing
value in the attribute.

`"set"`

|

Overwrite the attribute with the given value.

`"add"`

|

Add to the attribute the value.

`"min"`, `"minimum"`

|

Set the attribute to the minimum of itself and the value.

`"max"`, `"maximum"`

|

Set the attribute to the maximum of itself and the value.

`"mult"`, `"multiply"`

|

Multiply the attribute by the value. For matrices, this will do matrix
multiplication. For vectors, component-wise.

`"toggle"`

|

Toggles the attribute, independent of the source value. Useful for toggling
group membership.

`"append"`

|

Valid for string and array attributes. Appends the source value to the end of
the original value.

## See also

- [setattrib](setattrib.html)
- [setprimattrib](setprimattrib.html)

### intrinsic

[detailintrinsic](detailintrinsic.html)

[primintrinsic](primintrinsic.html)

[setdetailintrinsic](setdetailintrinsic.html)

[setprimintrinsic](setprimintrinsic.html)

### prim

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

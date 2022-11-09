---
title: setattrib
order: 64
category:
  - vex
---

If you know the attribute class ahead of time, using [setdetailattrib](setdetailattrib.html) ("Sets a detail attribute in a geometry."), [setprimattrib](setprimattrib.html) ("Sets a primitive attribute in a geometry."), [setpointattrib](setpointattrib.html) ("Sets a point attribute in a geometry."), or [setvertexattrib](setvertexattrib.html) ("Sets a vertex attribute in a geometry.") may be faster.

`int setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value, string mode="set")`

`int setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value[], string mode="set")`

Returns the value of `geohandle` on success or `-1` on failure.

::: info Note

If the attribute does not exist, this function **creates the attribute** with a default value of zero, empty string, or an empty array.
If you want to control the default value of a numeric attribute, use [addattrib](addattrib.html) ("Adds an attribute to a geometry.") before setting the attribute.

## Arguments

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](geoself.html) ("Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read from groups](../groups.html) ("You can read the contents of primitive/point/vertex groups in VEX as if they were attributes.").

`attribute_name`

The name of the attribute to change.

`element_num`

The point or primitive number on which to change the attribute.

For detail attributes, set this to `0` (the argument is ignored for detail attributes).

For vertex attributes, set this to the primitive number of the primitive containing the vertex.

`vertex_num`

For vertex attributes, this is the number of the vertex on the primitive specified in `element_num`.

To use a linear vertex index, set `element_num` to `-1` and use the linear vertex index here.

For other detail, primitive, or point attributes, set this to `0` (the argument is ignored in these cases).

`value`

The value to set. If the type of this argument is not compatible with the attribute type, the set will fail and the function will return `-1`.

::: info Note that within a VEX program only one type may be written to a single attribute. Ie, you cannot mix writes of float an integer. This can be surprising as a literal like `1` will be an integer write so be ignored if floats were previously written.

`mode`

(Optional) if given, this controls how the function modifies any existing value in the attribute.

`"set"` Overwrite the attribute with the given value.
|
`"add"` Add to the attribute the value.
|
`"min"`, `"minimum"` Set the attribute to the minimum of itself and the value.
|
`"max"`, `"maximum"` Set the attribute to the maximum of itself and the value.
|
`"mult"`, `"multiply"` Multiply the attribute by the value. For matrices, this will do matrix multiplication. For vectors, component-wise.
|
`"toggle"` Toggles the attribute, independent of the source value. Useful for toggling group membership.
|
`"append"` Valid for string and array attributes. Appends the source value to the end of the original value.

## See also

- [setattrib](setattrib.html)
- [setpointattrib](setpointattrib.html)
- [setvertexattrib](setvertexattrib.html)
- [setprimattrib](setprimattrib.html)

|
attrib

[addattrib](addattrib.html)

[adddetailattrib](adddetailattrib.html)

[addpointattrib](addpointattrib.html)

[addprimattrib](addprimattrib.html)

[addvertexattrib](addvertexattrib.html)

[addvisualizer](addvisualizer.html)

[attrib](attrib.html)

[attribclass](attribclass.html)

[attribdataid](attribdataid.html)

[attribsize](attribsize.html)

[attribtype](attribtype.html)

[attribtypeinfo](attribtypeinfo.html)

[detail](detail.html)

[detailattrib](detailattrib.html)

[detailattribsize](detailattribsize.html)

[detailattribtype](detailattribtype.html)

[detailattribtypeinfo](detailattribtypeinfo.html)

[detailintrinsic](detailintrinsic.html)

[findattribval](findattribval.html)

[findattribvalcount](findattribvalcount.html)

[getattrib](getattrib.html)

[getattribute](getattribute.html)

[hasattrib](hasattrib.html)

[hasdetailattrib](hasdetailattrib.html)

[haspointattrib](haspointattrib.html)

[hasprimattrib](hasprimattrib.html)

[hasvertexattrib](hasvertexattrib.html)

[nuniqueval](nuniqueval.html)

[point](point.html)

[pointattrib](pointattrib.html)

[pointattribsize](pointattribsize.html)

[pointattribtype](pointattribtype.html)

[pointattribtypeinfo](pointattribtypeinfo.html)

[pointlocaltransforms](pointlocaltransforms.html)

[pointtransform](pointtransform.html)

[pointtransformrigid](pointtransformrigid.html)

[pointtransforms](pointtransforms.html)

[pointtransformsrigid](pointtransformsrigid.html)

[prim](prim.html)

[prim_attribute](prim_attribute.html)

[primattrib](primattrib.html)

[primattribsize](primattribsize.html)

[primattribtype](primattribtype.html)

[primattribtypeinfo](primattribtypeinfo.html)

[priminteriorweights](priminteriorweights.html)

[primintrinsic](primintrinsic.html)

[primuv](primuv.html)

[primuvconvert](primuvconvert.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removeprimattrib](removeprimattrib.html)

[removevertexattrib](removevertexattrib.html)

[setattrib](setattrib.html)

[setattribtypeinfo](setattribtypeinfo.html)

[setdetailattrib](setdetailattrib.html)

[setpointattrib](setpointattrib.html)

[setpointlocaltransforms](setpointlocaltransforms.html)

[setpointtransform](setpointtransform.html)

[setpointtransforms](setpointtransforms.html)

[setprimattrib](setprimattrib.html)

[setvertexattrib](setvertexattrib.html)

[uniqueval](uniqueval.html)

[uniquevals](uniquevals.html)

[uvsample](uvsample.html)

[vertex](vertex.html)

[vertexattrib](vertexattrib.html)

[vertexattribsize](vertexattribsize.html)

[vertexattribtype](vertexattribtype.html)

[vertexattribtypeinfo](vertexattribtypeinfo.html)

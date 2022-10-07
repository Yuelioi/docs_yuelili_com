---
title: attribtypeinfo
order: 13
category:
  - vex
---

`string attribtypeinfo(<geometry>geometry, string attribclass, string attribute\_name)`

This general form lets you specify the attribute “class” at run-time. This can be useful for writing general code that can work on different classes.
If you know the attribute class ahead of time, using [detailattribtypeinfo](detailattribtypeinfo.html) ("Returns the type info of a geometry attribute."), [primattribtypeinfo](primattribtypeinfo.html) ("Returns the type info of a geometry attribute."), [pointattribtypeinfo](pointattribtypeinfo.html) ("Returns the type info of a geometry attribute."), or [vertexattribtypeinfo](vertexattribtypeinfo.html) ("Returns the type info of a geometry attribute.") may be faster.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read from groups](../groups.html) ("You can read the contents of primitive/point/vertex groups in VEX as if they were attributes.").

`attribute_name`

The name of the attribute (or intrinsic) to read.

## Returns

A string indicating the metadata for a given geometry attribute, or the empty string (`""`) if the attribute does not exist.

`"none"` Don’t transform.
|
`"point"` Apply scales, rotations, and transformations.
|
`"hpoint"` Apply scales, rotations, and transformations to this vector4.
|
`"vector"` Apply scales and rotations, but not transformations.
|
`"normal"` Apply rotations, apply scales with inverse-transpose.
|
`"color"` Don’t transform.
|
`"matrix"` Apply scales, rotations, and transformations to this matrix.
|
`"quaternion"` Apply rotations.
|
`"indexpair"` Don’t transform.
|
`"integer"` Do not blend this value when points are averaged.
|
`"integer-blend"` Integer values that blend when points are averaged.
|
`"texturecoord"` Don’t transform, and try to preserve seams when interpolating.
Attributes with this type will show up in the UV viewport menu.

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

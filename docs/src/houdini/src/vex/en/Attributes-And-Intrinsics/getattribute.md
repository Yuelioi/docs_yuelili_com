---
title: getattribute
order: 24
category:
  - vex
---

`int getattribute(string geometry, <type>&value, string attribclass, string attribute_name, int element_number, int vertex_number)`

`int getattribute(string geometry, <type>&value[], string attribclass, string attribute_name, int element_number, int vertex_number)`

Warning

This function does not allow reading from inputs in a node context, and is harder to use than the other attribute functions. You probably want to use one of the other attribute functions instead, such as [getattrib](getattrib.html) ("Reads an attribute value from geometry, with validity check.").

Returns `0` if the attribute does not exist or cannot be read, `1` on success. If the function returns `0` (failed), the given variable may remain uninitialized.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`value`

The variable to overwrite with the attribute value.

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read from groups](../groups.html) ("You can read the contents of primitive/point/vertex groups in VEX as if they were attributes.").

`attribute_name`

The name of the attribute (or intrinsic) to read.

`element_number`

The point or primitive number. If you are reading a detail attribute, use `0` here.

`vertex_number`

- When reading a vertex attribute, you can specify the primitive number in the `element_number` argument and the primitive’s vertex number here.
- To use a linear vertex index, use `-1` as the `element_number` and the vertex index here.
- If you are not reading a vertex attribute, this argument is ignored.

##

Examples

[¶](#examples)

```c
vector pos, uv, clr;
// Get the position of point 3 in "defgeo.bgeo"
getattribute("defgeo.bgeo", pos, "point", "P", 3, 0);

// Get the value of the "uv" attribute for vertex 2 of primitive
// number 3 in the file defgeo.bgeo
getattribute("defgeo.bgeo", uv, "vertex", "uv", 3, 2);

// Get the value of the "Cd" attribute for primitive 7
// in the SOP specified by the path "/obj/geo1/color1" (Houdini
// only)
getattribute("op:/obj/geo1/color1", clr, "primitive", "Cd", 7);

```

## See also

- [getattrib](getattrib.html)
- [detailattrib](detailattrib.html)
- [primattrib](primattrib.html)
- [pointattrib](pointattrib.html)
- [vertexattrib](vertexattrib.html)

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

|
donotuse

[getattribute](getattribute.html)

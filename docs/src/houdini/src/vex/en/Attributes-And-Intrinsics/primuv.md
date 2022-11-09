---
title: primuv
order: 55
category:
  - vex
---

This function specifies the position using _intrinsic primitive UVs_. To use UVs stored in UV attribute, use [uvsample](uvsample.html) ("Interpolates the value of an attribute at certain UV coordinates using a UV attribute.") instead.

`<type> primuv(<geometry>geometry, string attribute_name, int prim_num, vector uvw)`

`<type>[] primuv(<geometry>geometry, string attribute_name, int prim_num, vector uvw)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`attribute_name`

The name of the attribute to read. **For point and vertex attributes, the value will at the given UV coordinates will be interpolated** from the surrounding points/vertices.

`prim_num`

The primitive number to read the attribute from.

`uvw`

The primitive UVW coordinates at which to read the attribute.

- Returns the (possibly interpolated) value of the attribute at the given coordinates. If the attribute or primitive number don’t exist, returns `0`.
- If you need to test for errors, you can use [prim_attribute](prim_attribute.html) ("Interpolates the value of an attribute at a certain parametric (u, v) position and copies it into a variable.") instead.

## See also

- [prim_attribute](prim_attribute.html)
- [uvsample](uvsample.html)
- [xyzdist](xyzdist.html)

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

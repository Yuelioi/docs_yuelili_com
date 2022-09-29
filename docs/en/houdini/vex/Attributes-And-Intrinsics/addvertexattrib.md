---
title: addvertexattrib
order: 6
category:
  - houdini
---

## Description

If you don’t know the class of attribute until runtime, use
[addattrib](addattrib.html "Adds an attribute to a geometry.").

`int addvertexattrib(int geohandle, string name, <type>defvalue)`

`int addvertexattrib(int geohandle, string name, <type>defvalue[])`

Adds a vertex attribute to the given geometry.

`int addvertexattrib(int geohandle, string name, <type>defvalue, string typeinfo)`

`int addvertexattrib(int geohandle, string name, <type>defvalue[], string typeinfo)`

Adds a vertex attribute with the given transformation info. See
[attribtypeinfo](attribtypeinfo.html) "Returns the transformation metadata of a
geometry attribute.") for more details.

## Arguments

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

`name`

The name of the attribute to create.

`defvalue`

The default value for the attribute and determines the type of attribute to
create. String and array attributes cannot have defaults, so only the type is
used in those cases.

``

`geohandle` on success, or `-1` on failure.

- If an attribute of the same name already exists, the function will try to convert it to the new type.

## See also

- [addattrib ](addattrib.html)
- [adddetailattrib ](adddetailattrib.html)
- [addprimattrib ](addprimattrib.html)
- [addpointattrib ](addpointattrib.html)

### attrib

[addattrib ](addattrib.html)

[adddetailattrib ](adddetailattrib.html)

[addpointattrib ](addpointattrib.html)

[addprimattrib ](addprimattrib.html)

[addvertexattrib ](addvertexattrib.html)

[addvisualizer ](addvisualizer.html)

[attrib ](attrib.html)

[attribclass ](attribclass.html)

[attribdataid ](attribdataid.html)

[attribsize ](attribsize.html)

[attribtype ](attribtype.html)

[attribtypeinfo ](attribtypeinfo.html)

[detail ](detail.html)

[detailattrib ](detailattrib.html)

[detailattribsize ](detailattribsize.html)

[detailattribtype ](detailattribtype.html)

[detailattribtypeinfo ](detailattribtypeinfo.html)

[detailintrinsic ](detailintrinsic.html)

[findattribval ](findattribval.html)

[findattribvalcount ](findattribvalcount.html)

[getattrib ](getattrib.html)

[getattribute ](getattribute.html)

[hasattrib ](hasattrib.html)

[hasdetailattrib ](hasdetailattrib.html)

[haspointattrib ](haspointattrib.html)

[hasprimattrib ](hasprimattrib.html)

[hasvertexattrib ](hasvertexattrib.html)

[nuniqueval ](nuniqueval.html)

[point ](point.html)

[pointattrib ](pointattrib.html)

[pointattribsize ](pointattribsize.html)

[pointattribtype ](pointattribtype.html)

[pointattribtypeinfo ](pointattribtypeinfo.html)

[pointlocaltransforms ](pointlocaltransforms.html)

[pointtransform ](pointtransform.html)

[pointtransformrigid ](pointtransformrigid.html)

[pointtransforms ](pointtransforms.html)

[pointtransformsrigid ](pointtransformsrigid.html)

[prim ](prim.html)

[prim_attribute ](prim_attribute.html)

[primattrib ](primattrib.html)

[primattribsize ](primattribsize.html)

[primattribtype ](primattribtype.html)

[primattribtypeinfo ](primattribtypeinfo.html)

[priminteriorweights ](priminteriorweights.html)

[primintrinsic ](primintrinsic.html)

[primuv ](primuv.html)

[primuvconvert ](primuvconvert.html)

[removedetailattrib ](removedetailattrib.html)

[removepointattrib ](removepointattrib.html)

[removeprimattrib ](removeprimattrib.html)

[removevertexattrib ](removevertexattrib.html)

[setattrib ](setattrib.html)

[setattribtypeinfo ](setattribtypeinfo.html)

[setdetailattrib ](setdetailattrib.html)

[setpointattrib ](setpointattrib.html)

[setpointlocaltransforms ](setpointlocaltransforms.html)

[setpointtransform ](setpointtransform.html)

[setpointtransforms ](setpointtransforms.html)

[setprimattrib ](setprimattrib.html)

[setvertexattrib ](setvertexattrib.html)

[uniqueval ](uniqueval.html)

[uniquevals ](uniquevals.html)

[uvsample ](uvsample.html)

[vertex ](vertex.html)

[vertexattrib ](vertexattrib.html)

[vertexattribsize ](vertexattribsize.html)

[vertexattribtype ](vertexattribtype.html)

[vertexattribtypeinfo ](vertexattribtypeinfo.html)

### create

[addpoint ](addpoint.html)

[addpointattrib ](addpointattrib.html)

[addprim ](addprim.html)

[addprimattrib ](addprimattrib.html)

[addvertex ](addvertex.html)

[addvertexattrib ](addvertexattrib.html)

[blackbody ](blackbody.html)

[pcgenerate ](pcgenerate.html)

[removedetailattrib ](removedetailattrib.html)

[removepointattrib ](removepointattrib.html)

[removepointgroup ](removepointgroup.html)

[removeprimattrib ](removeprimattrib.html)

[removeprimgroup ](removeprimgroup.html)

[removevertexattrib ](removevertexattrib.html)

[removevertexgroup ](removevertexgroup.html)

### vertex

[addvertex ](addvertex.html)

[addvertexattrib ](addvertexattrib.html)

[hasvertexattrib ](hasvertexattrib.html)

[hedge_postdstvertex ](hedge_postdstvertex.html)

[hex_faceindex ](hex_faceindex.html)

[invertexgroup ](invertexgroup.html)

[nvertices ](nvertices.html)

[nverticesgroup ](nverticesgroup.html)

[osd_limitsurfacevertex ](osd_limitsurfacevertex.html)

[pointvertex ](pointvertex.html)

[pointvertices ](pointvertices.html)

[primvertex ](primvertex.html)

[primvertexcount ](primvertexcount.html)

[primvertices ](primvertices.html)

[removevertex ](removevertex.html)

[removevertexattrib ](removevertexattrib.html)

[removevertexgroup ](removevertexgroup.html)

[setprimvertex ](setprimvertex.html)

[setvertexattrib ](setvertexattrib.html)

[setvertexgroup ](setvertexgroup.html)

[setvertexpoint ](setvertexpoint.html)

[tet_faceindex ](tet_faceindex.html)

[vertex ](vertex.html)

[vertexattrib ](vertexattrib.html)

[vertexattribsize ](vertexattribsize.html)

[vertexattribtype ](vertexattribtype.html)

[vertexattribtypeinfo ](vertexattribtypeinfo.html)

[vertexcurveparam ](vertexcurveparam.html)

[vertexhedge ](vertexhedge.html)

[vertexindex ](vertexindex.html)

[vertexnext ](vertexnext.html)

[vertexpoint ](vertexpoint.html)

[vertexprev ](vertexprev.html)

[vertexprim ](vertexprim.html)

[vertexprimindex ](vertexprimindex.html)

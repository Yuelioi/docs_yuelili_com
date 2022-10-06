---
title: detailintrinsic
order: 20
category:
  - houdini
---

## Description

Intrinsic values are similar to attributes, but are computed on-demand by
Houdini rather than stored.

`<type> detailintrinsic(<geometry>geometry, string intrinsic_name)`

`<type>[] detailintrinsic(<geometry>geometry, string intrinsic_name)`

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

`intrinsic_name`

The name of the intrinsic to read. For example, `"pointattributes"`,
`"pointcount"`, or `"bounds"`.

## Returns

The intrinsic value, or `0` if the given intrinsic does not exist.

## See also

- [primintrinsic ](primintrinsic.html)

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

### detail

[adddetailattrib ](adddetailattrib.html)

[detail ](detail.html)

[detailattrib ](detailattrib.html)

[detailattribsize ](detailattribsize.html)

[detailattribtype ](detailattribtype.html)

[detailattribtypeinfo ](detailattribtypeinfo.html)

[detailintrinsic ](detailintrinsic.html)

[hasdetailattrib ](hasdetailattrib.html)

[removedetailattrib ](removedetailattrib.html)

[setdetailattrib ](setdetailattrib.html)

[setdetailintrinsic ](setdetailintrinsic.html)

### intrinsic

[detailintrinsic ](detailintrinsic.html)

[primintrinsic ](primintrinsic.html)

[setdetailintrinsic ](setdetailintrinsic.html)

[setprimintrinsic ](setprimintrinsic.html)

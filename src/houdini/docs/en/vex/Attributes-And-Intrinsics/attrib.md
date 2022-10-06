---
title: attrib
order: 8
category:
  - houdini
---

## Description

`<type> attrib(<geometry>geometry, string attribclass, string name, int elemnum)`

`<type>[] attrib(<geometry>geometry, string attribclass, string name, int elemnum)`

This general form lets you specify the attribute “class” at run-time. This can
be useful for writing general code that can work on different classes. If you
know the class of attribute you want to read ahead of time, using
[detail](detail.html "Reads the value of a detail attribute value from a
geometry."), [prim](prim.html "Reads a primitive attribute value from a
geometry."), [point](point.html "Reads a point attribute value from a
geometry."), or [vertex](vertex.html "Reads a vertex attribute value from a
geometry.") may be faster.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read
from groups](../groups.html "You can read the contents of
primitive/point/vertex groups in VEX as if they were attributes.").

`name`

The name of the attribute, group, or intrinsic to read from.

`elemnum`

Which element (e.g. point number, primitive number, vertex number) to read
from. Ignored for detail attributes. You can use
[vertexindex](vertexindex.html "Converts a primitive/vertex pair into a linear
vertex.") to convert a primitive/point pair into a vertex number.

## Returns

Zero/empty value if the attribute does not exist. Use
[getattrib](getattrib.html "Reads an attribute value from geometry, with
validity check.") if you want to check whether the attribute existed.

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

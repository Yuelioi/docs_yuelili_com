---
title: ptransform
order: 21
category:
  - houdini
---

## Description

`vector ptransform(vector vec, matrix transform)`

`vector4 ptransform(vector4 vec, matrix transform)`

Transforms the vector using the given transform matrix.

`vector ptransform(string tospace, vector vec)`

`vector4 ptransform(string tospace, vector4 vec)`

Transforms from `"space:current"`.

`vector ptransform(string fromspace, string tospace, vector vec)`

`vector4 ptransform(string fromspace, string tospace, vector4 vec)`

Transforms the vector from `fromspace` into `tospace`.

## Arguments

`fromspace`, `tospace`

The possible values for the space arguments are:

An object path

|

Use the object space of an object specified by a path string.

:::tip

In some cases, such as point instancing, mantra may automatically mangle
object paths. You can generate an `.ifd` file and look inside to try to find
what mantra is calling the object you want.  
:::

`"space:object"`

|

Object space of the _current_ object.

`"space:light"`

|

Object space of the _current_ light when executing a shadow or light shader.

`"space:world"`

|

Houdini world space.

`"space:camera"`

|

mantra camera space.

`"space:ndc"`

|

Normal Device Coordinate space.

`"space:lightndc"`

|

Normal Device Coordinate space for the _current_ light when executing a shadow
or light shader.

`"space:current"`

|

The current space the vector is in.

- [ptransform](ptransform.html "Transforms a vector from one space to another.") interprets the vector as a position.

- [vtransform](vtransform.html "Transforms a directional vector.") interprets the vector as a direction vector, and so doesn’t apply the translations from the matrix.

- [ntransform](ntransform.html "Transforms a normal vector.") interprets the vector as a normal vector, and so multiplies by the inverse transpose of the matrix (ignoring the translations).

## Examples ¶

The version with only a tospace argument assumes fromspace is
`"space:current"`. For example:

```c
Pworld = ptransform("space:world", P);
```

…is equivalent to:

```c
Pworld = ptransform("space:current", "space:world", P);
```

Transform a vector from its current space to object space:

```c
ospace = ptransform("space:object", P)
```

Transform a vector from object space to mantra’s natural coordinate space
(“camera” space):

```c
ospace = ptransform("space:object", "space:current", P)
```

## See also

- [ntransform](ntransform.html)
- [vtransform](vtransform.html)
- [getspace](getspace.html)

### point

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[haspointattrib](haspointattrib.html)

[idtopoint](idtopoint.html)

[inpointgroup](inpointgroup.html)

[nametopoint](nametopoint.html)

[ndcdepth](ndcdepth.html)

[nearpoint](nearpoint.html)

[nearpoints](nearpoints.html)

[neighbour](neighbour.html)

[neighbourcount](neighbourcount.html)

[neighbours](neighbours.html)

[npoints](npoints.html)

[npointsgroup](npointsgroup.html)

[planepointdistance](planepointdistance.html)

[point](point.html)

[pointattrib](pointattrib.html)

[pointattribsize](pointattribsize.html)

[pointattribtype](pointattribtype.html)

[pointattribtypeinfo](pointattribtypeinfo.html)

[pointhedge](pointhedge.html)

[pointhedgenext](pointhedgenext.html)

[pointprims](pointprims.html)

[pointvertex](pointvertex.html)

[pointvertices](pointvertices.html)

[primpoint](primpoint.html)

[primpoints](primpoints.html)

[ptransform](ptransform.html)

[removeattrib](removeattrib.html)

[removepoint](removepoint.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[setpointattrib](setpointattrib.html)

[setpointgroup](setpointgroup.html)

[setvertexpoint](setvertexpoint.html)

[vertexpoint](vertexpoint.html)

### transform

[agentcliptransformgroups](agentcliptransformgroups.html)

[agentfindtransformgroup](agentfindtransformgroup.html)

[agentlocaltransform](agentlocaltransform.html)

[agentlocaltransforms](agentlocaltransforms.html)

[agentrestlocaltransform](agentrestlocaltransform.html)

[agentrestworldtransform](agentrestworldtransform.html)

[agentsolvefbik](agentsolvefbik.html)

[agenttransformcount](agenttransformcount.html)

[agenttransformgroupmember](agenttransformgroupmember.html)

[agenttransformgroupmemberchannel](agenttransformgroupmemberchannel.html)

[agenttransformgroups](agenttransformgroups.html)

[agenttransformgroupweight](agenttransformgroupweight.html)

[agenttransformnames](agenttransformnames.html)

[agenttransformtolocal](agenttransformtolocal.html)

[agenttransformtoworld](agenttransformtoworld.html)

[agentworldtransform](agentworldtransform.html)

[agentworldtransforms](agentworldtransforms.html)

[cregioncapturetransform](cregioncapturetransform.html)

[cregiondeformtransform](cregiondeformtransform.html)

[cregionoverridetransform](cregionoverridetransform.html)

[ctransform](ctransform.html)

[fromNDC](fromNDC.html)

[getpackedtransform](getpackedtransform.html)

[getspace](getspace.html)

[mspace](mspace.html)

[ndcdepth](ndcdepth.html)

[ntransform](ntransform.html)

[opparentbonetransform](opparentbonetransform.html)

[opparenttransform](opparenttransform.html)

[opparmtransform](opparmtransform.html)

[oppreconstrainttransform](oppreconstrainttransform.html)

[oppreparmtransform](oppreparmtransform.html)

[opprerawparmtransform](opprerawparmtransform.html)

[oppretransform](oppretransform.html)

[oprawparmtransform](oprawparmtransform.html)

[optransform](optransform.html)

[orthographic](orthographic.html)

[ow_nspace](ow_nspace.html)

[ow_space](ow_space.html)

[ow_vspace](ow_vspace.html)

[packedtransform](packedtransform.html)

[perspective](perspective.html)

[polardecomp](polardecomp.html)

[ptransform](ptransform.html)

[qinvert](qinvert.html)

[qrotate](qrotate.html)

[rotate_x_to](rotate_x_to.html)

[setagentchannelvalue](setagentchannelvalue.html)

[setagentchannelvalues](setagentchannelvalues.html)

[setagentlocaltransform](setagentlocaltransform.html)

[setagentlocaltransforms](setagentlocaltransforms.html)

[setagentworldtransform](setagentworldtransform.html)

[setagentworldtransforms](setagentworldtransforms.html)

[setpackedtransform](setpackedtransform.html)

[solveconstraint](solveconstraint.html)

[solvecurve](solvecurve.html)

[solvefbik](solvefbik.html)

[solveik](solveik.html)

[solvephysfbik](solvephysfbik.html)

[toNDC](toNDC.html)

[tw_nspace](tw_nspace.html)

[tw_space](tw_space.html)

[tw_vspace](tw_vspace.html)

[vtransform](vtransform.html)

[wo_nspace](wo_nspace.html)

[wo_space](wo_space.html)

[wo_vspace](wo_vspace.html)

[wt_nspace](wt_nspace.html)

[wt_space](wt_space.html)

[wt_vspace](wt_vspace.html)

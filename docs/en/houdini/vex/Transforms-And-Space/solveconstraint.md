---
title: solveconstraint
order: 27
category:
  - houdini
---

## Description

Since 17.5

`vector [] solveconstraint(float lengths[], vector targetpos, float tolerance, matrix relmat, vector constraints[])`

Returns a array of local bone rotations in degrees.

## Arguments

`lengths`

The lengths of all the bones to solve.

`targetpos`

A target position in worldspace.

`tolerance`

Tolerance.

`relmat`

A relative matrix used to transform the target and twist positions relative to
the origin. This is normally the invert matrix of the root of the chain.

`constraints`

This is a vector array used to define the per bone restangles, dampening,
minangles, maxangles, min damp, max damp, and rolloff. If the array is empty,
same default values present in the bone objects are used. If the array size is
equal to the number of input bones, the rest angles are defined. If the array
size is equal to 2 times the number of input bones, the rest angles and the
dampening are defined. If the array size is equal to 3 times the number of
input bones, the rest angles, the dampening, the min/max angles are defined.
Min/Max angles share the same values. If the array size is equal to 4 times
the number of input bones, the rest angles, the dampening, the min/max angles
are defined. Min/Max angles have different values. If the array size is equal
to 5 times the number of input bones, the rest angles, the dampening, the
min/max angles and damp angles are defined. If the array size is equal to 6
times the number of input bones, the rest angles, the dampening, the min/max
angles, min/max damp angles are defined. If the array size is equal to 7 times
the number of input bones, the rest angles, the dampening, the min/max angles,
min/max damp angles, and rolloff are defined.

## See also

- [solveconstraint](solveconstraint.html)
- [solvecurve](solvecurve.html)
- [solvefbik](solvefbik.html)

### solve

[agentsolvefbik](agentsolvefbik.html)

[solveconstraint](solveconstraint.html)

[solvecubic](solvecubic.html)

[solvecurve](solvecurve.html)

[solvefbik](solvefbik.html)

[solveik](solveik.html)

[solvephysfbik](solvephysfbik.html)

[solvepoly](solvepoly.html)

[solvequadratic](solvequadratic.html)

[solvetriangleSSS](solvetriangleSSS.html)

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

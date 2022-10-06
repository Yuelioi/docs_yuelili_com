---
title: polardecomp
order: 17
category:
  - houdini
---

## Description

`matrix3 polardecomp(matrix3 transform)`

Computes the stretch matrix (S) and the orthogonal matrix (Q) such that `M = S*Q`. This is very useful for shape matching or blending of transforms.

## Arguments

` transform`

The matrix (M) to undergo polar decomposition.

## Returns

'Q', the orthogonal matrix that best matches the given transform.

`void polardecomp(matrix3 transform, matrix3 &rot, matrix3 &stretch, int check_determinant=1)`

## Arguments

` &rot`

Returns the orthogonal matrix of the polar decomposition.

` &stretch`

Returns the stretch matrix of the polar decomposition.

` check_determinant`

Whether or not to check if there is a negative determinant (scale). If there
is and this is not set to 0, the orthogonal and scale matrices will be
negated.

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

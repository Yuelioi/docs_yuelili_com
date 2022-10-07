---
title: solvecurve
order: 28
category:
  - vex
---



Since 17.5

`vector [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

Returns a array of vectors or matrix3 representing local bone rotations. Angles are in degrees.

## Arguments

`op`

The SOP path to a curve to evaluate.

`outlength`

Return the length of the curve where the solution ends. This is different than the sum of all lengths array.

`outpos`

Return the computed position of the last joint.

`lengths`

The lengths of all the bones to solve.

`closed`

Close the curve.

`orienttonormal`

Use the normals from the curve to orient the bones.

`normalmode`

Define how the normals/twists are computed from the control points.

Use the constants defined in `$HH/vex/include/math.h`.

`tangent`

A tangent vector to orient the end tip of the curve.

`points`

An array of vectors to use as points to define the curve.

`normals`

An array of vectors to use as normals to define the curve.

`twists`

An optional array of floats to use as twist angles in degree to define the curve.

`initialtwists`

An optional array of floats to use as initial twist angles in degree define the curve.

`normalcalcmethod`

A normal calculation method when evaluating using a SOP. (0 default, 1 none, 2 interpolate with quaternions, 3 interpolate with twist angles in 0,180 range, 4 interpolate with twist angles in any range.)

`relmat`

A relative matrix used to transform the points, normals and tangent relative to the origin.
This is normally the invert matrix of the root of the chain.

`fmt`

The curve type to create.
Use constants defined in `$HH/vex/include/math.h`, or 0 to create a polygon curve, 1 to create a bezier curve or 2 to create a NURBS curve.

`order`

The curve order for NURBS or Bezier curves. This is ignored for polygon curves.



## See also

- [solvefbik](solvefbik.html)
- [solveconstraint](solveconstraint.html)
- [solveik](solveik.html)

|
solve

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

|
transform

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

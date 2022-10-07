---
title: solvephysfbik
order: 31
category:
  - vex
---



Since 18.5

`matrix [] solvephysfbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float damping, float tolerance)`

This solver uses a different algorithm than [solvefbik](solvefbik.html "Applies a full-body inverse kinematics algorithm to a skeleton.") - it typically performs somewhat slower, but provides more control over the skeleton’s behavior and can produce higher-quality results.
The solver can also use the optional per-joint masses and center of mass positions to achieve a target position for the skeleton’s center of mass, allowing for physics-based behavior such as maintaining balance.

Compared to [solvefbik](solvefbik.html "Applies a full-body inverse kinematics algorithm to a skeleton."), this solver has more stable behavior when joint limits are enabled, and produces more accurate results when there are targets at different priority levels.
This solver also tends to distribute joint angle changes more evenly along the chain (particularly when orientation targets are being used), rather than producing large joint angle changes for one or two joints.

The rotation and translation weight parameters provide control over how each joint axis behaves during the solve. This can be used to ensure that certain joints rotate more than others, to lock a specific joint axis, or to enable translating (stretchy) joints.

Returns an empty array if:

- `xforms` or `jointoptions` are not the same size as `parents`.
- `targetxforms` or `targetoptions` are not the same size as `targets`.

## Arguments

`xforms`

The world transforms of all the transforms in the rig being solved.

`parents`

The parent transform index for each transform. A value of -1 indicates a root.

`jointoptions`

Specifies optional parameters for the joints. The valid keys are:

`rotation_weights`

A `vector` specifying weights for the joint’s rotation axes.
Given a larger relative weight, the solution will tend to be achieved by rotating around that axis.
A weight of zero will disable the rotation axis.
The default value is `{1,1,1}`.

`translation_weights`

A `vector` specifying weights for the joint’s translation axes.
Given a larger relative weight, the solution will tend to be achieved by translating along that axis.
A weight of zero will disable the translation axis.
To achieve an unpinned root joint, the root’s translation weight should be non-zero (e.g. `{1,1,1}`).
The default value is `{0,0,0}`.

`rotation_order`

An `int` specifying the joint’s rotation order.
The valid values can be found in `$HFS/houdini/vex/include/math.h`, and the default is `XFORM_XYZ`.

`rotation_lower_limits`

A `vector` specifying the lower rotation limits (in radians) for the joint’s rotation axes.
The rotation limits are applied relative to the joint’s local rest transform, if specified.

::: info Note

To prevent a particular axis from rotating, it is much more efficient to set its weight to zero instead of setting its rotation limits to zero.

`rotation_upper_limits`

A `vector` specifying the upper rotation limits (in radians) for the joint’s rotation axes.

`translation_lower_limits`

A `vector` specifying the lower translation limits for the joint’s translation axes.

`translation_upper_limits`

A `vector` specifying the upper translation limits for the joint’s translation axes.

`rest_xform`

A local space `matrix` specifying the joint’s rest pose.
The default value is the identity matrix.

`rest_rotation_weights`

A `vector` specifying how strongly the solver attempts to match the rest transform for the rotation axes.
This has a priority lower than any of the end effector targets.
A value of `0.1` is typically a suitable value when enabling the rest transform constraint, and a value of 0 will disable it.
The default value is `{0,0,0}`.

`rest_translation_weights`

A `vector` specifying how strongly the solver attempts to match the rest transform for the translation axes.
This has a priority lower than any of the end effector targets.
A value of `0.1` is typically a suitable value when enabling the rest transform constraint, and a value of 0 will disable it.
The default value is `{0,0,0}`.

`mass`

A `float` specifying the mass of the body associated with the joint.
This parameter is only used when a center of mass target is provided.
The default value is `1.0`.

`local_com`

A `vector` specifying the position of the joint’s center of mass, in local space.
An value of `{0,0,0}` (default) will position the center of mass at the joint’s position.

`targets`

A list of the transform indices of the end effectors in the skeleton.

`targetxforms`

A list of the target world transforms for the end effectors, in the same order as `targets`.

`targetoptions`

Specifies optional parameters for the targets. The valid keys are:

`weight`

A `float` specifying the importance of the target.
When multiple targets have the same priority level, targets with a higher relative weight are more likely to be reached.
The default value is `1.0`.

`priority`

An `int` specifying the target’s priority level.
Targets from a lower priority level cannot interfere with targets from a higher priority level.
For example, priority levels can be used to ensure that the feet remain planted when manipulating the upper body of a skeleton.
The default value is `0`.

`depth`

An `int` specifying the number of parent joints that can be adjusted to achieve the goal transform.
A negative depth indicates that the entire chain can be affected.
The default value is `-1`.

`target_type`

An `int` specifying how the end effector matches the position or orientation of its target transform.
A value of `0` (default) indicates a position-only target, `1` indicates an orientation-only target, and `2` matches both position and orientation.
A value of `3` indicates a target that controls the center of mass of the skeleton (the transform index from `targets` is not used).
Only one center of mass target can be provided.

`joint_offset`

A `matrix` specifying a local space transform that is combined with the joint transform to produce the transform that the solver attempts to align with the goal transform.
This can be used to place the target at an offset from the joint (for example, at the end of a bone).

`iters`

The maximum number of iterations to perform.
The solver may terminate early if the `tolerance` parameter is used.

`damping`

Damping factor for the solver.
Larger values will produce more stable results when, for example, a target is unreachable.
A value that is too large, however, will require more iterations to converge.
Around 0.5 is typically a suitable initial value.

`tolerance`

The tolerance to use when checking for convergence, defaults to 1e-5.
If positions converge to within this tolerance, the algorithm will stop.
If 0, the solver will always perform exactly `iters` iterations.



## See also

- [agentsolvefbik](agentsolvefbik.html)
- [solvefbik](solvefbik.html)

|
crowds

[agentaddclip](agentaddclip.html)

[agentchannelcount](agentchannelcount.html)

[agentchannelnames](agentchannelnames.html)

[agentchannelvalue](agentchannelvalue.html)

[agentchannelvalues](agentchannelvalues.html)

[agentclipcatalog](agentclipcatalog.html)

[agentclipchannel](agentclipchannel.html)

[agentclipchannelnames](agentclipchannelnames.html)

[agentcliplayerblend](agentcliplayerblend.html)

[agentcliplength](agentcliplength.html)

[agentclipnames](agentclipnames.html)

[agentclipsample](agentclipsample.html)

[agentclipsamplelocal](agentclipsamplelocal.html)

[agentclipsamplerate](agentclipsamplerate.html)

[agentclipsampleworld](agentclipsampleworld.html)

[agentclipstarttime](agentclipstarttime.html)

[agentcliptimes](agentcliptimes.html)

[agentcliptransformgroups](agentcliptransformgroups.html)

[agentclipweights](agentclipweights.html)

[agentcollisionlayer](agentcollisionlayer.html)

[agentcollisionlayers](agentcollisionlayers.html)

[agentcurrentlayer](agentcurrentlayer.html)

[agentcurrentlayers](agentcurrentlayers.html)

[agentfindclip](agentfindclip.html)

[agentfindlayer](agentfindlayer.html)

[agentfindtransformgroup](agentfindtransformgroup.html)

[agentlayerbindings](agentlayerbindings.html)

[agentlayers](agentlayers.html)

[agentlayershapes](agentlayershapes.html)

[agentlocaltransform](agentlocaltransform.html)

[agentlocaltransforms](agentlocaltransforms.html)

[agentmetadata](agentmetadata.html)

[agentrestlocaltransform](agentrestlocaltransform.html)

[agentrestworldtransform](agentrestworldtransform.html)

[agentrigchildren](agentrigchildren.html)

[agentrigfind](agentrigfind.html)

[agentrigfindchannel](agentrigfindchannel.html)

[agentrigparent](agentrigparent.html)

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

[setagentchannelvalue](setagentchannelvalue.html)

[setagentchannelvalues](setagentchannelvalues.html)

[setagentclipnames](setagentclipnames.html)

[setagentclips](setagentclips.html)

[setagentcliptimes](setagentcliptimes.html)

[setagentclipweights](setagentclipweights.html)

[setagentcollisionlayer](setagentcollisionlayer.html)

[setagentcollisionlayers](setagentcollisionlayers.html)

[setagentcurrentlayer](setagentcurrentlayer.html)

[setagentcurrentlayers](setagentcurrentlayers.html)

[setagentlocaltransform](setagentlocaltransform.html)

[setagentlocaltransforms](setagentlocaltransforms.html)

[setagentworldtransform](setagentworldtransform.html)

[setagentworldtransforms](setagentworldtransforms.html)

[solvefbik](solvefbik.html)

[solvephysfbik](solvephysfbik.html)

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

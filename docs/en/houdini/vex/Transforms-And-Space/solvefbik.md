---
title: solvefbik
order: 29
category:
  - houdini
---

## Description

Since 17.0

`matrix [] solvefbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

Returns an empty array if:

- `xforms` is not the same size as `parents`

- `targets` is not the same size as `targetxforms`

- The `goalxforms`, `constrainedxforms`, and `jointlimits` arrays aren’t empty, but are not the same size as `xforms`

The `goalxforms`, `constrainedxforms`, and `jointlimits` parameters should be
in the form produced by the
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure Joints
SOP](../../nodes/sop/agentconfigurejoints.html "Creates point attributes that
specify the rotation limits of an agent’s joints.").

## Arguments

`xforms`

The world transforms of all the transforms in the rig being solved.

`parents`

The parent transform index for each transform. A value of -1 indicates a root.

`jointoptions`

Specifies optional parameters for the joints. The valid keys are:

`limit_goalxform`

A `matrix` specifying the position and orientation of the cone in the space of
the parent transform. This can be set from the attributes produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent’s joints.").

`limit_constrainedxform`

A `vector4` (quaternion) specifying the orientation of the twist axis, up
axis, and out axis in the space of the child transform. This can be set from
the attributes produced by [![](../../icons/SOP/agentconfigurejoints.svg)Agent
Configure Joints](../../nodes/sop/agentconfigurejoints.html "Creates point
attributes that specify the rotation limits of an agent’s joints.").

`limit_angles`

A `vector` specifying the maximum rotation around each axis, in degrees. This
can be set from the attributes produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent’s joints.").

`targets`

A list of the transform indices of the end effectors in the skeleton.

`targetxforms`

A list of the target world transforms for the end effectors, in the same order
as `targets`.

`targetoptions`

Specifies optional parameters for the targets. The valid keys are:

`weight`

A `float` specifying the importance of the target. When multiple targets have
the same priority level, targets with a higher relative weight are more likely
to be reached. The default value is `1.0`.

`priority`

An `int` specifying the target’s priority level. Targets from a lower priority
level cannot interfere with targets from a higher priority level. For example,
priority levels can be used to ensure that the feet remain planted when
manipulating the upper body of a skeleton. The default value is `0`.

`depth`

An `int` specifying the number of parent joints that can be adjusted to
achieve the goal transform. A negative depth indicates that the entire chain
can be affected. The default value is `-1`.

`target_type`

An `int` specifying how the end effector matches the position or orientation
of its target transform. A value of `0` (default) indicates a position-only
target, `1` indicates an orientation-only target, and `2` matches both
position and orientation. A value of `3` indicates a target that controls the
center of mass of the skeleton (the transform index from `targets` is not
used). Only one center of mass target can be provided.

`joint_offset`

A `matrix` specifying a local space transform that is combined with the joint
transform to produce the transform that the solver attempts to align with the
goal transform. This can be used to place the target at an offset from the
joint (for example, at the end of a bone).

`iters`

The maximum number of iterations to perform. The solver may terminate early if
the `tolerance` parameter is used.

`tolerance`

The tolerance to use when checking for convergence, defaults to 1e-5. If
positions converge to within this tolerance, the algorithm will stop. If 0,
the solver will always perform exactly `iters` iterations.

`pinroot`

Whether to pin the root to its start position, instead of allowing it to
translate. This can be useful when, for example, solving a subset of an
agent’s skeleton. Defaults to 0 (off).

`targetweights`

A list containing the weight of each end effector, in the same order as
`targets`. For joints with multiple children, the normalized weights will be
used to determine their position - this means that a target with a higher
weight than other targets will be more likely to be reached. The default
weight is 1.0.

`targetpriorities`

A list containing the priority level of each end effector, in the same order
as `targets`. Targets from a lower priority level will not influence targets
with higher priority. For example, priority levels can be used to ensure that
the targets for the feet are always satisfied, while still controlling the
relative weights of the upper body targets. The default priority is 0 (i.e.
all targets are equal priority).

`targetdepths`

For each end effector, specifies how many joints above it in the chain can be
adjusted to achieve the target transform. A negative depth can be used to
specify that all joints above the target are affected. The default depth is
-1.

`targettypes`

A list containing the target type for each end effector, in the same order as
`targets`. The target type can be used to specify how the end effector matches
the position or orientation of its target transform (from `targetxforms`). A
value of `0` indicates a position-only target, `1` indicates an orientation-
only target, and `2` matches both position and orientation (default).

`targetoffsets`

A list containing an additional local space transform for each end effector,
in the same order as `targets`. This transform is combined with the end
effector’s joint transform to produce the transform that the solver attempts
to align with the target transform. This can be used to place the target at an
offset from the joint (for example, at the end of a bone).

`goalxforms`

Part of the joint constraints as produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent’s joints."). An empty array
indicates no joint constraints.

`constrainedxforms`

Part of the joint constraints as produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent’s joints."). An empty array
indicates no joint constraints.

`jointlimits`

Part of the joint constraints as produced by
[![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure
Joints](../../nodes/sop/agentconfigurejoints.html "Creates point attributes
that specify the rotation limits of an agent’s joints."). An empty array
indicates no joint constraints.

## See also

- [agentsolvefbik](agentsolvefbik.html)
- [agentworldtransform](agentworldtransform.html)
- [agentworldtransforms](agentworldtransforms.html)
- [setagentworldtransforms](setagentworldtransforms.html)
- [agentrigfind](agentrigfind.html)
- [agentrigparent](agentrigparent.html)
- [solvephysfbik](solvephysfbik.html)

### crowds

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

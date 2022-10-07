---
title: agentsolvefbik
order: 40
category:
  - vex
---



Since 17.0

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

Returns `-1` if `prim` is out of range or is not an agent primitive, or targets and targetxforms are not the same length.

If “agent_jointgoalxforms”, “agent_jointconstrainedxforms”, and “agent_jointlimits” attributes are present on the agent, as produced by the [![](../../icons/SOP/agentconfigurejoints.svg)Agent Configure Joints SOP](../../nodes/sop/agentconfigurejoints.html "Creates point attributes that specify the rotation limits of an agent’s joints."), then they will be interpreted as joint limits to use while solving.

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`outgeo`

Handle to the geometry to write to. `geoself()` can be used to get a handle to the current geometry.

`prim`

The primitive number of the agent primitive.

`targets`

A list of the transform indexes of the end effectors in the agent.

`targetxforms`

A list of the target world transforms for the end effectors, in the same order as `targets`.

`xformgroup`

The index of a transform group, which specifies the joints to be used for the IK solver (all transforms not in the transform group will be ignored).
[agentfindtransformgroup](agentfindtransformgroup.html "Finds the index of a transform group in an agent’s definition.") can be used to look up a transform group by name, and a value of -1 indicates that all the transforms in the agent should be included.
It’s recommended to use a transform group that includes only transforms that correspond to the agent’s bone structure.

`iters`

The maximum number of iterations to perform.
The solver may terminate early if the `tolerance` parameter is used.

`tolerance`

The tolerance to use when checking for convergence, defaults to 1e-5.
If positions converge to within this tolerance, the algorithm will stop.
If 0, the solver will always perform exactly `iters` iterations.

`pinroot`

Whether to pin the root to its start position, instead of allowing it to translate.
This can be useful when, for example, solving a subset of an agent’s skeleton.
Defaults to 0 (off).

`targetweights`

A list containing the weight of each end effector, in the same order as `targets`.
For joints with multiple children, the normalized weights will be used to determine their position - this means that a target with a higher weight than other targets will be more likely to be reached.
The default weight is 1.0.

`targetpriorities`

A list containing the priority level of each end effector, in the same order as `targets`.
Targets from a lower priority level will not influence targets with higher priority.
For example, priority levels can be used to ensure that the targets for the feet are always satisfied, while still controlling the relative weights of the upper body targets.
The default priority is 0 (i.e. all targets are equal priority).

`targetdepths`

For each end effector, specifies how many joints above it in the chain can be adjusted to achieve the target transform.
A negative depth can be used to specify that all joints above the target are affected.
The default depth is -1.

`targettypes`

A list containing the target type for each end effector, in the same order as `targets`.
The target type can be used to specify how the end effector matches the position or orientation of its target transform (from `targetxforms`).
A value of `0` indicates a position-only target, `1` indicates an orientation-only target, and `2` matches both position and orientation (default).

`targetoffsets`

A list containing an additional local space transform for each end effector, in the same order as `targets`.
This transform is combined with the end effector’s joint transform to produce the transform that the solver attempts to align with the target transform.
This can be used to place the target at an offset from the joint (for example, at the end of a bone).

`goalxformattrib`

An optional parameter specifying an alternative attribute to use instead of “agent_jointgoalxforms”.

`constraintedxformattrib`

An optional parameter specifying an alternative attribute to use instead of “agent_jointconstrainedxforms”.

`jointlimitsattrib`

An optional parameter specifying an alternative attribute to use instead of “agent_jointlimits”.



## See also

- [solvefbik](solvefbik.html)
- [agentworldtransform](agentworldtransform.html)
- [agentworldtransforms](agentworldtransforms.html)
- [agentrigfind](agentrigfind.html)
- [agentrigparent](agentrigparent.html)

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

---
title: setagentclips
order: 54
category:
  - vex
---

`int setagentclips(int geohandle, int prim, string clip\_names[], float clip\_times[], float clip\_weights[], string clip\_transform\_groups[], int clip\_layer\_ids[], int layer\_blend\_modes[], float layer\_weights[], int layer\_parent\_ids[])`

`int setagentclips(int geohandle, int prim, int clip\_ids[], float clip\_times[], float clip\_weights[], int clip\_transform\_group\_ids[], int clip\_layer\_ids[], int layer\_blend\_modes[], float layer\_weights[], int layer\_parent\_ids[])`

This function can provide improved performance compared to using a combination of [setagentclipnames](setagentclipnames.html) ("Sets the current animation clips for an agent primitive."), [setagentcliptimes](setagentcliptimes.html) ("Sets the current times for an agent primitive’s animation clips."), and [setagentclipweights](setagentclipweights.html) ("Sets the blend weights for an agent primitive’s animation clips."), and also modifies the [primitive intrinsics used for layering animation clips](../../crowds/agents.html) (#currentclips).

## Arguments

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to the current geometry.

`prim`

The primitive number.

`clip_names`

A list of animation clip names.

`clip_ids`

A list of animation clip indices in the agent definition.
A clip’s index can be obtained via [agentfindclip](agentfindclip.html) ("Finds the index of a clip in an agent’s definition.").

`clip_times`

A list of times that the clips should be sampled at.

`clip_weights`

A list of blend weights for the animation clips.

`clip_transform_groups`

A list of transform groups, which specify the joints that each clip should be applied to.

`clip_transform_group_ids`

A list of transform group indices in the agent definition.
A transform group’s index can be obtained via [agentfindtransformgroup](agentfindtransformgroup.html) ("Finds the index of a transform group in an agent’s definition.").

`clip_layer_ids`

A list containing the layer that each animation clip is an input for.

`layer_blend_modes`

A list of blend modes for each layer. The available blend modes are defined in `$HH/vex/include/crowd_cliplayers.h`.

`layer_weights`

A list of blend weights for each layer. The blend weight is not used for the topmost layer.

`layer_parent_ids`

A list containing the parent layer for each layer (or -1 for the topmost layer). This specifies a tree of animation layers.

## See also

- [setagentclipnames](setagentclipnames.html)
- [setagentcliptimes](setagentcliptimes.html)
- [setagentclipweights](setagentclipweights.html)

|
clip

[agentaddclip](agentaddclip.html)

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

[agentfindclip](agentfindclip.html)

[agentrigfindchannel](agentrigfindchannel.html)

[setagentclipnames](setagentclipnames.html)

[setagentclips](setagentclips.html)

[setagentcliptimes](setagentcliptimes.html)

[setagentclipweights](setagentclipweights.html)

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

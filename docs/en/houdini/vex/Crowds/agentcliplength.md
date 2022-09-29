---
title: agentcliplength
order: 11
category:
  - houdini
---

## Description

`float agentcliplength(<geometry>geometry, int prim, string clipname)`

`float agentcliplength(<geometry>geometry, int prim, int clipindex)`

Returns `0` if `prim` is out of range or is not an agent primitive, or if
`clipname` is not one of the agent’s [animation clips](agentclipcatalog.html) "Returns all of the animation clips that have been loaded for an agent
primitive.").

## Arguments

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an
`op:/path/to/sop` reference.

`prim`

The primitive number.

`clipname`

The name of the animation clip.

`clipindex`

Index of a clip in the agent’s definition. A clip’s index can be obtained via
[agentfindclip](agentfindclip.html "Finds the index of a clip in an agent’s
definition.").

## See also

- [agentclipcatalog ](agentclipcatalog.html)
- [agentclipnames ](agentclipnames.html)
- [agentclipsamplelocal ](agentclipsamplelocal.html)
- [agentclipsamplerate ](agentclipsamplerate.html)
- [agentclipsampleworld ](agentclipsampleworld.html)
- [agentclipstarttime ](agentclipstarttime.html)
- [agentcliptimes ](agentcliptimes.html)
- [agentclipweights ](agentclipweights.html)
- [agentfindclip ](agentfindclip.html)
- [setagentclipnames ](setagentclipnames.html)
- [setagentcliptimes ](setagentcliptimes.html)
- [setagentclipweights ](setagentclipweights.html)

### clip

[agentaddclip ](agentaddclip.html)

[agentchannelnames ](agentchannelnames.html)

[agentchannelvalue ](agentchannelvalue.html)

[agentchannelvalues ](agentchannelvalues.html)

[agentclipcatalog ](agentclipcatalog.html)

[agentclipchannel ](agentclipchannel.html)

[agentclipchannelnames ](agentclipchannelnames.html)

[agentcliplayerblend ](agentcliplayerblend.html)

[agentcliplength ](agentcliplength.html)

[agentclipnames ](agentclipnames.html)

[agentclipsample ](agentclipsample.html)

[agentclipsamplelocal ](agentclipsamplelocal.html)

[agentclipsamplerate ](agentclipsamplerate.html)

[agentclipsampleworld ](agentclipsampleworld.html)

[agentclipstarttime ](agentclipstarttime.html)

[agentcliptimes ](agentcliptimes.html)

[agentcliptransformgroups ](agentcliptransformgroups.html)

[agentclipweights ](agentclipweights.html)

[agentfindclip ](agentfindclip.html)

[agentrigfindchannel ](agentrigfindchannel.html)

[setagentclipnames ](setagentclipnames.html)

[setagentclips ](setagentclips.html)

[setagentcliptimes ](setagentcliptimes.html)

[setagentclipweights ](setagentclipweights.html)

### crowds

[agentaddclip ](agentaddclip.html)

[agentchannelcount ](agentchannelcount.html)

[agentchannelnames ](agentchannelnames.html)

[agentchannelvalue ](agentchannelvalue.html)

[agentchannelvalues ](agentchannelvalues.html)

[agentclipcatalog ](agentclipcatalog.html)

[agentclipchannel ](agentclipchannel.html)

[agentclipchannelnames ](agentclipchannelnames.html)

[agentcliplayerblend ](agentcliplayerblend.html)

[agentcliplength ](agentcliplength.html)

[agentclipnames ](agentclipnames.html)

[agentclipsample ](agentclipsample.html)

[agentclipsamplelocal ](agentclipsamplelocal.html)

[agentclipsamplerate ](agentclipsamplerate.html)

[agentclipsampleworld ](agentclipsampleworld.html)

[agentclipstarttime ](agentclipstarttime.html)

[agentcliptimes ](agentcliptimes.html)

[agentcliptransformgroups ](agentcliptransformgroups.html)

[agentclipweights ](agentclipweights.html)

[agentcollisionlayer ](agentcollisionlayer.html)

[agentcollisionlayers ](agentcollisionlayers.html)

[agentcurrentlayer ](agentcurrentlayer.html)

[agentcurrentlayers ](agentcurrentlayers.html)

[agentfindclip ](agentfindclip.html)

[agentfindlayer ](agentfindlayer.html)

[agentfindtransformgroup ](agentfindtransformgroup.html)

[agentlayerbindings ](agentlayerbindings.html)

[agentlayers ](agentlayers.html)

[agentlayershapes ](agentlayershapes.html)

[agentlocaltransform ](agentlocaltransform.html)

[agentlocaltransforms ](agentlocaltransforms.html)

[agentmetadata ](agentmetadata.html)

[agentrestlocaltransform ](agentrestlocaltransform.html)

[agentrestworldtransform ](agentrestworldtransform.html)

[agentrigchildren ](agentrigchildren.html)

[agentrigfind ](agentrigfind.html)

[agentrigfindchannel ](agentrigfindchannel.html)

[agentrigparent ](agentrigparent.html)

[agentsolvefbik ](agentsolvefbik.html)

[agenttransformcount ](agenttransformcount.html)

[agenttransformgroupmember ](agenttransformgroupmember.html)

[agenttransformgroupmemberchannel ](agenttransformgroupmemberchannel.html)

[agenttransformgroups ](agenttransformgroups.html)

[agenttransformgroupweight ](agenttransformgroupweight.html)

[agenttransformnames ](agenttransformnames.html)

[agenttransformtolocal ](agenttransformtolocal.html)

[agenttransformtoworld ](agenttransformtoworld.html)

[agentworldtransform ](agentworldtransform.html)

[agentworldtransforms ](agentworldtransforms.html)

[setagentchannelvalue ](setagentchannelvalue.html)

[setagentchannelvalues ](setagentchannelvalues.html)

[setagentclipnames ](setagentclipnames.html)

[setagentclips ](setagentclips.html)

[setagentcliptimes ](setagentcliptimes.html)

[setagentclipweights ](setagentclipweights.html)

[setagentcollisionlayer ](setagentcollisionlayer.html)

[setagentcollisionlayers ](setagentcollisionlayers.html)

[setagentcurrentlayer ](setagentcurrentlayer.html)

[setagentcurrentlayers ](setagentcurrentlayers.html)

[setagentlocaltransform ](setagentlocaltransform.html)

[setagentlocaltransforms ](setagentlocaltransforms.html)

[setagentworldtransform ](setagentworldtransform.html)

[setagentworldtransforms ](setagentworldtransforms.html)

[solvefbik ](solvefbik.html)

[solvephysfbik ](solvephysfbik.html)

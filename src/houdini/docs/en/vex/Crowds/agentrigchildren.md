---
title: agentrigchildren
order: 36
category:
  - houdini
---

## Description

`int [] agentrigchildren(<geometry>geometry, int prim, int transform)`

Returns a list of the direct children of the given transform.

Returns an empty array if `transform` is [out of
range](agenttransformcount.html) "Returns the number of transforms in an agent
primitive’s rig."), `prim` is out of range, or `prim` is not an agent
primitive.

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

`transform`

Index of a transform in the agent’s rig.

## Examples ¶

Visit all of the children of a given transform.

```c
int[] queue = { transform };  while (len(queue) > 0) { int i =
removeindex(queue, 0); printf("%d\n", i);  foreach (int child;
agentrigchildren(0, @primnum, i)) push(queue, child); }
```

## See also

- [agentlocaltransforms ](agentlocaltransforms.html)
- [agentrigfind ](agentrigfind.html)
- [agentrigparent ](agentrigparent.html)
- [agenttransformcount ](agenttransformcount.html)
- [agenttransformtolocal ](agenttransformtolocal.html)
- [agenttransformtoworld ](agenttransformtoworld.html)
- [agentworldtransforms ](agentworldtransforms.html)

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

### rig

[agentrigchildren ](agentrigchildren.html)

[agentrigfind ](agentrigfind.html)

[agentrigparent ](agentrigparent.html)

---
title: agentrigparent
order: 39
category:
  - vex
---

`int agentrigparent(<geometry>geometry, int prim, int transform)`

如果`transform`是变换层次的根，`transform`是[超出范围](agenttransformcount.html) () ("返回一个代理基元中变换的数量。")，`prim`超出范围，或者`prim`不是一个代理基元，则返回`-1`。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`prim`

原始的数字。

`transform`

代理人的装备中的一个变换的索引。

## Examples



从一个给定的骨骼开始，找到钻机根部的世界变换。

```c
int root;
while (true) {
int parent = agentrigparent(0, @primnum, transform);

if (parent < 0)
{
root = transform;
break;
}
else
transform = parent;
}

matrix root_xform = agentworldtransform(0, @primnum, root);

```

## See also

- [agentlocaltransform](agentlocaltransform.html)
- [agentlocaltransforms](agentlocaltransforms.html)
- [agentrigchildren](agentrigchildren.html)
- [agentrigfind](agentrigfind.html)
- [agenttransformcount](agenttransformcount.html)
- [agenttransformtolocal](agenttransformtolocal.html)
- [agenttransformtoworld](agenttransformtoworld.html)
- [agentworldtransform](agentworldtransform.html)
- [agentworldtransforms](agentworldtransforms.html)

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
rig

[agentrigchildren](agentrigchildren.html)

[agentrigfind](agentrigfind.html)

[agentrigparent](agentrigparent.html)

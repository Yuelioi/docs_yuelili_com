---
title: agentclipsample
order: 13
category:
  - vex
---

`float agentclipsample(<geometry>geometry, int prim, string clipname, float time, int channel_index)`

`float agentclipsample(<geometry>geometry, int prim, string clipname, float time, string channel)`

`float agentclipsample(<geometry>geometry, int prim, int clipindex, float time, int channel_index)`

`float agentclipsample(<geometry>geometry, int prim, int clipindex, float time, string channel)`

在给定时间评估片段，并返回指定通道的值。如果`clipname`不是代理的[animation clips](agentclipcatalog.html) () ("返回所有为代理基元加载的动画片段。")，`prim`超出范围，`prim`不是代理基元，`channel_index`超出范围，或者`channel`不存在，则返回零。

对于剪辑的转换通道的采样，使用[agentclipsamplelocal](agentclipsamplelocal.html) ()("在特定时间对代理的动画剪辑进行采样。")或[agentclipsampleworld](agentclipsampleworld.html) ()("在特定时间对代理的动画剪辑进行采样。")代替。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`prim`

原始的数字。

`clipname`

动画片段的名称。

`clipindex`

代理商定义中一个片段的索引。一个片段的索引可以通过[agentfindclip](agentfindclip.html) ()("查找代理定义中一个片段的索引。")获得。

`time`

评估该片段的时间（以秒为单位）。如果这个时间大于[clip's length](agentcliplength.html)（"返回代理的动画片段的长度（秒）。"），它将被包裹起来。

`channel_index`

动画剪辑中的通道索引，由[agentclipchannel](agentclipchannel.html)返回（"查找代理的动画剪辑中的通道索引"）。

`channel`

动画片段中的一个通道的名称。

## Examples



在 1.2 秒后对行走片段的一个通道进行采样。

```c
float value = agentclipsample(0, @primnum, "walk", 1.2, "latch_leftfoot");

```

## See also

- [agentclipcatalog](agentclipcatalog.html)
- [agentclipchannel](agentclipchannel.html)
- [agentclipnames](agentclipnames.html)
- [agentcliplength](agentcliplength.html)
- [agentclipsamplelocal](agentclipsamplelocal.html)
- [agentclipsamplerate](agentclipsamplerate.html)
- [agentclipsampleworld](agentclipsampleworld.html)
- [agentcliptimes](agentcliptimes.html)
- [agentclipweights](agentclipweights.html)
- [agentfindclip](agentfindclip.html)

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

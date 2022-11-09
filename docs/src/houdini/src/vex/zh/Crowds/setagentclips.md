---
title: setagentclips
order: 54
category:
  - vex
---

`int setagentclips(int geohandle, int prim, string clip_names[], float clip_times[], float clip_weights[], string clip_transform_groups[], int clip_layer_ids[], int layer_blend_modes[], float layer_weights[], int layer_parent_ids[])`

`int setagentclips(int geohandle, int prim, int clip_ids[], float clip_times[], float clip_weights[], int clip_transform_group_ids[], int clip_layer_ids[], int layer_blend_modes[], float layer_weights[], int layer_parent_ids[])`

与使用 [setagentclipnames](setagentclipnames.html) () ("为代理基元设置当前的动画片段。")、[setagentcliptimes](setagentcliptimes.html) () ("为代理基元的动画片段设置当前的时间。"）和[setagentclipweights](setagentclipweights.html) （"为代理基元的动画剪辑设置混合权重。"），还修改了[用于分层动画剪辑的基元内在因素](.../.../crowds/agents.html) （#currentclips）。

## Arguments

`geohandle`

要写入的几何体的句柄。`geoself()`可以用来获取当前几何体的句柄。

`prim`

原始的数字。

`clip_names`

动画片段名称的列表。

`clip_ids`

代理定义中的动画片段索引列表。一个片段的索引可以通过[agentfindclip](agentfindclip.html)获得（"查找代理定义中一个片段的索引。"）。

`clip_times`

夹子应该被采样的时间列表。

`clip_weights`

动画片段的混合权重列表。

`clip_transform_groups`

变换组的列表，指定每个剪辑应该应用到的关节。

`clip_transform_group_ids`

代理人定义中的转换组索引列表。一个变换组的索引可以通过[agentfindtransformgroup](agentfindtransformgroup.html)获得（"查找代理定义中变换组的索引。"）。

`clip_layer_ids`

一个包含每个动画片段作为输入的层的列表。

`layer_blend_modes`

每个层的混合模式的列表。可用的混合模式在`$HH/vex/include/crowd_cliplayers.h`中定义。

`layer_weights`

每层的混合权重的列表。混合权重不用于最上面的一层。

`layer_parent_ids`

一个包含每个层的父层的列表（或者-1 代表最上面的层）。这指定了一棵动画层的树。

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

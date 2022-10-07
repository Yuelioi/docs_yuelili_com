---
title: solvefbik
order: 29
category:
  - vex
---

自 17.0 以来

`matrix [] solvefbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

返回一个空数组，如果。

- `xforms`与`parents`大小不一
- targets "与 "targetxforms "大小不一
- `goalxforms`、`constrainedxforms`和`jointlimits`数组不是空的，但与`xforms`的大小不同。

`goalxforms`、`constrainedxforms`和`jointlimits`参数应采用(Agent Configure Joints SOP](.../.../nodes/sop/agentconfigurejoints.html)（"创建点属性，指定代理的关节的旋转限制。" ）产生的形式。

## Arguments

`xforms`

被解决的钻机中所有变换的世界变换。

`parents`

每个变换的父变换索引。值为-1 表示根。

`jointoptions`

指定接头的可选参数。有效的键为：。

`limit_goalxform`

一个 "矩阵"，指定锥体在父变换空间中的位置和方向。这可以从(Agent Configure Joints](././nodes/sop/agentconfigurejoints.html)（"创建点属性，指定代理的关节的旋转限制。"）产生的属性中设置。

`limit_constrainedxform`

一个`向量4`（四元数），指定子变换空间中的扭转轴、上轴和外轴的方向。这可以从(Agent Configure Joints](././nodes/sop/agentconfigurejoints.html)（"创建点属性，指定代理的关节的旋转限制。"）所产生的属性中设置。

`limit_angles`

一个 "向量"，指定围绕每个轴的最大旋转，单位是度。这可以从(Agent Configure Joints](.../.../nodes/sop/agentconfigurejoints.html)（"创建点属性，指定代理的关节的旋转限制。"）产生的属性进行设置。

`targets`

骨架中末端效应器的转换指数的列表。

`targetxforms`

最终效应器的目标世界变换的列表，顺序与`targets`相同。

`targetoptions`

指定目标的可选参数。有效的键是。

`weight`

一个指定目标重要性的`float'。当多个目标具有相同的优先级时，具有较高相对权重的目标更有可能被达成。默认值是`1.0'。

`priority`

指明目标的优先级的 "int"。低优先级的目标不能干扰高优先级的目标。例如，优先级可以用来确保在操纵骨架的上半身时，双脚保持在固定位置。默认值是`0`。

`depth`

一个 "int"，指定可以被调整以实现目标变换的父关节的数量。负的深度表示整个链条都可以被影响。默认值是`-1'。

`target_type`

一个 "int"，指定末端效应器如何匹配其目标变换的位置或方向。值为`0'（默认）表示仅有位置的目标，`1'表示仅有方向的目标，`2'同时匹配位置和方向。值为`3'表示一个控制骨架质量中心的目标（不使用`targets'的变换索引）。只能提供一个质心目标。

`joint_offset`

一个指定局部空间变换的 "矩阵"，与关节变换相结合，以产生解算器试图与目标变换对齐的变换。这可以用来将目标放置在关节的偏移处（例如，在骨头的末端）。

`iters`

要执行的最大迭代次数。如果使用`tolerance`参数，求解器可能会提前终止。

`tolerance`

检查收敛时使用的公差，默认为 1e-5。如果位置收敛在这个公差范围内，算法将停止。如果是 0，求解器将总是精确地执行`iters`迭代。

`pinroot`

是否将根钉在它的起始位置，而不是让它平移。例如，在解决一个代理的骨架的子集时，这可能是有用的。默认为 0（关闭）。

`targetweights`

一个包含每个末端效应器的重量的列表，顺序与`targets`相同。对于有多个子体的关节，将使用归一化的权重来确定其位置--这意味着权重高于其他目标的目标将更有可能被到达。默认的权重是 1.0。

`targetpriorities`

一个包含每个终端效应器的优先级的列表，顺序与`targets`相同。低优先级的目标不会影响高优先级的目标。例如，优先级可以用来确保脚的目标总是得到满足，同时仍然控制上半身目标的相对重量。默认的优先级是 0（即所有目标的优先级都相同）。

`targetdepths`

对于每个末端效应器，指定它上面有多少个关节可以被调整以实现目标变换。负的深度可以用来指定目标上面的所有关节都受到影响。默认的深度是-1。

`targettypes`

一个包含每个末端效应器的目标类型的列表，顺序与`targets`相同。目标类型可以用来指定末端效应器如何匹配其目标变换的位置或方向（来自`targetxforms`）。值为`0'表示仅有位置的目标，`1'表示仅有方向的目标，而`2'同时匹配位置和方向（默认）。

`targetoffsets`

一个包含每个终端效应器的额外局部空间变换的列表，顺序与`targets`相同。这个变换与末端效应器的关节变换相结合，产生解算器试图与目标变换对齐的变换。这可以用来将目标放在离关节偏移的地方（例如，在骨头的末端）。

`goalxforms`

由(Agent Configure Joints](.../.../nodes/sop/agentconfigurejoints.html)（"创建点属性，指定代理的关节的旋转限制。"）产生的部分关节约束。一个空数组表示没有关节限制。

`constrainedxforms`

由(Agent Configure Joints](.../.../nodes/sop/agentconfigurejoints.html)（"创建点属性，指定代理的关节的旋转限制。"）产生的部分关节约束。一个空数组表示没有关节限制。

`jointlimits`

由(Agent Configure Joints](.../.../nodes/sop/agentconfigurejoints.html)（"创建点属性，指定代理的关节的旋转限制。"）产生的部分关节约束。一个空数组表示没有关节限制。

## See also

- [agentsolvefbik](agentsolvefbik.html)
- [agentworldtransform](agentworldtransform.html)
- [agentworldtransforms](agentworldtransforms.html)
- [setagentworldtransforms](setagentworldtransforms.html)
- [agentrigfind](agentrigfind.html)
- [agentrigparent](agentrigparent.html)
- [solvephysfbik](solvephysfbik.html)

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

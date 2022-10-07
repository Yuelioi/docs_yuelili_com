---
title: agentsolvefbik
order: 40
category:
  - vex
---

自 17.0 以来

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

`int agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

如果`prim`超出范围或不是代理基元，或者 target 和 targetxforms 的长度不一致，则返回`-1`。

如果 "agent_jointgoalxforms"、"agent_jointconstrainedxforms "和 "agent_jointlimits "属性存在于代理人身上，如 Agent Configure Joints SOP(../../nodes/sop/agentconfigurejoints.html）（"创建指定代理人关节旋转极限的点属性。"），那么它们将被解释为解题时使用的关节极限。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`outgeo`

要写入的几何体的句柄。`geoself()`可以用来获取当前几何体的句柄。

`prim`

代理人基元的基元编号。

`targets`

代理中终端效应器的转换索引的列表。

`targetxforms`

最终效应器的目标世界变换的列表，顺序与`targets`相同。

`xformgroup`

变换组的索引，它指定了用于 IK 求解器的关节（所有不在变换组中的变换都将被忽略）。[agentfindtransformgroup](agentfindtransformgroup.html) ()("查找代理定义中的变换组的索引。")可以用来按名称查找变换组，值为-1 表示应该包括代理中的所有变换。建议使用一个只包括与代理的骨骼结构相对应的变换的变换组。

`iters`

要执行的最大迭代次数。如果使用`tolerance`参数，求解器可能会提前终止。

`tolerance`

检查收敛时使用的公差，默认为 1e-5。如果位置收敛在这个公差范围内，算法将停止。如果是 0，求解器将总是精确地执行`iters`迭代。

`pinroot`

是否将根钉在它的起始位置，而不是让它平移。例如，在解决一个代理的骨架的子集时，这可能是有用的。默认值为 0（关闭）。

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

`goalxformattrib`

一个可选的参数，指定一个替代属性来代替 "agent_jointgoalxforms"。

`constraintedxformattrib`

一个可选的参数，指定一个替代属性来代替 "agent_jointconstrainedxforms"。

`jointlimitsattrib`

一个可选的参数，指定一个替代属性来代替 "agent_jointlimits"。

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

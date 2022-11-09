---
title: solvephysfbik
order: 31
category:
  - vex
---

自 18.5 以来

`matrix [] solvephysfbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float damping, float tolerance)`

这个求解器使用的算法与[solvefbik](solvefbik.html) ()("将全身逆运动学算法应用于骨架。")不同--它的执行速度通常稍慢，但对骨架的行为提供了更多控制，可以产生更高质量的结果。解算器还可以使用可选的各关节质量和质心位置来实现骨架质心的目标位置，允许基于物理学的行为，如保持平衡。

与[solvefbik](solvefbik.html) () ("Applies a full-body inverse kinematics algorithm to a skeleton.")相比，这个求解器在启用关节限制时有更稳定的行为，并且在有不同优先级的目标时产生更准确的结果。这个求解器也倾向于沿着链条更均匀地分布关节角度的变化（特别是在使用方向目标时），而不是在一两个关节产生大的关节角度变化。

旋转和平移权重参数提供了对每个关节轴在解算过程中的行为方式的控制。这可以用来确保某些关节比其他关节旋转得更多，锁定一个特定的关节轴，或者启用平移（拉伸）关节。

返回一个空数组，如果。

- `xforms`或`jointoptions`与`parents`大小不一样。
- `targetxforms`或`targetoptions`与`targets`大小不一样。

## Arguments

`xforms`

被解决的钻机中所有变换的世界变换。

`parents`

每个变换的父变换索引。值为-1 表示根。

`jointoptions`

指定接头的可选参数。有效的键为：。

`rotation_weights`

一个指定关节旋转轴的权重的 "向量"。给予较大的相对权重，解决方案将倾向于通过围绕该轴旋转来实现。如果权重为零，将禁用该旋转轴。默认值是`{1,1,1}`。

`translation_weights`

一个指定关节平移轴的权重的 "向量"。给定一个较大的相对权重，解决方案将倾向于通过沿该轴的平移来实现。如果权重为零，将禁用该平移轴。为了实现无钉的根关节，根的平移权重应该是非零的（例如：`{1,1,1}`）。默认值是`{0,0,0}`。

`rotation_order`

一个指定关节旋转顺序的`int'。有效值可以在`$HFS/houdini/vex/include/math.h`中找到，默认是`XFORM_XYZ`。

`rotation_lower_limits`

指定关节旋转轴的旋转下限（弧度）的 "向量"。如果指定的话，旋转限制是相对于关节的局部静止变换而应用的。

::: info Note

为了防止某个轴的旋转，将其权重设置为零，而不是将其旋转极限设置为零，会更有效。

`rotation_upper_limits`

一个指定关节旋转轴的旋转上限（弧度）的 "向量"。

`translation_lower_limits`

一个指定关节平移轴下限的 "向量"。

`translation_upper_limits`

一个指定关节平移轴的平移上限的 "向量"。

`rest_xform`

一个局部空间的 "矩阵"，指定关节的静止姿态。缺省值是身份矩阵。

`rest_rotation_weights`

一个`向量'，指定求解器在多大程度上试图匹配旋转轴的其余变换。它的优先级低于任何终端效应器的目标。当启用休息变换约束时，一个`0.1'的值通常是一个合适的值，而一个 0 的值将禁用它。默认值是`{0,0,0}`。

`rest_translation_weights`

一个 "向量"，指定求解器在多大程度上试图匹配平移轴的其余变换。它的优先级低于任何终端效应器的目标。当启用休息变换约束时，一个`0.1'的值通常是一个合适的值，而一个0的值将禁用它。默认值是`{0,0,0}`。

`mass`

一个 "浮点"，指定与关节相关的身体的质量。这个参数只在提供质心目标时使用。默认值是`1.0'。

`local_com`

一个指定关节质心位置的 "向量"，在本地空间。值为`{0,0,0}`（默认值）将使质心位于关节的位置。

`targets`

骨架中末端效应器的转换指数的列表。

`targetxforms`

最终效应器的目标世界变换的列表，顺序与`targets`相同。

`targetoptions`

指定目标的可选参数。有效的键是。

`weight`

一个指定目标重要性的`float'。当多个目标具有相同的优先级时，具有较高相对权重的目标更有可能被达成。默认值是`1.0'。

`priority`

指明目标的优先级的 "int"。低优先级的目标不能干扰高优先级的目标。例如，优先级可以用来确保在操纵骨架的上半身时，双脚保持固定状态。默认值是`0`。

`depth`

一个 "int"，指定可以被调整以实现目标变换的父关节的数量。负的深度表示整个链条都可以被影响。默认值是`-1'。

`target_type`

一个 "int"，指定末端效应器如何匹配其目标变换的位置或方向。值为`0'（默认值）表示一个纯位置的目标，`1'表示一个纯方向的目标，`2'同时匹配位置和方向。值为`3'表示一个控制骨架质量中心的目标（不使用`targets'的变换索引）。只能提供一个质心目标。

`joint_offset`

一个指定局部空间变换的 "矩阵"，与关节变换相结合，以产生解算器试图与目标变换对齐的变换。这可以用来将目标放置在关节的偏移处（例如，在骨头的末端）。

`iters`

要执行的最大迭代次数。如果使用`tolerance`参数，求解器可能会提前终止。

`damping`

解算器的阻尼系数。较大的值将产生更稳定的结果，例如，当目标无法到达时。然而，一个过大的值将需要更多的迭代来收敛。通常 0.5 左右是一个合适的初始值。

`tolerance`

检查收敛时使用的公差，默认为 1e-5。如果位置收敛在这个公差范围内，算法将停止。如果是 0，求解器将总是精确地执行`iters`迭代。

## See also

- [agentsolvefbik](agentsolvefbik.html)
- [solvefbik](solvefbik.html)

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

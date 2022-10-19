---
title: solveik
order: 30
category:
  - vex
---

自 17.5 以来

`vector [] solveik(float lengths[], vector targetpos, vector twistpos, float twist, int twistflag, float dampen, int resiststraight, float trackingthres, matrix relmat, vector constraints[])`

`matrix3 [] solveik(float lengths[], vector targetpos, vector twistpos, float twist, int twistflag, float dampen, int resiststraight, float trackingthres, matrix relmat, vector constraints[])`

返回一个以度为单位的局部骨骼旋转阵列。

## Arguments

`lengths`

所有骨头的长度来解决。

`targetpos`

世界空间中的一个目标位置。

`twistpos`

扭曲影响世界空间中的位置。

`twist`

一个扭曲的角度，单位是度。

`twistflag`

使用或不使用捻线器进行捻线。

`dampen`

整个链条的阻尼系数。

`resiststraight`

抵制矫枉过正。

`trackingthres`

跟踪阈值。

`relmat`

一个相对矩阵，用于转换相对于原点的目标和扭曲的位置。这通常是链根的反转矩阵。

`constraints`

这是一个矢量数组，用于定义每个骨骼的重角、阻尼、最小角、最大角、最小阻尼、最大阻尼和滚降。如果该数组为空，则使用骨骼对象中的相同默认值。如果数组的大小等于输入骨骼的数量，则定义其余的角度。如果数组的大小等于输入骨骼数量的 2 倍，则定义休息角和阻尼。如果数组大小等于输入骨骼数量的 3 倍，则定义休息角、阻尼、最小/最大角。最小/最大角共享相同的值。如果数组大小等于输入骨骼数量的 4 倍，则定义了休息角、阻尼、最小/最大角。最小/最大角度有不同的值。如果数组大小等于输入骨骼数量的 5 倍，则定义了休息角、阻尼、最小/最大角和阻尼角。如果数组大小等于输入骨骼数量的 6 倍，则定义了休息角、阻尼、最小/最大角、最小/最大阻尼角。如果阵列大小等于输入骨骼数量的 7 倍，则定义了休息角、阻尼、最小/最大角、最小/最大阻尼角和滚降。

## See also

- [solveconstraint](solveconstraint.html)
- [solvecurve](solvecurve.html)
- [solvefbik](solvefbik.html)

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

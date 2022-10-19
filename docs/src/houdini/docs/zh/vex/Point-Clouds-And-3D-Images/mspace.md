---
title: mspace
order: 4
category:
  - vex
---

[image3d](../contexts/image3d.html)

`vector mspace(vector P)`

Context(s) 将指定的位置转换为元宝的 "本地 "空间。这个函数只在[forpoints](forpoints.html)循环结构中有效。

这个函数的一个使用例子是基于 "休息 "位置计算噪音......例如。

```c
forpoints(P) {
vector npos = mspace(P) - mattrib("rest", P);
nval += noise(npos);
}

```

ptcloud

[mattrib](mattrib.html)

[mdensity](mdensity.html)

[mspace](mspace.html)

[pcclose](pcclose.html)

[pccone](pccone.html)

[pccone_radius](pccone_radius.html)

[pcconvex](pcconvex.html)

[pcexport](pcexport.html)

[pcfarthest](pcfarthest.html)

[pcfilter](pcfilter.html)

[pcfind](pcfind.html)

[pcfind_radius](pcfind_radius.html)

[pcgenerate](pcgenerate.html)

[pcimport](pcimport.html)

[pcimportbyidx3](pcimportbyidx3.html)

[pcimportbyidx4](pcimportbyidx4.html)

[pcimportbyidxf](pcimportbyidxf.html)

[pcimportbyidxi](pcimportbyidxi.html)

[pcimportbyidxp](pcimportbyidxp.html)

[pcimportbyidxs](pcimportbyidxs.html)

[pcimportbyidxv](pcimportbyidxv.html)

[pciterate](pciterate.html)

[pcline](pcline.html)

[pcline_radius](pcline_radius.html)

[pcnumfound](pcnumfound.html)

[pcopen](pcopen.html)

[pcopenlod](pcopenlod.html)

[pcsampleleaf](pcsampleleaf.html)

[pcsegment](pcsegment.html)

[pcsegment_radius](pcsegment_radius.html)

[pcsize](pcsize.html)

[pcunshaded](pcunshaded.html)

[pcwrite](pcwrite.html)

[pgfind](pgfind.html)

[photonmap](photonmap.html)

[texture3d](texture3d.html)

[texture3dBox](texture3dBox.html)

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

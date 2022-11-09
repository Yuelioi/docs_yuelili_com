---
title: solvecurve
order: 28
category:
  - vex
---

自 17.5 以来

`vector [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

返回一个代表局部骨骼旋转的向量或矩阵 3 阵列。角度的单位是度。

## Arguments

`op`

SOP 的路径来评估一条曲线。

`outlength`

返回解决方案结束时的曲线长度。这与所有长度数组的总和不同。

`outpos`

返回最后一个关节的计算位置。

`lengths`

所有骨头的长度来解决。

`closed`

关闭曲线。

`orienttonormal`

使用曲线的法线来确定骨骼的方向。

`normalmode`

定义如何从控制点计算出法线/扭曲。

使用`$HH/vex/include/math.h`中定义的常数。

`tangent`

一个切线矢量，用于确定曲线端点的方向。

`points`

一个向量数组，用来作为定义曲线的点。

`normals`

一个向量数组，用来作为定义曲线的法线。

`twists`

一个可选的浮动数组，用来作为定义曲线的扭曲角度（度）。

`initialtwists`

一个可选的浮动数组，用来作为定义曲线的初始扭转角度。

`normalcalcmethod`

使用 SOP 进行评估时的正常计算方法。(0 默认，1 无，2 用四元数插值，3 用 0,180 范围内的扭转角插值，4 用任何范围内的扭转角插值) 。

`relmat`

一个相对矩阵，用于转换相对于原点的点、法线和切线。这通常是链根的反转矩阵。

`fmt`

要创建的曲线类型。使用`$HH/vex/include/math.h`中定义的常量，或者 0 创建多边形曲线，1 创建贝塞尔曲线，2 创建 NURBS 曲线。

`order`

NURBS 或 Bezier 曲线的曲线顺序。对于多边形曲线，这一点被忽略。

## See also

- [solvefbik](solvefbik.html)
- [solveconstraint](solveconstraint.html)
- [solveik](solveik.html)

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

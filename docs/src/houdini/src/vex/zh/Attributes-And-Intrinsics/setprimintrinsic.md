---
title: setprimintrinsic
order: 73
category:
  - vex
---

`int setprimintrinsic(int geohandle, string name, int prim_num, <type>value, string mode="set")`

`int setprimintrinsic(int geohandle, string name, int prim_num, <type>value[], string mode="set")`

尽管名称是这样，但基元上的一些 "内在 "属性是可写的。

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

`name`

要设置的本征的名称。

`prim_num`

要更改值的基元的编号。

`mode`

(可选）如果给定，这将控制函数如何修改属性中的任何现有值。

`"set"`用给定的值覆盖该属性。| `"add"` 给属性添加值。| `"min", `"minimum"`将属性设置为其本身和值的最小值。|`"max", `"maximum"` 将属性设为其本身和数值的最大值。| `"mult"`, `"multiply"` 将属性值乘以数值。对于矩阵，这将做矩阵乘法。对于向量来说，是分量式的。| `"toggle"`切换属性，与源值无关。对于切换组的成员资格很有用。| `"append"` 对字符串和数组属性有效。将源值附加到原始值的末尾。

## See also

- [setattrib](setattrib.html)
- [setprimattrib](setprimattrib.html)

|
intrinsic

[detailintrinsic](detailintrinsic.html)

[primintrinsic](primintrinsic.html)

[setdetailintrinsic](setdetailintrinsic.html)

[setprimintrinsic](setprimintrinsic.html)

|
prim

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[curvearclen](curvearclen.html)

[hasprimattrib](hasprimattrib.html)

[hedge_prim](hedge_prim.html)

[idtoprim](idtoprim.html)

[inprimgroup](inprimgroup.html)

[nametoprim](nametoprim.html)

[nprimitives](nprimitives.html)

[nprimitivesgroup](nprimitivesgroup.html)

[pointprims](pointprims.html)

[prim](prim.html)

[prim_attribute](prim_attribute.html)

[prim_normal](prim_normal.html)

[primarclen](primarclen.html)

[primattrib](primattrib.html)

[primattribsize](primattribsize.html)

[primattribtype](primattribtype.html)

[primattribtypeinfo](primattribtypeinfo.html)

[primduv](primduv.html)

[primfind](primfind.html)

[primhedge](primhedge.html)

[priminteriorweights](priminteriorweights.html)

[primintrinsic](primintrinsic.html)

[primpoint](primpoint.html)

[primpoints](primpoints.html)

[primuv](primuv.html)

[primuvconvert](primuvconvert.html)

[primvertex](primvertex.html)

[primvertexcount](primvertexcount.html)

[primvertices](primvertices.html)

[removeprim](removeprim.html)

[setprimattrib](setprimattrib.html)

[setprimgroup](setprimgroup.html)

[setprimintrinsic](setprimintrinsic.html)

[setprimvertex](setprimvertex.html)

[vertexcurveparam](vertexcurveparam.html)

[vertexindex](vertexindex.html)

[vertexprim](vertexprim.html)

[vertexprimindex](vertexprimindex.html)

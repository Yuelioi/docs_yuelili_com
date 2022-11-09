---
title: setdetailintrinsic
order: 67
category:
  - vex
---

自 18.0 以来

`int setdetailintrinsic(int geohandle, string name, <type>value, string mode="set")`

`int setdetailintrinsic(int geohandle, string name, <type>value[], string mode="set")`

尽管名字是这样，但细节上的一些 "内在 "属性是可写的。

## Arguments

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](geoself.html) () ("返回当前几何体的句柄。")，这意味着当前节点中的几何体。(这个参数将来可能会被用于允许写入其他几何体)。

`name`

要设置的本征的名称。

`mode`

(可选）如果给定，这将控制函数如何修改属性中的任何现有值。

`"set"`用给定的值覆盖该属性。| `"add"` 给属性添加值。| `"min", `"minimum"`将属性设置为其本身和值的最小值。|`"max", `"maximum"` 将属性设为其本身和数值的最大值。| `"mult"`, `"multiply"` 将属性值乘以数值。对于矩阵，这将做矩阵乘法。对于向量来说，是分量式的。| `"toggle"`切换属性，与源值无关。对于切换组的成员资格很有用。| `"append"` 对字符串和数组属性有效。将源值附加到原始值的末尾。

## See also

- [setattrib](setattrib.html)
- [setdetailattrib](setdetailattrib.html)

|
detail

[adddetailattrib](adddetailattrib.html)

[detail](detail.html)

[detailattrib](detailattrib.html)

[detailattribsize](detailattribsize.html)

[detailattribtype](detailattribtype.html)

[detailattribtypeinfo](detailattribtypeinfo.html)

[detailintrinsic](detailintrinsic.html)

[hasdetailattrib](hasdetailattrib.html)

[removedetailattrib](removedetailattrib.html)

[setdetailattrib](setdetailattrib.html)

[setdetailintrinsic](setdetailintrinsic.html)

|
intrinsic

[detailintrinsic](detailintrinsic.html)

[primintrinsic](primintrinsic.html)

[setdetailintrinsic](setdetailintrinsic.html)

[setprimintrinsic](setprimintrinsic.html)

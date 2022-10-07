---
title: intersect_all
order: 11
category:
  - vex
---

要想只得到*第一个*交点，请使用[intersect](intersect.html)（"这个函数计算射线与几何体的第一个交点"）。

`int intersect\_all(<geometry>geometry, string group, vector orig, vector dir, vector &pos[], int &prim[], vector &uvw[], float tol=0.01, float ttol=0.01 )`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`group`

如果给定，则只与此组中的基元相交。

`orig`

射线原点。

`dir`

射线方向*和最大距离*。这个函数不期望有一个归一化的方向向量。相反，它使用矢量的长度作为搜索的最大距离。

`&pos`

该函数用每一次撞击的世界空间位置来覆盖这个数组。

`&prim`

该函数用被射线击中的基元的基元数来覆盖这个数组。

`&uvw`

该函数用基元上每个交叉点发生的参数化 UVW 坐标来覆盖此数组。

`tol`, `ttol`

`tol`是三维公差。`ttol`是射线公差。在参数化射线容限内的碰撞点，`ttol`将被合并在一起，这对于避免在撞击几何体的边缘时得到额外的交叉点通常很有用。

要获得所有的交叉点而不进行合并，请将`ttol`设为`-1`。

## Returns

交叉点的数量，如果射线没有击中任何东西，则为 "0"。

::: info Note

对元宝几何体进行交集时，不可能确定被击中的元宝的基元数目。在这种情况下，该函数会返回相交几何体中的基元数目。

## See also

- [intersect](intersect.html)

|
intersect

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)

|
ray

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[metamarch](metamarch.html)

[uvintersect](uvintersect.html)

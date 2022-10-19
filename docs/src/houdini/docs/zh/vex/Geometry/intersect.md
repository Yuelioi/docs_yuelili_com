---
title: intersect
order: 10
category:
  - vex
---

要获得沿射线的*所有*交点的列表，请使用[intersect_all](intersect_all.html)（"计算指定射线与几何体的所有交点。"）。

`int intersect(<geometry>geometry, vector orig, vector dir, vector &p, float &u, float &v)`

`int intersect(<geometry>geometry, vector orig, vector dir, vector &p, float &u, float &v, ...)`

计算指定射线与几何体的第一个交点。要获得沿矢量的所有交点，请使用[intersect_all](intersect_all.html) () ("计算指定射线与几何体的所有交点。")代替。变量参数""farthest""可以用来指示是否返回最后的交点而不是第一个交点。

`int intersect(<geometry>geometry, vector orig, vector dir, vector &p, vector &uvw)`

计算指定射线与几何体的第一个交点。要获得沿矢量的所有交点，请使用[intersect_all](intersect_all.html) () ("计算指定射线与几何体的所有交点。")来代替。

`int intersect(<geometry>geometry, string group, vector orig, vector dir, vector &p, vector &uvw)`

计算指定射线与给定组中的基元的交点。

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

`&p`

如果射线与一个基元相交，此变量会被覆盖为世界空间中的相交位置。

`&u`, `&v`, `&uvw`

如果射线与一个基元相交，这个/这些变量就会被基元上的参数化相交位置所覆盖。

## Returns

相交的基元数，如果有错误或射线没有与任何东西相交，则为`-1'。

::: info Note

对元宝几何体进行交集时，不可能确定被击中的元宝的基元数目。在这种情况下，该函数会返回相交几何体中的基元数目。

## Examples



```c
// Intersect against the second input's geometry, using a ray at the current
// point's position and in the direction of its velocity vector.
vector origin = @P;
float max\_dist = 1000;
vector dir = max\_dist \* normalize(@v);

vector isect\_pos;
float isect\_u, isect\_v;
int isect\_prim = intersect(@OpInput2, origin, dir, isect\_pos, isect\_u, isect\_v);

// Return the farthest intersection instead.
isect\_prim = intersect(@OpInput2, origin, dir, isect\_pos, isect\_u, isect\_v, "farthest", 1);

```

## See also

- [intersect_all](intersect_all.html)

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

|
search

[findattribval](findattribval.html)

[findattribvalcount](findattribvalcount.html)

[idtopoint](idtopoint.html)

[idtoprim](idtoprim.html)

[intersect](intersect.html)

[nametopoint](nametopoint.html)

[nametoprim](nametoprim.html)

[nuniqueval](nuniqueval.html)

[primfind](primfind.html)

[uniqueval](uniqueval.html)

[uniquevals](uniquevals.html)

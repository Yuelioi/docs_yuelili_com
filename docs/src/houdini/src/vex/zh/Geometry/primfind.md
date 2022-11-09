---
title: primfind
order: 27
category:
  - vex
---

`int [] primfind(<geometry>geometry, vector min, vector max)`

查找边界框与给定框重叠的所有基元。

`int [] primfind(<geometry>geometry, string group, vector min, vector max)`

查找一个组中边界框与给定框重叠的所有基元。

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，`.bgeo'），以便从中读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`min`, `max`

这些向量定义了要搜索的边界盒的最小和最大角。

`group`

如果给定，则只匹配此组中的基元。空组字符串将包括所有基元。该字符串支持 "0-10 "和"@Cd.x>0 "等临时模式。

## Returns

一个原始数的数组。

::: info Note

这些函数的目的是作为一种优化来寻找特定区域内的基元进行处理。例如，为了从一个输入中找到与另一个输入的多边形相交的所有曲线，我们可能会天真地遍历每条曲线的所有多边形，以确定它们的交集。为了加快这个过程，我们可以使用这些函数找到哪些基元可能与某条特定的曲线相交，然后只对可能相交的基元进行迭代。这大大改善了性能，因为`primfind`使用底层的树状结构来加快搜索速度。

## Examples



删除可能与以原点为中心的单位盒子相交的基元。

```c
int[] prims = primfind(geometry, {-0.5, -0.5, -0.5}, {0.5, 0.5, 0.5});
foreach ( int prim; prims )
{
 removeprim("primitives.bgeo", prim, 1);
}

```

Alternatively, we can use a query bounding box from an auxiliary source:

```c
vector min, max;
getbbox("bbox.bgeo", min, max);
int[] prims = primfind(geometry, min, max);
foreach ( int prim; prims )
{
 removeprim("primitives.bgeo", prim, 1);
}

```

To see the performance benefit of `primfind`, compare it to the following equivalent
implementation of the function above:

```c
float tol = 1e-5;
vector min, max;
getbbox("bbox.bgeo",min,max);
int n = nprimitives(0);
for ( int prim = 0; prim < n; ++prim )
{
 int[] verts = primvertices("primitives.bgeo", prim);

 // compute primitive bounding box and store it in prim_min and prim_max
 vector vert_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[0]));
 vector prim_min = vert_pos, prim_max = vert_pos;
 for ( int v = 1; v < len(verts); ++v )
 {
 vert_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[v]));
 prim_min = min(prim_min, vert_pos);
 prim_max = max(prim_max, vert_pos);
 }

 // bounding box intersection test
 if ( prim_max.x - min.x < -tol ) continue;
 if ( prim_max.y - min.y < -tol ) continue;
 if ( prim_max.z - min.z < -tol ) continue;
 if ( prim_min.x - max.x > tol ) continue;
 if ( prim_min.y - max.y > tol ) continue;
 if ( prim_min.z - max.z > tol ) continue;
 removeprim("primitives.bgeo", prim, 1);
}

```

## See also

- [getbbox](getbbox.html)
- [pcfind](pcfind.html)

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

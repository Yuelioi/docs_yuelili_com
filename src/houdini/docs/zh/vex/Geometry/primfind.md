---
title: primfind
order: 26
category:
  - houdini
---
    
## 描述

Returns a list of primitives potentially intersecting a given bounding box.

```c
int [] primfind(<geometry>geometry, vector min, vector max)
```

Find all the primitives whose bounding boxes overlap the given box.

查找其边界框与给定框重叠的所有基元。

```c
int [] primfind(<geometry>geometry, string group, vector min, vector max)
```

Find all primitives in a group whose bounding boxes overlap the given box.

查找一个组中边界框与给定框重叠的所有基元。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

在节点的上下文中运行时（例如 wrangle SOP），这个参数可以是一个整数，代表要从那里读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`min`, `max`

These vectors define the minimum and maximum corners of the bounding box to
search.

这些向量定义了要搜索的边界盒的最小和最大角。

`group`

If given, only match primitives in this group.An empty group string will
include all primitives.The string supports Ad-hoc patterns like `0-10` and
`@Cd.x>0`.

如果给定，则只匹配此组中的基元。

Returns

An array of primitive numbers.

一个空的组字符串将包括所有基元。

Note

These functions are intended to be used as an optimization to finding
primitivesin a particular area for processing.For instance, to find all the
curvesfrom one input intersecting polygons on another input, we may naively
iterateover all polygons for each curve to determine their intersection.To
speed thisprocess, we may find which primitives may intersect a particular
curve usingthese functions, and iterate solely over the potentially
intersectingprimitives.This significantly improves performance since
`primfind` uses anunderlying tree structure to speed up search.

该字符串支持特设模式 like0-10and@Cd.x>0。

## Examples

Remove primitives that may be intersecting the unit box centered at the
origin:

一个基元数组。

    int[] prims = primfind(geometry, {-0.5, -0.5, -0.5}, {0.5, 0.5, 0.5});foreach ( int prim; prims ){removeprim("primitives.bgeo", prim, 1);}

Alternatively, we can use a query bounding box from an auxiliary source:

这些函数旨在被用作优化，以寻找特定区域内的基元进行处理

    vector min, max;getbbox("bbox.bgeo", min, max);int[] prims = primfind(geometry, min, max);foreach ( int prim; prims ){removeprim("primitives.bgeo", prim, 1);}

To see the performance benefit of `primfind`, compare it to the following
equivalentimplementation of the function above:

在一个特定区域内进行处理的优化。 例如，要找到所有的曲线

    float tol = 1e-5;vector min, max;getbbox("bbox.bgeo",min,max);int n = nprimitives(0);for ( int prim = 0; prim < n; ++prim ){  int[] verts = primvertices("primitives.bgeo", prim);  // compute primitive bounding box and store it in prim_min and prim_max  vector vert_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[0]));  vector prim_min = vert_pos, prim_max = vert_pos;  for ( int v = 1; v < len(verts); ++v )  {    vert_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[v]));    prim_min = min(prim_min, vert_pos);    prim_max = max(prim_max, vert_pos);  }  // bounding box intersection test  if ( prim_max.x - min.x < -tol ) continue;  if ( prim_max.y - min.y < -tol ) continue;  if ( prim_max.z - min.z < -tol ) continue;  if ( prim_min.x - max.x > tol ) continue;  if ( prim_min.y - max.y > tol ) continue;  if ( prim_min.z - max.z > tol ) continue;  removeprim("primitives.bgeo", prim, 1);}

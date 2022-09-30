---
title: intersect_all
order: 10
category:
  - houdini
---
    
## 描述

Computes all intersections of the specified ray with geometry.

To get only the _first_ intersection, use [intersect](intersect.html "This
function computes the first intersection of a ray with geometry.").

要想只得到第一个交叉点，请使用 intersect。

`int intersect_all(<geometry>geometry, string group, vector orig, vector dir, vector &pos[], int &prim[], vector &uvw[], float tol=0.01, float ttol=0.01 )`

intintersect_all(<geometry>geometry,stringgroup,vectororig,vectordir,vector&pos[],int&prim[],vector&uvw[],floatol=0.01,floatttol=0.01
)

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`group`

If given, only intersect primitives in this group.

如果给定，则只与该组中的基元相交。

`orig`

The ray origin point.

射线原点。

`dir`

The ray direction _and maximum distance_.This function does not expect a
normalized direction vector.Instead, it uses the length of the vector as the
maximum distance to search.

射线方向和最大距离。

`&pos`

The function overwrites this array with the world space positions of each hit.

这个函数并不期望有一个归一化的方向向量。

`&prim`

The function overwrites this array with the primitive numbers of the
primitives hit by the ray.

相反，它使用矢量的长度作为搜索的最大距离。

`&uvw`

The function overwrites this array with the parametric UVW coordinates of
where each intersection occurred on the primitive.

该函数用每个命中的世界空间位置覆盖这个数组。

`tol`, `ttol`

`tol` is the 3D tolerance. `ttol` is the ray tolerance.Collision points within
the parametric ray tolerance, `ttol` will be mergedtogether, often useful to
avoid getting extra intersects when hitting the edgesof geometry.

这个函数用被射线击中的基元的基元数来覆盖这个数组。

To get _all_ intersections without merging, set `ttol` to `-1`.

该函数用每个基元上发生的交点的参数化 UVW 坐标来覆盖这个数组。

Returns

The number of intersections, or `0` if the ray didn‘t hit anything.

ttolis 是三维公差。ttolis 是射线公差。

Note

When intersections are performed against metaball geometry, it isimpossible to
determine the primitive number of the metaball whichwas hit. In this case, the
function returns the number of primitivesin the intersection geometry.

在参数化光线容差范围内的碰撞点，ttol 将被合并到一起。

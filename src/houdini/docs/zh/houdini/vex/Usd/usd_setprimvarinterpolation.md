---
title: usd_setprimvarinterpolation
order: 133
category:
  - houdini
---
    
## 描述

Sets the interpolation of a primvar.

| Since | 18.0 |
| ----- | ---- |

`int usd_setprimvarinterpolation(int stagehandle, string primpath, string name, string interpolation)`

This function sets the interpolation style of the given primvar.

此函数设置给定 primvar 的插值样式。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

Primvar name (without namespace).

Primvar 名称（无命名空间）。

`interpolation`

The new interpolation style for the primvar.

基元变量的新插值样式。

The standard interpolation styles are

标准的插值方式有

- “constant” - same value over the entire surface (i.e., detail)

"恒定"--整个表面的数值相同（即细节）。

- “uniform” - one value for each uv patch or a face (i.e., primitive)

"统一"--每个 uv 补丁或面都有一个值（即原始）。

- “vertex” - values interpolated between each vertex using surface‘sbasis function (i.e., point)

"顶点"- 每个顶点之间使用曲面的基础函数插值（即点）。

- “varying” - four values interpolated over uv patch or a face (i.e., vertex)

"varying（变化的）--在 uv 补丁或一个面（即顶点）上插值的四个值

- “faceVarying” - for polygons and subdivision surfaces, four values are interpolated over each face of the mesh (i.e., vertex)

"faceVarying"--对于多边形和细分表面，在网格的每个面上（即顶点）插值四个值。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the primvar's interpolation style.usd_setprimvarinterpolation(0, "/geo/mesh", "primvar_name", "faceVarying");

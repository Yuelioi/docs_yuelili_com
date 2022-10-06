---
title: usd_iprimvarinterpolation
order: 52
category:
  - houdini
---
    
## 描述

Returns the element size of the primvar directly on the USD primitive or on
USD primitive‘sancestor.

| Since | 19.0 |
| ----- | ---- |

`string usd_iprimvarinterpolation(<stage>stage, string primpath, string name)`

This function returns the interpolation style of the primvar found directly on
the given primitive or inherited from primitive‘sancestor. E.g.“constant”,
“varying”, etc.

此函数返回直接在给定基元上找到的或从基元的祖先继承的 primvar 的插值样式。例如，"常数"、"变化 "等。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入数字（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`name`

Primvar name (without namespace).

Primvar 名称（无名称空间）。

Returns

The primvar‘sinterpolation. The standard interpolation styles are:

Primvarâs 插值。标准的插值方式是。

- “constant” - same value over the entire surface (i.e., detail)

"恒定"--整个表面的数值相同（即细节）。

- “uniform” - one value for each uv patch or a face (i.e., primitive)

"均匀"--每个 uv 补丁或面都有一个值（即原始）。

- “vertex” - values interpolated between each vertex using surface‘sbasis function (i.e., point)

"顶点"--每个顶点之间用曲面的基础函数插值（即点）。

- “varying” - four values interpolated over uv patch or a face (i.e., vertex)

"varying（变化的）--在 uv 补丁或一个面（即顶点）上插值的四个值

- “faceVarying” - for polygons and subdivision surfaces, four values are interpolated over each face of the mesh (i.e., vertext)

"faceVarying"--对于多边形和细分表面，在网格的每个面上内插四个值（即顶点）。

## Examples

    // Get the interpolation style of the primvar on the cube or its parent.string interpolation = usd_iprimvarinterpolation(0, "/geo/cube", "primvar_name");

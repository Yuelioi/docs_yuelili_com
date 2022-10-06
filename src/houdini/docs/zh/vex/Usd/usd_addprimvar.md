---
title: usd_addprimvar
order: 7
category:
  - houdini
---
    
## 描述

Creates a primvar of a given type on a primitive.

| Since | 18.0 |
| ----- | ---- |

`int usd_addprimvar(int stagehandle, string primpath, string name, string typename)`

`int usd_addprimvar(int stagehandle, string primpath, string name, string typename, string interpolation)`

This function adds a primvar of a given type to the primitive, if such primvar
is not part of a schema. It is useful for controlling the exact type of a
custom primvar. For primvars defined by primitive‘sschema, this call has no
effect, because the schema already determines their type.

此函数向基元添加了一个给定类型的 primvar，如果该 primvar 不属于模式的一部分。它对于控制自定义 primvar 的确切类型很有用。对于由
primâs 模式定义的 primvar，此调用没有效果，因为模式已经确定了它们的类型。

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

基元名称（无命名空间）。

`typename`

The name or an alias of the type.

类型的名称或别名。

`interpolation`

The name of the interpolation to be used for this primvar (e.g., “constant”,
“vertex”, “faceVarying”, etc).

将用于此基元变量的插值的名称（例如，"常量"、"顶点"、"面孔变化 "等）。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Adds a half-precision float primvar and sets its falue.usd_addprimvar(0, "/geo/sphere", "half_primvar", "half3");usd_setprimvar(0, "/geo/sphere", "half_primvar", {1.25, 1.50, 1.75});// Adds a color primitive with 'vertex' interpolation.usd_addprimvar(0, pp, "color_primvar", "color3d[]", "vertex");usd_setprimvar(0, pp, "color_primvar", vector[](array({1,0,0}, {0,1,0}, {0,0,1})));

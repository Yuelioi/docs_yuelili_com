---
title: usd_addattrib
order: 1
category:
  - houdini
---
    
## 描述

Creates an attribute of a given type on a primitive.

| Since | 18.0 |
| ----- | ---- |

`int usd_addattrib(int stagehandle, string primpath, string name, string typename)`

This function adds an attribute of a given type to the primitive, if such
attribute is not part of a schema. It is useful for controlling the exact type
of a custom attribute. For attributes defined by primitive‘sschema, this
call has no effect, because the schema already determines their type.

此函数向基元添加了一个给定类型的属性，如果该属性不是模式的一部分。它对于控制自定义属性的确切类型很有用。对于由基元模式定义的属性，此调用没有效果，因为模式已经确定了它们的类型。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

Attribute name.

属性名称。

`typename`

The name or an alias of the type.

类型的名称或别名。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Adds a half-precision float attribute and sets its falue.usd_addattrib(0, "/geo/sphere", "half_attrib", "half3");usd_setattrib(0, "/geo/sphere", "half_attrib", {1.25, 1.50, 1.75});

---
title: usd_setattrib
order: 120
category:
  - houdini
---
    
## 描述

Sets the value of an attribute.

| Since | 17.5 |
| ----- | ---- |

`int usd_setattrib(int stagehandle, string primpath, string name, <type>value)`

`int usd_setattrib(int stagehandle, string primpath, string name, <type>value[])`

This function sets the attribute value.

此函数设置属性值。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个写到阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

Attribute name.

属性名称。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the value of some attributes.usd_setattrib(0, "/geo/sphere", "float_attrib", 0.25);usd_setattrib(0, "/geo/sphere", "string_attrib", "foo bar baz");usd_setattrib(0, "/geo/sphere", "vector_attrib", {1.25, 1.50, 1.75});float f_arr[] = {0, 0.25, 0.5, 0.75, 1};usd_setattrib(0, "/geo/sphere", "float_array_attrib", f_arr);

---
title: usd_setattribelement
order: 121
category:
  - houdini
---
    
## 描述

Sets the value of an element in an array attribute.

| Since | 18.0 |
| ----- | ---- |

`int usd_setattribelement(int stagehandle, string primpath, string name, int index, <type>value)`

This function sets the element value in an array attribute.

该函数设置一个数组属性中的元素值。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个要写到的阶段的句柄。目前唯一有效的值是 0，这意味着在一个节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

Attribute name.

属性名称。

`index`

An index of an element in the array attribute.

数组属性中的一个元素的索引。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the value of element at index 2 in the array attribute.usd_setattribelement(0, "/geo/sphere", "float_array_attrib", 2, 0.25);

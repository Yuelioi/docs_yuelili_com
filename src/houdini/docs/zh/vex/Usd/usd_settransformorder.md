---
title: usd_settransformorder
order: 136
category:
  - houdini
---
    
## 描述

Sets the primitive‘stransform order

| Since | 18.0 |
| ----- | ---- |

`int usd_settransformorder(int stagehandle, string primpath, string transformorder[])`

This function sets the primitive‘stransform order. Transform order is a
sequence of transform operations, whose full names are stored in
`xformOpOrder` attribute as a string array. Thus, this function sets that
attribute.

此函数设置基元的转换顺序。变换顺序是变换操作的序列，其全名作为一个字符串数组存储在 xformOpOrderattribute 中。因此，此函数会设置该属性。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个写到阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

```c
transformorder
```

The transform order to set on the primitive. It is a list of transform
operation full names.

要在基元上设置的转换顺序。它是一个转换操作全名的列表。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时则为 1。

## Examples

    string ops[] = {"xformOp:translate:xform_cube_t", "xformOp:rotateZ:xform_cube_r", "xformOp:rotateXYZ:xform_cube_r", "xformOp:scale:xform_cube_s"};usd_settransformorder(0, "/geo/cube", ops);

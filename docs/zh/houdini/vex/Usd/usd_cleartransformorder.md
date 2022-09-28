---
title: usd_cleartransformorder
order: 27
category:
  - houdini
---
    
## 描述

Clears the primitive‘stransform order

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_cleartransformorder(int stagehandle, string primpath)
```

This function clears the primitive‘stransform order.Transform order is a
sequence of transform operations, whose full names are stored in
`xformOpOrder` attribute as a string array.Thus, this function clears that
attribute.

此函数清除了基元的转换顺序。 变换顺序是变换操作的序列，其全名作为一个字符串数组存储在 xformOpOrderattribute 中。
因此，此函数会清除该属性。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

要写到的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    usd_cleartransformorder(0, "/geo/cone");

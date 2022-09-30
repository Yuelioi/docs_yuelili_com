---
title: usd_addprim
order: 6
category:
  - houdini
---
    
## 描述

Creates a primitive of a given type.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_addprim(int stagehandle, string primpath, string typename)
```

This function creates a new primitive of a given type and at a given path, if
it one does not exist yet.

此函数创建了一个给定类型和给定路径的新基元，如果该基元尚不存在的话。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`typename`

The name or an alias of the type.

类型的名称或别名。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Adds a sphere primitive.usd_addprim(0, "/geo/sphere", "Sphere");

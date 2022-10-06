---
title: usd_settransformreset
order: 137
category:
  - houdini
---
    
## 描述

Sets/clears the primitive‘stransform reset flag

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_settransformreset(int stagehandle, string primpath, int flag)
```

This function sets the primitive‘stransform reset flag, i.e., whether the
primitive uses the world co-ordinate system as the initial space, or whether
it inherits the space transformation from the parent (default).

此函数设置基元的转换重置标志，即基元是否使用世界坐标系作为初始空间，或是否从父级继承空间转换（默认）。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

通向基元的路径。

`flag`

If `1`, the primitive will have its transform reset, i.e. will use the world
co-ordinate system as the initial space. If `0` it will inherit the space
transform from the parent.

如果是 1，基元将重置其转换，即使用世界坐标系作为初始空间。如果是 0，它将从父级继承空间变换。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Ignore parent's transform.usd_settransformreset(0, "/geo/cone", 1);

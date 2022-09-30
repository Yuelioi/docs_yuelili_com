---
title: usd_setkind
order: 126
category:
  - houdini
---
    
## 描述

Sets the primitive‘skind.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_setkind(int stagehandle, string primpath, string kind)
```

This function sets the primitive‘skind.

此函数设置基元的种类。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前，唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

基元的路径。

`kind`

The kind to set the primitive to.

要将基元设为的种类。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时则为 1。

## Examples

    // Set the sphere primitive to be an assembly.usd_setkind(0, "/geo/sphere", "assembly");

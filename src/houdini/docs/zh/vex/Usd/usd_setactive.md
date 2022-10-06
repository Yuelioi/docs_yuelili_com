---
title: usd_setactive
order: 119
category:
  - houdini
---
    
## 描述

Sets the primitive active state.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_setactive(int stagehandle, string primpath, int flag)
```

This function sets the primitive‘sactive state.

此函数设置基元的活动状态。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前，唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

通向基元的路径。

`flag`

Non-zero to make the primitive active or 0 to make it inactive.

非零表示基元处于活动状态，0 则表示基元处于非活动状态。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the sphere primitive as active.usd_setactive(0, "/geo/sphere", true);

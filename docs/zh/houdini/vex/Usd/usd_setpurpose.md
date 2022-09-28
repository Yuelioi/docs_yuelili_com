---
title: usd_setpurpose
order: 134
category:
  - houdini
---
    
## 描述

Sets the primitive‘spurpose.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_setpurpose(int stagehandle, string primpath, string purpose)
```

This function sets the primitive‘spurpose, e.g., “default”, “render”,
“proxy”, “guide”, etc.

此函数设置基元的目的，例如，"默认"、"渲染"、"代理"、"引导 "等。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前，唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`purpose`

The primitive‘spurpose to set.

要设置的基元的目的。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值或失败时 1 的值。

## Examples

    // Set the sphere primitive to be traversable only for rendering.usd_setpurpose(0, "/geo/sphere", "render");

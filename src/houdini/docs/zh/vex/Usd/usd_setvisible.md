---
title: usd_setvisible
order: 140
category:
  - houdini
---
    
## 描述

Makes the primitive visible or invisible.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_setvisible(int stagehandle, string primpath, int flag)
```

This function makes the primitive visible or invisible, depending on the given
flag parameter.

此函数根据给定的标志参数，使基元可见或不可见。

NOTE: This function is similar to

```c
usd_setvisibility()
```

which, in addition to
making a primitive visible or invisible, can also configure it to inherit
visibility from the parent.

注意：此函数类似于 tousd_setvisibility()，除了使基元可见或不可见之外，还可将其配置为从父级继承可见性。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(此参数将来可能会被用于允许向其它阶段写入。)

`primpath`

The path to the primitive.

基元的路径。

`flag`

Non-zero to make the primitive visible or 0 to make it invisible.

非零表示基元可见，0 表示基元不可见。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the sphere primitive as visible.usd_setvisible(0, "/geo/sphere", true);

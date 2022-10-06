---
title: usd_blockprimvarindices
order: 23
category:
  - houdini
---
    
## 描述

Blocks the primvar.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_blockprimvarindices(int stagehandle, string primpath, string name)
```

This function blocks the primvar indices. I.e., removes all time samples and
sets the _block_ as default value. It changes the indexed primvar into a non-
indexed primvar.

此函数封锁了 primvar 指数。即删除所有时间样本并将 block 设置为默认值。它将索引的 primvar 变为非索引的 primvar。

Note, you may also want to block the primvar itself with
[usd_blockprimvar](usd_blockprimvar.html "Blocks the primvar.").

请注意，您可能还想用 usd_blockprimvar 来阻塞 primvar 本身。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，即节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

Primvar name (without namespace).

基元变量名称（不含命名空间）。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Block the primvar indices.usd_blockprimvarindices(0, "/geo/sphere", "primvar_name");

---
title: usd_blockprimvar
order: 22
category:
  - houdini
---
    
## 描述

Blocks the primvar.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_blockprimvar(int stagehandle, string primpath, string name)
```

This function blocks the primvar. I.e., removes all time samples and sets the
_block_ as default value.

此函数封锁了 primvar。即删除所有的时间样本并将 block 设置为默认值。

Note, if primvar is indexed, you may also want to block the indices
with[usd_blockprimvarindices](usd_blockprimvarindices.html "Blocks the
primvar.").

注意，如果 primvar 是有索引的，你可能还想用 usd_blockprimvarindices 来阻塞索引。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

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

    // Block the primvar.usd_blockprimvar(0, "/geo/sphere", "primvar_name");

---
title: usd_setprimvarindices
order: 132
category:
  - houdini
---
    
## 描述

Sets the indices for the given primvar.

| Since | 18.0 |
| ----- | ---- |

`int usd_setprimvarindices(int stagehandle, string primpath, string name, int indices[])`

This function sets the indices for a given primvar, thus making it an indexed
primvar if it was not already.

此函数为给定的 primvar 设置索引，从而使其成为一个有索引的 primvar（如果它还没有）。

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

基元名称（不含命名空间）。

`indices`

The index array to set.

要设置的索引数组。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the primvar's value and indices.float values[] = array(0, 100, 200, 300, 400, 500);int  indices[] = array(5,5,4,4,3,3,2,2,1,1,0,0);usd_setprimvar(0, "/geo/mesh", "primvar_name", values); usd_setprimvarindices(0, "/geo/mesh", "primvar_name", indices);

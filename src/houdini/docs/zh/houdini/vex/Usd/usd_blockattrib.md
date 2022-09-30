---
title: usd_blockattrib
order: 21
category:
  - houdini
---
    
## 描述

Blocks the attribute.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_blockattrib(int stagehandle, string primpath, string name)
```

This function blocks the attribute. I.e., removes all time samples and sets
the _block_ as default value.

这个函数阻止了这个属性。即，删除所有的时间样本并将 block 设置为默认值。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

要写入的阶段的句柄。目前唯一有效的值是 0，这意味着在一个节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

Attribute name.

属性名称。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Block the attribute.usd_blockattrib(0, "/geo/sphere", "attribute_name");

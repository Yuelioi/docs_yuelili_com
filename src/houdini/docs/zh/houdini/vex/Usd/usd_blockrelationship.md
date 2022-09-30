---
title: usd_blockrelationship
order: 24
category:
  - houdini
---
    
## 描述

Blocks the primitive‘srelationship

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_blockrelationship(int stagehandle, string primpath, string name)
```

This function blocks the primitive‘srelationship, i.e., clears the targets
from the relationship.

此函数阻断基元的关系，即清除关系中的目标。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

The relationship name.

关系名称。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值或失败时 1 的值。

## Examples

    // Clear the the cube's relationship.usd_blockrelationship(0, "/geo/cube", "relationship_name");

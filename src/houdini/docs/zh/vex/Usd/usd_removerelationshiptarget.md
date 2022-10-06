---
title: usd_removerelationshiptarget
order: 118
category:
  - houdini
---
    
## 描述

Remove a target from the primitive‘srelationship

| Since | 18.0 |
| ----- | ---- |

`int usd_removerelationshiptarget(int stagehandle, string primpath, string name, string target)`

This function removes a target from the primitive‘srelationship.

此函数从基元关系中删除一个目标。

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

`target`

The the target path to remove.

要删除的目标路径。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值或失败时 1 的值。

## Examples

    // Remove the sphere from cube's relationship.usd_removerelationshiptarget(0, "/geo/cube", "relationship_name", "/geo/sphere");

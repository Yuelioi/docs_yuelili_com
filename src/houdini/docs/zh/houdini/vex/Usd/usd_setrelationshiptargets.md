---
title: usd_setrelationshiptargets
order: 135
category:
  - houdini
---
    
## 描述

Sets the targets in the primitive‘srelationship

| Since | 18.0 |
| ----- | ---- |

`int usd_setrelationshiptargets(int stagehandle, string primpath, string name, string targets[])`

This function sets the targets in the primitive‘srelationship.

此函数设置基元关系中的目标。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着一个节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

The relationship name.

关系名称。

`targets`

The the target paths to set the relationship to.

要将关系设为的目标路径。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值或失败时 1 的值。

## Examples

    // Set the cube's relationship.usd_setrelationshiptargets(0, "/geo/cube", "new_relation", array("/geo/sphere6", "/geo/sphere7"));

---
title: usd_setvariantselection
order: 138
category:
  - houdini
---
    
## 描述

Sets the selected variant in the given variant set.

| Since | 17.5 |
| ----- | ---- |

`int usd_setvariantselection(<stage>stage, string primpath, string variantset, string variant)`

This function sets the selected variant in a given variant set.

该函数在一个给定的变体集中设置所选的变体。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

要写入的阶段的句柄。目前，唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`variantset`

The variant set name.

变体集名称。

`variant`

The name of a variant to select.

要选择的变体的名称。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the variant "cone" in a variant set "shapes" on the "shape_shifter" primitive.usd_setvariantselection(0, "/geo/shape_shifter", "shapes", "cone");

---
title: usd_setprimvar
order: 129
category:
  - houdini
---
    
## 描述

Sets the value of a primvar.

| Since | 18.0 |
| ----- | ---- |

`int usd_setprimvar(int stagehandle, string primpath, string name, <type>value)`

`int usd_setprimvar(int stagehandle, string primpath, string name, <type>value[])`

This function sets the primvar‘svalue.

此函数设置 primvarâs 的值。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前，唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，以允许向其它阶段写入。)

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

    // Set the value of some primvars.usd_setprimvar(0, "/geo/sphere", "float_primvar", 0.25);usd_setprimvar(0, "/geo/sphere", "string_primvar", "foo bar baz");usd_setprimvar(0, "/geo/sphere", "vector_primvar", {1.25, 1.50, 1.75});float f_arr[] = {0, 0.25, 0.5, 0.75, 1};usd_setprimvar(0, "/geo/sphere", "float_array_primvar", f_arr);

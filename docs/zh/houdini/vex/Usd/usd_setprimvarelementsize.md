---
title: usd_setprimvarelementsize
order: 131
category:
  - houdini
---
    
## 描述

Sets the element size of a primvar.

| Since | 18.0 |
| ----- | ---- |

`int usd_setprimvarelementsize(int stagehandle, string primpath, string name, int size)`

This function sets the element size of a given primvar.

此函数设置一个给定的 primvar 的元素大小。

The primvar element size applies to array primvars, but it does not encode the
length of the array. It specifies how many consecutive array elements should
be taken as an atomic element to be interpolated over a gprim. So, on a mesh,
array length relates to element size like this `array_length = element_size * face_count`.

primvar 元素大小适用于数组 primvars，但它不对数组的长度进行编码。它指定了多少个连续的数组元素应该被当作一个原子元素来插值在一个 gprim 上。所以，在一个网格上，数组长度与元素大小的关系是这样的 array_length
= element_size \* face_count.

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个写到阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(将来可能会使用此参数，允许向其它阶段写入。)

`primpath`

The path to the primitive.

到基元的路径。

`name`

Primvar name (without namespace).

基元变量名称（不含命名空间）。

`size`

The new element size for the primvar.

基元变量的新元素大小。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the primvar's element size to 2.usd_setprimvarelementsize(0, "/geo/mesh", "primvar_name", 2);

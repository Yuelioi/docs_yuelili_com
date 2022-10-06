---
title: usd_primvarelementsize
order: 105
category:
  - houdini
---
    
## 描述

Returns the element size of the primvar directly from the USD primitive.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_primvarelementsize(<stage>stage, string primpath, string name)
```

This function returns the element size of a primvar found directly on the
given primitive.

此函数返回直接在给定基元上找到的一个 primvar 的元素大小。

The primvar element size applies to array primvars, but it does not encode the
length of the array. It specifies how many consecutive array elements should
be taken as an atomic element to be interpolated over a gprim. So, on a mesh,
array length relates to element size like this `array_length = element_size * face_count`.

primvar 元素大小适用于数组
primvar，但它并不对数组的长度进行编码。它指定了应将多少个连续的数组元素作为一个原子元素在 gprim 上进行插值。因此，在一个网格上，数组长度与元素大小的关系是这样的 array_length
= element_size \* face_count.

In most cases, the element size is `1`.

在大多数情况下，元素大小是 1。

Note, element size is a USD concept and differs from the VEX tuple size
obtained with [usd_primvarsize](usd_primvarsize.html) "Returns the tuple size
of the primvar directly on the USD primitive.") or the VEX array length
obtained with [usd_primvarlen](usd_primvarlen.html) "Returns the length of the
array primvar directly on the USD primitive.").

注意，元素大小是一个 USD 概念，与用 usd_primvarsize 得到的 VEX 元组大小或用 usd_primvarlen 得到的 VEX 数组长度不同。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`name`

Primvar name (without namespace).

基元名称（不含命名空间）。

Returns

The primvar‘selement size.

Primvarâs 元素大小。

## Examples

    // Get the element size of a primvar on the cube primitive.int element_size = usd_primvarelementsize(0, "/geo/cube", "primvar_name");

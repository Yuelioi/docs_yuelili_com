---
title: usd_isindexediprimvar
order: 67
category:
  - houdini
---
    
## 描述

Checks if there is an indexed primvar directly on the USD primitive or on USD
primitive‘sancestor.

| Since | 19.0 |
| ----- | ---- |

```c
int  usd_isindexediprimvar(<stage>stage, string primpath, string name)
```

This function checks whether the given primvar is indexed, if it‘sfound
directly on the given primitive or is inherited from primitive‘sancestor.

此函数检查给定的 primvar 是否有索引，如果它直接在给定的 primitive 上找到或从 primitiveâs 祖先继承。

Some primvars may contain a compacted array of unique values, and an
additional array of indices into the value array. They are called indexed
primvars. The length of the value array depends on the number of unique
elements, but the length of the index array corresponds to the number of
entities the primvar applies to.

有些基元可能包含一个唯一值的压缩数组，以及一个进入值数组的额外索引数组。它们被称为有索引的基元。值数组的长度取决于唯一元素的数量，但索引数组的长度与 primvar 适用的实体的数量相对应。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`name`

Primvar name (without namespace).

Primvar 名称（不含名称空间）。

Returns

`1` if the primvar exists and is indexed, or `0` otherwise.

如果 primvar 存在并被索引，则为 1，否则为 0。

## Examples

    // Check if primvar "some_primvar" is indexed on sphere or its ancestor.int is_indexed = usd_isindexedprimvar(0, "/geometry/sphere", "some_primvar");

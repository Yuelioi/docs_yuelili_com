---
title: usd_iprimvarindices
order: 51
category:
  - houdini
---
    
## 描述

Returns the index array of an indexed primvar directly on the USD primitive or
on USD primitive‘sancestor.

| Since | 19.0 |
| ----- | ---- |

```c
int [] usd_iprimvarindices(<stage>stage, string primpath, string name)
```

`int [] usd_iprimvarindices(<stage>stage, string primpath, string name, float timecode)`

This function returns the index array of an indexed primvar found directly on
the given primitive or inherited from primitive‘sancestor.

此函数返回直接在给定基元上找到的或从基元的祖先继承的有索引的 primvar 的索引阵列。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`name`

Primvar name (without namespace).

Primvar 名称（不含名称空间）。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元时间代码大致对应于胡迪尼中的一个帧。如果未给出，则使用与当前帧对应的时间代码。

Returns

The index array of an indexed primvar, or zero/empty value if the primvar does
not exist or is not indexed. Use [usd_isiprimvar](usd_isiprimvar.html "Checks
if the primitive or its ancestor has a primvar of the given name.") if you
want to check whether the primvar exists and
[usd_isindexediprimvar](usd_isindexediprimvar.html "Checks if there is an
indexed primvar directly on the USD primitive or on USD primitive‘s
ancestor.") to check whether it is indexed.

有索引的 primvar 的索引数组，如果 primvar 不存在或没有索引，则为零/空值。如果你想检查 primvar 是否存在，请使用 usd_isiprimvar，如果想检查它是否被索引，请使用 usd_isindexediprimvar。

## Examples

    // Get the index array of an indexed primvar.int indices[] = usd_iprimvarindices(0, "/geo/cube", "indexed_primvar_name");

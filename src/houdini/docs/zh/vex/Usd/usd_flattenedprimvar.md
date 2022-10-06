---
title: usd_flattenedprimvar
order: 37
category:
  - houdini
---
    
## 描述

Reads the value of an flattened primvar directly from the USD primitive.

| Since | 18.0 |
| ----- | ---- |

```c
<type>[] usd_flattenedprimvar(<stage>stage, string primpath, string name)
```

`<type>[] usd_flattenedprimvar(<stage>stage, string primpath, string name, float timecode)`

This function returns a value of a flattened primvar on a given primitive.

此函数返回一个给定基元上的扁平化 primvar 的值。

Some primvars can be indexed, where the primvar is a compacted array of unique
values, and there is an index array to map an entity to the value element.
This function expands the compacted array by using the index array, and
returns the expanded array of values.

有些 primvar 可以被索引，其中 primvar
是一个包含唯一值的压缩数组，并且有一个索引数组用于将实体映射到值元素。此函数通过使用索引数组扩展压缩的数组，并返回扩展的值数组。

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

Primvar 名称（不含名称空间）。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元时间代码大致对应于胡迪尼中的一个帧。如果未给出，则使用与当前帧对应的时间代码。

Returns

The flattened value of an existing primvar, or zero/empty value if the primvar
does not exist. Use [usd_isprimvar](usd_isprimvar.html "Checks if the
primitive has a primvar of the given name.") if you want to check whether the
primvar exists.

现有 primvar 的扁平化值，如果 primvar 不存在，则为零/空值。如果您想检查 primvar 是否存在，请使用 usd_isprimvar。

## Examples

    // Get the value of a flattened primvar on the cube primitive.float flat_values[] = usd_flattenedprimvar(0, "/geo/cube", "primvar_name");f[]@flat_primvar_at_current_frame = usd_flattenedprimvar(0, "/geo/sphere", "bar");f[]@flat_primvar_at_frame_7    = usd_flattenedprimvar(0, "/geo/sphere", "bar", 7.0);

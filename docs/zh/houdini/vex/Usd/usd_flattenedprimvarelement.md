---
title: usd_flattenedprimvarelement
order: 38
category:
  - houdini
---
    
## 描述

Reads an element value of a flattened array primvar directly from a USD
primitive.

| Since | 18.0 |
| ----- | ---- |

`<type> usd_flattenedprimvarelement(<stage>stage, string primpath, string name, int index)`

`<type> usd_flattenedprimvarelement(<stage>stage, string primpath, string name, int index, float timecode)`

This function returns a value of an element of a flattened array primvar on a
given primitive.

此函数返回一个给定基元上的扁平化数组 primvar 的一个元素的值。

Some primvars can be indexed, where the primvar is a compacted array of unique
values, and there is an index array to map an entity to the value element.
This function expands the compacted array by using the index array, and
returns element value from the expanded array at a given index.

有些 primvar 可以被索引，其中 primvar
是由唯一值组成的压实数组，并且有一个索引数组用于将一个实体映射到值元素。此函数通过使用索引数组扩展压缩数组，并从扩展后的数组中返回给定索引的元素值。

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

`index`

The index into the expanded array.

进入扩展数组的索引。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元时间代码大致对应于胡迪尼的一个帧。如果没有给出，就会使用与当前帧对应的时间码。

Returns

The element of a flattened value array of an existing primvar, or zero/empty
value if the primvar does not exist. Use [usd_isprimvar](usd_isprimvar.html "Checks if the primitive has a primvar of the given name.") if you want to
check whether the primvar exists.

现有 primvar 的扁平化值数组的元素，如果 primvar 不存在，则为零/空值。如果你想检查 primvar 是否存在，请使用 usd_isprimvar。

## Examples

    // Get the value of a flattened primvar on the cube primitive.float flat_value  = usd_flattenedprimvarelement(0, "/geo/cube", "primvar_name", 3);f@flat_primvar_element_10_at_current_frame = usd_flattenedprimvarelement(0, "/geo/sphere", "bar", 10);f@flat_primvar_element_10_at_frame_7    = usd_flattenedprimvarelement(0, "/geo/sphere", "bar", 10, 7.0);

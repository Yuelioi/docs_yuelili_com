---
title: usd_iprimvarelement
order: 49
category:
  - houdini
---
    
## 描述

Reads the value of an element from the array primvar directly from the USD
primitive or from USD primitive‘sancestor.

| Since | 19.0 |
| ----- | ---- |

`<type> usd_iprimvarelement(<stage>stage, string primpath, string name, int index)`

`<type> usd_iprimvarelement(<stage>stage, string primpath, string name, int index, float timecode)`

This function returns a value of an element in given array primvar on a given
primitive or inherited from primitive‘sancestor.

此函数在给定的基元上或从基元的祖先继承的给定数组 primvar 中返回一个元素的值。

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

`index`

The index into the array.

进入数组的索引。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元的时间代码大致相当于胡迪尼的一个帧。如果没有给出，就会使用与当前帧对应的时间码。

Returns

The value of an element in an existing array primvar, or zero/empty value if
the primvar does not exist. Use [usd_isiprimvar](usd_isiprimvar.html "Checks
if the primitive or its ancestor has a primvar of the given name.") if you
want to check whether the primvar exists.

现有数组 primvar 中的一个元素的值，如果 primvar 不存在，则为零/空值。如果你想检查 primvar 是否存在，请使用 usd_isiprimvar。

## Examples

    // Get the value of some primvars on the cube primitive or its ancestor.float value  = usd_iprimvarelement(0, "/geo/cube", "primvar_name", 3);v@element_2_at_current_frame = usd_iprimvarelement(0, "/geo/sphere", "foo", 2);v@element_2_at_frame_8    = usd_iprimvarelement(0, "/geo/sphere", "foo", 2, 8.0);

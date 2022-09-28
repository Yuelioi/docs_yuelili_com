---
title: usd_attribelement
order: 15
category:
  - houdini
---
    
## 描述

Reads the value of an element from an array attribute.

| Since | 18.0 |
| ----- | ---- |

`<type> usd_attribelement(<stage>stage, string primpath, string name, int index)`

`<type> usd_attribelement(<stage>stage, string primpath, string name, int index, float timecode)`

This function returns a value of an element in given array attribute on a
given primitive.

此函数返回给定基元上给定数组属性中的一个元素的值。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Attribute name.

属性名称。

`index`

The element index in the array attribute.

阵列属性中的元素索引。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元的时间代码大致对应于胡迪尼的一个帧。如果没有给出，则会使用与当前帧对应的时间码。

Returns

The value of an element in an existing attribute, or zero/empty value if the
attribute does not exist. Use [usd_isattrib](usd_isattrib.html "Checks if the
primitive has an attribute by the given name.") if you want to check whether
the attribute exists.

现有属性中的一个元素的值，如果属性不存在，则为零/空值。如果你想检查该属性是否存在，请使用 usd_isattrib。

## Examples

    // Get the value of an element at index 3 in the array attribute.float a = usd_attribelement("opinput:0", "/geo/cube", "array_attrib_name", 3);// Get the value of an element at index 2 of the "bar" array attribute.@b_element_2_at_current_frame = usd_attribelement(0, "/geo/sphere", "bar", 2);@b_element_2_at_frame_11   = usd_attribelement(0, "/geo/sphere", "bar", 2, 11.0);

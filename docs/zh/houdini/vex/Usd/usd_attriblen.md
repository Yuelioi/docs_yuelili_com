---
title: usd_attriblen
order: 16
category:
  - houdini
---
    
## 描述

Returns the length of the array attribute.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_attriblen(<stage>stage, string primpath, string name)
```

`int usd_attriblen(<stage>stage, string primpath, string name, float timecode)`

This function returns the length of a given attribute.

这个函数返回一个给定属性的长度。

For array attributes it is the length of the array, and for non-array
attributes the length is 1.

对于数组属性，它是数组的长度，对于非数组属性，长度是 1。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取该阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Attribute name.

属性名称。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元时间代码大致对应于胡迪尼中的一个帧。如果未给出，则使用与当前帧对应的时间代码。

Returns

The length of the array attribute, or 1 if the attribute is not an array. Use
[usd_isarray](usd_isarray.html "Checks if the attribute is an array.") if you
want to check whether the attribute is an array.

数组属性的长度，如果该属性不是一个数组，则为 1。如果你想检查该属性是否是一个数组，请使用 usd_isarray。

## Examples

    // Get the array length of an attribute on the cube primitive.int length = usd_attriblen(0, "/geo/cube", "attribute_name");

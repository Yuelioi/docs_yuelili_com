---
title: usd_primvarlen
order: 108
category:
  - houdini
---
    
## 描述

Returns the length of the array primvar directly on the USD primitive.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_primvarlen(<stage>stage, string primpath, string name)
```

`int usd_primvarlen(<stage>stage, string primpath, string name, float timecode)`

This function returns the length of a given primvar found directly on the
given primitive.

此函数返回直接在给定基元上找到的给定 primvar 的长度。

For array primvars it is the length of an array, and for non-array primvars
the length is 1.

对于数组基元，它是数组的长度，对于非数组基元，其长度为 1。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，代表要从该阶段读取的输入数字（从 0
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

评估该属性的美元时间代码。一个美元时间代码大致对应于胡迪尼中的一个帧。如果没有给出，则使用与当前帧对应的时间代码。

Returns

The length of the array primvar, or `1` if the primvar is not an array, or `0`
if the primvar does not exist. Use
[usd_isarrayprimvar](usd_isarrayprimvar.html "Checks if there is an array
primvar directly on the USD primitive.") to check if the primvar is an array.

数组 primvar 的长度，如果 primvar 不是一个数组则为 1，如果 primvar 不存在则为 0。使用 usd_isarrayprimvar 来检查 primvar 是否是一个数组。

## Examples

    // Get the array length of the primvar on cube.int array_length = usd_primvarlen(0, "/geo/cube", "array_primvar_name");

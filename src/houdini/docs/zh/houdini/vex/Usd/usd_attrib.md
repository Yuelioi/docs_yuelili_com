---
title: usd_attrib
order: 14
category:
  - houdini
---
    
## 描述

Reads the value of an attribute from the USD primitive.

| Since | 17.5 |
| ----- | ---- |

```c
<type> usd_attrib(<stage>stage, string primpath, string name)
```

```c
<type>[] usd_attrib(<stage>stage, string primpath, string name)
```

`<type> usd_attrib(<stage>stage, string primpath, string name, float timecode)`

`<type>[] usd_attrib(<stage>stage, string primpath, string name, float timecode)`

This function returns a value of a given attribute on a given primitive.

此函数返回给定基元上的一个给定属性的值。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入数字（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

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

The value of an existing attribute, or zero/empty value if the attribute does
not exist. Use [usd_isattrib](usd_isattrib.html "Checks if the primitive has
an attribute by the given name.") if you want to check whether the attribute
exists.

现有属性的值，如果该属性不存在，则为零/空值。如果你想检查该属性是否存在，请使用 usd_isattrib。

## Examples

    // Get the value of some attributes on the cube primitive.float a = usd_attrib("opinput:0", "/geo/cube", "attribute_name_a");vector b[] = usd_attrib(0, "/geo/cube", "attribute_name_b");// Get the value of attribute "bar" at various time codes.f[]@b_at_current_frame = usd_attrib(0, "/geo/sphere", "bar");f[]@b_at_frame_7    = usd_attrib(0, "/geo/sphere", "bar", 7.0);

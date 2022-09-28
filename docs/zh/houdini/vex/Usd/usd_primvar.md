---
title: usd_primvar
order: 102
category:
  - houdini
---
    
## 描述

Reads the value of a primvar directly from the USD primitive.

| Since | 18.0 |
| ----- | ---- |

```c
<type> usd_primvar(<stage>stage, string primpath, string name)
```

```c
<type>[] usd_primvar(<stage>stage, string primpath, string name)
```

`<type> usd_primvar(<stage>stage, string primpath, string name, float timecode)`

`<type>[] usd_primvar(<stage>stage, string primpath, string name, float timecode)`

This function returns a value of a primvar on a given primitive.

此函数返回给定基元上的一个 primvar 的值。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
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

The value of an existing primvar, or zero/empty value if the primvar does not
exist. Use [usd_isprimvar](usd_isprimvar.html "Checks if the primitive has a
primvar of the given name.") if you want to check whether the primvar exists.

现有 primvar 的值，如果 primvar 不存在，则为零/空值。如果您想检查 primvar 是否存在，请使用 usd_isprimvar。

## Examples

    // Get the value of some primvars on the cube primitive.vector vec_value = usd_primvar(0, "/geo/cube", "vec_primvar_name"); float values[] = usd_primvar(0, "/geo/cube", "primvar_name");float value  = usd_primvar(0, "/geo/cube", "primvar_name", 3);v[]@foo_at_current_frame = usd_primvar(0, "/geo/sphere", "foo");v[]@foo_at_frame_8    = usd_primvar(0, "/geo/sphere", "foo", 8.0);

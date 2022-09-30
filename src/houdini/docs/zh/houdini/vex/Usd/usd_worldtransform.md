---
title: usd_worldtransform
order: 151
category:
  - houdini
---
    
## 描述

Obtains the primitive‘sworld transform

| Since | 17.5 |
| ----- | ---- |

```c
matrix  usd_worldtransform(<stage>stage, string primpath)
```

```c
matrix  usd_worldtransform(<stage>stage, string primpath, float timecode)
```

This function returns primitive‘sworld transform.

此函数返回 primitiveâ 的世界转换。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点（如 wrangle LOP）的上下文中运行时，此参数可以是一个整数，代表要从该阶段读取的输入数字（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元时间代码大致对应于胡迪尼的一个帧。如果未给出，则会使用与当前帧对应的时间代码。

Returns

The primitive‘sworld transform.

基元的世界转换。

## Examples

    // Get the cube's world transform.matrix cube_world_xform = usd_worldtransform(0, "/src/cube");

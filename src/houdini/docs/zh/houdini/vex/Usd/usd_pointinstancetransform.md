---
title: usd_pointinstancetransform
order: 95
category:
  - houdini
---
    
## 描述

Obtains the transform for the given point instance

| Since | 18.0 |
| ----- | ---- |

```c
matrix  usd_pointinstancetransform(<stage>stage, string primpath, int index)
```

`matrix usd_pointinstancetransform(<stage>stage, string primpath, int index, float timecode)`

This function returns point instance transform.

该函数返回点实例转换。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`index`

The index of the instance within the point instancer.

点实例器内的实例索引。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元的时间代码大致对应于胡迪尼的一个帧。如果没有给出，则使用与当前帧相对应的时间码。

Returns

The transform of the point instance.

该点实例的变换。

## Examples

    // Get the transform of the third instance.matrix xform = usd_pointinstancetransform(0, "/src/instanced_cubes", 2);

---
title: usd_ismodel
order: 73
category:
  - houdini
---
    
## 描述

Checks if the primitive is a model.

| Since | 19.0 |
| ----- | ---- |

```c
int  usd_ismodel(<stage>stage, string primpath)
```

This function checks whether the given primitive is a model, based on its
kindmetadata.

此函数根据给定基元的种类和元数据，检查其是否为模型。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

元数据。

`primpath`

The path to the primitive.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入编号（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

Returns

1 if the primitive is of a model kind, and 0 otherwise.

通往基元的路径。

## Examples

    // Check if the sphere primitive is a model.int is_model = usd_ismodel(0, "/geometry/sphere");

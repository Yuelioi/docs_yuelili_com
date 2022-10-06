---
title: usd_isarray
order: 60
category:
  - houdini
---
    
## 描述

Checks if the attribute is an array.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_isarray(<stage>stage, string primpath, string name)
```

This function checks whether the given attribute is an array.

这个函数检查给定的属性是否是一个数组。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Attribute name.

属性名称。

Returns

`1` if the attribute exists and is an array, or `0` otherwise.

如果属性存在并且是一个数组，则为 1，否则为 0。

## Examples

    // Check if attribute "some_attribute" is an array.int is_array = usd_isarray(0, "/geometry/sphere", "some_attribute");

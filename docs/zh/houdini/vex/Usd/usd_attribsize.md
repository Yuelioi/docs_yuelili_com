---
title: usd_attribsize
order: 18
category:
  - houdini
---
    
## 描述

Returns the tuple size of the attribute.

| Since | 17.5 |
| ----- | ---- |

```c
int  usd_attribsize(<stage>stage, string primpath, string name)
```

This function returns the tuple size of a given attribute. If the attribute is
an array, it returns the tuple size of the array element. E.g., for vector
types,this is the number of components.

这个函数返回一个给定属性的元组大小。如果该属性是一个数组，它返回数组元素的元组大小。例如，对于向量类型，这就是组件的数量。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如一个 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Attribute name.

属性名称。

Returns

The tuple size of the attribute.

属性的元组大小。

- For a vector type, this is the number of components.

对于向量类型，这是其分量的数目。

- For an integer, float, or string, this returns `1`.

对于整数、浮点数或字符串，这将返回 1。

- For an array attribute, this returns the tuple size of the elements.

对于一个数组属性，这将返回元素的元组大小。

If the attribute does not exist, returns `0`.

如果该属性不存在，返回 0。

Use [usd_attriblen](usd_attriblen.html "Returns the length of the array
attribute.") if you want to obtain the array attribute length.

如果你想获得数组属性的长度，使用 usd_attriblen。

## Examples

    // Get the tuple size of an attribute on the cube primitive.int tuple_size = usd_attribsize(0, "/geo/cube", "attribute_name");

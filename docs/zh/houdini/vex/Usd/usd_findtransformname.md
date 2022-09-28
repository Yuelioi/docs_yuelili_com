---
title: usd_findtransformname
order: 34
category:
  - houdini
---
    
## 描述

Retrurns primitive‘stransform operation full name for given the transform
operation suffix

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_findtransformname(<stage>stage, string primpath, string suffix)
```

This function returns the full name of a transform operation given the suffix,
if such an operation attribute exists on the given primitive.

如果给定基元上存在这样的操作属性，此函数将返回给定后缀的转换操作的全名。

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

`suffix`

The transform operation suffix.

转换操作后缀。

USD primitives are transformed in space by a series of transform operations
whose full names are sequentially listed in the `xformOpOrder` attribute.Full
names are namespaced, encode the operation transform type (e.g., translation
or rotation), and can also contain a suffix. If primitive has a few operations
of the same type, it‘snecessary to specify the suffix to differentiate
between them. This parameter specifies such a suffix.

美元基元通过一系列转换操作在空间中进行转换，这些转换操作的全名按顺序列在 xformOpOrder 属性中。
全名是有名称的，对操作的转换类型（如平移或旋转）进行了编码，还可
以包含一个后缀。如果基元有几个相同类型的操作，就有必要指定后缀以区分它们。此参数指定了这样一个后缀。

Returns

The full name of the primitive‘stransform operation that has the given
suffix, or an empty string if no such operation is found.

具有给定后缀的基元的转换操作的全名，如果没有找到这样的操作，则为空字符串。

There may be a few transform operations with the same suffix (eg, a
translation an a rotation), so the first encountered one will be returned.

可能有几个具有相同后缀的转换操作（例如，一个平移和一个旋转），因此将返回第一个遇到的操作。

## Examples

    // Find the transform operation name for the pivot translation, and add an iverse of it.string xform_name = usd_findtransformname(0, "/geo/cone", "cone_pivot");usd_addinversetotransformorder(0, "/geo/cone", xform_name);

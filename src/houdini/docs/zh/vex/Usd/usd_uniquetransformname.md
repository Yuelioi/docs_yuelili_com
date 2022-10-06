---
title: usd_uniquetransformname
order: 147
category:
  - houdini
---
    
## 描述

Constructs a unique full name of a transform operation

| Since | 18.0 |
| ----- | ---- |

`string usd_uniquetransformname(<stage>stage, string primpath, int transformtype, string suffix)`

This function returns a unique full name for a transform operation, given its
type and suffix, that is different from any name that currently exists on the
given primitive. It can be useful to ensure that the suffix used for the
operation name does not stomp on any existing one.

此函数为转换操作返回一个独特的全名，给定其类型和后缀，该名称不同于给定基元上当前存在的任何名称。确保用于操作名称的后缀不与任何现有名称相抵触会很有用。

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

`transformtype`

The numerical code for the transformation type. See the VEX “usd.h” header for
defines, such as

```c
USD_XFORM_TRANSLATE
```

,

```c
USD_XFORM_TRANSFORM
```

, or

```c
USD_XFORM_ROTATE_XYZ
```

.

转换类型的数字代码。参见 VEX "usd.h "标题中的定义，如 USD_XFORM_TRANSLATE、USD_XFORM_TRANSFORM 或
USD_XFORM_ROTATE_XYZ。

`suffix`

The transform operation suffix.

转换操作后缀。

USD primitives are transformed in space by a series of transform operations
whose full names are sequentially listed in the `xformOpOrder` attribute.Full
names are namespaced, encode the operation transform type (e.g., translation
or rotation), and can also contain a suffix. If primitive has a few operations
of the same type, it‘snecessary to specify the suffix to differentiate
between them. This parameter specifies such a suffix.

美元基元通过一系列转换操作在空间里进行转换，这些转换操作的全名按顺序列在 xformOpOrder 属性里。
全名是命名的，对操作转换类型（如平移或旋转）进行编码，还可包含一个后缀。如果基元有几个相同类型的操作，就有必要指定后缀以区分它们。此参数指定了这样一个后缀。

Returns

A unique full name of transform operation.

变换操作的唯一全名。

## Examples

    // Construct a unique full name for a translation operation with suffix "cone_pivot"string unique_xform_name = usd_uniquetransformname(0, "/geo/cone", USD_XFORM_TRANSLATE, "cone_pivot");

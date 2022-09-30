---
title: usd_transformname
order: 142
category:
  - houdini
---
    
## 描述

Constructs a full name of a transform operation

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_transformname(int transformtype, string suffix)
```

This function returns the full name of a transform operation for the given
type and suffix.

此函数返回给定类型和后缀的转换操作的全名。

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

转换类型的数字代码。参见 VEX "usd.h
"头中的定义，如 USD_XFORM_TRANSLATE,USD_XFORM_TRANSFORM 或 USD_XFORM_ROTATE_XYZ。

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

The full name of transform operation.

变换操作的全名。

## Examples

    // Construct a full name for a translation operation with suffix "cone_pivot"string pivot_xform_name = usd_transformname(USD_XFORM_TRANSLATE, "cone_pivot");

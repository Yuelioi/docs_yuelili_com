---
title: usd_transformtype
order: 145
category:
  - houdini
---
    
## 描述

Infers the transform operation type from the full name

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_transformtype(string name)
```

This function returns the transform operation type implied by the full name.

此函数返回全名所隐含的转换操作类型。

`name`

The full name of the transform operation, which includes the standard
namespace, encodes transformation type, and optionally contains the suffix.

转换操作的全名，包括标准名称空间，编码转换类型，并可选择包含后缀。

Returns

The the numerical code for the inferred transform operation type implied by
the transform operation name.See the VEX “usd.h” header for defines, such as

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

由变换操作名称所隐含的推断变换操作类型的数字代码。 参见 VEX "usd.h
"头中的定义，例如 USD_XFORM_TRANSLATE,USD_XFORM_TRANSFORM,或 USD_XFORM_ROTATE_XYZ。

## Examples

    // Get the type of the first transform operation on the cubestring cube_xform_ops[] = usd_transformorder(0, "/geo/cube");int type = usd_transformtype(cube_xform_ops[0]);

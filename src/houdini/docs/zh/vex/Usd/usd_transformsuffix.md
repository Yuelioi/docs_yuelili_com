---
title: usd_transformsuffix
order: 144
category:
  - houdini
---
    
## 描述

Extracts the transform operation suffix from the full name

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_transformsuffix(string name)
```

This function returns the suffix contained in the full name of a transform
operation.

此函数返回一个转换操作的全名中包含的后缀。

`name`

The full name of the transform operation, which includes the standard
namespace, encodes transformation type, and optionally contains the suffix.

转换操作的全名，包括标准名称空间，编码转换类型，并可选择包含后缀。

Returns

The suffix contained in the transform operation name.

变换操作名称中包含的后缀。

## Examples

    // Get the suffix of the first transform operation on the cubestring cube_xform_ops[] = usd_transformorder(0, "/geo/cube");string suffix = usd_transformsuffix(cube_xform_ops[0]);

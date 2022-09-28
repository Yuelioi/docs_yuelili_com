---
title: usd_hasapi
order: 46
category:
  - houdini
---
    
## 描述

Checks if the primitive adheres to the given API.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_hasapi(<stage>stage, string primpath, string api)
```

This function checks whether the given primitive adheres to the given API.
I.e., whether that API has been applied to this primitive.

此函数检查给定基元是否遵守了给定的 API。也就是说，该 API 是否已被应用于此基元。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点（如 wrangle LOP）的上下文中运行时，此参数可以是一个整数，表示要从中读取阶段的输入数（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`api`

The name or an alias of the API schema to check.

要检查的 API 模式的名称或别名。

Returns

1 if the primitive has the given API, or 0 otherwise.

如果基元具有给定的 API，则为 1，否则为 0。

## Examples

    // Check if the primitive has a USD Geometry Model API applied.int has_geom_model_api_by_name = usd_hasapi(0, "/geo/sphere", "UsdGeomModelAPI");int has_geom_model_api_by_alias = usd_hasapi(0, "/geo/sphere", "GeomModelAPI");

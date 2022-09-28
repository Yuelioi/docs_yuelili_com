---
title: usd_makecollectionpath
order: 84
category:
  - houdini
---
    
## 描述

Constructs a collection path from a primitive path and a collection name.

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_makecollectionpath(<stage>stage, string primpath, string name)
```

This function returns the full path of a given collection.

这个函数返回一个给定集合的完整路径。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入编号（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Collection name.

集合名称。

Returns

The full path of a given collection.

给定集合的完整路径。

## Examples

    // Obtain the full path to the collection "some_collection" on the cube primitive.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");

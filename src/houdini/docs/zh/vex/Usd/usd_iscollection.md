---
title: usd_iscollection
order: 65
category:
  - houdini
---
    
## 描述

Checks if the collection exists.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_iscollection(<stage>stage, string collectionpath)
```

This function checks whether the given path points to an existing collection.

这个函数检查给定的路径是否指向一个现有的集合。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入编号（从 0 开始）。这个整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

```c
`collectionpath
```

`

The path to the collection.

到集合的路径。

Returns

`1` if the path points to an existing collection, or `0` otherwise.

如果路径指向一个现有的集合，则为 1，否则为 0。

## Examples

    // Check if cube has a collection "some_collection".string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");int is_collection_existing = usd_iscollection(0, collection_path);

---
title: usd_collectionincludes
order: 32
category:
  - houdini
---
    
## 描述

Obtains the object paths that are in the collection‘sinclude list

| Since | 18.0 |
| ----- | ---- |

```c
string [] usd_collectionincludes(<stage>stage, string collectionpath)
```

This function returns the collection‘sinclude list.

这个函数返回集合的包含列表。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要读取该阶段的输入号码（从 0 开始）。这个整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

```c
`collectionpath
```

`

The path to the collection.

到集合的路径。

Returns

The collection‘sinclude list.

集合的包含列表。

## Examples

    // Get collection's include list.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");string include_list[] = usd_collectionincludes(0, collection_path);

---
title: usd_collectioncontains
order: 29
category:
  - houdini
---
    
## 描述

Checks if an object path belongs to the collection

| Since | 18.0 |
| ----- | ---- |

`int usd_collectioncontains(<stage>stage, string collectionpath, string path)`

This function returns `1` if the given objects belongs to the collection,
otherwise returns `0`.

如果给定的对象属于该集合，该函数返回 1，否则返回 0。

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

`path`

The path to the object. I.e, a primitive, an attribute, or a relationship.

通向对象的路径。即一个基元，一个属性，或一个关系。

Returns

`1` if the given objects belongs to the collection, otherwise returns `0`.

如果给定的对象属于该集合，则返回 1，否则返回 0。

## Examples

    // Check if sphere3 is in cube's collection.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");int contains_sphere3 = usd_collectioncontains(0, collection_path, "/geo/sphere3");

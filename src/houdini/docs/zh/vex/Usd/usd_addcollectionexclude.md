---
title: usd_addcollectionexclude
order: 2
category:
  - houdini
---
    
## 描述

Excludes an object from the collection

| Since | 18.0 |
| ----- | ---- |

`int usd_addcollectionexclude(int stagehandle, string collectionpath, string path)`

This function excludes the object from the collection. This is usually
achieved by adding an explicit path to the collection‘sexclude list, but it
may just remove a path from the collection‘sinclude list, if it‘s
sufficient.

这个函数将对象从集合中排除。这通常是通过添加一个明确的路径到集合的排除列表中来实现的，但它可能只是从集合的包含列表中删除一个路径，如果它足够的话。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个写到阶段的句柄。目前唯一有效的值是 0，这意味着在一个节点中的当前阶段。(这个参数在未来可能被用来允许写到其他阶段。)

```c
`collectionpath
```

`

The path to the collection.

到集合的路径。

`path`

The path to the object. I.e, a primitive, an attribute, or a relationship.

通向对象的路径。即，一个基元、一个属性或一个关系。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值或失败时 1 的值。

## Examples

    // Exclude sphere3 from cube's collection.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");usd_addcollectionexclude(0, collection_path, "/geo/sphere3");
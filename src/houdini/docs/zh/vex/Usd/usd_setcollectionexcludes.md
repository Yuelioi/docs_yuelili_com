---
title: usd_setcollectionexcludes
order: 122
category:
  - houdini
---
    
## 描述

Sets the excludes list on the collection

| Since | 18.0 |
| ----- | ---- |

`int usd_setcollectionexcludes(int stagehandle, string collectionpath, string excludes[])`

This function sets the excludes list on the collection.

这个函数设置集合上的排除列表。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个写到阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(这个参数在将来可能会被用来允许写到其他阶段)。

```c
`collectionpath
```

`

The path to the collection.

到集合的路径。

`excludes`

A list of object paths to set as an exclude list on the collection.

一个对象路径的列表，作为集合的排除列表来设置。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the exludes list on the cube's collection.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");usd_setcollectionexcludes(0, collection_path, array("/geo/sphere4", "/geo/sphere5"));

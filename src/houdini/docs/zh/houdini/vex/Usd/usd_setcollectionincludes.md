---
title: usd_setcollectionincludes
order: 124
category:
  - houdini
---
    
## 描述

Sets the includes list on the collection

| Since | 18.0 |
| ----- | ---- |

`int usd_setcollectionincludes(int stagehandle, string collectionpath, string includes[])`

This function sets the includes list on the collection.

这个函数设置集合上的包含列表。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个写到阶段的句柄。目前唯一有效的值是 0，这意味着在一个节点中的当前阶段。(这个参数在将来可能会被用来允许写到其他阶段)。

```c
`collectionpath
```

`

The path to the collection.

到集合的路径。

`includes`

A list of object paths to set as an includes list on the collection.

一个对象路径的列表，以设置为集合上的包含列表。

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值，失败时是 1。

## Examples

    // Set the exludes list on the cube's collection.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");usd_setcollectionincludes(0, collection_path, array("/geo/sphere1", "/geo/sphere2"));

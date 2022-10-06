---
title: usd_setcollectionexpansionrule
order: 123
category:
  - houdini
---
    
## 描述

Sets the expansion rule on the collection

| Since | 18.0 |
| ----- | ---- |

`int usd_setcollectionexpansionrule(int stagehandle, string collectionpath, string rule)`

This function sets the expansion rule on the collection.

这个函数设置集合上的扩展规则。

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

`rule`

The expansion rule to set on the collection.

要在集合上设置的扩展规则。

USD supports a few standard expansion rules

USD 支持一些标准的扩展规则

- `explicitOnly` \- only paths in the include list and not in the exclude list belong to the collection

explicitOnly--只有包含列表中的路径而不是排除列表中的路径才属于集合。

- `expandPrims` \- all the primitives at or below the includes (but not excludes) belong to the collection

expandPrims--位于包括（但不包括）之内或之下的所有基元都属于该集合

-

```c
expanPrimsAndProperties
```

\- like `expandPrims` but also includes properties of matched primitives

expanPrimsAndProperties- 与 expandPrims 相似，但也包括匹配的基元的属性

Returns

The value of `stagehandle` on success or `-1` on failure.

成功时 stagehandle 的值或失败时的 1。

## Examples

    // Set the expansion rule on the cube's collection.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");usd_setcollectionexpansionrule(0, collection_foo, "explicitOnly");

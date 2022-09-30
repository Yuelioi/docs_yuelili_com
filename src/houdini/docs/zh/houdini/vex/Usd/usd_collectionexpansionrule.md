---
title: usd_collectionexpansionrule
order: 31
category:
  - houdini
---
    
## 描述

Obtains the collection‘sexpansion rule

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_collectionexpansionrule(<stage>stage, string collectionpath)
```

This function returns the collection‘sexpansion rule.

这个函数返回集合的扩展规则。

USD supports a few standard expansion rules

USD 支持一些标准的扩展规则

- `explicitOnly` \- only paths in the include list and not in the exclude list belong to the collection

explicitOnly--只有包含列表中的路径而不是排除列表中的路径才属于该集合

- `expandPrims` \- all the primitives at or below the includes (but not excludes) belong to the collection

expandPrims--位于包括（但不包括）或低于包括的所有基元都属于该集合

-

```c
expanPrimsAndProperties
```

\- like `expandPrims` but also includes properties of matched primitives

expanPrimsAndProperties- 与 expandPrims 相似，但也包括匹配基元的属性

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle LOP），此参数可以是一个整数，表示要从中读取阶段的输入数（从 0
开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

```c
`collectionpath
```

`

The path to the collection.

到集合的路径。

Returns

The collection‘sexpansion rule.

集合的扩展规则。

## Examples

    // Get collection's expansion rule.string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");string expansion_rule = usd_collectionexpansionrule(0, collection_path);

---
title: usd_metadataelement
order: 90
category:
  - houdini
---
    
## 描述

Reads the value of an element from the array metadata.

| Since | 18.0 |
| ----- | ---- |

`<type> usd_metadataelement(<stage>stage, string path, string name, int index)`

This function returns an element value of of a given array metadata at a given
index.

该函数返回一个给定索引的数组元数据的元素值。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取该阶段的输入号码（从 0 开始）。这个整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`path`

The path to the object. I.e, a primitive, an attribute, or a relationship.

对象的路径。即：一个基元、一个属性或一个关系。

`name`

The metadata name.

元数据的名称。

The name can be namespaced to acces values inside (possibly nested)
VtDictionaries, such as custom data dictionary, e.g., “customData:name” or
“customData:name:subname”. For non-namespaced names, the object schema needs
to declare a given metadata for it to be accessible, e.g., “active” or
“documentation”.

该名称可以被命名，以便在（可能是嵌套的）VtDictionary（如自定义数据字典）内获得值，例如，"customData:name "或
"customData:name:subname"。对于非命名空间的名称，对象模式需要声明一个给定的元数据才能访问，例如，"活动 "或 "文档"。

`index`

The index into the array.

数组中的索引。

Returns

The value of an element in an existing array metadata, or zero/empty value if
the metadata does not exist. Use [usd_ismetadata](usd_ismetadata.html "Checks
if the primitive has metadata by the given name.") if you want to check
whether the metadata exists.

现有数组元数据中一个元素的值，如果元数据不存在，则为零/空值。如果你想检查元数据是否存在，使用 usd_ismetadata。

## Examples

    // Get the value of an element at index 3 in the "foo:bar" array custom data.string docs = usd_metadataelement(0, "/geo/cube", "customData:foo:bar", 3);

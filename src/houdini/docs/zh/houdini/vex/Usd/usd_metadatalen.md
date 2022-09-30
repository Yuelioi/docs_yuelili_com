---
title: usd_metadatalen
order: 91
category:
  - houdini
---
    
## 描述

Returns the length of the array metadata.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_metadatalen(<stage>stage, string path, string name)
```

This function returns the length of a given metadata.

该函数返回一个给定的元数据的长度。

For array metadata it is the length of the array, and for non-array metadata
the length is 1.

对于数组元数据，它是数组的长度，对于非数组元数据，长度是 1。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入数字（从 0 开始）。这个整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

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
"customData:name:subname"。对于非命名空间的名字，对象模式需要声明一个给定的元数据才能访问，例如，"活动 "或 "文档"。

Returns

The length of the array metadata, or 1 if the metadata is not an array. Use
[usd_isarraymetadata](usd_isarraymetadata.html "Checks if the given metadata
is an array.") if you want to check whether the metadata is an array.

数组元数据的长度，如果元数据不是一个数组，则为 1。如果你想检查元数据是否是一个数组，请使用 usd_isarraymetadata。

## Examples

    // Get the array length of metadata on the cube primitive.int length = usd_metadatalen(0, "/geo/cube", "customData:name");

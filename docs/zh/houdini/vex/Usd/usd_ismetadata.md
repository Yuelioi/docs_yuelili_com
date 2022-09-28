---
title: usd_ismetadata
order: 72
category:
  - houdini
---
    
## 描述

Checks if the primitive has metadata by the given name.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_ismetadata(<stage>stage, string path, string name)
```

This function checks whether the given object has metadata of a given name.

这个函数检查给定对象是否有给定名称的元数据。

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
"customData:name:subname"。对于非命名空间的名称，对象模式需要声明一个给定的元数据，以便对其进行访问，例如，"活动 "或 "文档"。

Returns

`1` if the primitive has the given metadata, or `0` otherwise.

如果基元有给定的元数据，则为 1，否则为 0。

## Examples

    // Check if the primitives have various metadata:int has_doc = usd_ismetadata(0, "/geo/sphere", "documentation");int has_custom_foo_bar = usd_ismetadata(0, "/geo/cube", "customData:foo:bar");// Check if the attribute has custom data setstring attrib_path = usd_makeattribpath(0, "/geo/sphere", "attrib_name");int has_attrib_foo = usd_ismetadata(0, attrib_path, "customData:foo");

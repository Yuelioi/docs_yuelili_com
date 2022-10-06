---
title: usd_metadatanames
order: 92
category:
  - houdini
---
    
## 描述

Returns the names of the metadata available on the object.

| Since | 18.0 |
| ----- | ---- |

```c
string [] usd_metadatanames(<stage>stage, string path)
```

This function returns the metadata names that are available on the given USD
object.

该函数返回在给定 USD 对象上可用的元数据名称。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（比如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`path`

The path to the object. I.e, a primitive, an attribute, or a relationship.

对象的路径。即一个基元，一个属性，或一个关系。

Returns

String array containing the names of the object‘smetadata.

包含对象的元数据名称的字符串数组。

## Examples

    // Get the metadata names from the primitive.string prim_metadata_names[] = usd_metadatanames(0, "/geo/sphere");// Get the metadata names from the attribute.string attrib_path = usd_makeattribpath(0, "/geo/sphere", "attrib_name");string attrib_metadata_names[] = usd_metadatanames(0, attrib_path);

---
title: usd_setmetadataelement
order: 128
category:
  - houdini
---
    
## 描述

Sets the value of an element in an array metadata.

| Since | 18.0 |
| ----- | ---- |

`int usd_setmetadataelement(int stagehandle, string path, string name, int index, <type>value)`

This function sets the element value in an array metadata.

该函数设置一个数组元数据中的元素值。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

要写入的阶段的句柄。目前唯一有效的值是 0，这意味着节点中的当前阶段。(这个参数将来可能被用来允许写到其他阶段。)

`path`

The path to the object. I.e, a primitive, an attribute, or a relationship.

通向对象的路径。即，一个基元、一个属性或一个关系。

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

`index`

An index of an element in the array metadata.

阵列元数据中的一个元素的索引。

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set the value of element at index 2 in the array attribute.usd_setmetadata(0, "/geo/sphere", "customData:a_float_arr", 2, 0.25);

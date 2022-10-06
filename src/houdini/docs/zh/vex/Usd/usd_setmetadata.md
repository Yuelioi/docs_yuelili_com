---
title: usd_setmetadata
order: 127
category:
  - houdini
---
    
## 描述

Sets the value of an metadata.

| Since | 18.0 |
| ----- | ---- |

```c
int  usd_setmetadata(int stagehandle, string path, string name, <type>value)
```

`int usd_setmetadata(int stagehandle, string path, string name, <type>value[])`

This function sets the metadata value.

此函数设置元数据值。

`stagehandle`

A handle to the stage to write to. Currently the only valid value is `0`,
which means the current stage in a node. (This argument may be used in the
future to allow writing to other stages.)

一个指向要写入的阶段的句柄。目前唯一有效的值是 0，这意味着在一个节点中的当前阶段。(这个参数将来可能被用来允许写到其他阶段。)

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

Returns

The value of `stagehandle` on success, or `-1` on failure.

成功时 stagehandle 的值，失败时为 1。

## Examples

    // Set a documentation string on the sphere.usd_setmetadata(0, "/geo/sphere", "documentation", "This is new documentation.");// Set the value of some custom data on the sphere.usd_setmetadata(0, "/geo/sphere", "customData:a_float", 0.25);usd_setmetadata(0, "/geo/sphere", "customData:a_string", "foo bar baz");usd_setmetadata(0, "/geo/sphere", "customData:a_vector", {1.25, 1.50, 1.75});float f_arr[] = {0, 0.25, 0.5, 0.75, 1};usd_setmetadata(0, "/geo/sphere", "customData:a_float_array", f_arr);// Set the metadata value on an attribute.string attrib_path = usd_makeattribpath(0, "/geo/sphere", "attrib_name");sd_setmetadata(0, attrib_path, "customData:foo", 1.25);

---
title: addvertexattrib
order: 5
category:
  - houdini
---
    
## 描述

Adds a vertex attribute to a geometry.

If you don‘t know the class of attribute until runtime, use
[addattrib](addattrib.html "Adds an attribute to a geometry.").

如果你在运行前不知道属性的类别，可以使用 addattrib。

```c
int  addvertexattrib(int geohandle, string name, <type>defvalue)
```

```c
int  addvertexattrib(int geohandle, string name, <type>defvalue[])
```

Adds a vertex attribute to the given geometry.

在给定的几何体上添加一个顶点属性。

`int addvertexattrib(int geohandle, string name, <type>defvalue, string typeinfo)`

`int addvertexattrib(int geohandle, string name, <type>defvalue[], string typeinfo)`

Adds a vertex attribute with the given transformation info. See
[attribtypeinfo](attribtypeinfo.html "Returns the transformation metadata of a
geometry attribute.") for more details.

用给定的变换信息添加一个顶点属性。更多细节见 attribtypeinfof。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他几何体。)

`name`

The name of the attribute to create.

要创建的属性的名称。

`defvalue`

The default value for the attribute and determines the type of attribute to
create.String and array attributes cannot have defaults, so only the type is
used in those cases.

属性的默认值，决定了要创建的属性的类型。 字符串和数组属性不能有默认值，所以在这些情况下只使用类型。

``

`geohandle` on success, or `-1` on failure.

成功时是 geohandle，失败时是 1。

- If an attribute of the same name already exists, the function will try to convert it to the new type.

如果一个同名的属性已经存在，该函数将尝试将其转换为新的类型。

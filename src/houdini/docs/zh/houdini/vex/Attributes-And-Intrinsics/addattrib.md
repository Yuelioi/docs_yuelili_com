---
title: addattrib
order: 1
category:
  - houdini
---
    
## 描述

Adds an attribute to a geometry. 添加属性到几何体

如果你提前知道你要添加的属性类别，使用 adddetailattrib、addprimattrib、addpointattrib 或 addvertexattrib 可能会更快。

```c
int  addattrib(int geohandle, string attribclass, string name,
<type>defvalue)`

int  addattrib(int geohandle, string attribclass, string name,
<type>defvalue[])
```

[[../_Args/geohandle]]

A handle to the geometry to write to. Currently the only valid value is `0` or
geoself, which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要生效的几何体句柄。目前只能是 0 或者几何体自身的路径。(将来可能用作其他几何体)。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to read from groups. You can read the contents of primitive/point/vertex groups in VEX as if they were attributes.").

datail （或 "全局"）、"点"、"prim "或 "顶点 "中的一个。 你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来读取分组。

<div class="aaa">name</div>

The name of the attribute to create.

要创建的属性的名称。

`defvalue`

The default value for the attribute and determines the type of attribute to create. String and array attributes cannot have defaults, so only the type is used in those cases.

属性的默认值，决定了要创建的属性的类型。字符串和数组属性不能有默认值，所以在这些情况下只使用类型。

Returns

geohandle on success, or ` -1` on failure.

成功时返回 [[../_Args/geohandle|geohandle]] ，失败返回 -1。

---

If an attribute of the same name already exists, the function will try to convert it to the new type.

如果存在同名属性，会尝试将其转换为新类型。

---
title: addvariablename
order: 1
category:
  - houdini
---
    
## 描述

Adds a mapping for an attribute to a local variable.

```c
void  addvariablename(string aname, string vname)
```

In contexts with current geometry, this adds a mapping to the geometry.

在有当前几何体的情况下，这将为几何体添加一个映射。

```c
int  addvariablename(int geohandle, string aname, string vname)
```

Adds the mapping to the given geometry. Returns the `geohandle` on success.

将映射添加到给定的几何体中。成功时返回 geohandle。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

Adds the mapping of the attribute `aname` to the local variable `vname`.
InSOPs that support this, you will then have thelocal variable `$vname`
referencing the attribute aname. Thisemulates the behavior of the
[![](../../icons/SOP/attribcreate.svg)AttribCreate
SOP](../../nodes/sop/attribcreate.html "Adds or edits user defined
attributes.").

添加属性 anam 到本地变量 vname 的映射。在

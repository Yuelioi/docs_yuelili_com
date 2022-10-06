---
title: point
order: 34
category:
  - houdini
---
    
## 描述

Reads a point attribute value from a geometry.

```c
<type> point(<geometry>geometry, string attribute_name, int pointnumber)
```

```c
<type>[] point(<geometry>geometry, string attribute_name, int pointnumber)
```

The name of the attribute (or intrinsic) to read.

要读取的属性（或内在属性）的名称。

`pointnumber`

The point number to read the attribute on.

读取该属性的点编号。

Returns

The value of the given attribute on the given point number, or `0` if the
attribute or point do not exist.

在给定的点号上的给定属性的值，如果该属性或点不存在，则为 0。

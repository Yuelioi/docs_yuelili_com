---
title: getmaterialid
order: 23
category:
  - houdini
---
    
## 描述

Returns material id of shaded primitive.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  getmaterialid()
```

Returns the material id of the primitive being shaded. The id corresponds
tothe material being evaluated and accounts for overrides from style sheets
and detail assignments.

返回被遮蔽的基元的材料 ID。这个 id 对应于

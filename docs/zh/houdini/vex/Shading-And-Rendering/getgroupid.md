---
title: getgroupid
order: 15
category:
  - houdini
---
    
## 描述

Returns group id containing current primitive.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  getgroupid()
```

Returns the id of a primitive group containing the current face being
shaded.The id is the index of the group in the detail. If the primitive
belongsto several groups, their indices are added up to calculate the returned
id.

返回包含当前被遮蔽的面的原始组的 id。

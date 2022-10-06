---
title: getptextureid
order: 28
category:
  - houdini
---
    
## 描述

Returns the ptexture face id for the current primitive.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  getptextureid()
```

Returns the ptexture id for the current face being shaded.This will
typicallybe the same as `getprimid()` except in the case of subdivision
surfaces.Forsubdivision surfaces, mantra splits non-quadrilateral faces into
multiplepatches.Each of these split faces is assigned a unique ptexture id.

返回当前被着色的面的 ptexture id。 这通常会

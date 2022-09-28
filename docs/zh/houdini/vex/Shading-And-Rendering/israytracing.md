---
title: israytracing
order: 43
category:
  - houdini
---
    
## 描述

Indicates whether a shader is being executed for ray tracing.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
int  israytracing()
```

Returns true when the current shader is shading ray hits.For
micropolygonrendering, the return value will be false.This function can be
used todisambiguate shading styles for renders that use the vm_rayshade
property -where only some objects are ray traced.

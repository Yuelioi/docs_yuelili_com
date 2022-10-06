---
title: isfogray
order: 41
category:
  - houdini
---
    
## 描述

Returns 1 if the shader is being called to evaluate illumination for  
fog objects, or 0 if the light or shadow shader is being called to  
evaluate surface illumination.

| Context(s) | [light](../contexts/light.html)[ shadow](../contexts/shadow.html) |
| ---------- | ----------------------------------------------------------------- |

```c
int  isfogray()
```

Returns 1 if the shader is being called to evaluate illumination for
fogobjects, or 0 if the light or shadow shader is being called to
evaluatesurface illumination.

Returns 1 if the shader is being called to evaluate illumination for fog

Use this function to simplify light shaders when evaluating for fog.

objects, or 0 if the light or shadow shader is being called to evaluate

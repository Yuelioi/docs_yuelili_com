---
title: getsmoothP
order: 33
category:
  - houdini
---
    
## 描述

Returns modified surface position based on a smoothing function.

On this page |

- Variadic arguments

Variadic arguments

- Examples

---|---  
Context(s) | [shading](../contexts/shading.html)

Returns a modified surface position based on a smoothing function.

Returns a modified surface position based on a smoothing function.

```c
int  getsmoothP(vector &smoothP, vector ray_origin, ...)
```

Overwrites the `smoothP` variable with the modified surface position.This
function is only meaningful for some primitive types (such as polygons).

Overwrites thesmoothPvariable with the modified surface position.

```c
vector  getsmoothP(...)
```

Uses the global variables `Eye` and `I` to fill in the ray origin and
direction.

This function is only meaningful for some primitive types (such as polygons).

## Variadic arguments

"style",`string`

`none`

No smoothing.

Uses the global variablesEyeandIto fill in the ray origin and direction.

`shadow`

Apply a smoothing function appropriate to elimination of the shadowterminator
issue for polygons.

No smoothing.

## Examples

    shadowfastshadow(){  vector    surfP;  if (!getsmoothP(surfP, Eye, I))    surfP = Ps;        // Set to the Ps (surface P) variable  vector shad = trace(surfP, normalize(L), Time, "raystyle", "shadow");  Cl *= ({1,1,1} - shad);}

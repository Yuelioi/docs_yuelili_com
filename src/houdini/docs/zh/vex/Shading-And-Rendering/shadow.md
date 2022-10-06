---
title: shadow
order: 69
category:
  - houdini
---
    
## 描述

Calls shadow shaders for the current light source.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ surface](../contexts/surface.html)  
---|---

This function can only be called from within an [illuminance](illuminance.html "Loops through all light sources in the scene, calling the light shader for
each light source to set the Cl and L global variables.") statement.

This function can only be called from within anilluminancestatement.

```c
void  shadow(vector &Cl)
```

```c
vector  shadow(vector Cl)
```

Uses the `P` and `L` global variables.

Uses thePandLglobal variables.

```c
void  shadow(vector &Cl, vector P, vector L)
```

```c
vector  shadow(vector Cl, vector P, vector L)
```

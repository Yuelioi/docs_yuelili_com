---
title: diffuseBRDF
order: 5
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# diffuseBRDF

VEX function

#

```c
float  diffuseBRDF(vector L, vector N)
```

Equivalent to clamp(dot(L, N), 0, 1).

相当于 clamp(dot(L, N), 0, 1)。

```c
float  diffuseBRDF(vector L, vector N, vector V, float rough)
```

[specularBRDF](specularBRDF.html "Returns the computed BRDFs for the different
lighting models used in VEX shading."), [phongBRDF](phongBRDF.html),
[blinnBRDF](blinnBRDF.html),and `diffuseBRDF` return the computed BRDF for
thedifferent lighting models used in VEX shading. You can use them incustom
[illuminance](illuminance.html "Loops through all light sources in the scene,
calling the light shader for each light source to set the Cl and L global
variables.") loops to replicate the lighting models of thecorresponding VEX
lighting functions.

specularBRDF, phongBRDF, blinnBRDF,

See [specularBRDF](specularBRDF.html "Returns the computed BRDFs for the
different lighting models used in VEX shading.") for some example code.

和 diffuseBRDF 返回计算出的 BRDF，用于 VEX 着色中使用的不同照明模型。

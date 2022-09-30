---
title: blinnBRDF
order: 2
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

# blinnBRDF

VEX function

#

```c
float  blinnBRDF(vector L, vector N, vector V, float rough)
```

[specularBRDF](specularBRDF.html) "Returns the computed BRDFs for the different
lighting models used in VEX shading."), [phongBRDF](phongBRDF.html),
`blinnBRDF`,and [diffuseBRDF](diffuseBRDF.html) return the computed BRDF for
thedifferent lighting models used in VEX shading. You can use them incustom
[illuminance](illuminance.html "Loops through all light sources in the scene,
calling the light shader for each light source to set the Cl and L global
variables.") loops to replicate the lighting models of thecorresponding VEX
lighting functions.

specularBRDF, phongBRDF, blinnBRDF,

See [specularBRDF](specularBRDF.html) "Returns the computed BRDFs for the
different lighting models used in VEX shading.") for some example code.

和 diffuseBRDF 返回计算的 BRDF，用于 VEX 着色中使用的不同照明模型。

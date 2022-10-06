---
title: specularBRDF
order: 73
category:
  - houdini
---
    
## 描述

Returns the computed BRDFs for the different lighting models used in VEX
shading.

```c
float  specularBRDF(vector L, vector N, vector V, float rough)
```

`specularBRDF`, [phongBRDF](phongBRDF.html), [blinnBRDF](blinnBRDF.html),and
[diffuseBRDF](diffuseBRDF.html) return the computed BRDF for thedifferent
lighting models used in VEX shading. You can use them incustom
[illuminance](illuminance.html "Loops through all light sources in the scene,
calling the light shader for each light source to set the Cl and L global
variables.") loops to replicate the lighting models of thecorresponding VEX
lighting functions.

specularBRDF, phongBRDF, blinnBRDF,

    vector nn = normalize(frontface(N, I));vector ii = normalize(-I);Cf = 0;illuminance(P, nn){  vector ll = normalize(L);  Cf += Cl * (specularBRDF(ll, nn, ii, rough) + diffuseBRDF(ll, nn));}

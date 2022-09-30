---
title: getuvtangents
order: 34
category:
  - houdini
---
    
## 描述

Evaluates UV tangents at a point on an arbitrary object.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

`void getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv)`

This variant additionally sets Tn to the evaluation point‘ssurface normal:

这个变体还将 Tn 设置为评估点的表面法线。

`void getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv, vector &Tn)`

Note

The object must have a vector attribute named “uv”.

该对象必须有一个名为 "uv "的矢量属性。

Tip

Passing “” as the `objName` parameter will cause the function to use the
current shaded object.

传递""作为 objNameparameter 将导致该函数使用当前的阴影对象。

`objName`

Name of object to evaluate UV tangents for.

要评估 UV 切线的对象名称。

`P`

Point at which to evaluate UV tangents.

评估 UV 切线的点。

`dir`

The direction to use for searching the object‘ssurface.

用于搜索物体表面的方向。

The surface of the object is searched for by casting rays from `P` in this
direction as well as the opposite direction.

通过从这个方向和相反的方向投射射线来搜索物体的表面。

When available, it makes sense to use the normal at the point being evaluated.

如果有的话，使用被评估点的法线是有意义的。

`Tu`

UV tangent in U direction.

U 方向的 UV 切线。

`Tv`

UV tangent in V direction.

V 方向的 UV 切线。

`Tn`

The surface normal at the point where tangents are evaluated.

评估切线的那一点的表面法线。

    // Get UV tangent at 'P', searching the surface in the direction of 'N'vector Tu, Tv;getuvtangents("/obj/geo1", P, N, Tu, Tv);


    // Find a surface location using an arbitrary ray.// In this case the surface normal isn't known beforehand and can be fetched via 'Tn'.vector Tu, Tv, Tn;getuvtangents("/obj/geo1", ray_orig, ray_dir, Tu, Tv, Tn);

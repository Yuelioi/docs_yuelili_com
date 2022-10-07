---
title: getuvtangents
order: 35
category:
  - vex
---



Context(s)
[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`void getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv)`

This variant additionally sets Tn to the evaluation point’s surface normal:

`void getuvtangents(string objName, vector P, vector dir, vector &Tu, vector &Tv, vector &Tn)`

::: info Note

The object must have a vector attribute named “uv”.

:::tip

Passing “” as the `objName` parameter will cause the function to use the current shaded object.

## Arguments

`objName`

Name of object to evaluate UV tangents for.

`P`

Point at which to evaluate UV tangents.

`dir`

The direction to use for searching the object’s surface.

The surface of the object is searched for by casting rays from `P` in this direction as well as the opposite direction.

When available, it makes sense to use the normal at the point being evaluated.

`Tu`

UV tangent in U direction.

`Tv`

UV tangent in V direction.

`Tn`

The surface normal at the point where tangents are evaluated.

```c
// Get UV tangent at 'P', searching the surface in the direction of 'N'
vector Tu, Tv;
getuvtangents("/obj/geo1", P, N, Tu, Tv);

```

```c
// Find a surface location using an arbitrary ray.
// In this case the surface normal isn't known beforehand and can be fetched via 'Tn'.
vector Tu, Tv, Tn;
getuvtangents("/obj/geo1", ray\_orig, ray\_dir, Tu, Tv, Tn);

```



## See also

- [Du](Du.html)
- [Dv](Dv.html)
- [getderiv](getderiv.html)

|
shading raytracing

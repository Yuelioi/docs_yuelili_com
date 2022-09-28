---
title: intersect_lights
order: 39
category:
  - houdini
---
    
## 描述

Finds the nearest intersection of a ray with any of a list of (area) lights
and runs the light shader at the intersection point.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ surface](../contexts/surface.html)  
---|---

Note

This function only works with area lights.

This function only works with area lights.

`int intersect_lights(int lightids[], vector pos, vector dir, float time, int &idx, float &dist, vector &clr, float &scale, ...)`

`lightids`

An array of light IDs, as returned by [getlights](getlights.html "Returns an
array of light identifiers for the currently shaded surface.").

An array of light IDs, as returned bygetlights.

`pos`

The origin of the ray (such as the global variable `P`).

The origin of the ray (such as the global variableP).

`dir`

Direction vector from the origin. The length of this vector does not affectthe
distance the ray will travel.

Direction vector from the origin. The length of this vector does not affect

`time`

Time to send the ray at.

the distance the ray will travel.

The function modifies the values of the following arguments:

Time to send the ray at.

Show/hide arguments

`idx`

The light index for the light that was hit by the ray, or -1 if no
intersection was found.

The function modifies the values of the following arguments:

`dist`

The distance to the nearest intersected light.

The light index for the light that was hit by the ray, or -1 if no
intersection was found.

`clr`

The light color set by the light shader.

The distance to the nearest intersected light.

`scale`

The light average hemispherical intensity (for area lights).

The light color set by the light shader.

Returns

A [component bitmask](bouncemask.html) indicating what types of component
bounces the light affects,or `0` if the ray did not hit a light.

The light average hemispherical intensity (for area lights).

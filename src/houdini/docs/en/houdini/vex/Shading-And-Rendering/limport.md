---
title: limport
order: 51
category:
  - houdini
---

## Description

Context(s) [displace](../contexts/displace.html) [
fog](../contexts/fog.html) [shadow](../contexts/shadow.html) [
surface](../contexts/surface.html)

::: info Note
This function is only valid inside an [illuminance](illuminance.html "Loops
through all light sources in the scene, calling the light shader for each
light source to set the Cl and L global variables.") loop.
:::

`int limport(string name, <type>&value)`

## Arguments

`name`

The name of the shader variable to read.

`&value`

If the named variable is defined and exported, the function overwrites this
variable with the variable’s value.

## Returns

Returns `1` if the shader variable is defined and exported, or `0` otherwise.

### fog

[getfogname](getfogname.html)

[isfogray](isfogray.html)

[limport](limport.html)

[shimport](shimport.html)

[simport](simport.html)

### shadedata

[limport](limport.html)

[shimport](shimport.html)

[simport](simport.html)

### shadow

[dsmpixel](dsmpixel.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[limport](limport.html)

[shadowmap](shadowmap.html)

### surface

[ambient](ambient.html)

[irradiance](irradiance.html)

[isfogray](isfogray.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[isuvrendering](isuvrendering.html)

[limport](limport.html)

[occlusion](occlusion.html)

[reflectlight](reflectlight.html)

[refractlight](refractlight.html)

[shadow](shadow.html)

[shimport](shimport.html)

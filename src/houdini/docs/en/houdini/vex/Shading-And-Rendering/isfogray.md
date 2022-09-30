---
title: isfogray
order: 42
category:
  - houdini
---

## Description

Context(s) [light](../contexts/light.html) [
shadow](../contexts/shadow.html)

`int isfogray()`

Returns 1 if the shader is being called to evaluate illumination for fog
objects, or 0 if the light or shadow shader is being called to evaluate
surface illumination.

Use this function to simplify light shaders when evaluating for fog.

### fog

[getfogname](getfogname.html)

[isfogray](isfogray.html)

[limport](limport.html)

[shimport](shimport.html)

[simport](simport.html)

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

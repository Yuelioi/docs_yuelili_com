---
title: isuvrendering
order: 47
category:
  - houdini
---

## Description

Context(s) [displace](../contexts/displace.html) [
fog](../contexts/fog.html) [light](../contexts/light.html) [
shadow](../contexts/shadow.html) [surface](../contexts/surface.html)

`int isuvrendering()`

Returns 1 if the shader is being called while evaluating uv rendering (texture
unwrapping), and 0 for normal rendering.

Use this function to evaluate shaders differently when baking illumination.

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

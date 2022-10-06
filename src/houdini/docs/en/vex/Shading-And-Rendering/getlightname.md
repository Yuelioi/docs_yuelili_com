---
title: getlightname
order: 19
category:
  - houdini
---

## Description

Context(s) [shading](../contexts/shading.html)

`string getlightname()`

Returns the name of the current light when called from within an
[illuminance](illuminance.html "Loops through all light sources in the scene,
calling the light shader for each light source to set the Cl and L global
variables.") loop or when a current light has been set using
[setcurrentlight](setcurrentlight.html "Sets the current light").

`string getlightname(int lightid)`

Returns the name of the light referred to by the given integer light ID.
Integer light IDs are used by some low-level VEX functions instead of strings
for efficiency.

## See also

- [illuminance](illuminance.html)
- [getlights](getlights.html)
- [getphotonlight](getphotonlight.html)
- [intersect_lights](intersect_lights.html)

### light

[ambient](ambient.html)

[atten](atten.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[getlight](getlight.html)

[getlightid](getlightid.html)

[getlightname](getlightname.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[irradiance](irradiance.html)

[lightbounces](lightbounces.html)

[lightid](lightid.html)

[occlusion](occlusion.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[setcurrentlight](setcurrentlight.html)

[shadow_light](shadow_light.html)

[storelightexport](storelightexport.html)

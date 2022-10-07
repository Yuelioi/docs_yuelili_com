---
title: setcurrentlight
order: 68
category:
  - vex
---



Context(s)
[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

`int setcurrentlight(int lightid)`

Sets the current light, and returns true when the light exists and was successfully set. The lightid should be in the set of the values returned by [getlights](getlights.html "Returns an array of light identifiers for the currently shaded surface."). The current light is used by the following shading functions:

- [renderstate](renderstate.html "Queries the renderer for a named property.")
- [getlightname](getlightname.html "Returns the name of the current light when called from within an illuminance loop, or converts an integer light ID into the light’s name.")


light

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

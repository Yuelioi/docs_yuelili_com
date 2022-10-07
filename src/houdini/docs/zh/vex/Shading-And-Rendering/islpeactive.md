---
title: islpeactive
order: 43
category:
  - vex
---



Context(s)
[surface](../contexts/surface.html)

`int islpeactive()`

Returns 1 if there are any image planes with vex variable that starts with
`"lpe:"`, which indicates that Light Path Expression (LPE) is enabled. Returns 0
if no such image plane exists.

This function is used to optimize out any LPE related function calls if the
current render doesn’t have any AOVs that uses LPE.


shadow

[dsmpixel](dsmpixel.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[limport](limport.html)

[shadowmap](shadowmap.html)

|
surface

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

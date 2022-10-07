---
title: ocio_transform
order: 8
category:
  - vex
---

`vector ocio\_transform(string dest, vector clr)`

`vector ocio\_transform(string src, string dest, vector clr)`

`vector ocio\_transform(string src, string dest, string looks, vector clr)`

Transform a three-component color into a new color space.

`vector4 ocio\_transform(string dest, vector4 clr)`

`vector4 ocio\_transform(string src, string dest, vector4 clr)`

`vector4 ocio\_transform(string src, string dest, string looks, vector4 clr)`

Transform a four-component color into a new color space.

## Arguments

`src`

The name of the color space to transform from. If this is not given, the function assumes the space assigned to `"data"`.

`dest`

The name of the color space to transform to.

`looks`

A comma separated list of color gradings (also known as “looks”).

`clr`

The color to transform.



## See also

- [ocio_spaces](ocio_spaces.html)

|
color

[blackbody](blackbody.html)

[colormap](colormap.html)

[ctransform](ctransform.html)

[environment](environment.html)

[hsvtorgb](hsvtorgb.html)

[luminance](luminance.html)

[ocio_activedisplays](ocio_activedisplays.html)

[ocio_activeviews](ocio_activeviews.html)

[ocio_import](ocio_import.html)

[ocio_transform](ocio_parsecolorspace.html)

[ocio_roles](ocio_roles.html)

[ocio_spaces](ocio_spaces.html)

[ocio_transform](ocio_transform.html)

[rawcolormap](rawcolormap.html)

[rgbtohsv](rgbtohsv.html)

[rgbtoxyz](rgbtoxyz.html)

[xyztorgb](xyztorgb.html)

|
ocio

[ocio_activedisplays](ocio_activedisplays.html)

[ocio_activeviews](ocio_activeviews.html)

[ocio_import](ocio_import.html)

[ocio_transform](ocio_parsecolorspace.html)

[ocio_roles](ocio_roles.html)

[ocio_spaces](ocio_spaces.html)

[ocio_transform](ocio_transform.html)

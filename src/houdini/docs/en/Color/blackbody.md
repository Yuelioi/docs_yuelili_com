---
title: blackbody
order: 2
category:
  - vex
---

`vector blackbody(float temperature, float luminance)`

Given a temperature, in Kelvin, and a luminance value, computes the
color of an incandescent black body as CIE XYZ tristimulus values.

The computation uses a fast approximation, which is valid for
temperature values between 1666K and 25000K. Values outside of this
range are clamped to the nearest valid in-range value.

The returned value can be converted to linear sRGB values using
the [xyztorgb](xyztorgb.html) ("Convert CIE XYZ tristimulus values to a linear sRGB triplet.") function.

## See also

- [xyztorgb](xyztorgb.html)
- [blackbody](blackbody.html)

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
create

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[blackbody](blackbody.html)

[pcgenerate](pcgenerate.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[removeprimattrib](removeprimattrib.html)

[removeprimgroup](removeprimgroup.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)

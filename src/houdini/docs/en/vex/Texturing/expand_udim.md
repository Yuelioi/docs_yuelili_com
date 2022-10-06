---
title: expand_udim
order: 5
category:
  - houdini
---

## Description

`string expand_udim(float u, float v, string path, ...)`

Scans the input path for special conversion characters to perform either UDIM
or UVTILE style filename expansion.

This is similar to [texprintf](texprintf.html "Similar to sprintf, but does
expansion of UDIM or UVTILE texture filename expansion."), with two
significant differences:

- There are no variadic print arguments. Only UDIM/UVTILE expansion is performed.

- If UDIM/UVTILE expansion was performed, the function checks to see if the texture exists and is accessible.

## Arguments

`u`, `v`

The texture coordinates to translate into a UDIM tile specification.

`path`

A file path. Special character sequences in the path will be expanded into
UDIM specifiers based on the given UV coordinates. The special conversion
sequences are:

`%(UDIM)d` or `<UDIM>`

|

The UDIM coordinate, as computed by `1000 + int(u)+1 + int(v)*10`

`%(U)d`

|

The UVTILE style u-coordinate (`int(u)+1`)

`%(V)d`

|

The UVTILE style v-coordinate (`int(v)+1`)

`%(UVTILE)d` or `<UVTILE>`

|

Expands both u and v coordinates in the form `u%d_v%d`.

The `d` conversion specifier for texture identification can be modified with
field modifiers. For example `%(U)02d` or `%(V)04d`.

"checkfile", `int` `=1`

Normally, the function checks whether the expanded path exists and is
readable. If you pass the `"checkfile", 0` pair, the function will not perform
this check.

## Returns

The path with any UDIM control sequences replaced.

If the expanded file path does not exist or is not readable, the function will
return an empty string, unless you turn off the `checkfile` variadic argument.

## Examples ¶

- `expand_udim(3.1, 4.15, "map_%(UDIM)d.rat")` \- Returns “map_1044.rat”

- `expand_udim(3.1, 4.15, "map_%(U)02d_%(V)02d.rat")` \- Returns “map_04_05.rat”

- `expand_udim(3.14, 11.5, "map_u%(U)d_v%(V)d.rat")` \- Returns “map_u4_v12.rat”

- `expand_udim(3.14, 11.5, "missing_file%(UDIM)d.rat")` \- Returns “” for missing files.

- `expand_udim(3.14, 11.5, "missing_file%(UDIM)d.rat", "checkfile", 0)` \- Returns “missing_file1044.rat” since “checkfile” is disabled.

- `expand_udim(3.14, 11.5, "/path/file.rat")` \- Returns “/path/file.rat” whether the file exists or not since there are no UDIM/UVTILE expansions.

```c
// sprintf() will leave the %(UDIM)d format sequence unmodified. string
map = sprintf("%s/%s_%(UDIM)d.rat", texture_path, texture_base); // Expand the
%(UDIM)d, returning an empty string if the map doesn't exist. map =
expand_udim(u, v, map); if (map != "") Cf = texture(map, u, v);
```

## See also

- [texprintf](texprintf.html)
- [texture](texture.html)

### string

[atof](atof.html)

[atoi](atoi.html)

[concat](concat.html)

[decode](decode.html)

[decodeattrib](decodeattrib.html)

[decodeparm](decodeparm.html)

[decodeutf8](decodeutf8.html)

[encode](encode.html)

[encodeattrib](encodeattrib.html)

[encodeparm](encodeparm.html)

[encodeutf8](encodeutf8.html)

[error](error.html)

[expand_udim](expand_udim.html)

[find](find.html)

[has_udim](has_udim.html)

[insert](insert.html)

[isvalidindex](isvalidindex.html)

[itoa](itoa.html)

[join](join.html)

[lstrip](lstrip.html)

[makevalidvarname](makevalidvarname.html)

[match](match.html)

[pluralize](pluralize.html)

[print_once](print_once.html)

[printf](printf.html)

[relativepath](relativepath.html)

[replace](replace.html)

[replace_match](replace_match.html)

[rstrip](rstrip.html)

[split](split.html)

[splitpath](splitpath.html)

[sprintf](sprintf.html)

[strip](strip.html)

[strlen](strlen.html)

[texprintf](texprintf.html)

[warning](warning.html)

### texture

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)

### udim

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[texprintf](texprintf.html)

### utility

[assert_enabled](assert_enabled.html)

[ch](ch.html)

[ch2](ch2.html)

[ch3](ch3.html)

[ch4](ch4.html)

[chdict](chdict.html)

[chexpr](chexpr.html)

[chexprf](chexprf.html)

[chexprt](chexprt.html)

[chf](chf.html)

[chi](chi.html)

[chid](chid.html)

[chp](chp.html)

[chramp](chramp.html)

[chrampderiv](chrampderiv.html)

[chs](chs.html)

[chsop](chsop.html)

[chsraw](chsraw.html)

[chu](chu.html)

[chv](chv.html)

[error](error.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[isbound](isbound.html)

[isconnected](isconnected.html)

[ninputs](ninputs.html)

[opid](opid.html)

[print_once](print_once.html)

[printf](printf.html)

[select](select.html)

[sleep](sleep.html)

[sprintf](sprintf.html)

[texprintf](texprintf.html)

[warning](warning.html)

---
title: json_dumps
order: 2
category:
  - vex
---

Since

18.5

`string json_dumps(dict d, int flags)`

Converts the dictionary into a JSON-compatible string. Because JSON
is not typed, but VEX dictionaries are, there are two formats to convert
to. The fully-typed format has each dictionary value correspond to
a map with a “type” and “value” explicitly provided, allowing full
round tripping. The compact format omits this, which means when
converting back guesses have to be performed, so things like vectors
will become float arrays.

The possible flag values are:

`0` Fully typed JSON on a single line.
|
`1` Fully typed JSON on multiple lines.
|
`2` Compact typeless JSON on a single line.
|
`3` Compact typeless JSON on multiple lines.

## See also

- [json_loads](json_loads.html)

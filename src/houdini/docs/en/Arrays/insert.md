---
title: insert
order: 6
category:
  - houdini
---

## Description

`void insert(string &str, int index, string value)`

Inserts the `value` into the string `str` at the given `index`.

If `index` is greater than the length of the string, the `value` will simply
be appended to the existing `str`.

`void insert(<type>&array[], int index, <type>value)`

`void insert(<type>&array[], int index, <type>values[])`

Inserts the items or items into the `array` starting at the given `index`.

If `index` is greater than the length current length of the `array`, the
function will fill the gaps with uninitialized values (for example, `0` or the
empty string).

- If the `index` is negative, it counts from the _end_ of the string or array you're inserting into. (If the negative number is greater than the string/array length, it is clamped to `0`.)

For example, to insert the number `100` as the second-to-last item in an
array:

```c
insert(numbers; -1; 100)
```

`int insert(dict &dstdict, string dstkey, dict srcdict, string srckey)`

Copies the value from `srcdict[srckey]` into `dstdict[dstkey]`. This will
preserve the underlying type of the value. If the key is not in the source
dictionary, it will be removed from the destination dictionary. The result is
`1` if the key existed in the destination dictionary before the update, and
`0` if it did not.

`void insert(dict &dstdict, dict srcdict)`

Merges `srcdict` into `dstdict`. Keys that match will be overwritten by values
in the source dictionary.

## See also

- [Arrays](../arrays.html)
- [len](len.html)
- [push](push.html)
- [append](append.html)
- [resize](resize.html)

### array

[find](find.html)

[insert](insert.html)

[isvalidindex](isvalidindex.html)

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

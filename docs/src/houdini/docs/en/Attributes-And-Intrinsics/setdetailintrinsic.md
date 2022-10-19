---
title: setdetailintrinsic
order: 67
category:
  - vex
---

Since

18.0

`int setdetailintrinsic(int geohandle, string name, <type>value, string mode="set")`

`int setdetailintrinsic(int geohandle, string name, <type>value[], string mode="set")`

Despite the name, some “intrinsic” attributes on details are writeable.

## Arguments

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](geoself.html) ("Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`name`

The name of the intrinsic to set.

`mode`

(Optional) if given, this controls how the function modifies any existing value in the attribute.

`"set"` Overwrite the attribute with the given value.
|
`"add"` Add to the attribute the value.
|
`"min"`, `"minimum"` Set the attribute to the minimum of itself and the value.
|
`"max"`, `"maximum"` Set the attribute to the maximum of itself and the value.
|
`"mult"`, `"multiply"` Multiply the attribute by the value. For matrices, this will do matrix multiplication. For vectors, component-wise.
|
`"toggle"` Toggles the attribute, independent of the source value. Useful for toggling group membership.
|
`"append"` Valid for string and array attributes. Appends the source value to the end of the original value.

## See also

- [setattrib](setattrib.html)
- [setdetailattrib](setdetailattrib.html)

|
detail

[adddetailattrib](adddetailattrib.html)

[detail](detail.html)

[detailattrib](detailattrib.html)

[detailattribsize](detailattribsize.html)

[detailattribtype](detailattribtype.html)

[detailattribtypeinfo](detailattribtypeinfo.html)

[detailintrinsic](detailintrinsic.html)

[hasdetailattrib](hasdetailattrib.html)

[removedetailattrib](removedetailattrib.html)

[setdetailattrib](setdetailattrib.html)

[setdetailintrinsic](setdetailintrinsic.html)

|
intrinsic

[detailintrinsic](detailintrinsic.html)

[primintrinsic](primintrinsic.html)

[setdetailintrinsic](setdetailintrinsic.html)

[setprimintrinsic](setprimintrinsic.html)

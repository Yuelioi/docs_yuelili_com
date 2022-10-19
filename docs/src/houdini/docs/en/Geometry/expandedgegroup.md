---
title: expandedgegroup
order: 6
category:
  - vex
---

`int [] expandedgegroup(<geometry>geometry, string groupname)`

`int [] expandedgegroup(<geometry>geometry, string groupname, string mode)`

Returns a list of point pairs of the edges in the specified group of a geometry file.

This can use ad-hoc groups, like `0` or `p0-1`. It matches the SOP group naming convention, in particular that an empty string means all edges.

`mode` can be `ordered`, `unordered` or `split`.
`ordered` is the default mode and will return numbers in the order of appearance in the string, but only for numbers. The order won’t be kept when using expressions such as `@Cd.x>0.5`. The same number won’t appear twice in returned array.
`unordered` mode returns the resolved group following sorted point numbers order.
`split` mode starts by splitting the `groupname` string on `@` characters and then does one resolution per sub string. The order is kept between the sub strings, but will fallback to unordered when resolving a group expression. This same number can appear multiple time when resolving using this mode.

## See also

- [inedgegroup](inedgegroup.html)
- [nedgesgroup](nedgesgroup.html)

|
geo

[expandedgegroup](expandedgegroup.html)

[inedgegroup](inedgegroup.html)

[nedgesgroup](nedgesgroup.html)

[setedgegroup](setedgegroup.html)

---
title: expandpointgroup
order: 2
category:
  - vex
---

`int [] expandpointgroup(<geometry>geometry, string groupname)`

`int [] expandpointgroup(<geometry>geometry, string groupname, string mode)`

`groupname can use ad-hoc group syntax, like` 0-3 `or` @Cd.x>0.5`.

`mode` can be `ordered`, `unordered` or `split`.
`ordered` is the default mode and will return numbers in the order of appearance in the string, but only for numbers. The order won’t be kept when using expressions such as `@Cd.x>0.5`. The same number won’t appear twice in returned array.
`unordered` mode returns the resolved group following sorted point numbers order.
`split` mode starts by splitting the `groupname` string on `@` characters and then does one resolution per sub string. The order is kept between the sub strings, but will fallback to unordered when resolving a group expression. This same number can appear multiple time when resolving using this mode.

This uses the SOP group naming convention, in particular that an empty string means _all_.

## See also

- [inpointgroup](inpointgroup.html)
- [npointsgroup](npointsgroup.html)
- [hasattrib](hasattrib.html)

|
groups

[expandpointgroup](expandpointgroup.html)

[expandprimgroup](expandprimgroup.html)

[expandvertexgroup](expandvertexgroup.html)

[inpointgroup](inpointgroup.html)

[inprimgroup](inprimgroup.html)

[invertexgroup](invertexgroup.html)

[npointsgroup](npointsgroup.html)

[nprimitivesgroup](nprimitivesgroup.html)

[nverticesgroup](nverticesgroup.html)

[setpointgroup](setpointgroup.html)

[setprimgroup](setprimgroup.html)

[setvertexgroup](setvertexgroup.html)

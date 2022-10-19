---
title: expandpointgroup
order: 2
category:
  - vex
---

`int [] expandpointgroup(<geometry>geometry, string groupname)`

`int [] expandpointgroup(<geometry>geometry, string groupname, string mode)`

`groupname可以使用特设的组别语法，如`0-3`或`@Cd.x>0.5`。

`mode`可以是`ordered`, `unordered`或`split`。`ordered`是默认模式，将按照字符串中出现的顺序返回数字，但只针对数字。当使用"@Cd.x>0.5 "这样的表达式时，顺序不会被保留。同一数字不会在返回的数组中出现两次。`unordered`模式返回已解决的组，按照排序的点数字顺序。`split`模式开始时在`@`字符上分割`groupname`字符串，然后对每个子字符串进行一次解析。顺序在子字符串之间保持不变，但是当解析一个组的表达时，会退回到无序状态。使用这种模式解析时，同一个数字可以多次出现。

这使用了 SOP 组的命名惯例，特别是空字符串意味着*all*。

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

---
title: hasmetadata
order: 12
category:
  - vex
---



Context(s)
[cop](../contexts/cop.html)

`int hasmetadata(int opinput, string name)`

This function checks if metadata named `name` exists on the COP attached to
the VEX COP’s input `opinput`. If it exists then 1 is returned, otherwise 0.

## Arguments

`opinput`

The input number to read from, starting from 0. For example, the first input is 0, the second input is 1, and so on.

`name`

The name of the metadata to check.



## See also

- [metadata](metadata.html)

|
cop

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[hasmetadata](hasmetadata.html)

[metadata](metadata.html)

[ninput](ninput.html)

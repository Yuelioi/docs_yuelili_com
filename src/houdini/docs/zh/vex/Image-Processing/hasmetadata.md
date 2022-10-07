---
title: hasmetadata
order: 12
category:
  - vex
---

[cop](../contexts/cop.html)

`int hasmetadata(int opinput, string name)`

Context(s) 这个函数检查与 VEX COP 的输入`opinput`相连的 COP 上是否存在名为`name`的元数据。如果它存在，则返回 1，否则返回 0。

## Arguments

`opinput`

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

`name`

要检查的元数据的名称。

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

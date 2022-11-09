---
title: metadata
order: 30
category:
  - vex
---

[cop](../contexts/cop.html)

`<type> metadata(int opinput, string name)`

`float|int metadata(int opinput, string name, int index)`

Context(s) 返回与元数据`name`相关的元数据值，如果元数据不存在，输入没有连接，或者索引超出范围，则返回零（矩阵版本的身份矩阵）。

## Arguments

`opinput`

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

`name`

要获取的元数据的名称。

`index`

对于复合数据类型，这表示要取的向量/矩阵的分量，或数组的哪一项。

## See also

- [hasmetadata](hasmetadata.html)
- [cinput](cinput.html)
- [binput](binput.html)
- [finput](finput.html)
- [ninput](ninput.html)

|
cop

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[hasmetadata](hasmetadata.html)

[metadata](metadata.html)

[ninput](ninput.html)

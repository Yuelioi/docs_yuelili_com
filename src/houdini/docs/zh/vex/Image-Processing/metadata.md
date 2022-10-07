---
title: metadata
order: 30
category:
  - vex
---



Context(s)
[cop](../contexts/cop.html)

`<type> metadata(int opinput, string name)`

`float|int metadata(int opinput, string name, int index)`

Returns the metadata value associated with metadata `name`, or zero if the
metadata doesn’t exist, the input isn’t connected, or the index is out of range
(identity matrices for the matrix versions).

## Arguments

`opinput`

The input number to read from, starting from 0. For example, the first input is 0, the second input is 1, and so on.

`name`

The name of the metadata to fetch.

`index`

For compound data types, this indicates the component of the
vector/matrix, or which item of the array, to fetch.



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

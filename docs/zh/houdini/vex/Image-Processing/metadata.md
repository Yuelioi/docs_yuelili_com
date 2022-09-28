---
title: metadata
order: 29
category:
  - houdini
---
    
## 描述

Returns a metadata value from a composite operator.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
<type> metadata(int opinput, string name)
```

```c
float|int metadata(int opinput, string name, int index)
```

Returns the metadata value associated with metadata `name`, or zero if the
metadata doesn‘t exist, the input isn‘t connected, or the index is out of
range(identity matrices for the matrix versions).

返回与 metadataname 相关的元数据值，如果元数据不存在，或者没有连接，或者索引超出范围，则返回 0。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

元数据不存在，输入没有连接，或者索引超出范围，则返回 0。

`name`

The name of the metadata to fetch.

(矩阵版本的身份矩阵)。

`index`

For compound data types, this indicates the component of the vector/matrix, or
which item of the array, to fetch.

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

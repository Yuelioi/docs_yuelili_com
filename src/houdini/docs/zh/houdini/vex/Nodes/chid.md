---
title: chid
order: 9
category:
  - houdini
---
    
## 描述

Resolves a channel string (or parameter) and return op_id, parm_index and
vector_index.

| Since | 17.5 |
| ----- | ---- |

`void chid(string channel_path, int &op_id, int &parm_index, int &vector_index)`

`void chid(string op_path, string channel_name, int &op_id, int &parm_index, int &vector_index)`

```c
int  chid(int op_id, int parm_index, int vector_index)
```

Resolves a channel given by a channel path or operator path and returns

解决一个由通道路径或操作者路径给定的通道，并通过出口返回其相应的操作者 ID 和向量索引。

its corresponding operator id, parameter id and vector_index through
outputarguments. Return -1 values on failure. You can also use the last
overloadedfunction that doesn‘t take a channel_path to test for validity of
the keys.Returns 1 if the ids are valid, otherwise returns 0.

其相应的操作者 ID、参数 ID 和向量\_index，并通过输出的

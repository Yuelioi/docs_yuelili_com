---
title: opid
order: 23
category:
  - houdini
---
    
## 描述

Resolves an operator path string and return its op_id.

| Since | 17.5 |
| ----- | ---- |

```c
int  opid(string op_path)
```

```c
int  opid(int op_id)
```

Resolves an operator path and returns its corresponding operator id.

解析一个操作者路径并返回其对应的操作者 ID。

Return -1 on failure. The form that takes an operator id as an input returns
1if it is a valid operator id, otherwise it returns 0. This can be used to
testif an operator id is valid.

失败时返回-1。将运算符 id 作为输入的形式，如果是有效的运算符 id，则返回 1

---
title: nedgesgroup
order: 14
category:
  - houdini
---
    
## 描述

Returns the number of edges in the group.

```c
int  nedgesgroup(string filename, string groupname)
```

```c
int  nedgesgroup(int input, string groupname)
```

Returns the number of edges in the specified group in the input or geometry
file.

返回输入或几何文件中指定组的边的数量。

This must refer to an exact group name, not an adhoc group pattern.

这必须是指一个确切的组名，而不是一个临时的组模式。

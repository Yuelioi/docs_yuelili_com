---
title: pcnumfound
order: 23
category:
  - houdini
---
    
## 描述

This node returns the number of points found by pcopen.

## 说明

This node returns the number of points found by a [[pcopen]] (pcopen.html
"Returns a handle to a point cloud file.") query.

返回由 [[pcopen]] 找到的点的数量。

For example, if 10 points are being filtered, and 6 are within thesearch
radius, `pcnumfound` will return 6.

例如，如果过滤 10 个点，而范围内只有 6 个点在搜索半径内，则 pcnumfound 将返回 6。

```c
int  pcnumfound(int handle)
```

## 示例

查找 0 号输入口，位置周围半径 2 的点（限额 10 个），如果周围点数<5 (自身也算 1 个），则移除该点

也就是根据距离筛选点

```c
int pcloud = pcopen(0,"P",@P,2,10);

if (pcnumfound(pcloud) < 5)
{
    removepoint(0,@ptnum);
}

```

[[../_Tags/点层级]]]

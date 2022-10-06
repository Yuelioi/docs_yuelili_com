---
title: nearpoints
order: 13
category:
  - houdini
---
    
## 描述

Finds the all the closest point in a geometry.

基于一坐标，查找最近点的索引。

支持分组、支持限定查找个数

```c
int [] nearpoints(<geometry>geometry, vector pt, float maxdist)
```

```c
int [] nearpoints(<geometry>geometry, vector pt, float maxdist, int maxpts)
```

```c
int [] nearpoints(<geometry>geometry, string ptgroup, vector pt, float
maxdist)```

```c
int [] nearpoints (<geometry>geometry, string ptgroup, vector pt, float
maxdist, int maxpts)
```

## 参数

`opinput`

The number of the input to the current node, starting with `0` being the first
input.

当前节点的输入编号，第一个输入口编号为 0。

`geometry`

The name of the geometry file to reference.Inside Houdini,this may be
“op:full_path_to_sop” to reference a SOP.

要参考的几何体文件的名称。这可能是 "op: full_path_to_sop "来引用一个 SOP。

`ptgroup`

A point group pattern to limit the search to.Can be a SOP-style grouppattern
such as `0-10` or `@Cd.x>0.5`.An empty string will matchall points.

用于限制搜索的点组模式。可以是一个 SOP 风格的组模式，如 as0-10or@Cd. x>0.5。一个空字符串将匹配所有的点。

`pt`

The position in space to find the closest point on the geometry to.

在空间中找到几何体上最近的点的位置。

`maxdist`

The maximum distance to search.

搜索的最大距离。

`maxpts`

The maximum number of points to find.

要找到的最大数量的点。

返回

An array of point numbersThis will only search against points, not the surface
locations of the geometry.Use xyzdist Finds the distance from
a point to the closest location on surface geometry.") to find the closest
point on surfaces or curves.

点的索引组。只搜索点，而不会搜索几何体的表面位置。
使用 [[../MEASURE/xyzdist]] 找到一个点到表面几何体上最近的位置的距离。
来寻找曲面或曲线上最近的点。

## 示例

获取距离原点 (0, 0, 0) 附近，就、的点索引

```c

vector pt = {0,0,0};

// 点坐标 + 距离
int pts[] = nearpoints(0, pt, 2.0);  // {4, 1, 3, 5, 7, 0, 2, 6, 8}

// 点坐标 + 距离 + 限定搜索个数
int pts[] = nearpoints(0, pt, 2.0, 4); // {4, 1, 3, 5}

// 点坐标 + 距离 + 限定分组
int pts[] = nearpoints(0, "group1", pt, 2.0); // // {4, 1, 3, 5, 7, 0, 2, 6, 8}

// 点坐标 + 距离 + 限定搜索个数
int pts[] = nearpoints(0, "group1", pt, 2.0, 4); // {4, 1, 3, 5}



// 相对路径




// 上述group1是所有点分组，你可以自己改其他点分组
printf("%s",pts);

```

---
title: pcfind
order: 11
category:
  - houdini
---
    
## 描述

Returns a list of closest points from a file.

`int [] pcfind(<geometry>geometry, string Pchannel, vector P, float radius, int maxpoints)`

`int [] pcfind(<geometry>geometry, string ptgroup, string Pchannel, vector P, float radius, int maxpoints)`

`int [] pcfind(<geometry>geometry, string Pchannel, vector P, float radius, int maxpoints, float &distances[])`

`int [] pcfind(<geometry>geometry, string ptgroup, string Pchannel, vector P, float radius, int maxpoints, float &distances[])`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

These functions open a geometry file and return a list of points with the
location P within radius, based on point positions found in Pchannel.Only the
maxpoints closest points within the given radius will be returned. The file
name may use the `op:` syntax to reference SOP geometry in the OP contexts.The
Pchannel parameter indicates the attribute which contains the positions to be
searched.

这些函数打开了一个几何文件，并根据在 Pchannel 中找到的点的位置，返回一个位置为 Pwithinradius 的点的列表。
只有在给定半径内最接近的点才会被返回。文件名可以使用 op:语法来引用 OP 上下文中的 SOP 几何图形。 Pchannel 参数表示包含要搜索的位置的属性。

The `ptgroup` is a point group that limits the points to search.This is a SOP-
style group pattern, so can be something like `0-10` or `@Cd.x>0.5`.A blank
string is treated as matching all points.

pgroup 是一个点组，用来限制搜索的点。 这是一个 SOP 风格的组模式，所以可以是like0-10or@Cd.x>0.5。
一个空白的字符串被视为匹配所有的点。

The function also optionally takes a float array `distances`, which it
modifies with the distances to each point.

这个函数也可以选择接受一个浮点数组 distances，它用每个点的距离来修改这个数组。

The closest point is in entry 0 of the returned array, and the other points
are sorted by increasing distance.

最接近的点在返回的数组的第 0 个条目中，其他的点按距离的增加进行排序。

## Examples

Performing a proximity query:

执行近似度查询。

    int closept[] = pcfind(filename, "P", P, maxdistance, maxpoints);P = 0;foreach (int ptnum; closept){  vector closepos = point(filename, "P", ptnum);  P += closepos;}P /= len(closept);

---
title: pcfind_radius
order: 12
category:
  - houdini
---
    
## 描述

Returns a list of closest points from a file taking into account their radii.

`int [] pcfind_radius(<geometry>geometry, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints)`

`int [] pcfind_radius(<geometry>geometry, string ptgroup, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints)`

`int [] pcfind_radius(<geometry>geometry, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints, float &distances[])`

`int [] pcfind_radius(<geometry>geometry, string ptgroup, string Pchannel, string RadChannel, float radscale, vector P, float radius, int maxpoints, float &distances[])`

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

These functions open a geometry file and return a list of points with
thelocation P within radius, based on point positions found inPchannel.Each of
the points will be expanded by their RadChannelattribute, which will be
dilated by radscale.

这些函数打开了一个几何文件，并返回一个点的列表，其内容为

Using a radius channel allows intersection detection between spheres of
varying radii.In this case you cannot use only your own sphere radius, as the
intersecting sphere may have a much larger radius so not be in your search
window.Because of this, it is also sensible to use a 0.0 radius with this
function just find all the source spheres that your query position is inside
of.

的点的列表，该列表基于在 Pchannel 中找到的点的位置。 每一个点都会被它们的 RadChannel 属性所扩展，并以 yradscale 进行扩张。

Only the maxpoints closest points within the given radiuswill be returned. The
file name may use the `op:` syntax to reference SOPgeometry in the OP
contexts.The Pchannel parameter indicates theattribute which contains the
positions to be searched.

使用半径通道可以检测不同半径的球体之间的交集。 在这种情况下，你不能只使用自己的球体半径，因为相交的球体可能有更大的半径，所以不在你的搜索窗口中。
正因为如此，使用 0.0radius 也是明智的，该函数只需找到你的查询位置所处的所有源球体。

The ptgroup is a point group that limits the points to search.This is a [SOP-
style group pattern](../../model/groups.html#manual), so can be something like
`0-10` or `@Cd.x>0.5`.A blank string is treated as matching all points.

只有在给定半径内最接近的点

The function also optionally takes a float array `distances`, which it
modifies with the distances to each point.

的最接近的点才会被返回。文件名可以使用 op:语法来引用 SOP

Note

The radius attribute and radius scale apply to the points being searched, not
to the point you are doing the searching with!

几何图形的 OP 语境。 Pchannel 参数表示的是

Note

If the radius attribute does not exist, this becomes equivalent to `pcfind`.

属性，其中包含要搜索的位置。

## Examples

Performing a proximity query:

pgroup 是一个点组，用来限制要搜索的点。 这是一个 SOP 风格的组模式，所以可以是like0-10or@Cd.x>0.5。
一个空白的字符串被视为匹配所有的点。

    int closept[] = pcfind_radius(filename, "P", "pscale", 1.0, P, maxdistance, maxpoints);P = 0;foreach (int ptnum; closept){  vector closepos = point(filename, "P", ptnum);  P += closepos;}P /= len(closept);

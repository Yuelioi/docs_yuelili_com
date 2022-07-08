## 描述

Returns a list of closest points from a file within a specified cone.

Since | 18.0  
---|---  
  
`int [] pccone(<geometry>geometry, string PChannel, vector P, vector dir,
float angle, float max_distance, int maxpoints)`

`int [] pccone(<geometry>geometry, string ptgroup, string PChannel, vector P,
vector dir, float angle, float max_distance, int maxpoints)`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从0开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```
 reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在Houdini内部运行时，这可以是anop:/path/to/sopreference。

These functions open a geometry file and return a list of points within the
cone whose apex is P, opens in the vector direction dir, and with angle angle
to dir. Additionally, it only returns the closest maxpoints points within
distance max_distance of P.

这些函数打开一个几何文件，并返回一个圆锥体内的点的列表，这个圆锥体的顶点是P，在矢量方向dir打开，角度为odir。此外，它只返回距离P的max_distance内最近的maxpointspoints。

The `ptgroup` is a point group that limits the points to search.This is a SOP-
style group pattern, so can be something like `0-10` or `@Cd.x>0.5`.A blank
string is treated as matching all points.

组（ptgroup）是一个点组，用来限制搜索的点。 这是一个SOP风格的分组模式，所以可以是like0-10or@Cd.x>0.5。
空白字符串被视为匹配所有的点。


---
title: osd_limitsurface
order: 3
category:
  - houdini
---
    
## 描述

Evaluates a point attribute at the subdivision limit surface using Open
Subdiv.

```c
osd_limitsurface
```

evaluates the point attribute in the geometry specified as
asubdivision surface.

osd_limitsurface 评估指定为细分曲面的几何体中的点属性。

For vertex attributes, use
[osd_limitsurfacevertex](osd_limitsurfacevertex.html "Evaluates a vertex
attribute at the subdivision limit surface using Open Subdiv.").

细分曲面。

`int osd_limitsurface(<geometry>geometry, string attrib_name, int patch_id, float u, float v, <type>&result)`

`int osd_limitsurface(<geometry>geometry, string attrib_name, int patch_id, float u, float v, float &result[])`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

对于顶点属性，使用 osd_limitsurfacevertex。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`&result`

The computed attribute value is stored in the variable you pass to this
argument.The type of the variable should match the type of the attribute you
are reading.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

Returns

`1` if computing the attribute was successful, `0` if it failed.

计算出来的属性值会被储存在你传递给这个参数的变量中。

Possible reasons for failure are:

该变量的类型应该与你正在读取的属性的类型相匹配。

- The geometry contains no polygons or the topology can‘t be converted using Open Subdiv

如果计算属性成功，则为 1，如果失败，则为 0。

- The attribute doesn‘t exist on the input geometry.

失败的可能原因是。

- The attribute size/type doesn‘t match the VEX type of the `result` argument.

几何图形不包含多边形，或者拓扑结构不能用 Open Subdiv 转换。

## Examples

Generate a point cloud on the limit surface of a subdivision mesh.

该属性不存在于输入的几何体上。

    int npatches = osd_patchcount(file);for (int patch = 0; patch < npatches; patch++){  for (int v = 0; v < 100; v++)  {    vector P;    if (osd_limitsurface(file, "P", patch, nrandom(), nrandom(), P))    {      int ptid = addpoint(geohandle, P);    }  }}

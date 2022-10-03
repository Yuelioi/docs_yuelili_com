---
title: osd_patchcount
order: 7
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# osd_patchcount

VEX function

#

```c
int  osd_patchcount(<geometry>geometry)
```

Returns the number of base level patches in the subdivision hull specified by
the geometry filename. This is different that the number of faces in the
subdivision hull. For example, in a tetrahedron, each triangle face will
generate three patches.

返回由几何体文件名指定的细分外壳中的基层补丁的数量。 这与细分外壳中的面的数量不同。 例如，在一个四面体中，每个三角形的面会产生三个补丁。

```c
int  osd_patchcount(<geometry>geometry, int face_id)
```

For a given face in the coarse mesh, this returns the number of patches which
are generated by that face.While a quadrilateral only generates 1 patch, all
other faces will generate multiple patches based on their vertex count.For
example, a triangle will generate 3 patches, a pentagon will generate 5
patches.

对于粗网格中的一个给定的面，这将返回由该面产生的补丁的数量。 四边形只产生一个补丁，而其他所有面都会根据其顶点数量产生多个补丁。
例如，一个三角形会产生 3 个补丁，一个五边形会产生 5 个补丁。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。
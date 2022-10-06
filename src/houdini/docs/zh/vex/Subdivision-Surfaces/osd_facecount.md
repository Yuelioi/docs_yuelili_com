---
title: osd_facecount
order: 1
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

# osd_facecount

VEX function

#

```c
int  osd_facecount(<geometry>geometry)
```

Returns the number of coarse faces in the subdivision hull.This is different
that the number of patches in the subdivision surface.

返回细分曲面中粗面的数量。 这与细分面中的斑块数不同。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入编号（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

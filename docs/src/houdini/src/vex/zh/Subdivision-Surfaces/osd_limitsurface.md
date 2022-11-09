---
title: osd_limitsurface
order: 4
category:
  - vex
---

`osd_limitsurface`评估指定为细分曲面的几何体中的点属性。

对于顶点属性，使用[osd_limitsurfacevertex](osd_limitsurfacevertex.html)（"使用 Open Subdiv 在细分极限表面评估顶点属性。"）。

`int osd_limitsurface(<geometry>geometry, string attrib_name, int patch_id, float u, float v, <type>&result)`

`int osd_limitsurface(<geometry>geometry, string attrib_name, int patch_id, float u, float v, float &result[])`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，`.bgeo'），以便从中读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`&result`

计算出的属性值被存储在你传递给这个参数的变量中。变量的类型应该与你正在读取的属性的类型相匹配。

## Returns

`1`如果计算属性成功，`0`如果失败。

失败的可能原因是。

- 几何图形不包含多边形，或者拓扑结构不能用 Open Subdiv 转换。
- 输入的几何体上不存在该属性。
- 属性大小/类型与`result`参数的 VEX 类型不匹配。

## Examples



在细分网格的极限面上生成点云。

```c
int npatches = osd_patchcount(file);
for (int patch = 0; patch < npatches; patch++)
{
 for (int v = 0; v < 100; v++)
 {
 vector P;
 if (osd_limitsurface(file, "P", patch, nrandom(), nrandom(), P))
 {
 int ptid = addpoint(geohandle, P);
 }
 }
}

```

## See also

- [osd_facecount](osd_facecount.html)
- [osd_firstpatch](osd_firstpatch.html)
- [osd_patchcount](osd_patchcount.html)

|
subd

[osd_facecount](osd_facecount.html)

[osd_firstpatch](osd_firstpatch.html)

[osd_limitsurface](osd_limitsurface.html)

[osd_limitsurfacevertex](osd_limitsurfacevertex.html)

[osd_lookupface](osd_lookupface.html)

[osd_lookuppatch](osd_lookuppatch.html)

[osd_patchcount](osd_patchcount.html)

[osd_patches](osd_patches.html)

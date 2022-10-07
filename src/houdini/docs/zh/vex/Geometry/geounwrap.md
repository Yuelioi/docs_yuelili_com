---
title: geounwrap
order: 8
category:
  - vex
---

`string geounwrap(<geometry>geometry, string unwrap\_attribute)`

返回一个 oppath 字符串，使文件或几何体根据矢量属性被就地解包。这个函数在路径上添加一个 "unwrap:attrname "前缀和 unwrap_attribute。路径可以是一个文件名，一个带有 "op: "前缀的 opath 或者一个 opinput。可以提供一个输入索引而不是一个字符串。

在 oppath 上添加 "unwrap:attrname "前缀将创建一个几何体的副本，并基于 unwrap 属性覆盖点的位置。如果该属性是一个顶点属性，拓扑结构可以改变。

这使得所有在点的位置上工作的 vex 函数能够在一个自定义的空间中工作，如 UV 空间或颜色空间。

## See also

- [intersect](intersect.html)
- [uvdist](uvdist.html)
- [uvintersect](uvintersect.html)
- [uvsample](uvsample.html)
- [xyzdist](xyzdist.html)

|
textures

[geounwrap](geounwrap.html)

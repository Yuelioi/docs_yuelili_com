---
title: geounwrap
order: 7
category:
  - houdini
---
    
## 描述

Returns an `oppath:` string to unwrap the geometry in-place.

```c
string  geounwrap(<geometry>geometry, string unwrap_attribute)
```

Returns an oppath string that will cause the file or geometry to be unwrapped
inplace based on a vector attribute.This function adds an “unwrap:attrname”
prefix followed by the unwrap_attribute to the path.path can be a filename, an
oppath with the “op:” prefix or an opinput.An input index can be supplied
instead of a string.

返回一个 opath 字符串，该字符串将导致文件或几何体根据一个矢量属性被就地解包。

Adding an “unwrap:attrname” prefix to an oppath will create a copy of the
geometry and overwrite the point positions based on the unwrap attribute. The
topology can change, if the attribute is a vertex attribute.

这个函数在路径上添加一个 "unwrap:attrname "前缀和 unwrap_attribution，路径可以是一个文件名，一个带有 "op:
"前缀的 opath 或者一个 opinput。

## 描述

in a custom space such as UV space or Color space.

可以提供一个 inputindex 而不是一个字符串。

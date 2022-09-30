---
title: pcexport
order: 8
category:
  - houdini
---
    
## 描述

Writes data to a point cloud inside a `pciterate` or a `pcunshaded` loop.

```c
int  pcexport(int handle, string channel_name, <type>value, ...)
```

`int pcexport(int handle, string channel_name, vector value, float radius, ...)`

Returns 1 if the export succeeded or 0 if the export failed.The export will
fail if channel_name is not read-write or if (in theversion of pcexport taking
a radius) the point being exported is at adistance less than the specified
radius from a point that is already in thepoint cloud.

如果导出成功则返回 1，如果导出失败则返回 0。

This function writes to the channels of points opened with
[pcopen](pcopen.html) "Returns a handle to a point cloud file.")
or[pcgenerate](pcgenerate.html "Generates a point cloud."). The second version
of this function takes a radius parameter and uses it to accept or reject the
point being exported according to its distance to the points that are already
in the point cloud.It must be separated from all other points by at least the
specified radius.To write new point data into a point cloud file, use
[pcwrite](pcwrite.html "Writes data to a point cloud file.").

如果 channel_name 不是可读可写的，或者如果（在采取半径的 pcexport 版本中）被导出的点在一个半径上，那么导出将失败。

## Storage type

If you add the `"storage"` optional keyword, the next argument specifies a
storage type for the data.Storage types are the standard tile based format
data types:

的版本中）被导出的点与已经存在的点的距离小于指定的半径。

`int8, uint8`

与已经在点云中的某个点的距离小于指定的半径。

|

8 bit signed/unsigned integers

点云中的点。

---|---

`int16, uint16`

这个函数写到用 pcopenorpcgenerate 打开的点的通道。这个函数的第二个版本接受一个半径参数，并根据它与点云中已存在的点的距离来接受或拒绝被导出的点。
它必须与其他所有的点相隔至少有指定的半径。 要将新的点数据写进点云文件，请使用 epcwrite。

|

16 bit signed/unsigned integers

如果你添加了 "存储 "这个可选的关键字，下一个参数将指定数据的存储类型。

`int32, uint32`

存储类型是标准的基于瓦片格式的数据类型。

|

32 bit signed/unsigned integers

int8, uint8

`int64, uint64`

8 位有符号/无符号整数

|

64 bit signed/unsigned integers

int16, uint16

`real16`

|

16 bit floating point values

16 位有符号/无符号整数

`real32`

|

32 bit floating point values

int32, uint32

`real64`

|

64 bit floating point values

32 位有符号/无符号整数

`int`, `uint`, `real`

|

Default precision integer/floating point values

int64, uint64

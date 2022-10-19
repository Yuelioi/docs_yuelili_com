---
title: sampledisk
order: 32
category:
  - vex
---

`void sampledisk(float &x, float &y, float sx, float sy)`

这个函数对均匀的样本值进行扭曲，使它们在磁盘上平均分布。该转换试图保留原始样本的分层特性。

## Arguments

`x`, `y`

该函数用单位盘内均匀分布的点来覆盖这些变量。

`sx`, `sy`

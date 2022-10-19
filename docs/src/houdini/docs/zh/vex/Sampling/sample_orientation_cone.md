---
title: sample_orientation_cone
order: 26
category:
  - vex
---

`vector4 sample\_orientation\_cone(vector4 center, float maxangle, vector u)`

## Arguments

`center`

在圆锥体中心的方向。这不需要被归一化。

`maxangle`

只要所有的 "u "值在 0 到 1 之间，圆锥体的任何样本离开 "中心 "的最大角度，单位是弧度。

::: info Note

这个角度是输出所代表的方向四元数与 "中心 "之间的最大四元数旋转角度，它是被采样的单位 4D 超球的欧几里得锥角的两倍。π 的 "最大角度 "将对所有方向进行采样，但只对所有 4D 单位向量的一半进行采样；2π 的 "最大角度 "将对所有 4D 单位向量进行采样。

`u`

0 和 1 之间的三个数字。

返回一个单位向量 4，即一个长度为 1 的向量 4，基于`u`。给出在`[0,1)`中三个值的均匀随机的`u`向量，返回的四元数方向将是均匀随机的，并且相对于`u`是连续的，在`中心`的`最大角度`内的方向区域。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)

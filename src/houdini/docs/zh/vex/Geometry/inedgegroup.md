---
title: inedgegroup
order: 9
category:
  - vex
---

`int inedgegroup(string filename, string groupname, int pointnum0, int pointnum1)`

`int inedgegroup(int input, string groupname, int pointnum0, int pointnum1)`

如果点对所指定的边在字符串所指定的组中，则返回 1。如果组不存在或者边不包含在组中，这个函数返回 0。

这可以使用特设的组，如`p29-30`。它符合 SOP 组的命名惯例，特别是空字符串意味着所有边缘。

地质

[expandedgegroup](expandedgegroup.html)

[inedgegroup](inedgegroup.html)

[nedgesgroup](nedgesgroup.html)

[setedgegroup](setedgegroup.html)

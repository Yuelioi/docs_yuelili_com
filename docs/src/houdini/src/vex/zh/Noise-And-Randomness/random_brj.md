---
title: random_brj
order: 31
category:
  - vex
---

自 18.5 以来

`float random_brj(float seed, int offset)`

`float random_brj(int seed, int offset)`

`float random_brj(vector4 seed, int offset)`

`float random_brj(vector seed, int offset)`

`vector2 random_brj(float seed, int offset)`

`vector2 random_brj(int seed, int offset)`

`vector2 random_brj(vector4 seed, int offset)`

`vector2 random_brj(vector seed, int offset)`

`vector random_brj(float seed, int offset)`

`vector random_brj(int seed, int offset)`

`vector random_brj(vector4 seed, int offset)`

`vector random_brj(vector seed, int offset)`

当生成一个随机数的序列时，你会注意到它倾向于结块。然而，有时你想要一串分布较好的样本。二进制随机抖动（BRJ）样本是一系列分布相对均匀的随机数，类似于`random_sobol()`。

种子允许你产生不同的序列。如果它是一个浮动点的种子，注意非常小的差异将选择非常不同的序列。

偏移量是要提取序列中的哪个条目。这应该是一个整数序列，如`ptnum'，以使分布属性发挥作用。

每个数字都在`[0.1]`范围内。

随机

[random_brj](random_brj.html)

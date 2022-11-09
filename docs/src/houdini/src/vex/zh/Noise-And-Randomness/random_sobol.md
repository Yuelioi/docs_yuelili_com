---
title: random_sobol
order: 36
category:
  - vex
---

`float random_sobol(float seed, int offset)`

`float random_sobol(int seed, int offset)`

`float random_sobol(vector4 seed, int offset)`

`float random_sobol(vector seed, int offset)`

`vector4 random_sobol(float seed, int offset)`

`vector4 random_sobol(int seed, int offset)`

`vector4 random_sobol(vector4 seed, int offset)`

`vector4 random_sobol(vector seed, int offset)`

`vector random_sobol(float seed, int offset)`

`vector random_sobol(int seed, int offset)`

`vector random_sobol(vector4 seed, int offset)`

`vector random_sobol(vector seed, int offset)`

当生成一个随机数的序列时，你会注意到它倾向于结块。然而，有时你想要一串分布较好的样本。苏波尔序列是一系列分布相对均匀的随机数。

种子允许你选择不同的 sobol 序列。如果它是一个浮动点的种子，注意非常小的差异将选择非常不同的序列。

偏移量是要提取序列中的哪个条目。这应该是一个整数序列，如`ptnum'，以使分布属性发挥作用。

每个数字都在`[0...1]`范围内。

随机_sobol

[random_sobol](random_sobol.html)

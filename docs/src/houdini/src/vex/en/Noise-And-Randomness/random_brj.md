---
title: random_brj
order: 31
category:
  - vex
---

Since

18.5

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

When generating a sequence of random numbers you will notice that it tends to
clump. However, sometimes you want a bunch of samples that are better distributed. A binary random jittered (BRJ) sample is a series of random numbers which are relatively evenly distributed, similar to `random_sobol()`.

The seed allows you to generate different sequences. If it is a floating point seed, note very small differences will select very different sequences.

The offset is which entry in the sequence to extract. This should be an integer sequence, like `ptnum`, in order for the distribution property to work.

Each number is in the `[0..1)` range.

random_brj

[random_brj](random_brj.html)

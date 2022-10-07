---
title: random_sobol
order: 36
category:
  - vex
---

`float random\_sobol(float seed, int offset)`

`float random\_sobol(int seed, int offset)`

`float random\_sobol(vector4 seed, int offset)`

`float random\_sobol(vector seed, int offset)`

`vector4 random\_sobol(float seed, int offset)`

`vector4 random\_sobol(int seed, int offset)`

`vector4 random\_sobol(vector4 seed, int offset)`

`vector4 random\_sobol(vector seed, int offset)`

`vector random\_sobol(float seed, int offset)`

`vector random\_sobol(int seed, int offset)`

`vector random\_sobol(vector4 seed, int offset)`

`vector random\_sobol(vector seed, int offset)`

When generating a sequence of random numbers you will notice that it tends to
clump. Sometimes you want a bunch of samples that are better distributed,
however. A sobol sequence is a series of random numbers which are relatively
evenly distributed.

The seed allows you to select different sobol sequences. If it is a floating
point seed, note very small differences will select very different sequences.

The offset is which entry in the sequence to extract. This should be an
integer sequence, like `ptnum`, in order for the distribution property to work.

Each number is in the `[0..1)` range.


random_sobol

[random_sobol](random_sobol.html)

---
title: pcsampleleaf
order: 26
category:
  - houdini
---
    
## 描述

Changes the current iteration point to a leaf descendant of the current
aggregate point.

```c
void  pcsampleleaf(int handle, float sample)
```

This function can only be used with the pcopenlod() function, and then
onlywithin a pciterate() loop.It replaces the current iteration point with
animportance sampled leaf descendent of that point.The weighting used toselect
the leaf point is the “area” channel provided to the pcopenlod()function‘s
“measure” parameter, or a uniform weight if no area channelwas specified when
opening the point cloud.The sample parameter isexpected to be a uniform random
value between 0 and 1.

这个函数只能与 pcopenlod()函数一起使用，而且只能在 pciterate()循环中使用。

If the current iteration point is already a leaf point or the point cloudwas
not opened with pcopenlod(), pcsampleleaf() has no effect.

在 pciterate() 循环中使用。 它将当前的迭代点替换为一个

This function is useful when aggregate point information cannot be used ina
meaningful way, and provides a mechanism to access the informationcontained in
child nodes in the point tree.For example, it wouldn‘t makesense to trace
shadow rays from an averaged point position, but it isuseful to choose one of
the child points and then send the shadow ray tothat point.

替换当前的迭代点为该点的重要性取样叶子的后裔。 用来选择叶子点的权重

## Example: Shadow Rays

    // Open a point cloud and retrieve a single aggregate point representing the// entire cloudstring texturename = "points.pc";int handle = pcopenlod(texturename, "P", P, 8,"measure", "solidangle","area", "A","samples", 1,"aggregate:A", "sum","aggregate:P", "mean");Cf = 0;// This loop will iterate only oncewhile (pciterate(handle)){  // Query A from the averaged point  float    ptarea;  pcimport(handle, "A", ptarea);  pcsampleleaf(handle, nrandom());  // Query P from a sampled leaf point  vector    pos;  pcimport(handle, "P", pos);  if (trace(pos, P-pos, Time))    Cf += ptarea / length2(P-pos);}

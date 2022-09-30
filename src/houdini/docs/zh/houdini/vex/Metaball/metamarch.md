---
title: metamarch
order: 2
category:
  - houdini
---
    
## 描述

Takes the ray defined by p0 and p1 and partitions it into zero or  
more sub-intervals where each interval intersects a cluster of metaballs  
from filename.

`int metamarch(int &index, string filename, vector &p0, vector &p1, float displace_bound)`

Takes the ray defined by p0 and p1 and partitions it into zeroor more sub-
intervals where each interval intersects a cluster ofmetaballs from filename.
The interval may not actually intersect anymetaballs, but will provide fairly
tight bounds on the cluster.

将由 0 和 p1 定义的射线划分为零个或多个子区间，每个区间与群组相交。

This allows a ray-marching algorithm to “skip” uninteresting areas andonly
focus on marching through areas where metaballs might be found.

或更多的子区间，其中每个区间都与一个来自文件名的

The first time you call the function, use index=-1 and set p0and p1 to the
endpoints of the ray. If the function finds aninterval, it returns 1 and sets
p0 and p1 to the endpoints ofthe interval and increments index. Otherwise it
returns 0 anddoesn‘t alter the arguments.

元球的集群。这个区间实际上可能不会与任何

So, you can repeatedly call the function with variables for theindex, index,
and index arguments to ray-march through areasof interest, skipping the dead
space:

元胞，但会对该簇提供相当严格的约束。

    int  index;vector  p0, p1;// Initialize input valuesindex = -1;p0 = Eye; p1 = P;result = 0;while (metamarch(index, metaball_file, p0, p1, displace_bound)){result += ray_march(metaball_file, p0, p1);}

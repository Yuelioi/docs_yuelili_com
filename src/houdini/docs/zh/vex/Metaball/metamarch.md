---
title: metamarch
order: 3
category:
  - vex
---

`int metamarch(int &index, string filename, vector &p0, vector &p1, float displace\_bound)`

Takes the ray defined by p0 and p1 and partitions it into zero
or more sub-intervals where each interval intersects a cluster of
metaballs from filename. The interval may not actually intersect any
metaballs, but will provide fairly tight bounds on the cluster.

This allows a ray-marching algorithm to “skip” uninteresting areas and
only focus on marching through areas where metaballs might be found.

The first time you call the function, use index=-1 and set p0
and p1 to the endpoints of the ray. If the function finds an
interval, it returns 1 and sets p0 and p1 to the endpoints of
the interval and increments index. Otherwise it returns 0 and
doesn’t alter the arguments.

So, you can repeatedly call the function with variables for the
index, index, and index arguments to ray-march through areas
of interest, skipping the dead space:

```c
int index;
vector p0, p1;
// Initialize input values
index = -1;
p0 = Eye; p1 = P;
result = 0;
while (metamarch(index, metaball\_file, p0, p1, displace\_bound))
{
result += ray\_march(metaball\_file, p0, p1);
}

```


metaball

[metaimport](metaimport.html)

[metamarch](metamarch.html)

[metanext](metanext.html)

[metastart](metastart.html)

[metaweight](metaweight.html)

|
ray

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[metamarch](metamarch.html)

[uvintersect](uvintersect.html)

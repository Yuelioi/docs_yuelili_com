---
title: metamarch
order: 3
category:
  - vex
---

`int metamarch(int &index, string filename, vector &p0, vector &p1, float displace\_bound)`

获取由 p0 和 p1 定义的射线，并将其划分为零个或多个子区间，其中每个区间与文件名中的元胞群相交。这个区间实际上可能不会与任何元胞相交，但会对群组提供相当严格的界限。

这使得射线行进算法可以 "跳过 "无趣的区域，只关注行进在可能发现元宝的区域。

第一次调用该函数时，使用 index=-1 并将 p0 和 p1 设置为射线的端点。如果函数找到一个区间，它就返回 1，并将 p0 和 p1 设置为区间的端点，同时增加 index。否则它返回 0，并且不改变参数。

因此，你可以重复调用这个函数，用变量来表示索引、指数和索引参数，在感兴趣的区域进行射线行进，跳过死角。

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

---
title: forpoints
order: 4
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# forpoints

#

In the [image3d context](../contexts/image3d.html "Obsolete. Write a program
for use with the i3dgen program to generate 3Dtextures."), when geometry is
specified (i.e. metaball geometry or particles), you can iterate over the
metaballs which affect a point in space.

在 image3d 上下文中，当指定了几何体（即元宝几何体或粒子），你可以遍历影响空间中某一点的元宝。

    forpoints ( position [, distance] ) {}

â¦where the position is a vector representing a point in space. The statement
will be executed once for each metaball/particle at the position passed in.

其中位置是一个代表空间中某一点的向量。该语句将在所传递的位置上对每个元球/粒子执行一次。

If you specify the distance, all metaballs/particles within the distance of
the point specified will be iterated through. The distance parameter is
optional and may result in slower execution of the shader.

如果你指定了距离，那么在指定点的距离内的所有元气球/粒子将被迭代。距离参数是可选的，可能会导致着色器的执行速度变慢。

Inside the loop, you can call the [mdensity](mdensity.html "Returns the
density of the metaball field if metaball geometry isspecified to i3dgen.")
and [mattrib](mattrib.html "Returns the value of the point attribute for the
metaballs ifmetaball geometry is specified to i3dgen.") functions to query the
contribution of the current point instead of getting a “blended” value.

在循环中，你可以调用它们的 densityandmattribfunctions 来查询当前点的贡献，而不是得到一个 "混合 "的值。

For example, the following code will take the point color of the metaball
which contributes the maximum weight to the point in space:

例如，下面的代码将获取对空间中的点贡献最大的重量的 metaball 的点的颜色。

    float d = 0, max = 0;vector clr = 0;vector blended_color;forpoints ( P ) {d = mdensity(P);if (d > max) {clr = mattrib("Cd", P);max = d;}blended_color = d * clr;}

Note that when you call [mattrib](mattrib.html "Returns the value of the point
attribute for the metaballs ifmetaball geometry is specified to i3dgen.")
inside a `forpoints` loop, the attribute is not pre-blended by the density of
the metaball.

注意，当你在 forpoints 循环中调用 mattribins 时，该属性不会被元宝的密度预先混合。

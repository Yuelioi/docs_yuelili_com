---
title: flowpnoise
order: 11
category:
  - vex
---

`float flowpnoise(vector xyz, vector p, float flow)`

`vector flowpnoise(vector xyz, vector p, float flow)`

`float flowpnoise(vector4 xyzt, vector4 p, float flow)`

`vector flowpnoise(vector4 xyzt, vector4 p, float flow)`

`float flowpnoise(float x, float y, int px, int py, float flow)`

`vector flowpnoise(float x, float y, int px, int py, float flow)`

`float flowpnoise(vector xyz, int px, int py, int pz, float flow)`

`vector flowpnoise(vector xyz, int px, int py, int pz, float flow)`

`float flowpnoise(vector4 xyzt, int px, int py, int pz, int pt, float flow)`

`vector flowpnoise(vector4 xyzt, int px, int py, int pz, int pt, float flow)`

这个算子从三维和四维数据中产生一维和三维佩林流噪声。佩林流噪声有两种形式：一种是在整个 N 维空间内随机变化的非周期性噪声，另一种是在空间的某个特定范围内重复的周期性形式。周期性形式可用于生成在 N 维空间上平铺的图案，如无缝重复的基于噪声的纹理图。

噪声的范围是（0，1），中值是 0.5。噪声的分布取决于维度，维度越高，噪声值的分布就越接近高斯分布。

流动噪声与佩林噪声非常相似，如(周期噪声](././nodes/vop/periodicnoise.html) （"从一维、三维和四维数据生成一维和三维佩林噪声。"），但是有一个额外的流动参数。流量参数可以被认为是一个额外的维度，但这个维度的周期总是 1。通过流动维度移动，旋转噪声向量，而不是通过噪声空间调整切片，这将产生一个更加流动的动画外观。

参见 VEX 语言指南中的[噪声和随机性](.../random.html)以获得更多信息。

## See also

- [noise](pnoise.html)

|
noise

[anoise](anoise.html)

[curlnoise](curlnoise.html)

[curlnoise2d](curlnoise2d.html)

[curlxnoise](curlxnoise.html)

[curlxnoise2d](curlxnoise2d.html)

[cwnoise](cwnoise.html)

[flownoise](flownoise.html)

[flowpnoise](flowpnoise.html)

[hscript_noise](hscript_noise.html)

[hscript_rand](hscript_rand.html)

[hscript_snoise](hscript_snoise.html)

[hscript_sturb](hscript_sturb.html)

[hscript_turb](hscript_turb.html)

[mwnoise](mwnoise.html)

[noise](noise.html)

[noised](noised.html)

[onoise](onoise.html)

[pnoise](pnoise.html)

[xnoise](pxnoise.html)

[pxnoised](pxnoised.html)

[snoise](snoise.html)

[vnoise](vnoise.html)

[wnoise](wnoise.html)

[xnoise](xnoise.html)

[xnoised](xnoised.html)

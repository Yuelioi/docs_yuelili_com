---
title: snoise
order: 37
category:
  - vex
---

`float snoise(vector pos)`

`vector snoise(vector pos)`

`float snoise(vector pos, int turbulence, float rough, float atten)`

`vector snoise(vector pos, int turbulence, float rough, float atten)`

`float snoise(vector pos, int periodX, int periodY, int periodZ)`

`vector snoise(vector pos, int periodX, int periodY, int periodZ)`

`float snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

这些函数类似于[wnoise](wnoise.html)（"生成沃利（cellular）噪声。"）。返回的噪声是基于所有最接近的点的权重，每个点的贡献是基于一个类似元球的滚降曲线。也就是说，如果样本点靠近球体，其贡献将更大。

噪声的界限大致为（-1.7，1.7）。只支持三维噪声。然而，这种噪声具有计算湍流的能力，对噪声有粗糙度和衰减。

## See also

- [Noise and randomness](../random.html)
- [anoise](anoise.html)
- [curlnoise](curlnoise.html)
- [flownoise](flownoise.html)
- [noise](noise.html)
- [onoise](onoise.html)
- [pnoise](pnoise.html)
- [snoise](snoise.html)
- [vnoise](vnoise.html)
- [wnoise](wnoise.html)
- [xnoise](xnoise.html)

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

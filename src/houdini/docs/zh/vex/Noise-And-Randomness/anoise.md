---
title: anoise
order: 2
category:
  - vex
---

`float anoise(vector pos)`

`vector anoise(vector pos)`

`float anoise(vector pos, int turbulence, float rough, float atten)`

`vector anoise(vector pos, int turbulence, float rough, float atten)`

`float anoise(vector pos, int periodX, int periodY, int periodZ)`

`vector anoise(vector pos, int periodX, int periodY, int periodZ)`

`float anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

这些函数产生 "鳄鱼 "噪声，一种类似于沃利噪声的蜂窝状噪声（[wnoise](wnoise.html)（"生成沃利（蜂窝）噪声。"））。目前不可能用 Worley 函数来模拟鳄鱼噪声，但有可能得到非常相似的 "外观"。

噪声的界限大致是（0，1）。这个函数只支持三维噪声。

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

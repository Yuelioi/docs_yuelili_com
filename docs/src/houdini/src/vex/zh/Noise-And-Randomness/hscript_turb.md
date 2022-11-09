---
title: hscript_turb
order: 17
category:
  - vex
---

`float hscript_turb(vector pos, int depth)`

匹配[turb](.../.../expressions/turb.html)的输出（"生成空间连贯的三维噪声。"）。如果你将工作流程转换为 VEX，或者让 VEX 与 Hscript 表达式协同工作，并且需要湍流看起来与表达式中的一样，那么这个函数就会很有用。

## Arguments

`pos`

对湍流噪声进行采样的位置。

`depth`

噪声的分形迭代次数。

## Returns

范围通常在-1 到 1 之内，但根据深度的不同可以超过这个范围。高深度的最大范围是-2 到 2。

## See also

- [hscript_sturb](hscript_sturb.html)
- [hscript_noise](hscript_noise.html)
- [hscript_snoise](hscript_snoise.html)
- [hscript_rand](hscript_rand.html)

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

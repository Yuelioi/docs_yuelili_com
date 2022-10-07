---
title: smooth
order: 15
category:
  - vex
---

`float smooth(float value1, float value2, float amount)`

`float smooth(float value1, float value2, float amount, float rolloff)`

计算一个介于 0 和 1 之间的数字。如果传入的金额小于或等于值 1，返回 0；如果金额大于或等于值 2，返回 1。

如果量在 value1 和 value2 之间，就会计算一个平滑的（easin/easeout）插值。如果指定了滚降，混合的拐点将被移开。

如果滚降大于 1，将向右移动，如果滚降小于 1（大于 0），将向左移动。

插页

[ckspline](ckspline.html)

[clamp](clamp.html)

[cspline](cspline.html)

[efit](efit.html)

[fit](fit.html)

[fit01](fit01.html)

[fit10](fit10.html)

[fit11](fit11.html)

[invlerp](invlerp.html)

[lerp](lerp.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[slerp](slerp.html)

[smooth](smooth.html)

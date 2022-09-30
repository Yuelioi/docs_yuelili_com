---
title: ctransform
order: 2
category:
  - houdini
---
    
## 描述

Transforms between color spaces.

```c
vector  ctransform(string fromspace, string tospace, vector clr)
```

```c
vector  ctransform(string tospace, vector clr)
```

If you don‘t give a fromspace, assumes `"cspace:rgb"`.

如果你没有给出一个色彩空间，则假设为 "cspace:rgb"。

Transforms color tuple clr from one color space to another.

将颜色元组 clr 从一个颜色空间转换到另一个。

The possible arguments for fromspace and tospace are`"cspace:rgb"`,
`"cspace:hsl"`, `"cspace:hsv"`, `"cspace:XYZ"`,`"cspace:Lab"`, and
`"cspace:tmi"`.

fromspace 和 tospace 的可能参数是 "cspace:rgb", "cspace:hsl", "cspace:hsv",
"cspace:XYZ", "cspace:Lab", 和 "cspace:tmi"。

## Notes

- The hue-based systems are normalized with the hue going from `0` to `1`. LAB and TMI are not normalized.

基于色调的系统被归一化，色调从 0 到 1。LAB 和 TMI 没有被规范化。

- For `"cspace:rgb"`, the primaries are assumed to be in linear NTSC space (gamma 1.0), using C reference white.

对于 "cspace:rgb"，假定基色为线性 NTSC 空间（gamma 1.0），使用 C 参考白。

- C reference white is used for conversion when converting from XYZ to LAB space (and vice versa).

从 XYZ 空间转换到 LAB 空间（反之亦然）时，使用 C 参考白进行转换。

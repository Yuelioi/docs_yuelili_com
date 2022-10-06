---
title: nextsample
order: 5
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

# nextsample

VEX function

#

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)  
---|---

```c
void  nextsample(int &sid, float &sx, float &sy, ...)
```

```c
void  nextsample(int &sid, vector &svec, ...)
```

[newsampler](newsampler.html "Initializes a sampling sequence for the
nextsample function.") and this function expose the high-quality deterministic
sampling patterns used by mantra for pixel anti-aliasing. When rendering in
raytracing mode, it‘spossible to generate deterministic 2D samples with
`nextsample` routine by initializing the sampling sequence with the `SID`
global variable.

newsampler 和这个函数揭示了 mantra 用于像素抗锯齿的高质量确定性采样模式。在光线追踪模式下进行渲染时，通过用 SID 全局变量初始化采样序列，可以用 nextsampleroutine 生成确定性的 2D 采样。

This method can generate either 2D or 3D sampling patterns.To generate 2D
samples, use the signature with 2 float write-only arguments.To generate 3D
samples, use the signature with a vector write-only argument.

这种方法可以生成 2D 或 3D 采样模式。 要生成二维样本，请使用带有 2 个浮点只写参数的签名。 要生成三维样本，请使用带有一个矢量只写参数的签名。

You can add an extra argument, `"mode"`, followed by one of the following:

你可以添加一个额外的参数，"mode"，后面是以下的一个参数。

`“qstrat”`

Advances to the next sample in the pattern. You should use this mode when
using [newsampler](newsampler.html "Initializes a sampling sequence for the
nextsample function.").

推进到模式中的下一个样本。你应该在使用 newsampler 时使用这个模式。

`“nextpixel”`

Advances to a new pixel sampling pattern. You should use this mode when using
SID with raytracing to generate good-quality sampling patterns within a pixel.
This mode takes into account other samples within the current pixel and will
appropriately stratify itself.If rendering with micropolygon rendering,
“nextpixel” will behave the same as “qstrat”.

推进到一个新的像素采样模式。当使用 SID 和光线追踪在一个像素内产生高质量的采样模式时，你应该使用这种模式。这种模式会考虑到当前像素内的其他样本，并且会适当地进行分层。
如果使用微多边形渲染，"nextpixel "的行为将与 "qstrat "相同。

`“decorrelate”`

Advances to a new decorrelated sample. You should use this mode to
deterministically generate a new sampling sequence that is unrelated to an
existing sequence. Similarly to “nextpixel”, this mode preserves high-quality
pixel sampling when used with SID and raytracing.

推进到一个新的装饰相关的样本。你应该使用这种模式来确定地生成一个与现有序列无关的新采样序列。与 "nextpixel
"类似，当与 SID 和光线追踪一起使用时，这种模式可以保留高质量的像素采样。

    int nsamples = 10;int sid = israytrace ? SID : newsampler();for (i = 0; i < nsamples; i++){if (israytrace)nextsample(sid, sx, sy, "mode", "nextpixel");elsenextsample(sid, sx, sy, "mode", "qstrat");// Sample something using sx/sy...}

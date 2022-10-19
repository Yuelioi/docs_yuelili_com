---
title: Parameters & Floating Point Values
order: 11
category:
  - AE 插件开发
---

# Parameters & Floating Point Values

我们有件事要向你承认；多年来，尽管我们给了你 8 位的颜色值，但我们在内部却背着你使用浮点表示法。

没错，即使是过亮的颜色，我们也只告诉你'255，255，255'。是的，没错。

好吧，我们不能再活在谎言中了 给定一个颜色参数(由 After Effects 在你的效果参数阵列中传递给你)，这个函数返回一个浮点表示，包括任何高动态范围的成分。

## PF_ColorParamSuite1

### PF_GetFloatingPoint ColorFromColorDe

```cpp
PF_ErrPF_GetFloatingPointColorFromColorDef(
PF_ProgPtreffect_ref,
constPF_ParamDef*color_defP,
PF_PixelFloat*fp_colorP);
```

## PF_PointParamSuite1

我们还提供了一种方法来获取点参数的浮点值。

### PF_GetFloatingPoint ValueFromPointDef

```cpp
PF_ErrPF_GetFloatingPointValueFromPointDef(
PF_ProgPtreffect_ref,
constPF_ParamDef*point_defP,
A_FloatPoint*fp_pointP);
```

## PF_AngleParamSuite1

在 CS6.0.2 中，我们现在提供了一种方法来获取角度参数的浮点值。

### PF_GetFloatingPoint ValueFromAngleDef

```cpp
PF_ErrPF_GetFloatingPointValueFromAngleDef(
PF_ProgPtreffect_ref,
constPF_ParamDef*angle_defP,
A_FloatLong*fp_valueP);
```

---
title: Parameters & Floating Point Values
order: 11
category:
  - AE 插件开发
---

# Parameters & Floating Point Values

We have something to admit to you; for years, even though we’ve given you 8 bit color values, we’ve internally used floating point representations behind your back.

That’s right, even with over-bright colors, we’d only ever tell you ‘255, 255, 255’. Yeah, right.

Well, we can’t live the lie any longer! Given a color parameter (passed to you by After Effects in your effect’s parameter array), this function returns a floating point representation, including any high dynamic range component.

## PF_ColorParamSuite1

### PF_GetFloatingPoint ColorFromColorDe

```cpp
PF_ErrPF_GetFloatingPointColorFromColorDef(
PF_ProgPtreffect_ref,
constPF_ParamDef*color_defP,
PF_PixelFloat*fp_colorP);
```

## PF_PointParamSuite1

We also provide a way to get floating point values for point parameters.

### PF_GetFloatingPoint ValueFromPointDef

```cpp
PF_ErrPF_GetFloatingPointValueFromPointDef(
PF_ProgPtreffect_ref,
constPF_ParamDef*point_defP,
A_FloatPoint*fp_pointP);
```

## PF_AngleParamSuite1

New in CS6.0.2, we now provide a way to get floating point values for angle parameters.

### PF_GetFloatingPoint ValueFromAngleDef

```cpp
PF_ErrPF_GetFloatingPointValueFromAngleDef(
PF_ProgPtreffect_ref,
constPF_ParamDef*angle_defP,
A_FloatLong*fp_valueP);
```

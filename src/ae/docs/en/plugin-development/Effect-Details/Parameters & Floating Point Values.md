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

---

## PF_ColorParamSuite1

| **Function** | **Purpose** |
| ------------ | ----------- |

| `PF\_GetFloatingPoint`
`ColorFromColorDef` |

```cpp
PF\_Err PF\_GetFloatingPointColorFromColorDef(
 PF\_ProgPtr effect\_ref,
 const PF\_ParamDef \*color\_defP,
 PF\_PixelFloat \*fp\_colorP);

```

|

---

## PF_PointParamSuite1

We also provide a way to get floating point values for point parameters.

| **Function** | **Purpose** |
| ------------ | ----------- |

| `PF\_GetFloatingPoint`
`ValueFromPointDef` |

```cpp
PF\_Err PF\_GetFloatingPointValueFromPointDef(
 PF\_ProgPtr effect\_ref,
 const PF\_ParamDef \*point\_defP,
 A\_FloatPoint \*fp\_pointP);

```

|

---

## PF_AngleParamSuite1

New in CS6.0.2, we now provide a way to get floating point values for angle parameters.

| **Function** | **Purpose** |
| ------------ | ----------- |

| `PF\_GetFloatingPoint`
`ValueFromAngleDef` |

```cpp
PF\_Err PF\_GetFloatingPointValueFromAngleDef(
 PF\_ProgPtr effect\_ref,
 const PF\_ParamDef \*angle\_defP,
 A\_FloatLong \*fp\_valueP);

```

|

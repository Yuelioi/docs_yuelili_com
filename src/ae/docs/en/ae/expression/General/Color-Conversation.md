---
title: Color-Conversation
order: 6
category:
  - AE 表达式
---

## Description

Harry Frank provides a video tutorial on his [graymachinewebsite](http://www.graymachine.com/tutorials/rgb-to-hsl-expressions/) thatshows how to use these color conversion methods to change the color of thewaves produced by the Radio Waves effect.

---

## rgbToHsl(`rgbaArray`)

**Description**

Converts a color in RGBA space to HSLA space. The input is an Array ofnormalized red, green, blue, and alpha channel values, all in the range of 0.0to 1.0. The resulting value is an Array of hue, saturation, lightness, andalpha channel values, also in the range of 0.0 to 1.0.

Example:

```javascript
rgbToHsl.effect("Change Color")("Color To Change");
```

**Parameters**

| Property    | Type                  |
| ----------- | --------------------- |
| `rgbaArray` | Array (4-dimensional) |

**Type**

Array (4-dimensional)

---

## hslToRgb(`hslaArray`)

**Description**

Converts a color in HSLA space to RGBA space. This conversion is the oppositeof the conversion performed by the rgbToHsl method.

**Parameters**

| Property    | Type                  |
| ----------- | --------------------- |
| `hslaArray` | Array (4-dimensional) |

**Type**

Array (4-dimensional)

---

## hexToRgb(`hexString`)

**Description**

Converts a color in hex triplet space to RGB space, or in hex quartet space toRGBA space. For hex triplets, the alpha channel defaults to 1.0.

Available in After Effects 16.0 or later.

**Parameters**

| Property    | Type                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hexString` | String representing an hex triplet (6 digits, no alpha channel) or quartet (8digits, includes alpha channel) containing only numerals or characters A–F.Optional leading characters 0x, 0X, or # will be ignored. Characters beyond 8digits will be ignored. |

**Type**

Array (4-dimensional)

**Examples**

Any of the following will return `[1.0, 0.0, 1.0, 1.0]`:

- `hexToRgb("FF00FF")`

- `hexToRgb("#FF00FF")`

- `hexToRgb("0xFF00FF")`

- `hexToRgb("0XFF00FFFF")` 
:::info Note
This inputs an 8-digit hex quartet; the last two digits set alpha channel to 1.0.
:::
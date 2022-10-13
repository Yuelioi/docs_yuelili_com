---
title: Effect
order: 7
category:
  - AE 表达式
---

## Effect.active

**Description**

Returns `true` if the effect is turned on (the _effect switch_ is selected).

**Type**

Boolean

---

## Effect.param(`name`)

**Description**

Returns a property within an effect. Effect control points are always in layer
space.

Example:

```javascript
effect("Bulge").param("Bulge Height");
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `name`   | String |

**Type**

Property

---

## Effect.param(`index`)

**Description**

Returns a property within an effect. Effect control points are always in layerspace. For example, effect(“Bulge”).param(4) returns the Bulge Height
property.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `index`  | Number |

**Type**

Property

---
title: Sub-objects
order: 1
category:
  - AE 表达式
---

:::info Note

For After Effects CC and CS6, the Expression language menu, the “Layer Sub-objects”, “Layer General”, “Layer Properties”, “Layer 3D”, and “Layer SpaceTransforms” have been arranged into a “Layer” submenu.
:::

## Layer.source

**Description**

Returns the source Comp or source Footage object for the layer. Default timeis adjusted to the time in the source.

Example:

```javascript
source.layer(1).position;
```

**Type**

Comp or Footage

---

## Layer.sourceTime(`t=time`)

**Description**

Returns the layer source corresponding to time `t`.

:::info Note

After Effects CS5.5 and later
:::
**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

Number

---

## Layer.sourceRectAtTime(`t = time, includeExtents = false`)

**Description**

Returns a JavaScript object with four attributes: `[top, left, width, height]`

Extents apply only to shape layers and paragraph text layers.

Shape layer extents increase the size of the layer bounds as necessary.

Paragraph text layers returns the bounds of the paragraph box.

:::info Note

After Effects 13.2 and later. Paragraph text extents added in After Effects
15.1.
:::
Example:

```javascript
myTextLayer.sourceRectAtTime().width;
```

**Parameters**

| Property       | Type   |
| -------------- | ------ |
| t              | Number |
| includeExtents | Bool   |

**Type**

Array (4-dimensional)

---

## Layer.effect(`name`)

**Description**

After Effects finds the effect by its name in the Effect Controls panel. Thename can be the default name or a user-defined name. If multiple effects havethe same name, the effect closest to the top of the Effect Controls panel is
used.

Example:

```javascript
effect("Fast Blur")("Blurriness");
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `name`   | String |

**Type**

Effect

---

## Layer.effect(`index`)

**Description**

After Effects finds the effect by its index in the Effect Controls panel,starting at `1` and counting from the top.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `index`  | Number |

**Type**

Effect

---

## Layer.mask(`name`)

**Description**

The name can be the default name or a user-defined name. If multiple maskshave the same name, the first (topmost) mask is used.

Example:

```javascript
mask("Mask 1");
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `name`   | String |

**Type**

Mask

---

## Layer.mask(`index`)

**Description**

After Effects finds the mask by its index in the Timeline panel, starting at`1` and counting from the top.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `index`  | Number |

**Type**

Mask

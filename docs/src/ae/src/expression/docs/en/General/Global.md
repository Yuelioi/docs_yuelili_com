---
title: Global
order: 1
category:
  - AE 表达式
---

## comp(`name`)

**Description**

Retrieves another composition by name.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `name`   | String |

**Type**

Comp

---

## footage(`name`)

**Description**

Retrieves a footage item by name.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `name`   | String |

**Type**

Footage

---

## thisProject

**Description**

Represents the project which contains the expression.

**Type**

Project

---

## thisComp

**Description**

Represents the composition containing the expression.

**Type**

Comp

---

## thisLayer

**Description**

Represents the layer containing the expression. Because thisLayer is thedefault object, its use is optional. For example, you can start an expressionwith thisLayer.width or width and get the same result.

**Type**

Layer, Light, or Camera

---

## thisProperty

**Description**

Represents the property containing the expression. For example, if you writean expression on the Rotation property, you can start an expression withthisProperty to refer to the Rotation property.

**Type**

Property

---

## time

**Description**

Represents the composition time, in seconds, at which the expression is being
evaluated.

**Type**

Number

---

## colorDepth

**Description**

Type the project color depth value. For example, colorDepth returns `16` whenthe project color depth is 16 bits per channel.

**Type**

Number

---

## posterizeTime(`updatesPerSecond`)

**Description**

This expression allows you to set the frame rate for a property to be lowerthan the frame rate of the composition.

The `updatesPerSecond` value passed in is _the number of times per second_ theexpression should evaluate.

**Parameters**

| Property           | Type   |
| ------------------ | ------ |
| `updatesPerSecond` | Number |

**Type**

Number

**Examples**

To change a property to a random value 1 time per second:

```javascript
posterizeTime(1);
random();
```

To change a 2d property (such as Position or Scale) to a random value 3 times
per second:

```javascript
posterizeTime(3);
var newValue = random(0, 100);
[newValue, newValue];
```

To change a property to a random value within a specified range, every 12
frames:

```javascript
var holdFrames = 12;
var minValue = 50;
var maxValue = 100;
posterizeTime(1 / framesToTime(holdFrames));
var newValue = random(minValue, maxValue);
newValue;
```

---

## value

**Description**

Represents the value at the current time for the property containing the
expression.

**Type**

Number, Array, or String

---
title: Key
order: 11
category:
  - AE 表达式
---

**Description**

When you access a Key object, you can get time, index, and value propertiesfrom it. For example, the following expression gives you the value of thethird Position keyframe: position.key(3).value.

The following expression, when written on an Opacity property with keyframes,ignores the keyframe values and uses only the placement of the keyframes intime to determine where a flash should occur:

```javascript
d = Math.abs(time - nearestKey(time).time);
easeOut(d, 0, 0.1, 100, 0);
```

## Key.value

**Description**

Returns the value of the keyframe.

**Type**

Number or Array

## Key.time

**Description**

Returns the time of the keyframe.

**Type**

Number

---

## Key.index

**Description**

Returns the index of the keyframe.

**Type**

Number

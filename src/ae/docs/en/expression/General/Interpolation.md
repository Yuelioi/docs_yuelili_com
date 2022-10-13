---
title: Interpolation
order: 5
category:
  - AE 表达式
---

**Description**

For all the Interpolation methods, the argument `t` is often `time` or`value`, though it can have other values, instead. If `t` is `time`, theinterpolation between values happens over a duration. If `t` is `value`, thenthe expression maps one range of values to a new range of values.

For additional explanations and examples of the Interpolation methods, see [JJ
Gifford’s
website](http://www.adobe.com/go/learn_ae_jjgiffordexpressionsinterpolation).

Chris and Trish Meyer provide additional information and examples for thesemethods in an article on the [ProVideo Coalitionwebsite](http://provideocoalition.com/index.php/cmg_keyframes/story/deeper_modes_of_expression_part_2_interpolation_methods/).

Ian Haigh provides a script on [After Effects Scriptswebsite](http://aescripts.com/ease-and-wizz/) that you can use to easily applyadvanced interpolation method expressions—such as bounces—to properties.

Andrew Devis provides a [pair of videotutorials](http://blogs.adobe.com/toddkopriva/2010/10/tutorials-on-using-linear-expression-method.html) on the Creative COW website that show in detailhow to use the linear expression method along with the Convert Audio To
Keyframes command.

---

## linear(`t`, `tMin`, `tMax`, `value1`, `value2`)

**Description**

Returns `value1` when `t <= tMin`. Returns `value2` when `t >= tMax`. Returnsa linear interpolation between `value1` and `value2` when `tMin < t < tMax`.

For example, this expression on the Opacity property causes Opacity values toramp linearly from `20%` to `80%` over the time from `0` seconds to `6`
seconds:

```javascript
linear(time, 0, 6, 20, 80);
```

This method—like all the Interpolation methods—can also be used to convertfrom one range of values to another.

For example, this expression on the Opacity property converts the Opacityvalues from the range `0%`-`100%` to the range `20%`-`80%`:

```javascript
linear(value, 0, 100, 20, 80);
```

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `tMin`   | Number          |
| `tMax`   | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

---

## linear(`t`, `value1`, `value2`)

**Description**

Returns a value that linearly interpolates from `value1` to `value2` as `t`ranges from `0` to `1`. Returns `value1` when `t <= 0`. Returns `value2` when
`t >= 1`.

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

---

## ease(`t`, `tMin`, `tMax`, `value1`, `value2`)

**Description**

Similar to linear with the same arguments, except that the interpolation easesin and out so that the velocity is `0` at the start and end points. Thismethod results in a smooth animation.

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `tMin`   | Number          |
| `tMax`   | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

---

## ease(`t`, `value1`, `value2`)

**Description**

Similar to linear with the same arguments, except that the interpolation easesin and out so that the velocity is `0` at the start and end points. Thismethod results in a smooth animation.

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

---

## easeIn(`t`, `tMin`, `tMax`, `value1`, `value2`)

**Description**

Similar to ease, except that the tangent is `0` only on the `tMin` side andinterpolation is `linear` on the `tMax` side.

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `tMin`   | Number          |
| `tMax`   | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

---

## easeIn(`t`, `value1`, `value2`)

**Description**

Similar to ease, except that the tangent is `0` only on the `value1` side andinterpolation is `linear` on the `value2` side.

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

---

## easeOut(`t`, `tMin`, `tMax`, `value1`, `value2`)

**Description**

Similar to ease, except that the tangent is `0` only on the `tMax` side andinterpolation is `linear` on the `tMin` side.

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `tMin`   | Number          |
| `tMax`   | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

---

## easeOut(`t`, `value1`, `value2`)

**Description**

Similar to ease, except that the tangent is `0` only on the `value2` side andinterpolation is `linear` on the `value1` side.

**Parameters**

| Property | Type            |
| -------- | --------------- |
| `t`      | Number          |
| `value1` | Number or Array |
| `value2` | Number or Array |

**Type**

Number or Array

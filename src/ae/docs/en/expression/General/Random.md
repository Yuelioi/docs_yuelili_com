---
title: Random Numbers
order: 4
category:
  - AE 表达式
---

:::info Note

The wiggle method—which is used to randomly vary a property value—is in theProperty attributes and methods category. See Property attributes and methods.
:::

---

## seedRandom(`offset`, `timeless=false`)

**Description**

The random and gaussRandom methods use a seed value that controls the sequenceof numbers. By default, the seed is computed as a function of a unique layeridentifier, the property within the layer, the current time, and an offsetvalue of `0`. Call seedRandom to set the offset to something other than 0 tocreate a different random sequence. Use true for the timeless argument to notuse the current time as input to the random seed. Using true for the timelessargument allows you to generate a random number that doesn’t vary depending onthe time of evaluation. The offset value, but not the timeless value, is alsoused to control the initial value of the wiggle function.

For example, this expression on the Opacity property sets the Opacity value toa random value that does not vary with time:

```javascript
seedRandom(123456, true);
random() * 100;
```

The multiplication by `100` in this example converts the value in the range`0–1` returned by the random method into a `number` in the range `0–100`; thisrange is more typically useful for the Opacity property, which has values from
`0%` to `100%`.

**Parameters**

| Property   | Type    |
| ---------- | ------- |
| `offset`   | Number  |
| `timeless` | Boolean |

**Type**

None

---

## random()

**Description**

Returns a random number in the range `0–1`.

:::info Note

In After Effects CC and CS6, the behavior of random() is changed to be morerandom when layer IDs are close together. The wiggle() expression is not
affected.
:::
**Type**

Number

---

## random(`maxValOrArray`)

**Description**

If `maxValOrArray` is a `Number`, this method returns a number in the rangefrom `0` to `maxValOrArray`. If `maxValOrArray` is an `Array`, this methodreturns an Array with the same dimension as `maxValOrArray`, with eachcomponent ranging from `0` to the corresponding component of `maxValOrArray`.

**Parameters**

| Property        | Type            |
| --------------- | --------------- |
| `maxValOrArray` | Number or Array |

**Type**

Number or Array

---

## random(`minValOrArray`, `maxValOrArray`)

**Description**

If `minValOrArray` and `maxValOrArray` are `Numbers`, this method returns anumber in the range from `minValOrArray` to `maxValOrArray`.

If the arguments are `Arrays`, this method returns an `Array` with the samedimension as the argument with the greater dimension, with each component inthe range from the corresponding component of `minValOrArray` to thecorresponding component of `maxValOrArray`.

For example, the expression `random([100, 200], [300, 400])` returns an`Array` whose first value is in the range `100–300` and whose second value isin the range `200–400`. If the dimensions of the two input Arrays don’t match,higher-dimension values of the shorter Array are filled out with zeros.

**Parameters**

| Property        | Type            |
| --------------- | --------------- |
| `minValOrArray` | Number or Array |
| `maxValOrArray` | Number or Array |

**Type**

Number or Array

---

## gaussRandom()

**Description**

The results have a Gaussian (bell-shaped) distribution. Approximately `90%` ofthe results are in the range `0–1`, and the remaining `10%` are outside this
range.

**Type**

Number

---

## gaussRandom(`maxValOrArray`)

**Description**

When `maxValOrArray` is a `Number`, this method returns a random number.Approximately `90%` of the results are in the `0` to `maxValOrArray` range,and the remaining `10%` are outside this range.

When `maxValOrArray` is an `Array`, this method returns an Array of randomvalues, with the same dimension as `maxValOrArray`. `90%` of the values are inthe range from `0` to `maxValOrArray`, and the remaining `10%` are outside
this range.

The results have a Gaussian (bell-shaped) distribution.

**Parameters**

| Property        | Type            |
| --------------- | --------------- |
| `maxValOrArray` | Number or Array |

**Type**

Number or Array

---

## gaussRandom(`minValOrArray`, `maxValOrArray`)

**Description**

If `minValOrArray` and `maxValOrArray` are `Numbers`, this method returns arandom number. Approximately `90%` of the results are in the range from`minValOrArray` to `maxValOrArray`, and the remaining `10%` are outside this
range.

If the arguments are `Arrays`, this method returns an `Array` of randomnumbers with the same dimension as the argument with the greater dimension.For each component, approximately ` 90%``of the results are in the range fromthe corresponding component of ``minValOrArray ` to the corresponding componentof `maxValOrArray`, and the remaining `10%` are outside this range.

The results have a Gaussian (bell-shaped) distribution.

**Parameters**

| Property        | Type            |
| --------------- | --------------- |
| `minValOrArray` | Number or Array |
| `maxValOrArray` | Number or Array |

**Type**

Number or Array

---

## noise(`valOrArray`)

**Description**

Returns a number in the range from `-1` to `1`. The noise is not actuallyrandom; it is based on Perlin noise, which means that the return values fortwo input values that are near one another tend to be near one another. Thistype of noise is useful when you want a sequence of seemingly random numbersthat don’t vary wildly from one to the other—as is usually the case whenanimating any apparently random natural motion.

Example:

```javascript
rotation + 360 * noise(time);
```

**Parameters**

| Property     | Type                                     |
| ------------ | ---------------------------------------- |
| `valOrArray` | Number or an Array (2- or 3-dimensional) |

**Type**

Number

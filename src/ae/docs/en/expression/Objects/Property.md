---
title: Property
order: 9
category:
  - AE 表达式
---

**Example:** Animating with the propertyGroup method and propertyIndex
attribute

[image]

In this example, the propertyGroup method for each brush stroke targets theBrush property group because that group is two property groups up from theRotation property. The propertyIndex attribute in each Brush stroke thenreturns a unique value for each Brush stroke. The resulting value is thenmultiplied by the `time` and `200` and applied to each rotation value,rotating each brush stroke differently, creating swirling paint strokes:

```javascript
propertyGroup(2).propertyIndex * time * 200;
propertyGroup(2).propertyIndex * time * 200;
```

[image]

---

## value

**Description**

Returns the value of a property at the current time.

**Type**

Number, Array, or String

---

## valueAtTime(`t`)

**Description**

Returns the value of a property at the specified time, in seconds.

For example, to have a property value for each frame chosen randomly from aset of four values, set your four values as keyframes at `0`, `1`, `2`, and`3` seconds, and then apply the following expression to the property:

```javascript
valueAtTime(random(4));
```

:::info Note

Dan Ebberts provides more examples and techniques for using the `valueAtTime`and `velocityAtTime` methods on[MotionScript](http://www.motionscript.com/mastering-expressions/follow-the-leader.html).
:::

**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

Number or Array

---

## velocity

**Description**

Returns the temporal velocity value at the current time. For spatialproperties, such as Position, it returns the tangent vector value. The resultis the same dimension as the property.

**Type**

Number or Array

---

## velocityAtTime(`t`)

**Description**

Returns the temporal velocity value at the specified time.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

Number or Array

---

## speed

**Description**

Returns a 1D, positive speed value equal to the speed at which the property ischanging at the default time. This element can be used only for spatial
properties.

**Type**

Number

---

## speedAtTime(`t`)

**Description**

Returns the spatial speed value at the specified time.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

Number

---

## wiggle(`freq`, `amp`, `octaves=1`, `amp_mult=0.5`, `t=time`)

**Description**

Randomly shakes (wiggles) the value of the property.

`freq` value is the frequency in wiggles per second.

`amp` value is the amplitude in units of the property to which it is applied.

`octaves` is the number of octaves of noise to add together. This value
controls how much detail is in the wiggle. Make this value higher than thedefault of 1 to include higher frequencies or lower to include amplitude
harmonics in the wiggle.

`amp_mult` is the amount that amp is multiplied by for each octave. This value
controls how fast the harmonics drop off. The default is `0.5`; make it closerto `1` to have the harmonics added at the same amplitude as the basefrequency, or closer to `0` to add in less detail.

`t` is the base start time. This value defaults to the current time. Use this
parameter if you want the output to be a wiggle of the property value sampled
at a different time.

Example:

```javascript
position.wiggle(5, 20, 3, 0.5);
```

This produces about `5` wiggles per second with an average size of about 20pixels. In addition to the main wiggle, two more levels of detailed wigglesoccur with a frequency of `10` and `20` wiggles per second, and sizes of `10`and `5` pixels, respectively.

This example, on a two-dimensional property such as Scale, wiggles bothdimensions by the same amount:

```javascript
v = wiggle(5, 10);
[v[0], v[0]];
```

This example, on a two-dimensional property, wiggles only along the y-axis:

```javascript
freq = 3;
amp = 50;
w = wiggle(freq, amp);
[value[0], w[1]];
```

:::info Note

Dan Ebberts provides an example expression and a detailed explanation on his[website](http://www.motionscript.com/design-guide/looping-wiggle.html) thatshows how to use the time parameter of the wiggle method to create a looping
animation.
:::

**Parameters**

| Property   | Type   |
| ---------- | ------ |
| `freq`     | Number |
| `amp`      | Number |
| `octaves`  | Number |
| `amp_mult` | Number |
| `t`        | Number |

**Type**

Number or Array

---

## temporalWiggle(`freq`, `amp`, `octaves=1`, `amp_mult=0.5`, `t=time`)

**Description**

Samples the property at a wiggled time.

`freq` value is the frequency in wiggles per second.

`amp` is the amplitude in units of the property to which it is applied.

`octaves` is the number of octaves of noise to add together.

`amp_mult` is the amount that amp is multiplied by for each octave

`t` is the base start time.

For this function to be meaningful, the property it samples must be animated,because the function alters only the time of sampling, not the value.

Example:

```javascript
scale.temporalWiggle(5, 0.2);
```

**Parameters**

| Property   | Type   |
| ---------- | ------ |
| `freq`     | Number |
| `amp`      | Number |
| `octaves`  | Number |
| `amp_mult` | Number |
| `t`        | Number |

**Type**

Number or Array

---

## smooth(`width=.2`, `samples=5`, `t=time`)

**Description**

Smooths the property values over time, converting large, brief deviations inthe value to smaller, more evenly distributed deviations. This smoothing isaccomplished by applying a box filter to the value of the property at thespecified time. The width value is the range of time (in seconds) over whichthe filter is averaged. The samples value is the number of discrete samplesevenly spaced over time; use a larger value for greater smoothness (butdecreased performance). Generally, you’ll want samples to be an odd number sothat the value at the current time is included in the average.

Example:

```javascript
position.smooth(0.1, 5);
```

**Parameters**

| Property  | Type   |
| --------- | ------ |
| `width`   | Number |
| `samples` | Number |
| `t`       | Number |

**Type**

Number or Array

---

## loopIn(`type="cycle"`, `numKeyframes=0`)

**Description**

Loops a segment of time that is measured from the first keyframe on the layerforward toward the Out point of the layer. The loop plays from the In point ofthe layer. The numKeyframes value determines what segment is looped: Thesegment looped is the portion of the layer from the first keyframe to thenumKeyframes+1 keyframe. For example, loopIn(“cycle”, 3) loops the segmentbounded by the first and fourth keyframes. The default value of 0 means thatall keyframes loop. You can use keyframe-looping methods to repeat a series ofkeyframes. You can use these methods on most properties. Exceptions includeproperties that can’t be expressed by simple numeric values in the Timelinepanel, such as the Source Text property, path shape properties, and theHistogram property for the Levels effect. Keyframes or duration values thatare too large are clipped to the maximum allowable value. Values that are toosmall result in a constant loop.

| Property | Type                                                                                                                                                                                                                                                                                                                                                                              |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`   | result                                                                                                                                                                                                                                                                                                                                                                            |
| cycle    | (default) Repeats the specified segment.                                                                                                                                                                                                                                                                                                                                          |
| pingpong | Repeats the specified segment, alternating between forward and backward.                                                                                                                                                                                                                                                                                                          |
| offset   | Repeats the specified segment, but offsets each cycle by the difference in thevalue of the property at the start and end of the segment, multiplied by thenumber of times the segment has looped.                                                                                                                                                                                 |
| continue | Does not repeat the specified segment, but continues to animate a propertybased on the velocity at the first or last keyframe. For example, if the lastkeyframe of a Scale property of a layer is `100%`, the layer continues toscale from `100%` to the Out point, instead of looping directly back to theOut point. This type does not accept a keyframes or duration argument. |

:::tip

Use `loopIn("continue") + loopOut("continue") - value` to have a continuedmotion before and after the property’s keyframes. _:::tip from Paul Slemmer._

**Type**

Number or Array

---

## loopOut(`type="cycle"`, `numKeyframes=0`)

**Description**

Loops a segment of time that is measured from the last keyframe on the layerback toward the In point of the layer. The loop plays until the Out point ofthe layer. The specified number of keyframes determines the segment to loop.The numKeyframes value sets the number of keyframe segments to loop; thespecified range is measured backward from the last keyframe.

For example, `loopOut("cycle", 1)` loops the segment bounded by the lastkeyframe and second-to-last keyframe. The default value of 0 means that allkeyframes loop. See the entry for loopIn for more information.

:::info Note

David Van Brink provides an instructional article and sample project on his[omino pixel blog](http://omino.com/pixelblog/2007/11/23/salmonella/) thatshow how to use the Echo effect, the Particle Playground effect, and the`loopOut` method to animate a swarm of stylized swimming bacteria.
:::

**Type**

Number or Array

---

## loopInDuration(`type="cycle"`, `duration=0`)

**Description**

Loops a segment of time that is measured from the first keyframe on the layerforward toward the Out point of the layer. The loop plays from the In point ofthe layer. Specified duration determines the segment to loop. The durationvalue sets the number of composition seconds in a segment to loop; thespecified range is measured from the first keyframe.

For example, `loopInDuration("cycle", 1)` loops the first second of the entireanimation. The default of `0` means that the segment to loop begins at thelayer Out point. See the entry for loopIn for more information.

**Type**

Number or Array

---

## loopOutDuration(`type="cycle"`, `duration=0`)

**Description**

Loops a segment of time that is measured from the last keyframe on the layerback toward the In point of the layer. The loop plays until the Out point ofthe layer. Specified duration determines the segmetn to loop. The durationvalue sets the number of composition seconds in a segment to loop; thespecified range is measured backward from the last keyframe.

For example, `loopOutDuration("cycle", 1)` loops the last second of the entireanimation. The default of `0` means that the segment to loop begins at thelayer In point. See the entry for loopIn for more information.

**Type**

Number or Array

---

## key(`index`)

**Description**

Returns the Key or MarkerKey object by number.

For example, `key(1)` returns the first keyframe.

**Parameters**

| Property | Type   |
| -------- | ------ |
| index    | Number |

**Type**

Key or MarkerKey

---

## key(`markerName`)

**Description**

Returns the MarkerKey object with this name. Use only on marker properties.

| Property   | Type   |
| ---------- | ------ |
| markerName | String |

**Type**

MarkerKey

---

## nearestKey(`t`)

**Description**

Returns the Key or MarkerKey object nearest to a designated time `t`.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

Key or MarkerKey

---

## numKeys

**Description**

Returns the number of keyframes on a property. Returns the number of markers
on a marker property.

:::info Note

If you use the Separate Dimensions command to separate the dimensions of thePosition property into individual components, the number of keyframes changes,so the value returned by this method changes.
:::

**Type**

Number

---

## propertyGroup(`countUp=1`)

**Description**

Returns a group of properties relative to the property on which the expression
is written.

For example, if you add the `propertyGroup(1)` expression to the Rotationproperty of a brush stroke, the expression targets the Transform propertygroup, which contains the Rotation property. If you add `propertyGroup(2)`instead, the expression targets the Brush property group.

This method lets you establish name-independent relationships in the propertyhierarchy. It is especially useful when duplicating properties that containexpressions.The `numProperties` method for `propertyGroup` returns the numberof properties in the property group.

This example returns the number of properties in the group that contains theproperty on which the expression is written:

```javascript
thisProperty.propertyGroup(1).numProperties;
```

**Type**

Group

---

## propertyIndex

**Description**

Returns the index of a property relative to other properties in its propertygroup, including property groups within masks, effects, text animators,selectors, shapes, trackers, and track points.

**Type**

Number

---

## name

**Description**

Returns the name of the property or property group.

**Type**

String

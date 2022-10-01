---
title: Time Conversion
order: 2
category:
  - AE 表达式
---

:::info Note

If you want more control over the look of timecode in your footage, use thetimeToCurrentFormat method or other timeTo methods to generate the timecodeinstead of using the Timecode or Numbers effect.
:::
Create a text layer, add an expression to the Source Text property, and entertimeToCurrentFormat() in the expression field. With this method, you canformat and animate the timecode text. In addition, the timecode uses the samedisplay style defined by the current project settings.

---

## timeToFrames(`t=time + thisComp.displayStartTime`, `fps=1.0 /

thisComp.frameDuration`, `isDuration=false`)

**Desciption**

Converts the value of t, which defaults to the current composition time, to aninteger number of frames. The number of frames per second is specified in thefps argument, which defaults to the frame rate of the current composition(`1.0 / thisComp.frameDuration`).

The `isDuration` argument, which defaults to `false`, should be `true` if the`t` value represents a difference between two times instead of an absolutetime. Absolute times are rounded down toward negative infinity; durations arerounded away from zero (up for positive values).

**Parameters**

| Property     | Type    |
| ------------ | ------- |
| `t`          | Number  |
| `fps`        | Number  |
| `isDuration` | Boolean |

**Type**

Number

---

## framesToTime(`frames`, `fps=1.0 / thisComp.frameDuration`)

**Desciption**

The inverse of timeToFrames. Returns the time corresponding to the framesargument, which is required. It doesn’t have to be an integer. SeetimeToFrames for explanation of the `fps` argument.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `frames` | Number |
| `fps`    | Number |

**Type**

Number

---

## timeToTimecode(`t=time + thisComp.displayStartTime`, `timecodeBase=30`,

`isDuration=false`)

**Desciption**

Converts the value of `t` to a String representing timecode. See timeToFramesfor an explanation of the `t` and `isDuration` arguments. The `timecodeBase`value, which defaults to `30`, specifies the number of frames in one second.

**Parameters**

| Property       | Type    |
| -------------- | ------- |
| `t`            | Number  |
| `timecodeBase` | Number  |
| `isDuration`   | Boolean |

**Type**

String

---

## timeToNTSCTimecode(`t=time + thisComp.displayStartTime`,

`ntscDropFrame=false`, `isDuration=false`)

**Desciption**

Converts `t` to a `String` representing NTSC timecode. See timeToFrames for anexplanation of the `t` and `isDuration` arguments. If `ntscDropFrame` is`false` (the default), the result `String` is NTSC non-drop-frame timecode. If`ntscDropFrame` is `true`, the result `String` is NTSC drop-frame timecode.

**Parameters**

| Property        | Type    |
| --------------- | ------- |
| `t`             | Number  |
| `ntscDropFrame` | Boolean |
| `isDuration`    | Boolean |

**Type**

String

---

## timeToFeetAndFrames(`t=time + thisComp.displayStartTime`, `fps=1.0 /

thisComp.frameDuration`, `framesPerFoot=16`, `isDuration=false`)

**Desciption**

Converts the value of `t` to a `String` representing feet of film and frames.See timeToFrames for an explanation of the `t`, `fps`, and `isDuration`arguments. The `framesPerFoot` argument specifies the number of frames in onefoot of film. It defaults to `16`, which is the most common rate for 35mm
footage.

**Parameters**

| Property        | Type    |
| --------------- | ------- |
| `t`             | Number  |
| `framesPerFoot` | Number  |
| `isDuration`    | Boolean |

**Type**

String

---

## timeToCurrentFormat(`t=time + thisComp.displayStartTime`, `fps=1.0 /

thisComp.frameDuration`, `isDuration=false`)

**Desciption**

Converts the value of `t` to a `String` representing time in the currentProject Settings display format. See timeToFrames for a definition of all the
arguments.

:::info Note

An optional `ntscDropFrame` argument was added to the `timeToCurrentFormat()`function in After Effects CS5.5 and later. Default:`ntscDropFrame=thisComp.ntscDropFrame`.
:::
**Parameters**

| Property     | Type    |
| ------------ | ------- |
| `t`          | Number  |
| `fps`        | Number  |
| `isDuration` | Boolean |

**Type**

String

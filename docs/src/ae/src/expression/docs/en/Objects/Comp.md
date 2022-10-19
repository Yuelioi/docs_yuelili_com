---
title: Comp
order: 2
category:
  - AE 表达式
---

## Comp.layer(`index`)

**Description**

Retrieves the layer by number (order in the Timeline panel).

Example:

```javascript
thisComp.layer(3);
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `index`  | Number |

**Type**

Layer, Light, or Camera

---

## Comp.layer(`name`)

**Description**

Retrieves the layer by name. Names are matched according to layer name, orsource name if there is no layer name. If duplicate names exist, After Effectsuses the first (topmost) one in the Timeline panel.

Example:

```javascript
thisComp.layer("Solid 1");
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `name`   | String |

**Type**

Layer, Light, or Camera

---

## Comp.layer(`otherLayer`, `relIndex`)

**Description**

Retrieves the layer that is relIndex layers above or below otherLayer. Forexample, `thisComp.layer(thisLayer, 1).active` returns true if the next layerdown in the Timeline panel is active.

**Parameters**

| Property     | Type         |
| ------------ | ------------ |
| `otherLayer` | Layer Object |
| `relIndex`   | Number       |

**Type**

Layer, Light, or Camera

---

## Comp.layerByComment(`comment`)

**Description**

Retrieves a layer by matching the comment parameter to the value in thelayer’s Comment column. The matches are simple text matches. They will matchpartial words, and are case sensitive. Matching does not appear to use regularexpressions or wildcards. If duplicate comments exist, After Effects uses thefirst (topmost) one in the Timeline panel.

Example:

```javascript
thisComp.layerByComment("Control") //note this will match a
layer with a comment "Controller" or "Motion Control"
```

**Parameters**

| Property  | Type   |
| --------- | ------ |
| `comment` | String |

**Type**

Layer, Light, or Camera

---

## Comp.marker

**Description**

:::info Note

You cannot access a composition marker by marker number. If you have a projectcreated in a previous version of After Effects that uses composition markernumbers in expressions, you must change those calls to use marker.key(name)instead. Because the default name of a composition marker is a number,converting the reference to use the name is often just a matter of surroundingthe number with quotation marks.
:::
**Type**

MarkerProperty

---

## Comp.marker.key(`index`)

**Description**

Returns the MarkerKey object of the marker with the specified index. The indexrefers to the order of the marker in composition time, not to the name of the
marker.

For example, this expression returns the time of the first composition marker:

```javascript
thisComp.marker.key(1).time;
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `index`  | Number |

**Type**

MarkerKey

---

## Comp.marker.key(`name`)

**Description**

Returns the MarkerKey object of the marker with the specified name. The namevalue is the name of the marker, as typed in the comment field in the markerdialog box, for example, marker.key(“1”). For a composition marker, thedefault name is a number. If more than one marker in the composition has thesame name, this method returns the marker that occurs first in time (incomposition time). The value for a marker key is a String, not a Number.

For example, this expression returns the time of the composition marker with
the name “0”:

```javascript
thisComp.marker.key("0").time;
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `name`   | String |

**Type**

MarkerKey

---

## Comp.marker.nearestKey(`t`)

**Description**

Returns the marker that is nearest in time to t.

For example, this expression returns the time of the composition markernearest to the time of 1 second:

```javascript
thisComp.marker.nearestKey(1).time;
```

This expression returns the time of the composition marker nearest to the
current time:

```javascript
thisComp.marker.nearestKey(time).time;
```

**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

MarkerKey

---

## Comp.marker.numKeys

**Description**

Returns the total number of composition markers in the composition.

**Type**

Number

---

## Comp.numLayers

**Description**

Returns the number of layers in the composition.

**Type**

Number

---

## Comp.activeCamera

**Description**

Returns the Camera object for the camera through which the composition isrendered at the current frame. This camera is not necessarily the camerathrough which you are looking in the Composition panel.

**Type**

Camera

---

## Comp.width

**Description**

Returns the composition width, in pixels.Apply the following expression to thePosition property of a layer to center the layer in the composition frame:[thisComp.width/2, thisComp.height/2]

**Type**

Number

---

## Comp.height

**Description**

Returns the composition height, in pixels.

**Type**

Number

---

## Comp.duration

**Description**

Returns the composition duration, in seconds.

**Type**

Number

---

## Comp.ntscDropFrame

**Description**

Returns true if the timecode is in drop-frame format.

:::info Note

Available in After Effects CS5.5 and later.
:::

**Type**

Boolean

---

## Comp.displayStartTime

**Description**

Returns the composition start time, in seconds.

**Type**

Number

---

## Comp.frameDuration

**Description**

Returns the duration of a frame, in seconds.

**Type**

Number

---

## Comp.shutterAngle

**Description**

Returns the shutter-angle value of the composition, in degrees.

**Type**

Number

---

## Comp.shutterPhase

**Description**

Returns the shutter phase of the composition, in degrees.

**Type**

Number

---

## Comp.bgColor

**Description**

Returns the background color of the composition.

**Type**

Array (4-dimensional)

---

## Comp.pixelAspect

**Description**

Returns the pixel aspect ratio of the composition.

**Type**

Number

---

## Comp.name

**Description**

Returns the name of the composition.

**Type**

String

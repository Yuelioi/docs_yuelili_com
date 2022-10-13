---
title: Path Property
order: 10
category:
  - AE 表达式
---

:::info Note

Available in After Effects CC18 and later.
:::

**Example 1**

Writes the list of point and tangent coordinates from Path 1 of Shape 1 onlayer Shape Layer 1, at `time=0`, into a string. Apply this to the source textproperty of a text layer for a readout of the coordinates and incoming andoutgoing tangents of the shape.

```javascript
pointsList = "";
sampleTime = 0;
myShape = thisComp.layer("Shape Layer 1").content("Shape 1").content("Path 1").path;
for (i = 0; i < myShape.points(sampleTime).length; i++) {
  pointsList +=
    "c: " +
    myShape.points(sampleTime)[i].toString() +
    " i: " +
    myShape.inTangents(sampleTime)[i].toString() +
    " o: " +
    myShape.outTangents(sampleTime)[i].toString() +
    "\n";
}
pointsList;
```

**Example 2**

Reads the coordinates of the first vertex of Mask 1 on Dark Gray Solid 1 andconverts them to composition coordinates. Apply this to a 2D point control ofan effect, such as Write-on or CC Particle Systems II, to make the effecttrace or track the first point of an animated mask. Duplicate the effect andchange the path points index value ([0]) to trace or track the other points of
the mask.

```javascript
myLayer = thisComp.layer("Dark Gray Solid 1");
myLayer.toComp(myLayer.mask("Mask 1").maskPath.points()[0]);
```

---

## name

**Description**

Returns the name of the property.

**Type**

String

---

## PathProperty.points(`t=time`)

**Description**

Get the x,y coordinates of all points on a path. Coordinates for layer maskpath points are relative to the layer’s origin in its upper-left hand corner.Coordinates for Bezier shape path points are are relative to the anchor pointof the path’s shape group (ex., “Transform: Shape 1 > Anchor Point”).Coordinates for brush stroke path points are relative to the start of thestroke; the first point is `[0,0]`. This method can be passed into the`createPath()` method for the points parameter when duplicating a path.

Optionally specify the time at which sample to the path.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

Array of number pair arrays, rounded to the fourth decimal place

---

## PathProperty.inTangents(`t=time`)

**Description**

Get the x,y coordinates of the incoming tangent handle for all points on apath. Tangent coordinate values are offset relative to the parent point’scoordinates. i.e., The value [0,0] creates no curvature at the incomingtangent. This method can be passed into the createPath() method for theinTangents parameter when duplicating a path.

Optionally specify the time at which sample to the path.

**Type**

Array of number pair arrays, rounded to the fourth decimal place

---

## PathProperty.outTangents(`t=time`)

**Description**

Get the x, y coordinates of the outgoing tangent handle for all points on apath. Tangent coordinate values are offset relative to the parent point’scoordinates. i.e., The value `[0,0]` creates no curvature at the outgoingtangent. This method can be passed into the createPath() method for theoutTangents parameter when duplicating a path.

Optionally specify the time at which sample to the path.

**Parameters**

| Property | Type   |
| -------- | ------ |
| `t`      | Number |

**Type**

Array of number pair arrays, rounded to the fourth decimal place

---

## PathProperty.isClosed()

**Description**

Determines if the path is open or closed. Returns `true` if the path isclosed, `false` if the path is open. This method can be passed into the`createPath()` method for the `is_closed` parameter when duplicating a path.

**Type**

Boolean

---

## PathProperty.pointOnPath(`percentage=0.5`, `t=time`)

**Description**

Get the x, y coordinates of an arbitrary point along a path. The point isexpressed as a percentage of the arc-length of the path. 0% is the first pointand 100% is the last point. When the path is closed, 0% and 100% will returnthe same coordinates. Percentage of arc-length is used to ensure uniform speedalong the path. Other than 0% and 100%, percentages do not necessarilycorrelate with the Bezier points on the path. (i.e., For a path with threepoints, the second point will not necessarily be at 50%.) This also means thatfor an open path and closed path with identical points, the percentage alongthe open path will not return the same coordinates as the closed path due tothe additional length of the closed path.

Optionally specify the time at which sample to the path.

**Parameters**

| Property     | Type   |
| ------------ | ------ |
| `percentage` | Number |
| `t`          | Number |

**Type**

A number pair array

---

## PathProperty.tangentOnPath(`percentage=0.5`, `t=time`)

**Description**

Get the calculated x,y coordinates of the outgoing tangent handle for anarbitrary point along a path. Tangent coordinate values are offset relative tothe parent point’s coordinates. i.e., The value [0,0] creates no curvature atthe outgoing tangent. The incoming tangent handle is the inverse of this value(multiply the x,y coordinates by -1). The tangent’s parent point is expressedas a percentage of the arc-length of the path. Read the description of thepointOnPath() method for details about arc-length percentage. The coordinatesreturned by tangentOnPath() are calcuated from it’s parent point and willdiffer from those returned by `outTangents()` if a user-defined point alsoexists at that arc-length pecentage. The linear distance between the parentpoint’s coordinates and `tangentOnPath()` coordinates will always be 1. Youcan multiply the returned coordinates to create a longer tangent, for example`(myPath.tangentOnPath() * 100)`.

Optionally specify the time at which sample to the path.

**Parameters**

| Property     | Type   |
| ------------ | ------ |
| `percentage` | Number |
| `t`          | Number |

**Type**

A number pair array

---

## PathProperty.normalOnPath(`percentage=0.5`, `t=time`)

**Description**

Get the calculated x,y coordinates of the normal for an arbitrary point alonga path. Coordinate values of normals are offset relative to the parent point’scoordinates. i.e., The value `[0,0]` is the same as the parent point. Thenormal’s parent point is expressed as a percentage of the arc-length of thepath. Read the description of the `pointOnPath()` method for details aboutarc-length percentage. The coordinates returned by `normalOnPath()` arecalcuated from its parent point. The linear distance between the parentpoint’s coordinates and `normalOnPath()` coordinates will always be `1`. Youcan multiply the returned coordinates to create a longer normal, for example.`(myPath.normalOnPath() * 100)`.

Optionally specify the time at which sample to the path.

**Parameters**

| Property     | Type   |
| ------------ | ------ |
| `percentage` | Number |
| `t`          | Number |

**Type**

A number pair array

---

## PathProperty.createPath(`points=[[0,0], [100,0], [100,100], [0,100]]`,

`inTangents=[]`, `outTangents=[]`, `is_closed=true`)

**Description**

Creates a path object from a set of points and tangents. The points aredefined by an array of number pair arrays representing their `x`, `y`coordinates. The array length must be at least `1`, and can be of any greaterlength. The incoming and outgoing tangent handles of the points are defined byan array of number pair arrays representing their x, y offset coordinates. Thelength of the tangent arrays must be exactly the same as the points parameter.Tangent coordinate values are offset relative to the parent point’scoordinates. i.e., The value `[0,0]` creates no curvature at the incomingtangent. The `points()`, `inTangents()`, `outTangents()`, and `isClosed()`methods of a path can be passed into the `points`, `inTangents`,`outTangents`, and `is_closed` parameters to duplicate a path. The points andtangents of the same path can be passed into `createPath()` with modificationsto generate a different result.

For example, the following expression will remove curves from Mask 1 by notpassing the inTangents or outTangents parameters:

```javascript
myMask = mask("Mask 1").path;
myMask.createPath(myMask.points());
```

The following example passes the points and tangents of Mask 1 and converts itto an open path by setting `is_closed` to false:

```javascript
myMask = mask("Mask 1").path;
myMask.createPath(myMask.points(), myMask.inTangents(), myMask.outTangents(), false);
```

**Parameters**

| Property      | Type    |
| ------------- | ------- |
| `points`      | Array   |
| `inTangents`  | Array   |
| `outTangents` | Array   |
| `is_closed`   | Boolean |

**Type**

Path

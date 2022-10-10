---
title: Working With Paths
order: 17
category:
  - AE 插件开发
---

# Working With Paths

## Accessing Path Data

Paths differ from other parameter types, in that their values are not directly accessible. In addition to checking them out and in (like layer parameters), you must use our path data function suites to obtain the details of the path at a given time. See [PF_PathQuerySuite1](#effect-details-working-with-paths-pf-pathquerysuite) and [PF_PathDataSuite](#effect-details-working-with-paths-pf-pathdatasuite). Never use the values present in a path parameter when it’s passed to you, without first checking it out; while deleted paths will not be available, further updating is done “lazily” (later); your effect won’t see these changes unless it checks out the path.

---

## Manipulating Path Data

You can also use the [AEGP_MaskOutlineSuite3](../aegps/aegp-suites.html) (#aegps-aegp-suites-aegp-maskoutlinesuite) to manipulate paths. See [Cheating Effect Usage of AEGP Suites](../aegps/cheating-effect-usage-of-aegp-suites.html) (#aegps-cheating-effect-usage-of-aegp-suites). Path parameters are treated as opaque blobs of data; get and set functions must be used to access and manipulate them. Like layer parameters, they must be checked out (and in!) by effects which access them.

---

## Vertices

Path vertices are more complex than simple points. All member variables are PF_FpLongs (doubles), and are in the layer’s coordinate space.

---

## PF_PathVertex

| **Member**    | **Description**             |
| ------------- | --------------------------- |
| `x`           | The location of the vertex. |
| `y`           |                             |
| `tan\_in\_x`  | The incoming tangent point. |
| `tan\_in\_y`  |                             |
| `tan\_out\_x` | The outgoing tangent point. |
| `tan\_out\_y` |                             |

---

## PF_PathDataSuite

This suite provides information about paths (sequences of vertices).

| **Function**     | **Description**                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------- |
| `PF\_PathIsOpen` | Returns `TRUE` if the path is not closed (if the beginning and end vertex are not identical). |

```cpp
PF\_PathIsOpen(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 PF\_Boolean \*openPB);

```

|
| `PF\_PathNumSegments` | Retrieves the number of segments in the path.
N segments means there are segments `[0.N-1];`
segment J is defined by vertex `J` and `J+1`.

```cpp
PF\_PathNumSegments(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 A\_long \*num\_segmentsPL);

```

|
| `PF\_PathVertexInfo` | Retrieves the `PF\_PathVertex` for the specified path.
The range of points is `[0.num\_segments];`
for closed paths, `vertex[0] == vertex[num\_segments]`.

```cpp
PF\_PathVertexInfo(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 A\_long which\_pointL,
 PF\_PathVertex \*vertexP);

```

|
| `PF\_PathPrepareSegLength` | This fairly counter-intuitive function informs After Effects that you’re going to ask for the length of a segment
(using `PF\_PathGetSegLength` below), and it’d better get ready.
`frequencyL` indicates how many times you’d like us to sample the length; our internal effects use 100.

```cpp
PF\_PathPrepareSegLength(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 A\_long which\_segL,
 A\_long frequencyL,
 PF\_PathSegPrepPtr \*lengthPrepPP);

```

|
| `PF\_PathGetSegLength` | Retrieves the length of the given segment.

```cpp
PF\_PathGetSegLength(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 A\_long which\_segL,
 PF\_PathSegPrepPtr \*lengthPrepP0,
 PF\_FpLong \*lengthPF);

```

|
| `PF\_PathEvalSegLength` | Retrieves the location of a point lengthF along the given path segment.

```cpp
PF\_PathEvalSegLength(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 PF\_PathSegPrepPtr \*lengthPrepPP0,
 A\_long which\_segL,
 PF\_FpLong lengthF,
 PF\_FpLong \*x,
 PF\_FpLong \*y);

```

|
| `PF\_PathEvalSegLengthDeriv1` | Retrieves the location, and the first derivative, of a point `lengthF` along the given path segment.
If you’re not sure why you’d ever need this, don’t use it. Math is hard.

```cpp
PF\_PathEvalSegLengthDeriv1(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 PF\_PathSegPrepPtr \*lengthPrepPP0,
 A\_long which\_segL,
 PF\_FpLong lengthF,
 PF\_FpLong \*x,
 PF\_FpLong \*y,
 PF\_FpLong \*deriv1x,
 PF\_FpLong \*deriv1y);

```

|
| `PF\_PathCleanupSegLength` | Call this when you’re finished evaluating that segment length,
so After Effects can properly clean up the `PF\_PathSegPrepPtr`.

```cpp
PF\_PathCleanupSegLength(
 PF\_ProgPtr effect\_ref0,
 PF\_PathOutlinePtr pathP,
 A\_long which\_segL,
 PF\_PathSegPrepPtr \*lengthPrepPP);

```

|
| `PF\_PathIsInverted` | Returns `TRUE` if the path is inverted.

```cpp
PF\_PathIsInverted(
 PF\_ProgPtr effect\_ref,
 PF\_PathID unique\_id,
 PF\_Boolean \*invertedB);

```

|
| `PF\_PathGetMaskMode` | Retrieves the mode for the given path.

```cpp
PF\_PathGetMaskMode(
 PF\_ProgPtr effect\_ref,
 PF\_PathID unique\_id,
 PF\_MaskMode \*modeP);

```

Mask mode is one of the following:

- `PF\_MaskMode\_NONE`
- `PF\_MaskMode\_ADD`
- `PF\_MaskMode\_SUBTRACT`
- `PF\_MaskMode\_INTERSECT`
- `PF\_MaskMode\_LIGHTEN`
- `PF\_MaskMode\_DARKEN`
- `PF\_MaskMode\_DIFFERENCE`
- `PF\_MaskMode\_ACCUM`

|
| `PF\_PathGetName` | Retrieves the name of the path (up to `PF\_MAX\_PATH\_NAME\_LEN` long).

```cpp
PF\_PathGetName(
 PF\_ProgPtr effect\_ref,
 PF\_PathID unique\_id,
 A\_char \*nameZ);

```

|

---

## PF_PathQuerySuite1

This suite is used to identify and access the paths associated with the effect’s source layer.

| **Function**   | **Purpose**                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `PF\_NumPaths` | Retrieves the number of paths associated with the effect’s source layer. |

```cpp
PF\_NumPaths(
 PF\_ProgPtr effect\_ref,
 A\_long \*num\_pathsPL);

```

|
| `PF\_PathInfo` | Retrieves the PF_PathID for the specified path.

```cpp
PF\_PathInfo(
 PF\_ProgPtr effect\_ref,
 A\_long indexL,
 PF\_PathID \*unique\_idP);

```

|
| `PF\_CheckoutPath` | Acquires the PF_PathOutlinePtr for the path at the specified time.

```cpp
PF\_CheckoutPath(
 PF\_ProgPtr effect\_ref,
 PF\_PathID unique\_id,
 A\_long what\_time,
 A\_long time\_step,
 A\_u\_long time\_scale,
 PF\_PathOutlinePtr \*pathPP);

```

|
| `PF\_CheckinPath` | Releases the path back to After Effects. Always do this, regardless of any error conditions encountered.
Every checkout must be balanced by a checkin, or pain will ensue.

```cpp
PF\_CheckinPath(
 PF\_ProgPtr effect\_ref,
 PF\_PathID unique\_id,
 PF\_Boolean changedB,
 PF\_PathOutlinePtr pathP);

```

|

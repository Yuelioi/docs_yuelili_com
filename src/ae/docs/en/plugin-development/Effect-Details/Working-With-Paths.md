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

| **Member** | **Description**       |
| ---------------- | --------------------------- |
| `x`            | The location of the vertex. |
| `y`            |                             |
| `tan\_in\_x`   | The incoming tangent point. |
| `tan\_in\_y`   |                             |
| `tan\_out\_x`  | The outgoing tangent point. |
| `tan\_out\_y`  |                             |

---

## PF_PathDataSuite

This suite provides information about paths (sequences of vertices).

### PF_PathIsOpen


Returns `<span class="pre">TRUE</span>` if the path is not closed (if the beginning and end vertex are not identical).

```
PF_PathIsOpen(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
PF_Boolean*openPB);
```

### PF_PathNumSegments


Retrieves the number of segments in the path. N segments means there are segments `<span class="pre">[0.N-1];</span>` segment J is defined by vertex `<span class="pre">J</span>` and `<span class="pre">J+1</span>`.

```
PF_PathNumSegments(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_long*num_segmentsPL);
```


### PF_PathVertexInfo


Retrieves the `<span class="pre">PF_PathVertex</span>` for the specified path. The range of points is `<span class="pre">[0.num_segments];</span>` for closed paths, `<span class="pre">vertex[0]</span><span> </span><span class="pre">==</span><span> </span><span class="pre">vertex[num_segments]</span>`.

```
PF_PathVertexInfo(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_pointL,
PF_PathVertex*vertexP);
```

### PF_PathPrepareSegLength


This fairly counter-intuitive function informs After Effects that you’re going to ask for the length of a segment (using `<span class="pre">PF_PathGetSegLength</span>` below), and it’d better get ready. `<span class="pre">frequencyL</span>` indicates how many times you’d like us to sample the length; our internal effects use 100.

```
PF_PathPrepareSegLength(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_segL,
A_longfrequencyL,
PF_PathSegPrepPtr*lengthPrepPP);
```

### PF_PathGetSegLength


Retrieves the length of the given segment.

```
PF_PathGetSegLength(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_segL,
PF_PathSegPrepPtr*lengthPrepP0,
PF_FpLong*lengthPF);
```


### PF_PathEvalSegLength


Retrieves the location of a point lengthF along the given path segment.

```
PF_PathEvalSegLength(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
PF_PathSegPrepPtr*lengthPrepPP0,
A_longwhich_segL,
PF_FpLonglengthF,
PF_FpLong*x,
PF_FpLong*y);
```


### PF_PathEvalSegLengthDeriv1


Retrieves the location, and the first derivative, of a point `<span class="pre">lengthF</span>` along the given path segment. If you’re not sure why you’d ever need this, don’t use it. Math is hard.

```
PF_PathEvalSegLengthDeriv1(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
PF_PathSegPrepPtr*lengthPrepPP0,
A_longwhich_segL,
PF_FpLonglengthF,
PF_FpLong*x,
PF_FpLong*y,
PF_FpLong*deriv1x,
PF_FpLong*deriv1y);
```

### PF_PathCleanupSegLength


Call this when you’re finished evaluating that segment length, so After Effects can properly clean up the `<span class="pre">PF_PathSegPrepPtr</span>`.

```
PF_PathCleanupSegLength(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_segL,
PF_PathSegPrepPtr*lengthPrepPP);
```

### PF_PathIsInverted


Returns `<span class="pre">TRUE</span>` if the path is inverted.

```
PF_PathIsInverted(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
PF_Boolean*invertedB);
```

### PF_PathGetMaskMode


Retrieves the mode for the given path.

```
PF_PathGetMaskMode(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
PF_MaskMode*modeP);
```

Mask mode is one of the following:

> * `<span class="pre">PF_MaskMode_NONE</span>`
> * `<span class="pre">PF_MaskMode_ADD</span>`
> * `<span class="pre">PF_MaskMode_SUBTRACT</span>`
> * `<span class="pre">PF_MaskMode_INTERSECT</span>`
> * `<span class="pre">PF_MaskMode_LIGHTEN</span>`
> * `<span class="pre">PF_MaskMode_DARKEN</span>`
> * `<span class="pre">PF_MaskMode_DIFFERENCE</span>`
> * `<span class="pre">PF_MaskMode_ACCUM</span>`

### PF_PathGetName


Retrieves the name of the path (up to `<span class="pre">PF_MAX_PATH_NAME_LEN</span>` long).

```
PF_PathGetName(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
A_char*nameZ);
```

## PF_PathQuerySuite1

This suite is used to identify and access the paths associated with the effect’s source layer.

### PF_NumPaths


Retrieves the number of paths associated with the effect’s source layer.

```
PF_NumPaths(
PF_ProgPtreffect_ref,
A_long*num_pathsPL);
```

### PF_PathInfo


Retrieves the PF_PathID for the specified path.

```
PF_PathInfo(
PF_ProgPtreffect_ref,
A_longindexL,
PF_PathID*unique_idP);
```

### PF_CheckoutPath


Acquires the PF_PathOutlinePtr for the path at the specified time.

```
PF_CheckoutPath(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
A_longwhat_time,
A_longtime_step,
A_u_longtime_scale,
PF_PathOutlinePtr*pathPP);
```

### PF_CheckinPath


Releases the path back to After Effects. Always do this, regardless of any error conditions encountered. Every checkout must be balanced by a checkin, or pain will ensue.

```
PF_CheckinPath(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
PF_BooleanchangedB,
PF_PathOutlinePtrpathP);
```

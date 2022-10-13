---
title: Working With Paths
order: 17
category:
  - AE 插件开发
---

# Working With Paths

## Accessing Path Data

路径与其他参数类型不同，因为它们的值不能直接访问。除了将它们检出和检入(像层参数一样)，你必须使用我们的路径数据函数套件来获取特定时间内的路径细节。参见[PF_PathQuerySuite1]和[PF_PathDataSuite]。当一个路径参数被传递给你时，如果没有先检查出来，千万不要使用它存在的值；虽然被删除的路径将无法使用，但进一步的更新是 "懒惰地 "进行的(以后)；你的效果不会看到这些变化，除非它检查出路径。

## Manipulating Path Data

你也可以使用[AEGP_MaskOutlineSuite3](.../aegps/aegp-suites.html)(#aegps-aegp-suites-aegp-maskoutlinesuite)来操纵路径。参见[AEGP 套件的作弊效果使用](.../aegps/cheating effect-usage-of-aegp-suites.html) 。路径参数被视为不透明的数据块；必须使用 get 和 set 函数来访问和操作它们。像图层参数一样，它们必须被访问它们的效果检查出来(和进入！)。

## Vertices

路径顶点比简单的点更复杂。所有的成员变量都是 PF_FpLongs(双倍)，并且是在层的坐标空间中。

## PF_PathVertex

| **Member**  | **Description**             |
| ----------- | --------------------------- |
| `x`         | The location of the vertex. |
| `y`         |                             |
| `tan_in_x`  | The incoming tangent point. |
| `tan_in_y`  |                             |
| `tan_out_x` | The outgoing tangent point. |
| `tan_out_y` |                             |

## PF_PathDataSuite

这个套件提供关于路径(顶点序列)的信息。

### PF_PathIsOpen

Returns TRUE` if the path is not closed (if the beginning and end vertex are not identical).

```cpp
PF_PathIsOpen(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
PF_Boolean*openPB);
```

### PF_PathNumSegments

Retrieves the number of segments in the path. N segments means there are segments [0.N-1];` segment J is defined by vertex J` and J+1`.

```cpp
PF_PathNumSegments(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_long*num_segmentsPL);
```

### PF_PathVertexInfo

Retrieves the PF_PathVertex ` for the specified path. The range of points is [0.num_segments];` for closed paths, vertex[0]` ==` vertex[num_segments]`.

```cpp
PF_PathVertexInfo(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_pointL,
PF_PathVertex*vertexP);
```

### PF_PathPrepareSegLength

This fairly counter-intuitive function informs After Effects that you’re going to ask for the length of a segment (using PF_PathGetSegLength ` below), and it’d better get ready. frequencyL` indicates how many times you’d like us to sample the length; our internal effects use 100.

```cpp
PF_PathPrepareSegLength(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_segL,
A_longfrequencyL,
PF_PathSegPrepPtr*lengthPrepPP);
```

### PF_PathGetSegLength

Retrieves the length of the given segment.

```cpp
PF_PathGetSegLength(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_segL,
PF_PathSegPrepPtr*lengthPrepP0,
PF_FpLong*lengthPF);
```

### PF_PathEvalSegLength

Retrieves the location of a point lengthF along the given path segment.

```cpp
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

Retrieves the location, and the first derivative, of a point lengthF` along the given path segment. If you’re not sure why you’d ever need this, don’t use it. Math is hard.

```cpp
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

Call this when you’re finished evaluating that segment length, so After Effects can properly clean up the PF_PathSegPrepPtr`.

```cpp
PF_PathCleanupSegLength(
PF_ProgPtreffect_ref0,
PF_PathOutlinePtrpathP,
A_longwhich_segL,
PF_PathSegPrepPtr*lengthPrepPP);
```

### PF_PathIsInverted

Returns TRUE` if the path is inverted.

```cpp
PF_PathIsInverted(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
PF_Boolean*invertedB);
```

### PF_PathGetMaskMode

检索给定路径的模式。

```cpp
PF_PathGetMaskMode(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
PF_MaskMode*modeP);
```

掩码模式是以下之一。

> - PF_MaskMode_NONE`。
> - PF_MaskMode_ADD`。
> - PF_MaskMode_SUBTRACT`。
> - PF_MaskMode_INTERSECT`。
> - PF_MaskMode_LIGHTEN`(淡化)
> - PF_MaskMode_DARKEN`(变暗)
> - PF_MaskMode_DIFFERENCE`(差值)。
> - PF_MaskMode_ACCUM`。

### PF_PathGetName

检索路径的名称(最长为 PF_MAX_PATH_NAME_LEN`长)。

```cpp
PF_PathGetName(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
A_char*nameZ);
```

## PF_PathQuerySuite1

这个套件用于识别和访问与效果的源层相关的路径。

### PF_NumPaths

检索与效果源层相关的路径数量。

```cpp
PF_NumPaths(
PF_ProgPtreffect_ref,
A_long*num_pathsPL);
```

### PF_PathInfo

检索指定路径的 PF_PathID。

```cpp
PF_PathInfo(
PF_ProgPtreffect_ref,
A_longindexL,
PF_PathID*unique_idP);
```

### PF_CheckoutPath

在指定的时间获取路径的 PF_PathOutlinePtr。

```cpp
PF_CheckoutPath(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
A_longwhat_time,
A_longtime_step,
A_u_longtime_scale,
PF_PathOutlinePtr*pathPP);
```

### PF_CheckinPath

将路径释放回 After Effects。总是这样做，不管遇到什么错误情况。每一次签出都必须由签入来平衡，否则会有痛苦。

```cpp
PF_CheckinPath(
PF_ProgPtreffect_ref,
PF_PathIDunique_id,
PF_BooleanchangedB,
PF_PathOutlinePtrpathP);
```

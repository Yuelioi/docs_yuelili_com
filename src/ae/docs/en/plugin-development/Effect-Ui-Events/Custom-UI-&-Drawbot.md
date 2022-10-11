---
title: Custom UI & Drawbot
order: 5
category:
  - AE 插件开发
---
# Custom UI & Drawbot

Custom UI uses a composited drawing model using Drawbot. The Drawbot suites can be used for:

1. Basic 2D path drawing: Lines, Rect, Arc, Bezier
2. Stroking/Filling/Shading paths
3. Image drawing: Compositing an ARGB/BGRA buffer onto the surface
4. Pushing/popping surface state
5. Text drawing, if supplier supports it (clients should first check if text drawing is supported before actual drawing)

Drawing may only occur during `PF\_Event\_DRAW` (and not during `PF\_Event\_DRAG` or `PF\_Event\_DO\_CLICK`).

To use Drawbot, first get the drawing reference by passing in PF_Context to a new suite call [PF_GetDrawingReference](#effect-ui-events-custom-ui-and-drawbot-pf-effectcustomuisuite).

If a non-NULL drawing reference is returned, use it to get the supplier and surface references from [DRAWBOT_DrawbotSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-drawbotsuite).

The Drawbot suites include `DRAWBOT\_DrawbotSuite`, `DRAWBOT\_SupplierSuite`, `DRAWBOT\_SurfaceSuite`, `DRAWBOT\_PathSuite`.

---

## Make Your Custom UI Look Not So “Custom”

Use the new [PF_EffectCustomUIOverlayThemeSuite](#effect-ui-events-custom-ui-and-drawbot-pf-effectcustomuioverlaythemesuite) to match the host application UI. Your users will thank you.

---

## Redrawing

In order to redraw a specific area of a pane, we recommend the following:

1. Call `PF\_InvalidateRect` (from [PF_AppSuite](../effect-details/useful-utility-functions.html) (#effect-details-useful-utility-functions-pf-appsuite)) from the effect. This will cause a lazy display redraw, and will update at the next available idle moment. This rect is in coordinates related to the associated pane. Using a NULL rect will update the entire pane.
2. Set the [event outflag](PF_EventExtra.html) (#effect-ui-events-pf-eventextra) to `PF\_EO\_UPDATE\_NOW`, which will cause an immediate draw event for the specified pane when the current event returns.

If an effect needs to update more than one window at a time, it should set `PF\_OutFlag\_REFRESH\_UI` (from [PF_OutFlags](../effect-basics/PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags)), which will cause a redraw of the entire ECW, comp, and layer windows.

---

## HiDPI and Retina Display Support

To support HiDPI and Retina Displays, you can use offscreen images that are twice the size, and then use the `Transform` function from [Drawbot_SurfaceSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-surfacesuite) to scale the image down in half before drawing it.

---

## PF_EffectCustomUISuite

Enables an effect to get the drawing reference. This is the first call needed to use Drawbot.

### PF_EffectCustomUISuite1



---

## Drawbot_DrawbotSuite

Using the Drawbot reference, get the supplier and surface references.

### Drawbot_DrawbotSuite1

| **Function** | **Purpose**           |
| ------------------ | --------------------------- |
| `GetSupplier`    | Get the supplier reference. |

Needed to use [Drawbot_SupplierSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-suppliersuite).

```cpp
GetSupplier(
 DRAWBOT\_DrawRef in\_drawbot\_ref,
 DRAWBOT\_SupplierRef \*out\_supplierP);

```

|
| `GetSurface` | Get the surface reference.
Needed to use [Drawbot_SurfaceSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-surfacesuite).

```cpp
GetSurface(
 DRAWBOT\_DrawRef in\_drawbot\_ref,
 DRAWBOT\_SurfaceRef \*out\_surfaceP);

```

|

---

## Drawbot_SupplierSuite

Calls to create and release drawing tools, get default settings, and query drawing capabilities.

### Drawbot_SupplierSuite1

| **Function** | **Purpose**                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NewPen`         | Create a new pen. Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-suppliersuite). |

```cpp
NewPen(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 const DRAWBOT\_ColorRGBA \*in\_colorP,
 float in\_size,
 DRAWBOT\_PenRef \*out\_penP);

```

|
| `NewBrush` | Create a new brush. Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-suppliersuite).

```cpp
NewBrush(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 const DRAWBOT\_ColorRGBA \*in\_colorP,
 DRAWBOT\_BrushRef \*out\_brushP);

```

|
| `SupportsText` | Check if current supplier supports text.

```cpp
SupportsText(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 DRAWBOT\_Boolean \*out\_supports\_textB);

```

|
| `GetDefaultFontSize` | Get the default font size.

```cpp
GetDefaultFontSize(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 float \*out\_font\_sizeF);

```

|
| `NewDefaultFont` | Create a new font with default settings.
You can pass the default font size from `GetDefaultFontSize`.
Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-suppliersuite).

```cpp
NewDefaultFont(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 float in\_font\_sizeF,
 DRAWBOT\_FontRef \*out\_fontP);

```

|
| `NewImageFromBuffer` | Create a new image from buffer passed to in_dataP.
Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-suppliersuite).

```cpp
NewImageFromBuffer(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 int in\_width,
 int in\_height,
 int in\_row\_bytes,
 DRAWBOT\_PixelLayout in\_pl,
 const void \*in\_dataP,
 DRAWBOT\_ImageRef \*out\_imageP);

```

`DRAWBOT\_PixelLayout` can be one of the following:

- `kDRAWBOT\_PixelLayout\_24RGB`,
- `kDRAWBOT\_PixelLayout\_24BGR`,
- `kDRAWBOT\_PixelLayout\_32RGB`,
- `ARGB` (A is ignored),
- `kDRAWBOT\_PixelLayout\_32BGR`,
- `BGRA` (A is ignored),
- `kDRAWBOT\_PixelLayout\_32ARGB\_Straight`,
- `kDRAWBOT\_PixelLayout\_32ARGB\_Premul`,
- `kDRAWBOT\_PixelLayout\_32BGRA\_Straight`,
- `kDRAWBOT\_PixelLayout\_32BGRA\_Premul`

|
| `NewPath` | Create a new path. Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#effect-ui-events-custom-ui-and-drawbot-drawbot-suppliersuite).

```cpp
NewPath(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 DRAWBOT\_PathRef \*out\_pathP);

```

|
| `SupportsPixelLayoutBGRA` | A given Drawbot implementation can support multiple channel orders, but will likely prefer one over the other.
Use the following four callbacks to get the preferred channel order for any API that takes a `DRAWBOT\_PixelLayout` (e.g. `NewImageFromBuffer`).

```cpp
SupportsPixelLayoutBGRA(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 DRAWBOT\_Boolean \*out\_supports\_bgraPB);

```

|
| `PrefersPixelLayoutBGRA` |

```cpp
PrefersPixelLayoutBGRA(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 DRAWBOT\_Boolean \*out\_prefers\_bgraPB);

```

|
| `SupportsPixelLayoutARGB` |

```cpp
SupportsPixelLayoutARGB(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 DRAWBOT\_Boolean \*out\_supports\_argbPB);

```

|
| `PrefersPixelLayoutARGB` |

```cpp
PrefersPixelLayoutARGB(
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 DRAWBOT\_Boolean \*out\_prefers\_argbPB);

```

|
| `RetainObject` | Retain (increase reference count on) any object (pen, brush, path, etc). For example, it should be used when any object is copied and the copied object should be retained.

```cpp
RetainObject(
 DRAWBOT\_ObjectRef in\_obj\_ref);

```

|
| `ReleaseObject` | Release (decrease reference count on) any object (pen, brush, path, etc). This function MUST be called for any object created using `NewXYZ()` from this suite.
Do not call this function on a `DRAWBOT\_SupplierRef` and `DRAWBOT\_SupplierRef`, since these are not created by the plug-in.

```cpp
ReleaseObject(
 DRAWBOT\_ObjectRef in\_obj\_ref);

```

|

---

## Drawbot_SurfaceSuite

Calls to draw on the surface, and to query and set drawing settings.

### Drawbot_SurfaceSuite1

| **Function** | **Purpose**                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `PushStateStack` | Push the current surface state onto the stack. It should be popped to retrieve old state. |

It is required to restore state if you are going to clip or transform a surface or change the interpolation or anti-aliasing policy.

```cpp
PushStateStack(
 DRAWBOT\_SurfaceRef in\_surface\_ref);

```

|
| `PopStateStack` | Pop the last pushed surface state off the stack.

```cpp
PopStateStack(
 DRAWBOT\_SurfaceRef in\_surface\_ref);

```

|
| `PaintRect` | Paint a rectangle with a color on the surface.

```cpp
PaintRect(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 const DRAWBOT\_ColorRGBA \*in\_colorP,
 const DRAWBOT\_RectF32 \*in\_rectPR);

```

|
| `FillPath` | Fill a path using a brush and fill type.

```cpp
FillPath(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_BrushRef in\_brush\_ref,
 DRAWBOT\_PathRef in\_path\_ref,
 DRAWBOT\_FillType in\_fill\_type);

```

`DRAWBOT\_FillType` is one of the following:

- `kDRAWBOT\_FillType\_EvenOdd`,
- `kDRAWBOT\_FillType\_Winding`

|
| `StrokePath` | Stroke a path using a pen.

```cpp
StrokePath(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_PenRef in\_pen\_ref,
 DRAWBOT\_PathRef in\_path\_ref);

```

|
| `Clip` | Clip the surface.

```cpp
Clip(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_SupplierRef in\_supplier\_ref,
 const DRAWBOT\_Rect32 \*in\_rectPR);

```

|
| `GetClipBounds` | Get clip bounds.

```cpp
GetClipBounds(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_Rect32 \*out\_rectPR);

```

|
| `IsWithinClipBounds` | Checks whether a rect is within the clip bounds.

```cpp
IsWithinClipBounds(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 const DRAWBOT\_Rect32 \*in\_rectPR,
 DRAWBOT\_Boolean \*out\_withinPB);

```

|
| `Transform` | Transform the last surface state.

```cpp
Transform(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 const DRAWBOT\_MatrixF32 \*in\_matrixP);

```

|
| `DrawString` | Draw a string.

```cpp
DrawString(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_BrushRef in\_brush\_ref,
 DRAWBOT\_FontRef in\_font\_ref,
 const DRAWBOT\_UTF16Char \*in\_stringP,
 const DRAWBOT\_PointF32 \*in\_originP,
 DRAWBOT\_TextAlignment in\_alignment\_style,
 DRAWBOT\_TextTruncation in\_truncation\_style,
 float in\_truncation\_width);

```

`DRAWBOT\_TextAlignment` is one of the following:

- `kDRAWBOT\_TextAlignment\_Left`,
- `kDRAWBOT\_TextAlignment\_Center`,
- `kDRAWBOT\_TextAlignment\_Right`

`DRAWBOT\_TextTruncation` is one of the following:

- `kDRAWBOT\_TextTruncation\_None`,
- `kDRAWBOT\_TextTruncation\_End`,
- `kDRAWBOT\_TextTruncation\_EndEllipsis`,
- `kDRAWBOT\_TextTruncation\_PathEllipsis`

|
| `DrawImage` | Draw an image created using `NewImageFromBuffer()` on the surface. Alpha = [0.0f, 1.0f ].

```cpp
DrawImage(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_ImageRef in\_image\_ref,
 const DRAWBOT\_PointF32 \*in\_originP,
 float in\_alpha);

```

|
| `SetInterpolationPolicy` |

```cpp
SetInterpolationPolicy(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_InterpolationPolicy in\_interp);

```

`DRAWBOT\_InterpolationPolicy` is one of the following:

- `kDRAWBOT\_InterpolationPolicy\_None`,
- `kDRAWBOT\_InterpolationPolicy\_Med`,
- `kDRAWBOT\_InterpolationPolicy\_High`

|
| `GetInterpolationPolicy` |

```cpp
GetInterpolationPolicy(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_InterpolationPolicy \*out\_interpP);

```

|
| `SetAntiAliasPolicy` |

```cpp
SetAntiAliasPolicy(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_AntiAliasPolicy in\_policy);

```

`DRAWBOT\_AntiAliasPolicy` is one of the following:

- `kDRAWBOT\_AntiAliasPolicy\_None`,
- `kDRAWBOT\_AntiAliasPolicy\_Med`,
- `kDRAWBOT\_AntiAliasPolicy\_High`

|
| `GetAntiAliasPolicy` |

```cpp
GetAntiAliasPolicy(
 DRAWBOT\_SurfaceRef in\_surface\_ref,
 DRAWBOT\_AntiAliasPolicy \*out\_policyP);

```

|
| `Flush` | Flush drawing. This is not always needed, and if overused, may cause excessive redrawing and flashing.

```cpp
Flush(
 DRAWBOT\_SurfaceRef in\_surface\_ref);

```

|

---

## Drawbot_PathSuite

Calls to draw paths.

### Drawbot_PathSuite1

| **Function** | **Purpose** |
| ------------------ | ----------------- |
| `MoveTo`         | Move to a point.  |

```cpp
MoveTo(
 DRAWBOT\_PathRef in\_path\_ref,
 float in\_x,
 float in\_y);

```

|
| `LineTo` | Add a line to the path.

```cpp
LineTo(
 DRAWBOT\_PathRef in\_path\_ref,
 float in\_x,
 float in\_y);

```

|
| `BezierTo` | Add a cubic bezier to the path.

```cpp
BezierTo(
 DRAWBOT\_PathRef in\_path\_ref,
 const DRAWBOT\_PointF32 \*in\_pt1P,
 const DRAWBOT\_PointF32 \*in\_pt2P,
 const DRAWBOT\_PointF32 \*in\_pt3P);

```

|
| `AddRect` | Add a rect to the path.

```cpp
AddRect(
 DRAWBOT\_PathRef in\_path\_ref,
 const DRAWBOT\_RectF32 \*in\_rectPR);

```

|
| `AddArc` | Add a arc to the path. Zero start degrees == 3 o’clock.
Sweep is clockwise. Units for angle are in degrees.

```cpp
AddArc(
 DRAWBOT\_PathRef in\_path\_ref,
 const DRAWBOT\_PointF32 \*in\_centerP,
 float in\_radius,
 float in\_start\_angle,
 float in\_sweep);

```

|
| `Close` | Close the path.

```cpp
Close(
 DRAWBOT\_PathRef in\_path\_ref);

```

|

---

## PF_EffectCustomUIOverlayThemeSuite

This suite should be used for stroking and filling paths and vertices on the Composition and Layer Windows. After Effects is using this suite internally, and we have made it available to make custom UI look consistent across effects. The foreground/shadow colors are computed based on the app brightness level so that custom UI is always visible regardless of the application’s Brightness setting in the Preferences.

### PF_EffectCustomUIOverlayThemeSuite1

| **Function**                  | **Purpose**                   |
| ----------------------------------- | ----------------------------------- |
| `PF\_GetPreferredForegroundColor` | Get the preferred foreground color. |

```cpp
PF\_GetPreferredForegroundColor(
 DRAWBOT\_ColorRGBA \*foreground\_colorP);

```

|
| `PF\_GetPreferredShadowColor` | Get the preferred shadow color.

```cpp
PF\_GetPreferredShadowColor(
 DRAWBOT\_ColorRGBA \*shadow\_colorP);

```

|
| `PF\_GetPreferredStrokeWidth` | Get the preferred foreground & shadow stroke width.

```cpp
PF\_GetPreferredStrokeWidth(
 float \*stroke\_widthPF);

```

|
| `PF\_GetPreferredVertexSize` | Get the preferred vertex size.

```cpp
PF\_GetPreferredVertexSize(
 float \*vertex\_sizePF);

```

|
| `PF\_GetPreferredShadowOffset` | Get the preferred shadow offset.

```cpp
PF\_GetPreferredShadowOffset(
 A\_LPoint \*shadow\_offsetP);

```

|
| `PF\_StrokePath` | Stroke the path with the overlay theme foreground color.
Optionally draw the shadow using the overlay theme shadow color.
Uses overlay theme stroke width for stroking foreground and shadow strokes.

```cpp
PF\_StrokePath(
 const DRAWBOT\_DrawRef drawbot\_ref,
 const DRAWBOT\_PathRef path\_ref
 PF\_Boolean draw\_shadowB);

```

|
| `PF\_FillPath` | Fills the path with overlay theme foreground color.
Optionally draw the shadow using the overlay theme shadow color.

```cpp
PF\_FillPath(
 const DRAWBOT\_DrawRef drawbot\_ref,
 const DRAWBOT\_PathRef path\_ref
 PF\_Boolean draw\_shadowB);

```

|
| `PF\_FillVertex` | Fills a square vertex around the center point using the overlay theme foreground color and vertex size.

```cpp
PF\_FillVertex(
 const DRAWBOT\_DrawRef drawbot\_ref,
 const A\_FloatPoint \*center\_pointP
 PF\_Boolean draw\_shadowB);

```

|

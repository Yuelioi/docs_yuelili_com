---
title: Useful Utility Functions
order: 15
category:
  - AE 插件开发
---

# Useful Utility Functions

## PF_EffectUISuite

Although not strictly concerned with parameters, this suite can change the name of the options button.

| **Function**               | **Purpose**                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| `PF\_SetOptionsButtonName` | Changes the text on the options button in the effect controls palette. |

NOTE: This must be called during [PF_Cmd_PARAM_SETUP](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-global-selectors).

```cpp
PF\_SetOptionsButtonName(
 PF\_ProgPtr effect\_ref,
 const A\_char \*nameZ);

```

`nameZ` may be up to `A\_char[31]` in length. |

---

## PF_AppSuite

Roughly 437 years ago, when we released After Effects 5.0, we published some useful utility callbacks in PF_AppSuite. They’re as useful today as they were then. After Effects has user-controllable UI brightness.

In addition to the [PF_EffectCustomUIOverlayThemeSuite](../effect-ui-events/custom-ui-and-drawbot.html) (#effect-ui-events-custom-ui-and-drawbot-pf-effectcustomuioverlaythemesuite) for custom UI in effects, use these calls to integrate seamlessly into the After Effects UI.

What better way to shame someone into purchasing a copy of your plug-in than by putting their personal information into a watermark, eh? Or set the cursor to add mask vertices, just to confuse people? Heh heh heh. But that would be wrong.

| **Function**        | **Purpose**                             |
| ------------------- | --------------------------------------- |
| `PF\_AppGetBgColor` | Retrieves the current background color. |

```cpp
PF\_AppGetBgColor(
 PF\_App\_Color bg\_colorP);

```

|
| `PF\_AppGetColor` | Retrieves the color for the specified UI element. See AE_EffectSuites.h for a complete enumeration of available `PF\_App\_Color` values;
basically any color in After Effects’ UI can be retrieved.
CC adds several new `PF\_App\_ColorType` enum values for new elements that can be queried.
:::tip that in CS6, the color definitions are off from `FILL\_LIGHT` downward.
Use following psuedocode for CS6 only:

```cpp
GetColor(enum e)
{
 if host\_is\_CS6 and e >= FILL\_LIGHT
 e += 3
 call real GetColor
}

PF\_AppGetColor(
 PF\_App\_ColorType color\_type,
 PF\_App\_Color \*app\_colorP);

```

|
| `PF\_AppGetLanguage` | New in CC. Retrieves the active displayed language of AE UI so plug-in can match. Here are the possible language codes as of CC:\* Chinese - `zh\_CN`

- English - `en\_US`
- French - `fr\_FR`
- German - `de\_DE`
- Italian - `it\_IT`
- Japanese - `ja\_JP`
- Korean - `ko\_KR`
- Spanish - `es\_ES`

```cpp
PF\_AppGetLanguage(
 A\_char lang\_tagZ);

```

|
| `PF\_GetPersonalInfo` | Retrieves the user’s registration information.

```cpp
PF\_GetPersonalInfo(
 PF\_AppPersonalTextInfo \*ptiP);

typedef struct PF\_AppPersonalTextInfo {
 A\_char name[PF\_APP\_MAX\_PERS\_LEN + 1];
 A\_char org[PF\_APP\_MAX\_PERS\_LEN + 1];
 A\_char serial\_str[PF\_APP\_MAX\_PERS\_LEN+1];
} PF\_AppPersonalTextInfo;

```

|
| `PF\_GetFontStyleSheet` | Retrieves font style sheet information for the fonts used in After Effects’ UI.
Trivia: The font used in After Effects’ UI starting in 15.0 is Adobe Clean.
Before that, it was Tahoma on Windows and Lucida Grande on macOS X.

```cpp
PF\_GetFontStyleSheet(
 PF\_FontStyleSheet sheet,
 PF\_FontName \*font\_nameP0,
 A\_short \*font\_numPS0,
 A\_short \*sizePS0,
 A\_short \*stylePS0);

```

|
| `PF\_SetCursor` | Sets the cursor to any of After Effects’ cursors. See AE_EffectUI.h for a complete enumeration.
Set to:\* `PF\_Cursor\_NONE` to allow After Effects to set the cursor.

- `PF\_Cursor\_CUSTOM` if you’ve used OS-specific calls to change the cursor (After Effects will honor your changes).

```cpp
PF\_SetCursor(
 PF\_CursorType cursor);

```

|
| `PF\_IsRenderEngine` | Returns TRUE if After Effects is running in watched folder mode, or is a render engine installation.

```cpp
PF\_IsRenderEngine(
 PF\_Boolean \*render\_enginePB);

```

As of AE6.5, this function returns `TRUE` if the installation is the render engine,
or if the After Effects is being run with no UI, or if After Effects is in watched folder mode. |
| `PF\_AppColorPickerDialog` | Displays the After Effects color picker dialog (which may be the system color picker, depending on the user’s preferences).
Will return `PF\_Interrupt\_CANCEL` if user cancels dialog. Returned color is in the project’s working color space.

```cpp
PF\_AppColorPickerDialog(
 const A\_char \*dialog\_titleZ0,
 const PF\_PixelFloat \*sample\_colorP,
 PF\_PixelFloat \*result\_colorP);

```

|
| `PF\_GetMouse` | Returns the position of the mouse in the custom UI coordinate space.

```cpp
PF\_GetMouse(
 PF\_Point \*pointP);

```

|
| `PF\_InvalidateRect` | Queue up a [redraw](../effect-ui-events/custom-ui-and-drawbot.html) (#effect-ui-events-custom-ui-and-drawbot-redrawing) of a specific area of the custom UI for an effect.
Only valid while handling a non-drawing event in the effect.
Specify `rectP0` as `NULL` to invalidate the entire window. The redraw will happen at the next available idle moment after returning from the event.
Set the `PF\_EO\_UPDATE\_NOW` event outflag to update the window immediately after the event returns.

```cpp
PF\_InvalidateRect(
 const PF\_ContextH contextH,
 const PF\_Rect\* rectP0);

```

|
| `PF\_ConvertLocalToGlobal` | Converts from the custom UI coordinate system to global screen coordinates. Use only during custom UI event handling.

```cpp
PF\_ConvertLocalToGlobal(
 const PF\_Point \*localP,
 PF\_Point \*globalP);

```

|

---

## Advanced Appsuite: You Can Do That?!

`PF\_AdvAppSuite` was originally designed for some pretty nefarious purposes; an external application was pretending to be an After Effects plug-in, and required ways to notify After Effects of the changes it had made to the project. Our API impurity is your gain.

---

## PF_AdvAppSuite2

| **Function**          | **Purpose**                                                                    |
| --------------------- | ------------------------------------------------------------------------------ |
| `PF\_SetProjectDirty` | Tells After Effects that the project has been changed since it was last saved. |

```cpp
PF\_SetProjectDirty(void);

```

|
| `PF\_SaveProject` | Saves the project to the current path. To save the project elsewhere, use [AEGP_SaveProjectToPath()](../aegps/aegp-suites.html) (#aegps-aegp-suites-aegp-projsuite).

```cpp
PF\_SaveProject(void);

```

|
| `PF\_SaveBackgroundState` | Stores the background state (After Effects’ position in the stacking order of open applications and windows).

```cpp
PF\_SaveBackgroundState(void);

```

|
| `PF\_ForceForeground` | Brings After Effects to the front of all currently open applications and windows.

```cpp
PF\_ForceForeground(void);

```

|
| `PF\_RestoreBackgroundState` | Puts After Effects back where it was, in relation to other applications and windows.

```cpp
PF\_RestoreBackgroundState(void);

```

|
| `PF\_RefreshAllWindows` | Forces all After Effects windows to update.
:::tip that although the Composition panel will be refreshed, this does not guarantee a new frame will be sent to External Monitor Preview plug-ins.

```cpp
PF\_RefreshAllWindows(void);

```

|
| `PF\_InfoDrawText` | Writes text into the After Effects info palette.

```cpp
PF\_InfoDrawText(
 const A\_char \*line1Z0,
 const A\_char \*line2Z0);

```

|
| `PF\_InfoDrawColor` | Draws the specified color in the After Effects info palette (alpha is ignored).

```cpp
PF\_InfoDrawColor(
 PF\_Pixel color);

```

|
| `PF\_InfoDrawText3` | Writes three lines of text into the After Effects info palette.

```cpp
PF\_InfoDrawText3(
 const A\_char \*line1Z0,
 const A\_char \*line2Z0,
 const A\_char \*line3Z0);

```

|
| `PF\_InfoDrawText3Plus` | Writes three lines of text into the After Effects info palette, with portions of the second and third lines left and right justified.

```cpp
PF\_InfoDrawText3Plus(
 const A\_char \*line1Z0,
 const A\_char \*line2\_jrZ0,
 const A\_char \*line2\_jlZ0,
 const A\_char \*line3\_jrZ0,
 const A\_char \*line3\_jlZ0);

```

|
| `PF\_AppendInfoText` | Appends characters to the currently-displayed info text.

```cpp
PF\_AppendInfoText(
 const A\_char \*appendZ0);

```

|

---

## Formatting Time

`PF\_AdvTimeSuite` provides several functions to match how After Effects displays time. In fact, these are the same functions we use internally.

### PF_AdvTimeSuite4

| **Function**               | **Purpose**                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| `PF\_FormatTimeActiveItem` | Given a time value and scale, returns a formatted string representing that time. |

If durationB is `TRUE`, appropriate units will be appended.

```cpp
PF\_FormatTimeActiveItem(
 A\_long time\_valueUL,
 A\_u\_long time\_scaleL,
 PF\_Boolean durationB,
 A\_char \*time\_buf);

```

|
| `PF\_FormatTime` | Contextualizes the formatted time string for the given PF_InData and PF_EffectWorld (i.e., layer time).

```cpp
PF\_FormatTime(
 PF\_InData \*in\_data,
 PF\_EffectWorld \*world,
 A\_long time\_valueUL,
 A\_u\_long time\_scaleL,
 PF\_Boolean durationB,
 A\_char \*time\_buf);

```

|
| `PF\_FormatTimePlus` | Allows you to select composition or layer time.

```cpp
PF\_FormatTimePlus(
 PF\_InData \*in\_data,
 PF\_EffectWorld \*world,
 A\_long time\_valueUL,
 A\_u\_long time\_scaleL,
 PF\_Boolean comp\_timeB,
 PF\_Boolean durationB,
 A\_char \*time\_buf);

```

|
| `PF\_GetTimeDisplayPref` | Returns the starting frame number (specified by the user in composition settings), and the composition’s time display preferences.
Updated in 14.2 to support higher frame rates.

```cpp
PF\_GetTimeDisplayPref(
 PF\_TimeDisplayPref2 \*tdp,
 A\_long \*starting\_num);
 typedef struct {
 A\_char display\_mode;
 A\_long framemax;
 A\_long frames\_per\_foot;
 A\_char frames\_start;
 A\_Boolean nondrop30B;
 A\_Boolean honor\_source\_timecodeB;
 A\_Boolean use\_feet\_framesB;
 } PF\_TimeDisplayPrefVersion3;

```

|
| `PF\_TimeCountFrames` | New in 15.0. Returns the index of the frame in the current comp.

```cpp
PF\_TimeCountFrames(
 const A\_Time \*start\_timeTP,
 const A\_Time \*time\_stepTP,
 A\_Boolean include\_partial\_frameB,
 A\_long \*frame\_countL);

```

|

---

## Affecting The Timeline

Long ago, we helped a developer integrate their stand-alone tracker with After Effects by exposing a set of functions to give them some way to notify us of, and be notified of, changes to the timeline.

With the numerous AEGP API calls available, these aren’t used much, but they’re still available.

Don’t confuse this suite with [AEGP_ItemSuite](../aegps/aegp-suites.html) (#aegps-aegp-suites-aegp-itemsuite).

---

### PF_AdvItemSuite1

| **Function**       | **Purpose**                                               |
| ------------------ | --------------------------------------------------------- |
| `PF\_MoveTimeStep` | Moves current time num_stepsL in the specified direction. |

```cpp
PF\_MoveTimeStep(
 PF\_InData \*in\_data,
 PF\_EffectWorld \*world,
 PF\_Step time\_dir,
 A\_long num\_stepsL);

```

|
| `PF\_MoveTimeStepActiveItem` | Moves num_stepsL in the specified direction, for the active item.

```cpp
PF\_MoveTimeStepActiveItem(
 PF\_Step time\_dir,
 A\_long num\_stepsL);

```

|
| `PF\_TouchActiveItem` | Tells After Effects that the active item must be updated.

```cpp
PF\_TouchActiveItem (void);

```

|
| `PF\_ForceRerender` | Forces After Effects to rerender the current frame.

```cpp
PF\_ForceRerender(
 PF\_InData \*in\_data,
 PF\_EffectWorld \*world);

```

|
| `PF\_EffectIsActiveOrEnabled` | Returns whether the effect which owns the `PF\_ContextH` is currently active or enabled
(if it isn’t, After Effects won’t be listening for function calls from it).

```cpp
PF\_EffectIsActiveOrEnabled(
 PF\_ContextH contextH,
 PF\_Boolean \*enabledPB);

```

|

---

## Accessing Auxiliary Channel Data

Some file types contain more than just pixel data; use `PF\_ChannelSuite` to determine whether such information is present, and the macros in AE_ChannelSuites.h to retrieve it in the format you need.

---

### PF_ChannelSuite1

| **Function**               | **Purpose**                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| `PF\_GetLayerChannelCount` | Retrieves the number of auxiliary channels associated with the indexed layer. |

```cpp
PF\_GetLayerChannelCount(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 A\_long \*num\_channelsPL);

```

|
| `PF\_GetLayerChannelIndexedRefAndDesc` | Retrieves (by index) a reference to, and description of, the specified channel.

```cpp
PF\_GetLayerChannelIndexedRefAndDesc(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 PF\_ChannelIndex channel\_index,
 PF\_Boolean \*foundPB,
 PF\_ChannelRef \*channel\_refP,
 PF\_ChannelDesc \*channel\_descP);

```

|
| `PF\_GetLayerChannelTypedRefAndDesc` | Retrieves an auxiliary channel by type.
Returned information is valid only if `foundPB` returns `TRUE`.

```cpp
PF\_GetLayerChannelTypedRefAndDesc(
 PF\_ProgPtr effect\_ref,
 PF\_ParamIndex param\_index,
 PF\_ChannelType channel\_type,
 PF\_Boolean \*foundPB,
 PF\_ChannelRef \*channel\_refP,
 PF\_ChannelDesc \*channel\_descP);

```

PF_DataType will be one of the following:

- `PF\_DataType\_FLOAT` - 34 bytes
- `PF\_DataType\_DOUBLE` - 38 bytes
- `PF\_DataType\_LONG` - 34 bytes
- `PF\_DataType\_SHORT` - 32 bytes
- `PF\_DataType\_FIXED\_16\_16` - 34 bytes
- `PF\_DataType\_CHAR` - 31 byte
- `PF\_DataType\_U\_BYTE` - 31 byte
- `PF\_DataType\_U\_SHORT` - 32 bytes
- `PF\_DataType\_U\_FIXED\_16\_16` - 34 bytes
- `PF\_DataType\_RGB` - 3 bytes

PF_ChannelType will be one of the following:

- `PF\_ChannelType\_DEPTH`
- `PF\_ChannelType\_NORMALS`
- `PF\_ChannelType\_OBJECTID`
- `PF\_ChannelType\_MOTIONVECTOR`
- `PF\_ChannelType\_BK\_COLOR`
- `PF\_ChannelType\_TEXTURE`
- `PF\_ChannelType\_COVERAGE`
- `PF\_ChannelType\_NODE`
- `PF\_ChannelType\_MATERIAL`
- `PF\_ChannelType\_UNCLAMPED`
- `PF\_ChannelType\_UNKNOWN`

|
| `PF\_CheckoutLayerChannel` | Retrieves the `PF\_ChannelChunk` containing the data associated with the given `PF\_ChannelRefPtr`.

```cpp
PF\_CheckoutLayerChannel(
 PF\_ProgPtr effect\_ref,
 PF\_ChannelRefPtr channel\_refP,
 long what\_time,
 long duration,
 unsigned long time\_scale,
 PF\_DataType data\_type,
 PF\_ChannelChunk \*channel\_chunkP);

```

|
| `PF\_CheckinLayerChannel` | Checks in the `PF\_ChannelChunk`. Always, always, always check the data back in.

```cpp
PF\_CheckinLayerChannel(
 PF\_ProgPtr effect\_ref,
 PF\_ChannelRefPtr channel\_refP,
 PF\_ChannelChunk \*channel\_chunkP);

```

|

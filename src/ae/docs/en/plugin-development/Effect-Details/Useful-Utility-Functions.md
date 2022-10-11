---
title: Useful Utility Functions
order: 15
category:
  - AE 插件开发
---
# Useful Utility Functions

## PF_EffectUISuite

Although not strictly concerned with parameters, this suite can change the name of the options button.

### PF_SetOptionsButtonName

Changes the text on the options button in the effect controls palette.

NOTE: This must be called during [PF_Cmd_PARAM_SETUP](https://ae-plugins.docsforadobe.dev/effect-basics/command-selectors.html#effect-basics-command-selectors-global-selectors).

```
PF_SetOptionsButtonName(
PF_ProgPtreffect_ref,
constA_char*nameZ);
```

`<span class="pre">nameZ</span>` may be up to `<span class="pre">A_char[31]</span>` in length.

## PF_AppSuite

Roughly 437 years ago, when we released After Effects 5.0, we published some useful utility callbacks in PF_AppSuite. They’re as useful today as they were then. After Effects has user-controllable UI brightness.

In addition to the [PF_EffectCustomUIOverlayThemeSuite](../effect-ui-events/custom-ui-and-drawbot.html) (#effect-ui-events-custom-ui-and-drawbot-pf-effectcustomuioverlaythemesuite) for custom UI in effects, use these calls to integrate seamlessly into the After Effects UI.

What better way to shame someone into purchasing a copy of your plug-in than by putting their personal information into a watermark, eh? Or set the cursor to add mask vertices, just to confuse people? Heh heh heh. But that would be wrong.

### PF_AppGetBgColor


Retrieves the current background color.

```
PF_AppGetBgColor(
PF_App_Colorbg_colorP);
```

### PF_AppGetColor

Retrieves the color for the specified UI element. See AE_EffectSuites.h for a complete enumeration of available `<span class="pre">PF_App_Color</span>` values; basically any color in After Effects’ UI can be retrieved.

CC adds several new `<span class="pre">PF_App_ColorType</span>` enum values for new elements that can be queried.

Note that in CS6, the color definitions are off from `<span class="pre">FILL_LIGHT</span>` downward.

Use following psuedocode for CS6 only:

```
GetColor(enume)
{
ifhost_is_CS6ande>=FILL_LIGHT
e+=3
callrealGetColor
}

PF_AppGetColor(
PF_App_ColorTypecolor_type,
PF_App_Color*app_colorP);
```

### PF_AppGetLanguage


New in CC. Retrieves the active displayed language of AE UI so plug-in can match. Here are the possible language codes as of CC:

* Chinese - `<span class="pre">zh_CN</span>`
* English - `<span class="pre">en_US</span>`
* French - `<span class="pre">fr_FR</span>`
* German - `<span class="pre">de_DE</span>`
* Italian - `<span class="pre">it_IT</span>`
* Japanese - `<span class="pre">ja_JP</span>`
* Korean - `<span class="pre">ko_KR</span>`
* Spanish - `<span class="pre">es_ES</span>`

```
PF_AppGetLanguage(
A_charlang_tagZ);
```

### PF_GetPersonalInfo



Retrieves the user’s registration information.

```
PF_GetPersonalInfo(
PF_AppPersonalTextInfo*ptiP);

typedefstructPF_AppPersonalTextInfo{
A_charname[PF_APP_MAX_PERS_LEN+1];
A_charorg[PF_APP_MAX_PERS_LEN+1];
A_charserial_str[PF_APP_MAX_PERS_LEN+1];
}PF_AppPersonalTextInfo;
```

### PF_GetFontStyleSheet


Retrieves font style sheet information for the fonts used in After Effects’ UI.

Trivia: The font used in After Effects’ UI starting in 15.0 is Adobe Clean. Before that, it was Tahoma on Windows and Lucida Grande on macOS X.

```
PF_GetFontStyleSheet(
PF_FontStyleSheetsheet,
PF_FontName*font_nameP0,
A_short*font_numPS0,
A_short*sizePS0,
A_short*stylePS0);
```

### PF_SetCursor


Sets the cursor to any of After Effects’ cursors. See AE_EffectUI.h for a complete enumeration.

Set to:

* `<span class="pre">PF_Cursor_NONE</span>` to allow After Effects to set the cursor.
* `<span class="pre">PF_Cursor_CUSTOM</span>` if you’ve used OS-specific calls to change the cursor (After Effects will honor your changes).

```
PF_SetCursor(
PF_CursorTypecursor);
```

### PF_IsRenderEngine


Returns TRUE if After Effects is running in watched folder mode, or is a render engine installation.

```
PF_IsRenderEngine(
PF_Boolean*render_enginePB);
```

As of AE6.5, this function returns `<span class="pre">TRUE</span>` if the installation is the render engine, or if the After Effects is being run with no UI, or if After Effects is in watched folder mode.

### PF_AppColorPickerDialog


Displays the After Effects color picker dialog (which may be the system color picker, depending on the user’s preferences).

Will return `<span class="pre">PF_Interrupt_CANCEL</span>` if user cancels dialog. Returned color is in the project’s working color space.

```
PF_AppColorPickerDialog(
constA_char*dialog_titleZ0,
constPF_PixelFloat*sample_colorP,
PF_PixelFloat*result_colorP);
```

### PF_GetMouse


Returns the position of the mouse in the custom UI coordinate space.

```
PF_GetMouse(
PF_Point*pointP);
```

### PF_InvalidateRect


Queue up a [redraw](https://ae-plugins.docsforadobe.dev/effect-ui-events/custom-ui-and-drawbot.html#effect-ui-events-custom-ui-and-drawbot-redrawing) of a specific area of the custom UI for an effect.

Only valid while handling a non-drawing event in the effect.

Specify `<span class="pre">rectP0</span>` as `<span class="pre">NULL</span>` to invalidate the entire window. The redraw will happen at the next available idle moment after returning from the event.

Set the `<span class="pre">PF_EO_UPDATE_NOW</span>` event outflag to update the window immediately after the event returns.

```
PF_InvalidateRect(
constPF_ContextHcontextH,
constPF_Rect*rectP0);
```

### PF_ConvertLocalToGlobal


Converts from the custom UI coordinate system to global screen coordinates. Use only during custom UI event handling.

```
PF_ConvertLocalToGlobal(
constPF_Point*localP,
PF_Point*globalP);
```

## Advanced Appsuite: You Can Do That?!

`PF\_AdvAppSuite` was originally designed for some pretty nefarious purposes; an external application was pretending to be an After Effects plug-in, and required ways to notify After Effects of the changes it had made to the project. Our API impurity is your gain.

---

## PF_AdvAppSuite2

### PF_SetProjectDirty


Tells After Effects that the project has been changed since it was last saved.

```
PF_SetProjectDirty(void);
```

### PF_SaveProject


Saves the project to the current path. To save the project elsewhere, use [AEGP_SaveProjectToPath()](https://ae-plugins.docsforadobe.dev/aegps/aegp-suites.html#aegps-aegp-suites-aegp-projsuite).

```
PF_SaveProject(void);
```

### PF_SaveBackgroundState


Stores the background state (After Effects’ position in the stacking order of open applications and windows).

```
PF_SaveBackgroundState(void);
```

### PF_ForceForeground


Brings After Effects to the front of all currently open applications and windows.

```
PF_ForceForeground(void);
```


### PF_RestoreBackgroundState


Puts After Effects back where it was, in relation to other applications and windows.

```
PF_RestoreBackgroundState(void);
```

### PF_RefreshAllWindows


Forces all After Effects windows to update. Note that although the Composition panel will be refreshed, this does not guarantee a new frame will be sent to External Monitor Preview plug-ins.

```
PF_RefreshAllWindows(void);
```

### PF_InfoDrawText


Writes text into the After Effects info palette.

```
PF_InfoDrawText(
constA_char*line1Z0,
constA_char*line2Z0);
```

### PF_InfoDrawColor


Draws the specified color in the After Effects info palette (alpha is ignored).

```
PF_InfoDrawColor(
PF_Pixelcolor);
```

### PF_InfoDrawText3


Writes three lines of text into the After Effects info palette.

```
PF_InfoDrawText3(
constA_char*line1Z0,
constA_char*line2Z0,
constA_char*line3Z0);
```

### PF_InfoDrawText3Plus


Writes three lines of text into the After Effects info palette, with portions of the second and third lines left and right justified.

```
PF_InfoDrawText3Plus(
constA_char*line1Z0,
constA_char*line2_jrZ0,
constA_char*line2_jlZ0,
constA_char*line3_jrZ0,
constA_char*line3_jlZ0);
```

### PF_AppendInfoText


Appends characters to the currently-displayed info text.

```
PF_AppendInfoText(
constA_char*appendZ0);
```

## Formatting Time

`PF\_AdvTimeSuite` provides several functions to match how After Effects displays time. In fact, these are the same functions we use internally.

### PF_AdvTimeSuite4

#### PF_FormatTimeActiveItem


Given a time value and scale, returns a formatted string representing that time. If durationB is `<span class="pre">TRUE</span>`, appropriate units will be appended.

```
PF_FormatTimeActiveItem(
A_longtime_valueUL,
A_u_longtime_scaleL,
PF_BooleandurationB,
A_char*time_buf);
```

#### PF_FormatTime


Contextualizes the formatted time string for the given PF_InData and PF_EffectWorld (i.e., layer time).

```
PF_FormatTime(
PF_InData*in_data,
PF_EffectWorld*world,
A_longtime_valueUL,
A_u_longtime_scaleL,
PF_BooleandurationB,
A_char*time_buf);
```

#### PF_FormatTimePlus


Allows you to select composition or layer time.

```
PF_FormatTimePlus(
PF_InData*in_data,
PF_EffectWorld*world,
A_longtime_valueUL,
A_u_longtime_scaleL,
PF_Booleancomp_timeB,
PF_BooleandurationB,
A_char*time_buf);
```

#### PF_GetTimeDisplayPref


Returns the starting frame number (specified by the user in composition settings), and the composition’s time display preferences. Updated in 14.2 to support higher frame rates.

```
PF_GetTimeDisplayPref(
PF_TimeDisplayPref2*tdp,
A_long*starting_num);
typedefstruct{
A_chardisplay_mode;
A_longframemax;
A_longframes_per_foot;
A_charframes_start;
A_Booleannondrop30B;
A_Booleanhonor_source_timecodeB;
A_Booleanuse_feet_framesB;
}PF_TimeDisplayPrefVersion3;
```

#### PF_TimeCountFrames


New in 15.0. Returns the index of the frame in the current comp.

```
PF_TimeCountFrames(
constA_Time*start_timeTP,
constA_Time*time_stepTP,
A_Booleaninclude_partial_frameB,
A_long*frame_countL);
```







---

## Affecting The Timeline

Long ago, we helped a developer integrate their stand-alone tracker with After Effects by exposing a set of functions to give them some way to notify us of, and be notified of, changes to the timeline.

With the numerous AEGP API calls available, these aren’t used much, but they’re still available.

Don’t confuse this suite with [AEGP_ItemSuite](../aegps/aegp-suites.html) (#aegps-aegp-suites-aegp-itemsuite).

---

### PF_AdvItemSuite1

#### PF_MoveTimeStep


Moves current time num_stepsL in the specified direction.

```
PF_MoveTimeStep(
PF_InData*in_data,
PF_EffectWorld*world,
PF_Steptime_dir,
A_longnum_stepsL);
```

#### PF_MoveTimeStepActiveItem


Moves num_stepsL in the specified direction, for the active item.

```
PF_MoveTimeStepActiveItem(
PF_Steptime_dir,
A_longnum_stepsL);
```

#### PF_TouchActiveItem


Tells After Effects that the active item must be updated.

```
PF_TouchActiveItem(void);
```

#### PF_ForceRerender


Forces After Effects to rerender the current frame.

```
PF_ForceRerender(
PF_InData*in_data,
PF_EffectWorld*world);
```

#### PF_EffectIsActiveOrEnabled


Returns whether the effect which owns the `<span class="pre">PF_ContextH</span>` is currently active or enabled (if it isn’t, After Effects won’t be listening for function calls from it).

```
PF_EffectIsActiveOrEnabled(
PF_ContextHcontextH,
PF_Boolean*enabledPB);
```




## Accessing Auxiliary Channel Data

Some file types contain more than just pixel data; use `PF\_ChannelSuite` to determine whether such information is present, and the macros in AE_ChannelSuites.h to retrieve it in the format you need.

---

### PF_ChannelSuite1


#### PF_GetLayerChannelCount


Retrieves the number of auxiliary channels associated with the indexed layer.

```
PF_GetLayerChannelCount(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
A_long*num_channelsPL);
```

#### PF_GetLayerChannelIndexedRefAndDesc


Retrieves (by index) a reference to, and description of, the specified channel.

```
PF_GetLayerChannelIndexedRefAndDesc(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_ChannelIndexchannel_index,
PF_Boolean*foundPB,
PF_ChannelRef*channel_refP,
PF_ChannelDesc*channel_descP);
```

#### PF_GetLayerChannelTypedRefAndDesc


Retrieves an auxiliary channel by type. Returned information is valid only if `<span class="pre">foundPB</span>` returns `<span class="pre">TRUE</span>`.

```
PF_GetLayerChannelTypedRefAndDesc(
PF_ProgPtreffect_ref,
PF_ParamIndexparam_index,
PF_ChannelTypechannel_type,
PF_Boolean*foundPB,
PF_ChannelRef*channel_refP,
PF_ChannelDesc*channel_descP);
```

PF_DataType will be one of the following:

> * `<span class="pre">PF_DataType_FLOAT</span>` - 34 bytes
> * `<span class="pre">PF_DataType_DOUBLE</span>` - 38 bytes
> * `<span class="pre">PF_DataType_LONG</span>` - 34 bytes
> * `<span class="pre">PF_DataType_SHORT</span>` - 32 bytes
> * `<span class="pre">PF_DataType_FIXED_16_16</span>` - 34 bytes
> * `<span class="pre">PF_DataType_CHAR</span>` - 31 byte
> * `<span class="pre">PF_DataType_U_BYTE</span>` - 31 byte
> * `<span class="pre">PF_DataType_U_SHORT</span>` - 32 bytes
> * `<span class="pre">PF_DataType_U_FIXED_16_16</span>` - 34 bytes
> * `<span class="pre">PF_DataType_RGB</span>` - 3 bytes

PF_ChannelType will be one of the following:

> * `<span class="pre">PF_ChannelType_DEPTH</span>`
> * `<span class="pre">PF_ChannelType_NORMALS</span>`
> * `<span class="pre">PF_ChannelType_OBJECTID</span>`
> * `<span class="pre">PF_ChannelType_MOTIONVECTOR</span>`
> * `<span class="pre">PF_ChannelType_BK_COLOR</span>`
> * `<span class="pre">PF_ChannelType_TEXTURE</span>`
> * `<span class="pre">PF_ChannelType_COVERAGE</span>`
> * `<span class="pre">PF_ChannelType_NODE</span>`
> * `<span class="pre">PF_ChannelType_MATERIAL</span>`
> * `<span class="pre">PF_ChannelType_UNCLAMPED</span>`
> * `<span class="pre">PF_ChannelType_UNKNOWN</span>`

#### PF_CheckoutLayerChannel


Retrieves the `<span class="pre">PF_ChannelChunk</span>` containing the data associated with the given `<span class="pre">PF_ChannelRefPtr</span>`.

```
PF_CheckoutLayerChannel(
PF_ProgPtreffect_ref,
PF_ChannelRefPtrchannel_refP,
longwhat_time,
longduration,
unsignedlongtime_scale,
PF_DataTypedata_type,
PF_ChannelChunk*channel_chunkP);
```

#### PF_CheckinLayerChannel


Checks in the `<span class="pre">PF_ChannelChunk</span>`. Always, always, always check the data back in.

```
PF_CheckinLayerChannel(
PF_ProgPtreffect_ref,
PF_ChannelRefPtrchannel_refP,
PF_ChannelChunk*channel_chunkP);
```

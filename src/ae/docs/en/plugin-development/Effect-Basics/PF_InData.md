---
title: PF_InData
order: 5
category:
  - AE 插件开发
---

# PF_InData

After Effects communicates system, project, layer and audio information using `PF\_InData`. This structure is updated before each command selector is sent to a plug-in.

Fields valid only during specific [PF_Cmds](command-selectors.html) (#effect-basics-command-selectors) are noted.

Also, don’t worry; although `PF\_InData` is dauntingly large, you need not memorize each member’s purpose; you’ll use some of the fields some of the time.

---

## PF_InData Members

| **Name** | **Description**                                                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `inter`  | Callbacks used for user interaction, adding parameters, checking whether the user has interrupted the effect, displaying a progress bar, |

and obtaining source frames and parameter values at times other than the current time being rendered.
This very useful function suite is described in [Interaction Callback Functions](../effect-details/interaction-callback-functions.html) (#effect-details-interaction-callback-functions). |
| `utils` | Graphical and mathematical callbacks. This pointer is defined at all times. |
| `effect\_ref` | Opaque data that must be passed to most of the various callback routines.
After Effects uses this to identify your plug-in. |
| `quality` | The current quality setting, either `PF\_Quality\_HI` or `PF\_Quality\_LO`.
Effects should perform faster in LO, and more accurately in HI.
The graphics utility callbacks perform differently between LO and HI quality; so should your effect!
This field is defined during all frame and sequence selectors. |
| `version` | Effects specification version, Indicate the version you need to run successfully during `PF\_Cmd\_GLOBAL\_SETUP`. |
| `serial\_num` | The serial number of the invoking application. |
| `appl\_id` | The identifier of the invoking application.
If your plug-in is running in After Effects, `appl\_id` contains the application creator code ‘FXTC’.
If it is running in [Premiere Pro & Other Hosts](../ppro/ppro.html) (#ppro-ppro) it will be ‘PrMr’.
Use this to test whether your plug-in, licensed for use with one application, is being used with another. |
| `num\_params` | Input parameter count. |
| `what\_cpu` | Under macOS this contains the Gestalt value for CPU type (see Inside Macintosh, volume 6). Undefined on Windows. |
| `what\_fpu` | Under macOS this contains the Gestalt value for FPU type.
Undefined on Windows. |
| `current\_time` | The time of the current frame being rendered, valid during [PF_Cmd_RENDER](command-selectors.html) (#effect-basics-command-selectors-frame-selectors).
This is the current time in the layer, not in any composition.
If a layer starts at other than time 0 or is time-stretched, layer time and composition time are distinct.
The current frame number is `current\_time` divided by `time\_step`.
The current time in seconds is `current\_time` divided by time_scale.
To handle time stretching, composition frame rate changes, and time remapping, After Effects may ask effects to render at non-integral times (between two frames).
Be prepared for this; don’t assume that you’ll only be asked for frames on frame boundaries.
NOTE: As of CS3 (8.0), effects may be asked to render at negative current times. Deal! |
| `time\_step` | The duration of the current source frame being rendered.
In several situations with nested compositions, this source frame duration may be different than the time span between frames in the layer (`local\_time\_step`).
This value can be converted to seconds by dividing by time_scale.
When calculating other source frame times, such as for [PF_CHECKOUT_PARAM](../effect-details/interaction-callback-functions.html) (#effect-details-interaction-callback-functions-interaction-callbacks), use this value rather than `local\_time\_step`.
Can be negative if the layer is time-reversed. Can vary from one frame to the next if time remapping is applied on a nested composition.
Can differ from local_time_step when source material is stretched or remapped in a nested composition.
For example, this could occur when an inner composition is nested within an outer composition with a different frame rate, or time remapping is applied to the outer composition.
This value will be 0 during [PF_Cmd_SEQUENCE_SETUP](command-selectors.html) (#effect-basics-command-selectors-sequence-selectors) if it is not constant for all frames.
It will be set correctly during `PF\_Cmd\_FRAME\_SETUP` and `PF\_Cmd\_FRAME\_SETDOWN` selectors.
WARNING: This can be zero, so check it before you divide. |
| `total\_time` | Duration of the layer.
If the layer is time-stretched longer than 100%, the value will be adjusted accordingly; but if the layer is time-stretched shorter, the value will not be affected.
If time remapping is enabled, this value will be the duration of the composition.
This value can be converted to seconds by dividing by `time\_scale`. |
| `local\_time\_step` | Time difference between frames in the layer.
Affected by any time stretch applied to a layer.
Can be negative if the layer is time-reversed.
Unlike `time\_step`, this value is constant from one frame to the next.
This value can be converted to seconds by dividing by `time\_scale`.
For a step value that is constant over the entire frame range of the layer, use `local\_time\_step`, which is based on the composition’s framerate and layer stretch. |
| `time\_scale` | The units per second that `current\_time`, `time\_step`, `local\_time\_step` and `total\_time` are in.
If `time\_scale` is 30, then the units of `current\_time`, `time\_step`, `local\_time\_step` and `total\_time` are in 30ths of a second.
The `time\_step` might then be 3, indicating that the sequence is actually being rendered at 10 frames per second. `total\_time` might be 105, indicating that the sequence is 3.5 seconds long. |
| `field` | Valid only if [PF_OutFlag_PIX_INDEPENDENT](PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) was set during [PF_Cmd_GLOBAL_SETUP](command-selectors.html) (#effect-basics-command-selectors-global-selectors).
Check this field to see if you can process just the upper or lower field. |
| `shutter\_angle` | Motion blur shutter angle. Values range from 0 to 1, which represents 360 degrees.
Will be zero unless motion blur is enabled and checked for the target layer.
`shutter\_angle == 180` means the time interval between `current\_time` and `current\_time + 1/2 time\_step`.
Valid only if [PF_OutFlag_I_USE_SHUTTER_ANGLE](PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) was set during [PF_Cmd_GLOBAL_SETUP](command-selectors.html) (#effect-basics-command-selectors-global-selectors).
See the section on [Motion Blur](../effect-details/motion-blur.html) (#effect-details-motion-blur) for details on how to implement motion blur in your effect. |
| `width` | Dimensions of the source layer, which are not necessarily the same as the width and height fields in the input image parameter.
Buffer resizing effects can cause this difference. Not affected by downsampling. |
| `height` | |
| `extent\_hint` | The intersection of the visible portions of the input and output layers; encloses the composition rectangle transformed into layer coordinates.
Iterating over only this rectangle of pixels can speed your effect dramatically. See [extent_hint Usage](#effect-basics-pf-indata-extent-hint-usage) later in this chapter regarding proper usage. |
| `output\_origin\_x` | The origin of the output buffer in the input buffer. Non-zero only when the effect changes the origin. |
| `output\_origin\_y` | |
| `downsample\_x` | Point control parameters and layer parameter dimensions are automatically adjusted to compensate for a user telling After Effects to render only every nth pixel.
Effects need the downsampling factors to interpret scalar parameters representing pixel distances in the image (like sliders).
For example, a blur of 4 pixels should be interpreted as a blur of 2 pixels if the downsample factor is 1/2 in each direction (downsample factors are represented as ratios.)
Valid only during

- [PF_Cmd_SEQUENCE_SETUP](command-selectors.html) (#effect-basics-command-selectors-sequence-selectors),
- [PF_Cmd_SEQUENCE_RESETUP](command-selectors.html) (#effect-basics-command-selectors-sequence-selectors),
- [PF_Cmd_FRAME_SETUP](command-selectors.html) (#effect-basics-command-selectors-frame-selectors),
- [PF_Cmd_RENDER](command-selectors.html) (#effect-basics-command-selectors-frame-selectors)

|
| `downsample\_y` | |
| `pixel\_aspect\_ratio` | Pixel aspect ratio (width over height). |
| `in\_flags` | Unused. |
| `global\_data` | Data stored by your plug-in during other selectors. Locked and unlocked by After Effects before and after calling the plug-in. |
| `sequence\_data` | |
| `frame\_data` | |
| `start\_sampL` | Starting sample number, relative to the start of the audio layer. |
| `dur\_sampL` | Duration of audio, expressed as the number of samples. Audio-specific. |
| `total\_sampL` | Samples in the audio layer; equivalent to total_time expressed in samples. |
| `src\_snd` | PF_SoundWorld describing the input sound. Audio-specific. |
| `pica\_basicP` | Pointer to the PICA Basic suite, used to acquire other suites. |
| `pre\_effect\_source\_origin\_x` | Origin of the source image in the input buffer. Valid only when sent with a frame selector.
Non-zero only if one or more effects that preceded this effect on the same layer resized the output buffer and moved the origin.
Check for both the resize and the new origin to determine output area.
This is useful for effects which have implicit spatial operations (other than point controls), like flipping a file around an image’s center.
NOTE: Checked-out point parameters are adjusted for the pre-effect origin at the current time, not the time being checked out. |
| `pre\_effect\_source\_origin\_y` | |
| `shutter\_phase` | Offset from frame time to shutter open time as a percentage of a frame duration. |

---

## extent_hint Usage

:::tip

hint rectangles are much more effective…and complicated…for [SmartFX](../smartfx/smartfx.html) (#smartfx-smartfx).

Use `extent\_hint` to process only those pixels for which output is required; this is one of the simplest optimizations you can make.

Tell After Effects you use `in\_data>extent\_hint` by setting [PF_OutFlag_USE_OUTPUT_EXTENT](PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags) in [PF_OutData](PF_OutData.html) (#effect-basics-pf-outdata) during [PF_Cmd_GLOBAL_SETUP](command-selectors.html) (#effect-basics-command-selectors-global-selectors) (and in your PiPL).

Disable caching from the preferences menu before testing `extent\_hint` code, so After Effects renders your effect whenever anything in your composition changes.

Otherwise, the caching mechanism would obscure your plug-in’s (possibly incorrect) output.

Move the layer within the composition so it’s cropped. The `output>extent\_hint` is the portion of the layer which is visible in the composition.

Add a mask to your layer and move it around.

This changes the `extent\_hint`, which encloses all of the non-zero alpha areas of the image.

The `in\_data>extent\_hint` is the intersection of these two rectangles (the composition and the mask), and changes whenever they do.

Extent rectangles are computed in the coordinate space of the original input layer, before resizing and origin shifting, to simplify rectangle intersection between the input and output extents for effects which set [PF_OutFlag_PIX_INDEPENDENT](PF_OutData.html) (#effect-basics-pf-outdata-pf-outflags).

To get the output extent in the coordinate system of the output buffer, offset the `extent\_hint` by the `PF\_InData->output\_origin\_x` and `y` fields.

Account for downsampling when computing output size; users must be able to render at full resolution.

If the output buffer exceeds 30,000 by 30,000, clamp it to that size, and consider displaying an alert dialog.

Once your code behaves correctly, enable the cache and see how frequently the effect needs to re-render.

Consider a drop shadow; users frequently apply a static drop shadow to a still image.

The `output>extent\_hint` is ignored, so the cache is used more often.

For buffer-expanding effects, intersect the `output>extent\_hint` with your plug-in’s transformed bounds and sets the size accordingly during [PF_Cmd_FRAME_SETUP](command-selectors.html) (#effect-basics-command-selectors-frame-selectors).

---

## Now with 20% More Pixels!

As of 6.0, the extent_hints passed are 20% larger than the layer itself, to help with our predictive rendering decisions.

Numerous effects expand the buffer “just a touch”, and After Effects often uses the hint rectangles later.

---

## Point Controls And Buffer Expansion

Effects which expand the output buffer position the original layer’s upper left corner by setting set `output\_origin\_x/y` in `PF\_InData` during [PF_Cmd_FRAME_SETUP](command-selectors.html) (#effect-basics-command-selectors-frame-selectors).

This shift is reported to subsequent effects in the `pre\_effect\_source\_origin\_x/y`. Point parameters are adjusted for this shift automatically.

Apply a buffer expander such as Gaussian Blur or the Resizer SDK sample, _before_ your effect, and use a large resize value.

If your effect is not handling `pre\_effect\_source\_origin\_x/y` correctly, turning the blur on and off will shift the position of the output.

All point parameter values (at any time) have shift values described by `pre\_effect\_source\_origin\_x/y`. For most effects this works transparently.

However, if a buffer expansion changes over time (as with an animated blur amount), the origin shift will move non-animated points.

Consider this when designing effects which cache point parameter values between frames.

---
title: New Kids On The Function Block
order: 5
category:
  - AE 插件开发
---

# New Kids On The Function Block[¶](#new-kids-on-the-function-block "Permalink to this headline")

During its main entry point function, each AEIO plug-in must fill in an AEIO_FunctionBlock, providing pointers to the functions After Effects will call for different file-related tasks.

The table below shows which functions are needed for input, and which ones are needed for output. For a bare-bones implementation, start with the functions that are noted as “Required” in the right column. You can often invoke “best-case” behavior by having After Effects handle the call for you (by returning `AEIO_Err_USE_DFLT_CALLBACK`).

For a barebones AEIO for video input only, implement the following functions: `AEIO_InitInSpecFromFile` or `AEIO_InitInSpecInteractive` (depending on whether the source is a file or interactively generated), `AEIO_DisposeInSpec`, `AEIO_GetInSpecInfo`, `AEIO_DrawSparseFrame`, `AEIO_CloseSourceFiles`, and `AEIO_InqNextFrameTime` (using `AEIO_Err_USE_DFLT_CALLBACK` is fine).

Starting from the IO sample, it is best to leave the other functions defined too, and fill them in further as needed.

## AEIO_FunctionBlock4[¶](#aeio-functionblock4 "Permalink to this headline")

#### AEIO_InitInSpecFromFile

Given a file path, describe its contents to After Effects in the provided `AEIO_InSpecH`.
Use all appropriate “set” calls from the [AEGP_IOInSuite](#aeios-new-kids-on-the-function-block-aegp-ioinsuite)) to do so;
if there is image data, set its depth, dimensions, and alpha interpretation.
If there is audio, describe its channels and sample rate.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEIO_InitInSpecFromFile(
 AEIO_BasicData *basic_dataP,
 const A_UTF16Char *file_pathZ,
 AEIO_InSpecH inH);

```

IO: Input

Required: Yes, for file-based media

#### AEIO_InitInSpecInteractive

Using some form of user interaction (and not a file path provided by After Effects),
describe the audio and video your generated AEIO_InSpecH contains.

```cpp
AEIO_InitInSpecInteractive(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH);

```

IO: Input

Required: Yes, for interactiv ely generated media

#### AEIO_DisposeInSpec

Free an `AEIO_InSpecH`.

```cpp
AEIO_DisposeInSpec(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH);

```

IO: Input

Required: Yes

#### AEIO_FlattenOptions

For the given `AEIO_InSpecH`, return a flattened version of the data contained in its options handle.
Obtain the unflattened options handle using `AEGP_GetInSpecOptionsHandle`.

```cpp
AEIO_FlattenOptions(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 AEIO_Handle *flat_optionsPH);

```

IO: Input

Required: No

#### AEIO_InflateOptions

For the given `AEIO_InSpecH`, create (using `AEGP_SetInSpecOptionsHandle`)
an unflattened version of its flattened option data.

```cpp
AEIO_InflateOptions(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 AEIO_Handle flat_optionsH);

```

IO: Input

Required: No

#### AEIO_SynchInSpec

`AEIO_Err_USE_DFLT_CALLBACK` allowed.
Inspect the `AEIO_InSpecH`, update its options if necessary), and indicate whether or not you made changes.

```cpp
AEIO_SynchInSpec(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_Boolean *changed0);

```

IO: Input

Required: No

#### AEIO_GetActiveExtent

`AEIO_Err_USE_DFLT_CALLBACK` allowed.
Populate the provided `A_LRect` with the active extent of the file’s pixels at the given time.

```cpp
AEIO_GetActiveExtent(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 const A_Time *tr,
 A_LRect *extent);

```

IO: Input

Required: Yes

#### AEIO_GetInSpecInfo

Provide a few strings in `AEIO_Verbiage` to describe the file, which will appear in the Project panel.
This includes the strings used to describe the file type and subtype (the codec).

```cpp
AEIO_GetInSpecInfo(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 AEIO_Verbiage *verbiageP);

```

This function gets called OFTEN; every time we refresh the project panel.
Keep allocations to a minimum.
In the AEIOs that ship with After Effects, we check for a valid `optionsH` (using `AEGP_GetInSpecOptionsHandle`);
if we find one, we use the information from within it. If not, we do nothing.
This is important; if your AEIO handles still images, this function _will_ get called for the folder containing the stills.
Hopefully, there won’t be an optionsH associated with it (unless you’re writing a truly bizarre AEIO).

IO: Input

Required: Yes

#### AEIO_DrawSparseFrame

Draw a frame from the `AEIO_InSpecH`.
The `PF_EffectWorld*` contains the width and height to use, but make sure you take the required_region0 into account, if it’s not NULL.

```cpp
AEIO_DrawSparseFrame(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 AEIO_Quality qual,
 const AEIO_RationalScale *rs0,
 const A_Time *tr,
 const A_Time *duration0,
 const A_Rect *required_region0,
 PF_EffectWorld *wP,
 A_long* originx,
 A_long* originy,
 AEIO_DrawingFlags *draw_flagsP);

```

NOTE: return data as linear light (1.0), and After Effects
will perform any necessary transformations to bring the footage into the working colorspace.

IO: Input

Required: Yes

#### AEIO_GetDimensions

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide the dimensions (and, if necessary, scaling factor) of the video in the AEIO_InSpecH.

```cpp
AEIO_GetDimensions(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 const AEIO_RationalScale *rs0,
 A_long *width0,
 A_long *height0);

```

IO: Input

Required: No

#### AEIO_GetDuration

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide the duration of an `AEIO_InSpecH`, in seconds.

```cpp
AEIO_GetDuration(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_Time *trP);

```

IO: Input

Required: No

#### AEIO_GetTime

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide the timebase of an `AEIO_InSpecH`.

```cpp
AEIO_GetTime(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_Time *tr);

```

Here are the values we use internally for common timebases:
29.97 fps: scale = 100; value= 2997;
59.94 fps: scale = 50; value = 2997;
23.976 fps: scale = 125; value = 2997;
30 fps: scale = 1; value = 30;
25 fps: scale = 1; value = 25;

IO: Input

Required: No

#### AEIO_GetSound

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide sound from an `AEIO_InSpecH`, at the quality described.

```cpp
AEIO_GetSound(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 AEIO_SndQuality quality,
 const AEIO_InterruptFuncs *interrupt_funcsP0,
 const A_Time *startPT,
 const A_Time *durPT,
 A_u_long start_sampLu,
 A_u_long num_samplesLu,
 void *dataPV);

```

`AEIO_SndQuality` may be:

- `AEIO_SndQuality_APPROX`, (this quality is used to draw the audio waveform)
- `AEIO_SndQuality_LO`,
- `AEIO_SndQuality_HI`

IO: Input

Required: No

#### AEIO_InqNextFrameTime

`AEIO_Err_USE_DFLT_CALLBACK` allowed.
Provide the time of the next frame (in the source footage’s timebase) within the `AEIO_InSpecH`.

```cpp
AEIO_InqNextFrameTime(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 const A_Time *base_time_tr,
 AEIO_TimeDir time_dir,
 A_Boolean *found0,
 A_Time *key_time_tr0);

```

IO: Input

Required: Yes

#### AEIO_InitOutputSpec

`AEIO_Err_USE_DFLT_CALLBACK` allowed.
Perform any initialization necessary for a new `AEIO_OutSpecH`, and indicate whether you made changes.

```cpp
AEIO_InitOutputSpec(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_Boolean *user_interacted);

```

NOTE: The first time your AEIO is used, After Effects caches the last-known-good optionsH in its preferences.
When testing this function, [delete your preferences](../intro/debugging-plug-ins.html#intro-debugging-plug-ins-deleting-preferences) often.

IO: Output

Required: Yes

#### AEIO_GetFlatOutputOptions

Describe (in an `AEIO_Handle`) the output options for an `AEIO_OutSpecH`,
in a disk-safe flat data structure (one that does not reference external memory).
Note that your output options must be cross-platform, so pay attention to byte ordering issues.

```cpp
AEIO_GetFlatOutputOptions(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 AEIO_Handle *optionsH);

```

IO: Output

Required: Yes

#### AEIO_DisposeOutputOptions

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Free the memory for the output options passed in.

```cpp
AEIO_DisposeOutputOptions(
 AEIO_BasicData *basic_dataP,
 void *optionsPV);

```

IO: Output

Required: No

#### AEIO_UserOptionsDialog

Display an output settings dialog (select TIFF output within After Effects to see when this dialog will occur).
Store this information in an options handle using `AEGP_SetInSpecOptionsHandle`.

```cpp
AEIO_UserOptionsDialog(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 PF_EffectWorld *sample0,
 A_Boolean *interacted0);

```

IO: Output

Required: No

#### AEIO_GetOutputInfo

Describe (in text) the output options in an `AEIO_OutSpecH`.

```cpp
AEIO_GetOutputInfo(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 AEIO_Verbiage *verbiage);

```

#### AEIO_OutputInfoChanged

Update the `AEIO_OutSpecH` based on the current settings (using the various Get functions to obtain them).

```cpp
AEIO_OutputInfoChanged(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH);

```

IO: Output

Required: No

#### AEIO_SetOutputFile

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Set the file path for output of an `AEIO_OutSpecH`.
Return `AEIO_Err_USE_DEFAULT_CALLBACK` unless you’ve changed the path.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEIO_SetOutputFile(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_UTF16Char *file_pathZ);

```

IO: Output

Required: Yes

#### AEIO_StartAdding

Prepare to add frames to the output file.
This is a good time to create the ouput file(s) on disk, and to write any header information to such files.
This is also your first opportunity to allocate pixel buffers based on valid output spec values.

```cpp
AEIO_StartAdding(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_long flags);

```

IO: Output

Required: Yes, for writing formats that support multiple frames

#### AEIO_AddFrame

Add frame(s) to output file. You may pass a pointer to a function you want called if the user interrupts the render.

```cpp
AEIO_AddFrame(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_long frame_index,
 A_long frames,
 PF_EffectWorld *wP,
 const A_LPoint *origin0,
 A_Boolean was_compressedB,
 AEIO_InterruptFuncs *inter0);

```

IO: Output

Required: Yes, for writing formats that support multiple frames

#### AEIO_EndAdding

Perform any clean-up associated with adding frames.

```cpp
AEIO_EndAdding(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_long flags);

```

IO: Output

Required: Yes, for writing formats that support multiple frames

#### AEIO_OutputFrame

Output a single frame.

```cpp
AEIO_OutputFrame(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 PF_EffectWorld *wP);

```

IO: Output

Required: Yes, for writing formats that support a single frame

#### AEIO_WriteLabels

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Set alpha interpretation and field usage information for the `AEIO_OutSpecH`.
Indicate in `AEIO_LabelFlags` which flags you wrote.

```cpp
AEIO_WriteLabels(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 AEIO_LabelFlags *written);

```

IO: Output

Required: Yes

#### AEIO_GetSizes

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide information about file size and remaining free space on output volume.

```cpp
AEIO_GetSizes(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_u_longlong *free_space,
 A_u_longlong *file_size);

```

IO: Output

Required: Yes

#### AEIO_Flush

Destroy any options or user data associated with the `OutSpecH`.

```cpp
AEIO_Flush(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH);

```

#### AEIO_AddSoundChunk

Add the given sound to the output file.

```cpp
AEIO_AddSoundChunk(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 const A_Time *start,
 AEIO_SndWorldH swH);

```

IO: Output

Required: Yes, for writing formats with audio

#### AEIO_Idle

Optional. Do something with idle time. `AEIO_Err_USE_DFLT_CALLBACK` is not supported.

```cpp
AEIO_Idle(
 AEIO_BasicData *basic_dataP,
 AEIO_ModuleSignature sig,
 AEIO_IdleFlags *idle_flags0);

```

IO: Output

Required: No

#### AEIO_GetDepths

Set `AEIO_OptionsFlags` to indicate which pixel and color depths are valid for your output format.
See the discussion on [Export Bit-Depth](implementation-details.html#aeios-implementation-details).

```cpp
AEIO_GetDepths(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 AEIO_OptionsFlags *which);

```

IO: Output

Required: Yes

#### AEIO_GetOutputSuffix

`AEIO_Err_USE_DFLT_CALLBACK` allowed. Describe the three character extension for the output file.

```cpp
AEIO_GetOutputSuffix(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_char *suffix);

```

IO: Output

Required: Yes

#### AEIO_SeqOptionsDlg

Display a footage options dialog, and indicate whether the user made any changes.

```cpp
AEIO_SeqOptionsDlg(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_Boolean *interactedPB);

```

IO: Input

Required: No

#### AEIO_GetNumAuxChannels

Enumerate the auxiliary (beyond red, green, blue and alpha) channels of data contained in an `AEIO_InSpecH`.

```cpp
AEIO_GetNumAuxChannels(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_long *num_channelsPL);

```

IO: Input

Required: No

#### AEIO_GetAuxChannelDesc

Describe the data type, name, channel, and dimensionality of an auxiliary data channel.

```cpp
AEIO_GetAuxChannelDesc(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 long chan_indexL,
 PF_ChannelDesc *descP);

```

IO: Input

Required: No

#### AEIO_DrawAuxChannel

Draw the auxiliary channel(s) from an `AEIO_InSpecH`.

```cpp
AEIO_DrawAuxChannel(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_long chan_indexL,
 const AEIO_DrawFramePB *pbP,
 PF_ChannelChunk *chunkP);

```

#### AEIO_FreeAuxChannel

Free data associated with an auxiliary channel.

```cpp
AEIO_FreeAuxChannel(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 PF_ChannelChunk *chunkP);

```

IO: Input

Required: No

`AEIO_Num` AuxFiles Enumerate the files needed to render the given `AEIO_InSpecH`.
This function and `AEIO_GetNthAuxFileSpec` will be called when the user chooses `File > Dependencies > Collect Files…`

Here your AEIO tells AE what the associated files are.

```cpp
AEIO_NumAuxFiles(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH seqH,
 A_long *files_per_framePL);

```

IO: Input

Required: No

#### AEIO_GetNthAuxFileSpec

Retrieve data from the nth auxiliary file, for the specified frame.
The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEIO_GetNthAuxFileSpec(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH seqH,
 A_long frame_numL,
 A_long n,
 AEGP_MemHandle *pathPH);

```

IO: Input

Required: No, if no aux files

#### AEIO_CloseSourceFiles

Close (or open, depending upon closeB) the source files for an `AEIO_InSpecH`.
When the user Collects Files, the AEIO will first be asked to close its source files, then re-open them.

```cpp
AEIO_CloseSourceFiles(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH seqH,
 A_Boolean closeB);

```

`TRUE` for close, `FALSE` for open.

IO: Input

Required: Yes

#### AEIO_CountUserData

Enumerate the units of user data associated with the `AEIO_InSpecH`.

```cpp
AEIO_CountUserData(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_u_long typeLu,
 A_u_long max_sizeLu,
 A_u_long *num_of_typePLu);

```

#### AEIO_SetUserData

Set user data (of the given index and type) for the given `AEIO_OutSpecH`.

```cpp
AEIO_SetUserData(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_u_long typeLu,
 A_u_long indexLu,
 const AEIO_Handle dataH);

```

IO: Output

Required: No

#### AEIO_GetUserData

Describe the user data (at the index and of the type given) associated with the `AEIO_InSpecH`.

```cpp
AEIO_GetUserData(
 AEIO_BasicData *basic_dataP,
 AEIO_InSpecH inH,
 A_u_long typeLu,
 A_u_long indexLu,
 A_u_long max_sizeLu,
 AEIO_Handle *dataPH);

```

IO: Input

Required: No

#### AEIO_AddMarker

Associate a marker of the specified type, at the specified frame, with the `AEIO_OutSpecH`.
You may provide an interrupt function to handle user cancellation of this action.

```cpp
AEIO_AddMarker(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_long frame_index,
 AEIO_MarkerType marker_type,
 void *marker_dataPV,
 AEIO_InterruptFuncs *inter0);

```

IO: Output

Required: No

#### AEIO_VerifyFileImportable

Indicate (by setting importablePB) whether or not the plug-in can import the file.
Note that After Effects has already done basic extension checking; you may wish to open the file and determine whether or not it’s valid.
This can be a time-consuming process; most AEIOs that ship with After Effects simply return TRUE,
and deal with bad files during `AEIO_InitInSpecFromFile`.
The file path is a NULL-terminated UTF-16 string with platform separators.

```cpp
AEIO_VerifyFileImportable(
 AEIO_BasicData *basic_dataP,
 AEIO_ModuleSignature sig,
 const A_UTF16Char *file_pathZ,
 A_Boolean *importablePB);

```

IO: Input

Required: No

#### AEIO_UserAudioOptionsDialog

Display an audio options dialog.

```cpp
AEIO_UserAudioOptionsDialog(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_Boolean *interacted0);

```

IO: Output

Required: No

#### AEIO_AddMarker3

Add a marker, with a flag specifying whether or not this is a composition marker.

```cpp
AEIO_AddMarker3(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_long frame_index,
 AEGP_ConstMarkerValP marker_valP,
 AEIO_RenderMarkerFlag marker_flag,
 AEIO_InterruptFuncs *inter0);

```

IO: Output

Required: No

#### AEIO_GetMimeType

Describe the output mime type. This is used for XMP support.

```cpp
AEIO_GetMimeType(
 AEIO_BasicData *basic_dataP,
 AEIO_OutSpecH outH,
 A_long mime_type_sizeL,
 char *mime_typeZ);

```

IO: Output

Required: No

## What Goes In[¶](#what-goes-in "Permalink to this headline")

These functions manage an input specification, After Effects’ internal representation of data gathered from any source.

Any image or audio data in After Effects (except solids) is obtained from an input specification handle, or `AEIO_InSpecH`.

### AEGP_IOInSuite5[¶](#aegp-ioinsuite5 "Permalink to this headline")

#### AEGP_GetInSpecOptionsHandle

Retrieves the options data (created by your AEIO) for the given `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecOptionsHandle(
 AEIO_InSpecH inH,
 void **optionsPPV);

```

#### AEGP_SetInSpecOptionsHandle

Sets the options data for the given `AEIO_InSpecH`.
Must be allocated using the [Memory Suite](../aegps/aegp-suites.html#aegps-aegp-suites-memory-suite).

```cpp
AEGP_SetInSpecOptionsHandle(
 AEIO_InSpecH inH,
 void *optionsPV,
 void **old_optionsPPV);

```

#### AEGP_GetInSpecFilePath

Retrieves the file path for the `AEIO_InSpecH`.
The file path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.

```cpp
AEGP_GetInSpecFilePath(
 AEIO_InSpecH inH,
 AEGP_MemHandle *file_nameZ);

```

#### AEGP_GetInSpecNativeFPS

Retrieves the frame rate of the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecNativeFPS(
 AEIO_InSpecH inH,
 A_Fixed *native_fpsP);

```

#### AEGP_SetInSpecNativeFPS

Sets the frame rate of the `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecNativeFPS(
 AEIO_InSpecH inH,
 A_Fixed native_fpsP);

```

#### AEGP_GetInSpecDepth

Retrieves the bit depth of the image data in the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecDepth(
 AEIO_InSpecH inH,
 A_short *depthPS);

```

#### AEGP_SetInSpecDepth

Indicates to After Effects the bit depth of the image data in the `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecDepth(
 AEIO_InSpecH inH,
 A_short depthS);

```

#### AEGP_GetInSpecSize

Retrieves the size (in bytes) of the data referenced by the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecSize(
 AEIO_InSpecH inH,
 AEIO_FileSize *sizePLLu);

```

#### AEGP_SetInSpecSize

Indicates to After Effects the size (in bytes) of the data referenced by the `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecSize(
 AEIO_InSpecH inH,
 AEIO_FileSize sizeL);

```

#### AEGP_GetInSpecInterlaceLabel

Retrieves field information for the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecInterlaceLabel(
 AEIO_InSpecH inH,
 FIEL_Label *interlaceP);

```

#### AEGP_SetInSpecInterlaceLabel

Specifies field information for the `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecInterlaceLabel(
 AEIO_InSpecH inH,
 const FIEL_Label *interlaceP);

```

#### AEGP_GetInSpecAlphaLabel

Retrieves alpha channel interpretation information for the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecAlphaLabel(
 AEIO_InSpecH inH,
 AEIO_AlphaLabel *alphaP);

```

#### AEGP_SetInSpecAlphaLabel

Sets alpha channel interpretation information for the `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecAlphaLabel(
 AEIO_InSpecH inH,
 const AEIO_AlphaLabel* alphaP);

```

#### AEGP_GetInSpecDuration

Retrieves the duration of the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecDuration(
 AEIO_InSpecH inH,
 A_Time *durationP);

```

#### AEGP_SetInSpecDuration

Sets the duration of the `AEIO_InSpecH`.
NOTE: As of 5.5, this must be called, even for frame-based file formats.
If you don’t set the `A_Time.scale` to something other than zero, your file(s) will not import.
This will be fixed in future versions.

```cpp
AEGP_SetInSpecDuration(
 AEIO_InSpecH inH,
 const A_Time *durationP);

```

#### AEGP_GetInSpecDimensions

Retrieves the width and height of the image data in the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecDimensions(
 AEIO_InSpecH inH,
 A_long *widthPL0,
 A_long *heightPL0);

```

#### AEGP_SetInSpecDimensions

Indicates to After Effects the width and height of the image data in the `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecDimensions(
 AEIO_InSpecH inH,
 A_long widthL,
 A_long heightL);

```

#### AEGP_InSpecGetRational

Dimensions

Retrieves the width, height, bounding rect, and scaling factor applied to an `AEIO_InSpecH`.

```cpp
AEGP_InSpecGetRationalDimensions(
 AEIO_InSpecH inH,
 const AEIO_RationalScale *rs0,
 A_long *width0,
 A_long *height0,
 A_Rect *r0);

```

#### AEGP_GetInSpecHSF

Retrieves the horizontal scaling factor applied to an `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecHSF(
 AEIO_InSpecH inH,
 A_Ratio *hsf);

```

#### AEGP_SetInSpecHSF

Sets the horizontal scaling factor of an `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecHSF(
 AEIO_InSpecH inH,
 const A_Ratio *hsf);

```

#### AEGP_GetInSpecSoundRate

Obtains the sampling rate (in samples per second) for the audio data referenced by the `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecSoundRate(
 AEIO_InSpecH inH,
 A_FpLong *ratePF);

```

#### AEGP_SetInSpecSoundRate

Sets the sampling rate (in samples per second) for the audio data referenced by the `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecSoundRate(
 AEIO_InSpecH inH,
 A_FpLong rateF);

```

#### AEGP_GetInSpecSoundEncoding

Obtains the encoding method (signed PCM, unsigned PCM, or floating point) from an AEIO_InSpecH.

```cpp
AEGP_GetInSpecSoundEncoding(
 AEIO_InSpecH inH,
 AEIO_SndEncoding *encodingP);

```

#### AEGP_SetInSpecSoundEncoding

Sets the encoding method of an AEIO_InSpecH.

```cpp
AEGP_SetInSpecSoundEncoding(
 AEIO_InSpecH inH,
 AEIO_SndEncoding encoding);

```

#### AEGP_GetInSpecSoundSampleSize

Retrieves the bytes-per-sample (1,2, or 4) from an `AEIO_InSpecH`.

```cpp
AEGP_GetInSpecSoundSampleSize(
 AEIO_InSpecH inH,
 AEIO_SndSampleSize *bytes_per_smpP);

```

#### AEGP_SetInSpecSoundSampleSize

Set the bytes per sample of an `AEIO_InSpecH`.

```cpp
AEGP_SetInSpecSoundSampleSize(
 AEIO_InSpecH inH,
 AEIO_SndSampleSize bytes_per_sample);

```

#### AEGP_GetInSpecSoundChannels

Determines whether the audio in the `AEIO_SndChannels` is mono or stereo.

```cpp
AEGP_GetInSpecSoundChannels(
 AEIO_InSpecH inH,
 AEIO_SndChannels *num_channelsP);

```

#### AEGP_SetInSpecSoundChannels

Sets the audio in an `AEIO_SndChannels` to mono or stereo.

```cpp
AEGP_SetInSpecSoundChannels(
 AEIO_InSpecH inH,
 AEIO_SndChannels num_channels);

```

#### AEGP_AddAuxExtMap

If your file format has auxiliary files which you want to prevent users from opening directly,
pass it’s extension, file type and creator to this function to keep it from appearing in input dialogs.

```cpp
AEGP_AddAuxExtMap(
 const A_char *extension,
 A_long file_type,
 A_long creator);

```

#### AEGP_SetInSpecEmbeddedColorProfile

In case of RGB data, if there is an embedded icc profile, build an `AEGP_ColorProfile` out of
this icc profile using `AEGP_GetNewColorProfileFromICCProfile` from [AEGP_ColorSettingsSuite2](../aegps/aegp-suites.html#aegps-aegp-suites-aegp-colorsettingssuite) and set the profile description set to NULL.
In case of non-RGB data, if there is an embedded non-RGB icc profile or you know the color space the data is in,
set the color profile set to NULL, and provide the description as a NULL-terminated unicode string.
Doing this disables color management UI that allows user to affect profile choice in the application UI.
If you are unpacking non-RGB data directly into working space (to get working space use `AEGP_GetNewWorkingSpaceColorProfile`), you are done.
If you are unpacking non-RGB data into specific RGB color space, you must pass the profile describing this space to `AEGP_SetInSpecAssignedColorProfile` below.
Otherwise, your RGB data will be incorrectly interpreted as being in working space.
Either color profile or profile description should be NULL in this function. You cannot use both.

```cpp
AEGP_SetInSpecEmbeddedColorProfile(
 AEIO_InSpecH inH,
 AEGP_ConstColorProfileP color_profileP0,
 const A_UTF16Char *profile_descP0);

```

#### AEGP_SetInSpecAssignedColorProfile

Assign a valid RGB color profile to the footage.

```cpp
AEGP_SetInSpecAssignedColorProfile(
 AEIO_InSpecH inH,
 AEGP_ConstColorProfileP color_profileP);

```

#### AEGP_GetInSpecNativeStartTime

New in CC. Retrieves the native start time of the footage.

```cpp
AEGP_GetInSpecNativeStartTime(
 AEIO_InSpecH inH,
 A_Time *startTimeP);

```

#### AEGP_SetInSpecNativeStartTime

New in CC. Assign a native start time to the footage.

```cpp
AEGP_SetInSpecNativeStartTime(
 AEIO_InSpecH inH,
 const A_Time *startTimeP);

```

#### AEGP_ClearInSpecNativeStartTime

New in CC. Clear the native start time of the footage.
Setting the native start time to 0 using `AEGP_SetInSpecNativeStartTime` doesn’t do this.
It still means there is a special native start time provided.

```cpp
AEGP_ClearInSpecNativeStartTime(
 AEIO_InSpecH inH);

```

#### AEGP_GetInSpecNativeDisplayDropFrame

New in CC. Retrieve the drop-frame setting of the footage.

```cpp
AEGP_GetInSpecNativeDisplayDropFrame(
 AEIO_InSpecH inH,
 A_Boolean *displayDropFrameBP);

```

#### AEGP_SetInSpecNativeDisplayDropFrame

New in CC. Assign the drop-frame setting of the footage.

```cpp
AEGP_SetInSpecNativeDisplayDropFrame(
 AEIO_InSpecH inH,
 A_Boolean displayDropFrameB);

```

## What Goes Out[¶](#what-goes-out "Permalink to this headline")

These functions manage all interactions with an output specification in After Effects’ render queue.

### AEGPIOOutSuite4[¶](#aegpiooutsuite4 "Permalink to this headline")

#### AEGP_GetOutSpecOptionsHandle

Retrieves the Options for the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecOptionsHandle(
 AEIO_OutSpecH outH,
 void **optionsPPV);

```

#### AEGP_SetOutSpecOptionsHandle

Sets the Options for the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecOptionsHandle(
 AEIO_OutSpecH outH,
 void *optionsPV,
 void **old_optionsPPV);

```

#### AEGP_GetOutSpecFilePath

Obtains the path for the `AEIO_OutSpecH`. The file path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`.
If `file_rsrvdPB` returns `TRUE`, the plug-in should not overwrite it
(After Effects has already created an empty file); doing so can cause network renders to fail.

```cpp
AEGP_GetOutSpecFilePath(
 AEIO_OutSpecH outH,
 AEGP_MemHandle *unicode_pathPH,
 A_Boolean *file_rsrvdPB);

```

#### AEGP_GetOutSpecFPS

Obtains the frames per second of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecFPS(
 AEIO_OutSpecH outH,
 A_Fixed *native_fpsP);

```

#### AEGP_SetOutSpecNativeFPS

Sets the frames per second of the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecNativeFPS(
 AEIO_OutSpecH outH,
 A_Fixed native_fpsP);

```

#### AEGP_GetOutSpecDepth

Obtains the pixel bit depth of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecDepth(
 AEIO_OutSpecH outH,
 A_short *depthPS);

```

#### AEGP_SetOutSpecDepth

Sets the pixel bit depth of the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecDepth(
 AEIO_OutSpecH outH,
 A_short depthPS);

```

#### AEGP_GetOutSpecInterlaceLabel

Obtains field information for the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecInterlaceLabel(
 AEIO_OutSpecH outH,
 FIEL_Label *interlaceP);

```

#### AEGP_SetOutSpecInterlaceLabel

Set the field information for the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecInterlaceLabel(
 AEIO_OutSpecH outH,
 const FIEL_Label *interlaceP);

```

#### AEGP_GetOutSpecAlphaLabel

Obtains alpha interpretation information for the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecAlphaLabel(
 AEIO_OutSpecH outH,
 AEIO_AlphaLabel *alphaP);

```

#### AEGP_SetOutSpecAlphaLabel

Sets the alpha interpretation for the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecAlphaLabel(
 AEIO_OutSpecH outH,
 const AEIO_AlphaLabel *alphaP);

```

#### AEGP_GetOutSpecDuration

Obtains the duration of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecDuration(
 AEIO_OutSpecH outH,
 A_Time *durationP);

```

#### AEGP_SetOutSpecDuration

Sets the duration of the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecDuration(
 AEIO_OutSpecH outH,
 const A_Time *durationP);

```

#### AEGP_GetOutSpecDimensions

Obtains the dimensions of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecDimensions(
 AEIO_OutSpecH outH,
 A_long *widthPL0,
 A_long *heightPL0);

```

#### AEGP_GetOutSpecHSF

Obtains the horizontal scaling factor of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecHSF(
 AEIO_OutSpecH outH,
 A_Ratio *hsf);

```

#### AEGP_SetOutSpecHSF

Sets the horizontal scaling factor of the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecHSF(
 AEIO_OutSpecH outH,
 const A_Ratio *hsf);

```

#### AEGP_GetOutSpecSoundRate

Obtains the sampling rate for the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecSoundRate(
 AEIO_OutSpecH outH,
 A_FpLong *ratePF);

```

#### AEGP_SetOutSpecSoundRate

Sets the sampling rate for the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecSoundRate(
 AEIO_OutSpecH outH,
 A_FpLong rateF);

```

#### AEGP_GetOutSpecSoundEncoding

Obtains the sound encoding format of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecSoundEncoding(
 AEIO_OutSpecH outH,
 AEIO_SndEncoding *encodingP);

```

#### AEGP_SetOutSpecSoundEncoding

Sets the sound encoding format of the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecSoundEncoding(
 AEIO_OutSpecH outH,
 AEIO_SndEncoding encoding);

```

#### AEGP_GetOutSpecSoundSampleSize

Obtains the bytes-per-sample of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecSoundSampleSize(
 AEIO_OutSpecH outH,
 AEIO_SndSampleSize *bpsP);

```

#### AEGP_SetOutSpecSoundSampleSize

Sets the bytes-per-sample of the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecSoundSampleSize(
 AEIO_OutSpecH outH,
 AEIO_SndSampleSize bpsP);

```

#### AEGP_GetOutSpecSoundChannels

Obtains the number of sounds channels in the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecSoundChannels(
 AEIO_OutSpecH outH,
 AEIO_SndChannels *channelsP);

```

#### AEGP_SetOutSpecSoundChannels

Sets the number of sounds channels in the `AEIO_OutSpecH`.

```cpp
AEGP_SetOutSpecSoundChannels(
 AEIO_OutSpecH outH,
 AEIO_SndChannels channels);

```

#### AEGP_GetOutSpecIsStill

Determines whether the `AEIO_OutSpecH` is a still.

```cpp
AEGP_GetOutSpecIsStill(
 AEIO_OutSpecH outH,
 A_Boolean *is_stillPB);

```

#### AEGP_GetOutSpecPosterTime

Obtains the time of the `AEIO_OutSpecH's` poster frame.

```cpp
AEGP_GetOutSpecPosterTime(
 AEIO_OutSpecH outH,
 A_Time *poster_timeP);

```

#### AEGP_GetOutSpecStartFrame

Obtains the time of the first frame in the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecStartFrame(
 AEIO_OutSpecH outH,
 A_long *start_frameP);

```

#### AEGP_GetOutSpecPullDown

Obtains the pulldown phase of the `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecPullDown(
 AEIO_OutSpecH outH,
 AEIO_Pulldown *pulldownP);

```

#### AEGP_GetOutSpecIsMissing

Passes back TRUE if there is no `AEIO_OutSpecH`.

```cpp
AEGP_GetOutSpecIsMissing(
 AEIO_OutSpecH outH,
 A_Boolean *missingPB);

```

#### AEGP_GetOutSpecShouldEmbedICCProfile

Returns TRUE if the AEIO should embed a color profile in the output.

```cpp
AEGP_GetOutSpecShouldEmbedICCProfile(
 AEIO_OutSpecH outH,
 A_Boolean *embedPB);

```

#### AEGP_GetNewOutSpecColorProfile

Returns an (opaque) ICC color profile for embedding in the AEIO’s output.
Must be disposed with `AEGP_DisposeColorProfile`.

```cpp
AEGP_GetNewOutSpecColorProfile(
 AEGP_PluginID aegp_plugin_id,
 AEIO_OutSpecH outH,
 AEGP_ColorProfileP *color_profilePP);

```

#### AEGP_GetOutSpecOutputModule

Returns the `AEGP_RQItemRefH` and `AEGP_OutputModuleRefH` associated with the given `AEIO_OutSpecH`.
Fails if the render queue item is not found, or if `AEIO_OutSpecH` is not a confirmed outH and is a copy,
i.e. if the Output Module settings dialog is open and the user hasn’t hit OK.

```cpp
AEGP_GetOutSpecOutputModule(
 AEIO_OutSpecH outH,
 AEGP_RQItemRefH *rq_itemP,
 AEGP_OutputModuleRefH *om_refP);

```

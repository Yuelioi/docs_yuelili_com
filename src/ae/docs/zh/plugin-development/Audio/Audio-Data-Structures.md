---
title: Audio Data Structures
order: 4
category:
  - AE 插件开发
---

# Audio Data Structures

以下数据类型被 After Effects 用来描述音频数据。

| **Structure**                                                                                                        | **Description**                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `PF_SoundFormat`                                                                                                     | Indicates whether the audio is in unsigned pulse code modulation (PCM), signed PCM, or floating point format. |
| `PF_SoundSampleSize`                                                                                                 | Samples are in 1, 2, or 4 byte format.                                                                        |
| `PF_SoundChannels`                                                                                                   | Indicates whether the audio is mono or stereo.                                                                |
| `PF_SoundFormatInfo`                                                                                                 | Contains the sampling rate, number of channels, sample size, and format of the audio to which it refers.      |
| `PF_SoundWorld`                                                                                                      | Use `PF_SoundWorlds` to represent audio.                                                                      |
| In addition to a `PF_SoundFormatInfo`, they contain the length of the audio, and a pointer to the actual audio data. |

`PF_SoundFormat`, `PF_SoundSampleSize`, 和`PF_SoundChannels`都包含在`PF_SoundFormatInfo`中。

`PF_SoundWorlds`包含一个`PF_SoundFormatInfo`，以及进一步的特定实例信息。

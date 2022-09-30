---
title: chremove
order: 19
category:
  - houdini
---

## Description

Context(s) [chop](../contexts/chop.html)

`int chremove(int channel_index)`

`int chremove(int channel_indices[])`

`int chremove(string channel_name)`

`int chremove(string channel_names[])`

This function removes channels from a CHOP node. It works only when iterating
over Clip, Channel or Samples, not when iterating over ChannelSample.

Returns 1 if all channels were removed or 0 otherwise.

## Arguments

`channel_index`

The channel index to remove.

`channel_indices`

The array of channel indices to remove.

`channel_name`

The channel name to remove.

`channel_names`

The array of channel names to remove.

### chop

[chadd ](chadd.html)

[chattr ](chattr.html)

[chattrnames ](chattrnames.html)

[chend ](chend.html)

[chendf ](chendf.html)

[chendt ](chendt.html)

[chindex ](chindex.html)

[chinput ](chinput.html)

[chinputlimits ](chinputlimits.html)

[chname ](chname.html)

[chnames ](chnames.html)

[chnumchan ](chnumchan.html)

[chop ](chop.html)

[choplocal ](choplocal.html)

[choplocalt ](choplocalt.html)

[chopt ](chopt.html)

[chrate ](chrate.html)

[chreadbuf ](chreadbuf.html)

[chremove ](chremove.html)

[chremoveattr ](chremoveattr.html)

[chrename ](chrename.html)

[chresizebuf ](chresizebuf.html)

[chsetattr ](chsetattr.html)

[chsetlength ](chsetlength.html)

[chsetrate ](chsetrate.html)

[chsetstart ](chsetstart.html)

[chstart ](chstart.html)

[chstartf ](chstartf.html)

[chstartt ](chstartt.html)

[chwritebuf ](chwritebuf.html)

[isframes ](isframes.html)

[issamples ](issamples.html)

[isseconds ](isseconds.html)

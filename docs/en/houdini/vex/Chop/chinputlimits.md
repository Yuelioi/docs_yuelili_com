---
title: chinputlimits
order: 10
category:
  - houdini
---

## Description

Context(s) [chop](../contexts/chop.html)

`int chinputlimits(int opinput, int channel, float &channel_min, float &channel_max)`

## Arguments

`opinput`

CHOP Input index or -1 if omitted.

`channel`

When reading a `channel` or `channelsample` attribute, this is the index of
the channel. If you are reading a `clip` or `sample` attribute, use `-1` here.

`channel_min`

Computed minimum channel value;

`channel_max`

Computed maximum channel value;

## Returns

Returns 1 on success or 0 on failure.

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

---
title: chadd
order: 2
category:
  - houdini
---

## Description

Context(s) [chop](../contexts/chop.html)

`int chadd(string channel_names)`

`int chadd(string channel_names[])`

This function adds new channels to a CHOP node. It works only when iterating
over Clip, Channel or Samples, not when iterating over ChannelSample. You
can’t control the default channel values when adding channels using this
function. You need to add another `Channel Wrangle` and compute the channel
data inside it.

Returns 1 on success, 0 otherwise.

## Arguments

`channel_names`

The names of the attributes to add. Can be an array or a space separated list
of channel names.

### chop

[chadd](chadd.html)

[chattr](chattr.html)

[chattrnames](chattrnames.html)

[chend](chend.html)

[chendf](chendf.html)

[chendt](chendt.html)

[chindex](chindex.html)

[chinput](chinput.html)

[chinputlimits](chinputlimits.html)

[chname](chname.html)

[chnames](chnames.html)

[chnumchan](chnumchan.html)

[chop](chop.html)

[choplocal](choplocal.html)

[choplocalt](choplocalt.html)

[chopt](chopt.html)

[chrate](chrate.html)

[chreadbuf](chreadbuf.html)

[chremove](chremove.html)

[chremoveattr](chremoveattr.html)

[chrename](chrename.html)

[chresizebuf](chresizebuf.html)

[chsetattr](chsetattr.html)

[chsetlength](chsetlength.html)

[chsetrate](chsetrate.html)

[chsetstart](chsetstart.html)

[chstart](chstart.html)

[chstartf](chstartf.html)

[chstartt](chstartt.html)

[chwritebuf](chwritebuf.html)

[isframes](isframes.html)

[issamples](issamples.html)

[isseconds](isseconds.html)

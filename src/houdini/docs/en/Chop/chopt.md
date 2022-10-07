---
title: chopt
order: 16
category:
  - vex
---

Since

17.0

`float chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector2 chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector4 chopt(string filename, int|stringchannel, float|intsample, float time)`

`matrix chopt(string filename, int|stringchannel, float|intsample, float time)`

Read a sample from the channel at the given index.

## Arguments

`filename`

The CHOP node path to query using the op: syntax.
Doesn’t support reading directly from CHOP files yet.

`channel`

The channel index or channel name to query.

`sample`

If this is fractional, the value is linearly interpolated from the
two nearest points.

`time`

Time in seconds when the CHOP node needs to be evaluated.

## Returns

The value of a channel at the specified sample in a CHOP node.

chop

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

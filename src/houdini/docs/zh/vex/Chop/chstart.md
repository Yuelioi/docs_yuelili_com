---
title: chstart
order: 27
category:
  - vex
---



Context(s)
[chop](../contexts/chop.html)

`int chstart()`

Uses `-1` as the `opinput`.

`int chstart(int opinput)`

Returns the index of the first sample in the channel data in the given CHOP input.

## Arguments

`opinput`

The input number to read from, starting from 0. For example, the first input is 0, the second input is 1, and so on.

If you specify `-1`, the function uses the current CHOP node or input `0` if it is connected.

To get the start frame, use [chstartf](chstartf.html "Returns the frame corresponding to the first sample of the input
specified."). To get the start time in seconds, use [chstartt](chstartt.html "Returns the time corresponding to the first sample of the input
specified.").



## See also

- [chstartf](chstartf.html)
- [chstartt](chstartt.html)

|
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

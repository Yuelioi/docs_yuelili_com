---
title: chname
order: 6
category:
  - vex
---



Context(s)
[cop](../contexts/cop.html)
[chop](../contexts/chop.html)

##

COPs

[¶](#cops)

`string chname(int plane\_index, int chindex)`

Returns the name of the channel on the plane (for example, `"r"`, or `"x"`).

##

CHOPs

[¶](#chops)

`string chname(int channel\_index)`

`string chname(int opinput, int channel\_index)`

Returns the name of the channel, for example `"tx"`.
To get a list of all channel names, use [chnames](chnames.html "Returns all the CHOP channel names of a given CHOP input.").

## Arguments

`opinput`

The input number to read from, starting from 0. For example, the first input is 0, the second input is 1, and so on.

If you specify `-1`, the function uses the current CHOP node or input `0` if it is connected.


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

|
output_plane

[alphaname](alphaname.html)

[bumpname](bumpname.html)

[chname](chname.html)

[colorname](colorname.html)

[depthname](depthname.html)

[hasplane](hasplane.html)

[lumname](lumname.html)

[maskname](maskname.html)

[normalname](normalname.html)

[planeindex](planeindex.html)

[planename](planename.html)

[planesize](planesize.html)

[pointname](pointname.html)

[velocityname](velocityname.html)

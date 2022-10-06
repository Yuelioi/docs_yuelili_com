---
title: chremoveattr
order: 20
category:
  - houdini
---

## Description

Context(s) [chop](../contexts/chop.html)

`int chremoveattr(string attrclass, string attrname)`

`int chremoveattr(string attrclass, string attrnames[])`

`int chremoveattr(string attrname)`

`int chremoveattr(string attrnames[])`

CHOP attributes store metadata on clips, channels, samples, or channel/sample
pairs.

This function removes CHOP attribute.

## Arguments

`attribclass`

The “level” of the attribute:

`"clip"`

An attribute on a whole clip.

`"channel"`

An attribute on a whole channel.

`"sample"`

An attribute on a sample (across all channels).

`"channelsample"`

An attribute on a specific channel/sample pair.

`""`

Pass an empty string to have the function figure out the class based on the
other arguments.

Signatures that don’t have this parameter act the same as if you passed the
empty string.

`attrname`

The name of the attribute to remove.

`attrnames`

The names of the attributes to remove.

## Returns

Returns `1` if the operation succeeded, or `0` otherwise.

## See also

- [chattr ](chattr.html)

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

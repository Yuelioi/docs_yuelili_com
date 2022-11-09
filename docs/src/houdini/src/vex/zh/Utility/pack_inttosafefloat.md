---
title: pack_inttosafefloat
order: 11
category:
  - vex
---

`float pack_inttosafefloat(int i)`

This is used to find the w component of a primitive uvw vector
referring to a polygon soup primitive, from the inner polygon number.

- Integers in the range `abs(i) <= (2^24) = 16,777,216` will be represented exactly by the floats of the same value.
- Integers in the range `16,777,216 < abs(i) < (2^24) + 104*(2^23) = 889,192,448` will be represented by larger, non-infinite floats.
- Integers in the range `889,192,448 <= abs(i) < (2^24) + 230*(2^23) = 1,946,157,056`
  will be represented by small, non-denormal floats.
- Any other integers, `abs(i) >= 1,946,157,056`, will not be represented correctly.

## See also

- [unpack_intfromsafefloat](unpack_intfromsafefloat.html)
- [primuv](primuv.html)

|
polysoup

[pack_inttosafefloat](pack_inttosafefloat.html)

[unpack_intfromsafefloat](unpack_intfromsafefloat.html)

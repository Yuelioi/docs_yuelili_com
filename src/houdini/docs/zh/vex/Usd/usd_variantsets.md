---
title: usd_variantsets
order: 150
category:
  - houdini
---
    
## 描述

Returns the variant sets available on a primitive.

| Since | 17.5 |
| ----- | ---- |

```c
string [] usd_variantsets(<stage>stage, string primpath)
```

This function returns the variant sets for the given primitive.

This function returns the variant sets for the given primitive.

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

`primpath`

The path to the primitive.

The path to the primitive.

Returns

The variant set names available on a given primitive.

The variant set names available on a given primitive.

## Examples

    // Get the variant sets available on the "shape_shifter" primitive.string variant_sets[] = usd_variantsets(0, "/geo/shape_shifter");

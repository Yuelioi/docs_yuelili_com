---
title: isbound
order: 6
category:
  - houdini
---
    
## 描述

Parameters in VEX can be overridden by geometry attributes (if the attributes
exist on the surface being rendered).

```c
int  isbound(string variable_name)
```

Parameters in VEX can be overridden by geometry attributes (if theattributes
exist on the surface being rendered). If the geometryoverrides the default
attribute, this function will return 1. Otherwiseit will return 0.

VEX 中的参数可以被几何属性所覆盖（如果

Note

Though this function is defined for all contexts, it is only useful in the
Displacement, Surface, and SOP contexts. No other contexts

属性存在于被渲染的表面上）。如果几何体

can currently bind geometry attributes to VEX variables.

覆盖了默认属性，这个函数将返回 1。否则

Example, in a SOP function:

它将返回 0。

    sopmycolor(vector uv=0; string map=""){if (isbound("uv") && map != ""){// User has texture coordinates here, so create// velocity based on a texture map.v = colormap(map, uv);}else{// No texture coordinates, so use a random valuev = random(id);}

Note

`isbound` does not tell you if the attribute exists. It tells you if the
attribute is bound. If you added an `@a` to a wrangle to bind the `a`, then
`isbound` will work as you expect in CVEX. Without an `@a`, there is no

## 描述

unbound.

虽然这个函数是为所有上下文定义的，但它只在位移、曲面和 SOP 上下文中有用。其他语境

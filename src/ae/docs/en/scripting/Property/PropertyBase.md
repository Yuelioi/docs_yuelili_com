---
title: PropertyBase object
order: 2
category:
  - AE 脚本
---

## Description

# PropertyBase object¶

`app.project.item(index).layer(index).propertySpec`

**Description**

Properties are accessed by name through layers, using various kinds ofexpression syntax, as controlled by application preferences. For example, thefollowing are all ways of access properties in the Effects group

```javascript
var effect1 = app.project.item(1).layer(1).effect("AddGrain")("Viewing Mode");
vareffect1again = app.project.item(1).layer(1).effect.addGrain.viewingMode;
var effect1againtoo = app.project.item(1).layer(1)("Effects").addGrain.viewingMode;
vareffect1againtoo2 = app.project.item(1).layer(1)("Effects")("AddGrain")("Viewing Mode");
```

See also [PropertyGroup.property()](propertygroup.html#propertygroup-
property).

> PropertyBase is the base class for both [Property](property.html#property)
> and [PropertyGroup](propertygroup.html#propertygroup), so PropertyBase
> attributes and methods are available when working with properties and
> property groups.

**Reference invalidation**

When something occurs that changes an object sufficiently for the reference tobecome invalid, script references to that object can generate errors. Insimple cases this is straightforward. For example, if you delete anobject, areference to the deleted object generates the warning “Object is Invalid”:

```javascript
var layer1 = app.project.item(1).layer(1);
layer1.remove();
alert(layer1.name); // invalid reference to deleted object
```

Similarly, if you reference an AE property in a deleted object, the warning
occurs

```javascript
var layer1 = app.project.item(1).layer(1); var layer1position
= layer1.transform.position; layer1.remove(); alert(layer1position.value); //
invalid reference to property inselected object
```

A less straightforward case is when a property is removed from a propertygroup. In this case, After Effectsgenerates the “Object is Invalid” error whenyou subsequently reference that item or other items in the group,because theirindex positions have changed. For example:

```javascript
var effect1 = app.project.item(1).layer(1).effect(1);
var effect2 = app.project.item(1).layer(1).effect(2);
var effect2param = app.project.item(1).layer(1).effect(2).blendWithOriginal;
effect1.remove();
alert(effect2.name); // invalid reference because group index positions have
changed;
```

---

## Attributes¶

### PropertyBase.active¶

`app.project.item(index).layer(index).active`

`app.project.item(index).layer(index).propertySpec.active`

**Description**

For a layer, this corresponds to the setting of the eyeball icon. When true,the layer’s video is active at the current time. For this to be true, thelayer must be enabled, no other layer may be soloing unless this layer issoloed too, and the time must be between the `inPoint` and `outPoint` valuesof this layer. This value is never true in an audio layer; there is a separate`audioActive` attribute in the AVLayer object[AVLayer.audioActive](../layers/avlayer.html#avlayer-audioactive).

For an effect and all properties, it is the same as the enabled attribute,except that it’s read-only.

**Type**

Boolean; read-only.

---

### PropertyBase.canSetEnabled¶

`app.project.item(index).layer(index).propertySpec.canSetEnabled`

**Description**

When true, you can set the `enabled` attribute value. Generally, this is trueif the user interface displays an eyeball icon for this property; it is true
for all layers.

**Type**

Boolean; read-only.

---

### PropertyBase.elided¶

`app.project.item(index).layer(index).propertySpec.elided`

**Description**

When true, this property is a group used to organize other properties. Theproperty is not displayed in the user interface and its child properties arenot indented in the Timeline panel.For example, for a text layer with twoanimators and no properties twirled down, you might see:

- `Text`

- `PathOptions`

- `MoreOptions`

- `Animator1`

- `Animator2`

In this example, “Animator 1” and “Animator 2” are contained in a PropertyBasecalled “Text Animators.” This parent group is not displayed in the userinterface, and so the two child properties are not indented in the Timeline
panel.

**Type**

Boolean; read-only.

---

### PropertyBase.enabled¶

`app.project.item(index).layer(index).enabled`

`app.project.item(index).layer(index).propertySpec.enabled`

**Description**

For layer, this corresponds to the video switch state of the layer in theTimeline panel. For an effect and all properties, it corresponds to thesetting of the eyeball icon, if there is one.

When true, the layer or property is enabled; otherwise false.

**Type**

Boolean; read/write if `canSetEnabled` is true, read-only if `canSetEnabled`
is false.

---

### PropertyBase.isEffect¶

`app.project.item(index).layer(index).propertySpec.isEffect`

**Description**

When true, this property is an effect PropertyGroup.

**Type**

Boolean; read-only.

---

### PropertyBase.isMask¶

`app.project.item(index).layer(index).propertySpec.isMask`

**Description**

When true, this property is a mask PropertyGroup.

**Type**

Boolean; read-only.

---

### PropertyBase.isModified¶

`app.project.item(index).layer(index).propertySpec.isModified`

**Description**

When true, this property has been changed since its creation.

**Type**

Boolean; read-only.

---

### PropertyBase.matchName¶

`app.project.item(index).layer(index).propertySpec.matchName`

**Description**

A special name for the property used to build unique naming paths. The matchname is not displayed, but you can refer to it in scripts. Every property hasa unique match-name identifier. Match names are stable from version to versionregardless of the display name (the name attribute value) or any changes tothe application. Unlike the display name, it is not localized. An indexedgroup may not have a name value, but always has a matchName value. (An indexedgroup has the type `PropertyType.INDEXED_GROUP`; seePropertyBase.propertyType.)

**Type**

String; read-only.

---

### PropertyBase.name¶

`app.project.item(index).layer(index).name`

`app.project.item(index).layer(index).propertySpec.name`

**Description**

For a layer, the name of the layer. By default, this is the same as the Sourcename, unless [Layer.isNameSet](../layers/layer.html#layer-isnameset) returns
false.

For an effect and all properties - the display name of the property. (ComparePropertyBase.matchName.) It is an error to set the name value if the propertyis not a child of an indexed group (that is, a property group that has thetype `PropertyType.INDEXED_GROUP`; see PropertyBase.propertyType).

**Type**

String; read/write for a child of an indexed group; otherwise read-only.

---

### PropertyBase.parentProperty¶

`app.project.item(index).layer(index).propertySpec.parentProperty`

**Description**

The property group that is the immediate parent of this property, or null ifthis PropertyBase is a layer.

**Type**

PropertyGroup object or null; read-only.

---

### PropertyBase.propertyDepth¶

`app.project.item(index).layer(index).propertySpec.propertyDepth`

**Description**

The number of levels of parent groups between this property and the containinglayer. The value 0 for a layer.

**Type**

Integer; read-only.

---

### PropertyBase.propertyIndex¶

`app.project.item(index).layer(index).propertySpec.propertyIndex`

**Description**

The position index of this property within its parent group, if it is a childof an indexed group (a property group that has the type`PropertyType.INDEXED_GROUP`; see PropertyBase.propertyType).

**Type**

Integer; read-only.

---

### PropertyBase.propertyType¶

`app.project.item(index).layer(index).propertySpec.propertyType`

**Description**

The type of this property.

**Type**

A `PropertyType` enumerated value; read/write. One of:

- `PropertyType.PROPERTY`: A single property such as position or zoom.

- `PropertyType.INDEXED_GROUP`: A property group whose members have an editable name and an index. Effects and masks are indexed groups. For example, the masks property of a layer refers to a variable number of individual masks by index number.

- `PropertyType.NAMED_GROUP`: A property group in which the member names are not editable. Layers are named groups.

---

### PropertyBase.selected¶

`app.project.item(index).layer(index).propertySpec.selected`

**Description**

When true, this property is selected. Set to true to select the property, orto false to deselect it. Sampling this attribute repeatedly for a large numberof properties can slow down system performance. To read the full set ofselected properties of a composition or layer, use either[CompItem.selectedProperties](../items/compitem.html#compitem-selectedproperties) or [Layer.selectedProperties](../layers/layer.html#layer-
selectedproperties).

**Type**

Boolean; read/write.

## Methods¶

### PropertyBase.duplicate()¶

`app.project.item(index).layer(index).propertySpec.duplicate()`

**Description**

If this property is a child of an indexed group, creates and returns a newPropertyBase object with the same attribute values as this one. If thisproperty is not a child of an indexed group, the method generates an exceptionand displays an error. An indexed group has the type`PropertyType.INDEXED_GROUP`; see PropertyBase.propertyType.

**Parameters**

None.

**Returns**

PropertyBase object.

---

### PropertyBase.moveTo()¶

`app.project.item(index).layer(index).propertySpec.moveTo(newIndex)`

**Description**

Moves this property to a new position in its parent property group. Thismethod is valid only for children of indexed groups; if it is not, or if theindex value is not valid, the method generates an exception and displays anerror. (An indexed group has the type `PropertyType.INDEXED_GROUP`; seePropertyBase.propertyType.)

Warning

Using this method invalidates existing references to other children in thesame indexed group. For example, if you have three effects on a layer, eacheffect assigned to a different variable, moving one of the effects invalidatesthe references for all of these variables. You will need to reassign them.

**Parameters**

| Property   | Type                                                                    |
| ---------- | ----------------------------------------------------------------------- |
| `newIndex` | The new index position at which to place this property in its group. An |

integer.  
**Returns**

Nothing.

---

### PropertyBase.propertyGroup()¶

`app.project.item(index).layer(index).propertySpec.propertyGroup([countUp])`

**Description**

Gets the PropertyGroup object for an ancestor group of this property at aspecified level of the parent-child hierarchy.

**Parameters**

| Property  | Type                                                                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `countUp` | Optional. The number of levels to ascend within the parent-child hierarchy. Aninteger in the range `[1..propertyDepth]`. Default is 1, which gets the |

immediate parent.  
**Returns**

PropertyGroup object, or null if the count reaches the containing layer.

---

### PropertyBase.remove()¶

`app.project.item(index).layer(index).propertySpec.remove()`

**Description**

Removes this property from its parent group. If this is a property group, itremoves the child properties as well. This method is valid only for childrenof indexed groups; if it is not, or if the index value is not valid, themethod generates an exception and displays an error. (An indexed group has thetype `PropertyType.INDEXED_GROUP`; see PropertyBase.propertyType.) This methodcan be called on a text animation property (that is, any animator that hasbeen set to a text layer).

**Parameters**

None.

**Returns**

Nothing.

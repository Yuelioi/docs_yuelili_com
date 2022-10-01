---
title: Text-Style
order: 2
category:
  - AE 表达式
---

## Description

# Text Style

These functions are accessible from [SourceText.style](text-sourcetext.html#sourcetext-style) after AE 17.0.

For more info on working with text styles, see:

- [Use Expressions to Edit and Access Text Properties on helpx.adobe.com](https://helpx.adobe.com/after-effects/user-guide.html/after-effects/using/expressions-text-properties.ug.html)

- [After Effects 2020: Express Yourself (and Your Text) on blog.adobe.com](https://blog.adobe.com/en/2020/01/24/after-effects-2020-express-yourself-and-your-text.html#gs.uwyfgz)

---

## TextStyle.setText(`value`)

**Description**

This is used when you want to define (or inherit) a text style, while settingthe text content separately.

For example, to inherit the text style and content from another layer:

```javascript
const referenceText = thisComp.layer("source layer
name").text.sourceText; const style = referenceText.getStyleAt(0,0);style.setText(referenceText);
```

Or to create a custom style and then set the text within the expression:

```javascript
text.sourceText.createStyle().setFontSize(300).setFont("Impact").setText("Hello
world!")
```

**Parameters**

| Property | Type                    |
| -------- | ----------------------- |
| `value`  | String. The text to set |

**Type**

None

---

## TextStyle.fontSize

**Description**

Returns the value of Font Size for a text layer.

**Type**

Number

---

## TextStyle.setFontSize(`value`)

**Description**

Used to set the font size to a specified value.

**Parameters**

| Property | Type                             |
| -------- | -------------------------------- |
| `value`  | Number. The font size to set to. |

**Type**

None

---

## TextStyle.font

**Description**

Returns the font name for a text layer.

**Type**

String

---

## TextStyle.setFont(`value`)

**Description**

Used to set the font to a specified value.

**Parameters**

| Property | Type                        |
| -------- | --------------------------- |
| `value`  | String. The font to set to. |

**Type**

None

---

## TextStyle.isFauxBold

**Description**

Returns whether faux bold is enabled

**Type**

Boolean

---

## TextStyle.setFauxBold(`value`)

**Description**

Used to set the faux bold status

**Parameters**

| Property | Type                                            |
| -------- | ----------------------------------------------- |
| `value`  | Boolean. Whether to enable or disable faux bold |

**Type**

None

---

## TextStyle.isFauxItalic

**Description**

Returns whether faux italic is enabled

**Type**

Boolean

---

## TextStyle.setFauxItalic(`value`)

**Description**

Used to set the faux italic status

**Parameters**

| Property | Type                                              |
| -------- | ------------------------------------------------- |
| `value`  | Boolean. Whether to enable or disable faux italic |

**Type**

None

---

## TextStyle.isAllCaps

**Description**

Returns whether all caps is enabled

**Type**

Boolean

---

## TextStyle.setAllCaps(`value`)

**Description**

Used to set the All Caps status

**Parameters**

| Property | Type                                           |
| -------- | ---------------------------------------------- |
| `value`  | Boolean. Whether to enable or disable all caps |

**Type**

None

---

## TextStyle.isSmallCaps

**Description**

Returns whether small caps is enabled

**Type**

Boolean

---

## TextStyle.setSmallCaps(`value`)

**Description**

Used to set the small caps status

**Parameters**

| Property | Type                                             |
| -------- | ------------------------------------------------ |
| `value`  | Boolean. Whether to enable or disable small caps |

**Type**

None

---

## TextStyle.tracking

**Description**

Returns the value of Tracking for a text layer.

**Type**

Number

---

## TextStyle.setTracking(`value`)

**Description**

Used to set the tracking to a specified value.

**Parameters**

| Property | Type                                  |
| -------- | ------------------------------------- |
| `value`  | Number. The tracking value to set to. |

**Type**

None

---

## TextStyle.leading

**Description**

Returns the value of leading for a text layer.

**Type**

Number

---

## TextStyle.setLeading(`value`)

**Description**

Used to set the leading to a specified value.

**Parameters**

| Property | Type                                 |
| -------- | ------------------------------------ |
| `value`  | Number. The leading value to set to. |

**Type**

None

---

## TextStyle.isAutoLeading

**Description**

Returns whether auto leading is enabled

**Type**

Boolean

---

## TextStyle.setAutoLeading(`value`)

**Description**

Used to set the auto leading status

**Parameters**

| Property | Type                                               |
| -------- | -------------------------------------------------- |
| `value`  | Boolean. Whether to enable or disable auto leading |

**Type**

None

---

## TextStyle.baselineShift

**Description**

Returns the value of baseline shift for a text layer.

**Type**

Number

---

## TextStyle.setBaselineShift(`value`)

**Description**

Used to set the baseline shift to a specified value.

**Parameters**

| Property | Type                                        |
| -------- | ------------------------------------------- |
| `value`  | Number. The baseline shift value to set to. |

**Type**

None

---

## TextStyle.applyFill

**Description**

Returns whether text fill color is enabled

**Type**

Boolean

---

## TextStyle.setApplyFill(`value`)

**Description**

Used to set whether text fill is enabled

**Parameters**

| Property | Type                                             |
| -------- | ------------------------------------------------ |
| `value`  | Boolean. Whether to enable or disable apply fill |

**Type**

None

---

## TextStyle.fillColor

**Description**

Returns the text fill color, RGB values on a scale from 0 - 1.0

**Type**

Array of numbers

---

## TextStyle.setFillColor(`value`)

**Description**

Used to set the text fill color

**Parameters**

| Property | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| `value`  | Array of numbers. `[R, G, B]` with each value between 0.0 to 1.0 |

**Type**

None

---

## TextStyle.applyStroke

**Description**

Returns whether text stroke is enabled

**Type**

Boolean

---

## TextStyle.setApplyStroke(`value`)

**Description**

Used to set whether text stroke is enabled

**Parameters**

| Property | Type                                              |
| -------- | ------------------------------------------------- |
| `value`  | Boolean. Whether to enable or disable text stroke |

**Type**

None

---

## TextStyle.strokeColor

**Description**

Returns the text stroke color, RGB values on a scale from 0 - 1.0

**Type**

Array of numbers

---

## TextStyle.setStrokeColor(`value`)

**Description**

Used to set the text stroke color

**Parameters**

| Property | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| `value`  | Array of numbers. `[R, G, B]` with each value between 0.0 to 1.0 |

**Type**

None

---

## TextStyle.strokeWidth

**Description**

Returns the stroke width value for a text layer.

**Type**

Number

---

## TextStyle.setStrokeWidth(`value`)

**Description**

Used to set the stroke width to a specified value.

**Parameters**

| Property | Type                                          |
| -------- | --------------------------------------------- |
| `value`  | Number. The value to set the stroke width to. |

**Type**

None

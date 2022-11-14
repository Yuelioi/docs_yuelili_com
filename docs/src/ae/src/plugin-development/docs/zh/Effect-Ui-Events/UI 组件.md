# 1

## 用法示例

<https://github.com/NTProductions/plugin-ui-params>

在 ParamsSetup 进行设置

```cpp
static PF_Err 
ParamsSetup ( 
 PF_InData  *in_data,
 PF_OutData  *out_data,
 PF_ParamDef  *params[],
 PF_LayerDef  *output)
{
 PF_Err    err = PF_Err_NONE;
 PF_ParamDef  def;
 
 AFEX_CLR_STRUCT(def) // 构建前要先Clear

 // 组件开始

 // 组件结束

 out_data->num_params = SKELETON_NUM_PARAMS; // 参数数量要与设置的控件参数数量一致
 return err;
}
```

## 其他说明

### ID

ID分为 控件Disk ID, 以及参数ID,

```cpp
enum {
 SKELETON_INPUT = 0,
 SKELETON_ANGLE,
 SKELETON_BUTTON,
 SKELETON_CHECKBOX,
 SKELETON_COLOR,
 SKELETON_SLIDER,
 SKELETON_LAYER,
 SKELETON_POINT,
 SKELETON_POINT3D,
 SKELETON_TOPIC_START,
 SKELETON_TOPIC_SLIDER,
 SKELETON_TOPIC_END,
 SKELETON_NUM_PARAMS
};

enum {
 ANGLE_DISK_ID = 1,
 BUTTON_DISK_ID,
 CHECKBOX_DISK_ID,
 COLOR_DISK_ID,
 SLIDER_DISK_ID,
 LAYER_DISK_ID,
 POINT_DISK_ID,
 POINT3D_DISK_ID,
 TOPIC_START_DISK_ID,
 TOPIC_SLIDER_DISK_ID,
 TOPIC_END_DISK_ID,
};
```

### 单位

从 0 到 4, 分别是 1, 0.1, 0.01, 0.001, 0.0001

```cpp
enum { PF_Precision_INTEGER, PF_Precision_TENTHS, PF_Precision_HUNDREDTHS, PF_Precision_THOUSANDTHS, PF_Precision_TEN_THOUSANDTHS };
```

## UI 组件

### Angle

```cpp
 PF_ADD_ANGLE(
  "Angle Name", // 控件名称
  180,     // 默认角度
  ANGLE_DISK_ID);
```

### 按钮

```cpp
 PF_ADD_BUTTON(
  "A Button",  // 控件名称
  "Click",  // 按钮名称
  NULL,   // PUI_FLAGS
  NULL,   // PARAM_FLAGS
  BUTTON_DISK_ID);
```

### 复选框

```cpp
 // PF_ADD_CHECKBOXX 同下,只不过复选框名称为空
 PF_ADD_CHECKBOX(
  "Left",   // 控件名称
  "Right",  // 复选框名称
  TRUE,   // 默认值
  NULL,   // Flags
  CHECKBOX_DISK_ID);
```

### 颜色

```cpp
 PF_ADD_COLOR(
  "Colour Name", // 控件名称
  255,0, 0,  // 默认RGB
  COLOR_DISK_ID);
```

### 滑块

```cpp
 PF_ADD_FLOAT_SLIDERX(
  "Slider Name",   //  控件名称
  0, 100.0,    // 限制范围
  0, 100.0,    // 滑块范围
  50.0,     // 默认值
  PF_Precision_INTEGER, // 单位
  NULL,     // DISPLAY FLAG
  NULL,     // FLAGS
  SLIDER_DISK_ID);
```

### 图层选择

```cpp
 PF_ADD_LAYER(
  "Layer Name", // 控件名称
  1,    // 默认值
  LAYER_DISK_ID);
```

### 点

```cpp
 PF_ADD_POINT(
  "Point Name", // 控件名称
  50, 50,    // 默认值(当前图层宽高百分比)
  NULL,      // 限制src大小边界 
  POINT_DISK_ID);

PF_ADD_POINT_3D(
  "Point 3D Name", // 控件名称
  50, 50, 0,    // 默认值(当前图层宽高深百分比)
  POINT3D_DISK_ID);
```

### 分组

```cpp
PF_ADD_TOPIC(
  "Topic Name", // 分类名称
  TOPIC_START_DISK_ID);

// 其他子组件
PF_ADD_FLOAT_SLIDERX(
  "Topic Slider", 0, 100, 0, 100, 50, PF_Precision_INTEGER, NULL, NULL, TOPIC_SLIDER_DISK_ID);

PF_END_TOPIC(TOPIC_END_DISK_ID);
```

### 弹出框

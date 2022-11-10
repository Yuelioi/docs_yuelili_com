# 1

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
 AEFX_CLR_STRUCT(def);

 // 你的组件

}
```

## 单位

从 0 到 4, 分别是 1, 0.1, 0.01, 0.001, 0.0001

```cpp
enum { PF_Precision_INTEGER, PF_Precision_TENTHS, PF_Precision_HUNDREDTHS, PF_Precision_THOUSANDTHS, PF_Precision_TEN_THOUSANDTHS };
```

## 滑块

```cpp
PF_ADD_FIXED( 
     STR(StrID_X_Slider_Name), // 滑块名称(英文字符串)
     RADIUS_MIN,        // 限制最小值(浮点,整数)
     RADIUS_BIG_MAX,      // 限制最大值
     RADIUS_MIN,        // 滑动最小值
     RADIUS_MAX,        // 滑动最大值
     RADIUS_DFLT,       //  默认值
     SLIDER_PRECISION,     // 单位
     DISPLAY_FLAGS,       // 显示开关,默认是0,如果改成1 就变成0~100%了
     0,             // FLAGS,开关 暂时不知道干嘛
     X_SLIDER_DISK_ID     // 滑块ID
     );

 AEFX_CLR_STRUCT(def); // 构建完记得Clear

```

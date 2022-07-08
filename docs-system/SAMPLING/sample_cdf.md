## 描述

Samples a cumulative distribution function (CDF).

On this page |

  * Overview

  * Usage

  
---|---  
  
##  Overview  #

Use this function to sample values from a CDF array created with the
[create_cdf](create_cdf.html "Creates a cumulative distribution function
\(CDF\) from an array of probability density function \(PDF\) values.")
function. See [create_cdf](create_cdf.html "Creates a cumulative distribution
function \(CDF\) from an array of probability density function \(PDF\)
values.") for more information.

使用这个函数从用create_cdff函数创建的CDF数组中采样。更多信息见create_cdff。

See the [create_cdf](create_cdf.html "Creates a cumulative distribution
function \(CDF\) from an array of probability density function \(PDF\)
values.") function docs for example code.

参见create_cdffunction docs以获得示例代码。

##  Usage  #


```c
int  sample_cdf(float cdf[], float uniform_rand)
```


Returns the index of the sampled CDF.

返回被抽样的 CDF 的索引。


```c
void  sample_cdf(float cdf[], float uniform_rand, int &index, float &x)
```


Writes the index of the sampled CDF and value to output arguments.

将采样的CDF的索引和值写到输出参数中。

`void  sample_cdf(float cdf[], float uniform_rand, int &index, float &x, float
&pdf)`

Writes the index of the sampled CDF, the sampled value, and the corresponding
PDF to output arguments.

将取样的 CDF 的索引、取样的值和相应的 PDF 写到输出参数中。

`cdf`

The CDF to sample from (create this using [create_cdf](create_cdf.html
"Creates a cumulative distribution function \(CDF\) from an array of
probability density function \(PDF\) values.")).

要采样的CDF（使用create_cdf创建）。

`uniform_rand`

A uniform random variable (must be in range 0 to 1).

一个统一的随机变量（必须在0到1的范围内）。

`&index`

Outputs the index of the sampled CDF element.

输出被抽样的CDF元素的索引。

`&x`

Outputs the value of the sampled CDF element.

输出被抽样的CDF元素的值。

`&pdf`

Outputs the PDF of the sampled CDF element.

输出采样的CDF元素的PDF。

Returns

The first form returns the index of the sampled value. The other forms write
the index to an output argument instead.

第一种形式返回采样值的索引。其他形式将索引写入一个输出参数。


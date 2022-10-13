---
title: findattribval
order: 21
category:
  - vex
---

`int findattribval(<geometry>geometry, string attribclass, string attribute\_name, int|stringvalue, int which=0)`

`int [] findattribval(<geometry>geometry, string attribclass, string attribute\_name, int|stringvalue)`

## Arguments

`<geometry>`

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

或者，该参数可以是一个字符串，指定一个几何文件（例如，一个`.bgeo'）来读取。当在Houdini内部运行时，这可以是一个`op:/path/to/sop`的引用。

`attribclass`

是 "细节"（或 "全局"）、"点"、"基元 "或 "顶点 "之一。

`attribute_name`

要读取的属性的名称。

`value`

要在属性中寻找的值。

`which`

如果多个元素的属性中都有给定的值，这就控制了要返回的匹配。

如果你要搜索具有相同属性值的多个元素，你可以使用[findattribvalcount](findattribvalcount.html) () ("返回一个整数或字符串属性具有某个值的元素的数量。")来获得匹配的总数，然后通过在一个循环中增加这个函数的`which`参数来迭代它们。见下面的例子。数组签名也可以用来返回所有匹配元素的列表。

## Returns

第一个点/原始点/顶点的编号，其中指定的属性与给定的`值'相符。如果没有元素具有给定的属性值，则返回`-1'。数组签名返回指定属性与给定`值'相匹配的所有点/基元/顶点的数字。

::: tip

最常见的用例（通过其 "名称 "或 "id "属性查找一个点/基元）有更容易使用的专用封装函数。[nametopoint](nametopoint.html) () （"通过其名称属性查找一个点。"）、[nametoprim](nametoprim.html) （"通过其名称属性查找一个基元。"）、[idtopoint](idtopoint.html) () （"通过其 id 属性查找一个点。"）和 [idtoprim](idtoprim.html) （"通过其 id 属性查找一个基元。" ）。

- 你只能搜索整数或字符串值。

## Examples



找到`@id`==10 的基元

```c
int prim\_num = findattribval(0, "prim", "id", 10);
// Note: you can use idtoprim(0, 10) instead

```

Find all points with `@age` == 10

```c
for (int point\_num : findattribval(0, "point", "age", 10))
{
 // ...do something with the point...
}

```

Find all points with `@age` == 10, using [findattribvalcount](findattribvalcount.html) () ("Returns number of elements where an integer or string attribute has a certain value.").

```c
int count = findattribvalcount(0, "point", "age", 10);
int point\_num;
for (int i = 0; i < count; i++) {
 point\_num = findattribval(0, "point", "age", 10, i);
 // ...do something with the point...
}

```

## See also

- [nametopoint](nametopoint.html)
- [nametoprim](nametoprim.html)
- [idtopoint](idtopoint.html)
- [idtoprim](idtoprim.html)
- [findattribvalcount](findattribvalcount.html)

### attrib

[addattrib](addattrib.html)

[adddetailattrib](adddetailattrib.html)

[addpointattrib](addpointattrib.html)

[addprimattrib](addprimattrib.html)

[addvertexattrib](addvertexattrib.html)

[addvisualizer](addvisualizer.html)

[attrib](attrib.html)

[attribclass](attribclass.html)

[attribdataid](attribdataid.html)

[attribsize](attribsize.html)

[attribtype](attribtype.html)

[attribtypeinfo](attribtypeinfo.html)

[detail](detail.html)

[detailattrib](detailattrib.html)

[detailattribsize](detailattribsize.html)

[detailattribtype](detailattribtype.html)

[detailattribtypeinfo](detailattribtypeinfo.html)

[detailintrinsic](detailintrinsic.html)

[findattribval](findattribval.html)

[findattribvalcount](findattribvalcount.html)

[getattrib](getattrib.html)

[getattribute](getattribute.html)

[hasattrib](hasattrib.html)

[hasdetailattrib](hasdetailattrib.html)

[haspointattrib](haspointattrib.html)

[hasprimattrib](hasprimattrib.html)

[hasvertexattrib](hasvertexattrib.html)

[nuniqueval](nuniqueval.html)

[point](point.html)

[pointattrib](pointattrib.html)

[pointattribsize](pointattribsize.html)

[pointattribtype](pointattribtype.html)

[pointattribtypeinfo](pointattribtypeinfo.html)

[pointlocaltransforms](pointlocaltransforms.html)

[pointtransform](pointtransform.html)

[pointtransformrigid](pointtransformrigid.html)

[pointtransforms](pointtransforms.html)

[pointtransformsrigid](pointtransformsrigid.html)

[prim](prim.html)

[prim_attribute](prim_attribute.html)

[primattrib](primattrib.html)

[primattribsize](primattribsize.html)

[primattribtype](primattribtype.html)

[primattribtypeinfo](primattribtypeinfo.html)

[priminteriorweights](priminteriorweights.html)

[primintrinsic](primintrinsic.html)

[primuv](primuv.html)

[primuvconvert](primuvconvert.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removeprimattrib](removeprimattrib.html)

[removevertexattrib](removevertexattrib.html)

[setattrib](setattrib.html)

[setattribtypeinfo](setattribtypeinfo.html)

[setdetailattrib](setdetailattrib.html)

[setpointattrib](setpointattrib.html)

[setpointlocaltransforms](setpointlocaltransforms.html)

[setpointtransform](setpointtransform.html)

[setpointtransforms](setpointtransforms.html)

[setprimattrib](setprimattrib.html)

[setvertexattrib](setvertexattrib.html)

[uniqueval](uniqueval.html)

[uniquevals](uniquevals.html)

[uvsample](uvsample.html)

[vertex](vertex.html)

[vertexattrib](vertexattrib.html)

[vertexattribsize](vertexattribsize.html)

[vertexattribtype](vertexattribtype.html)

[vertexattribtypeinfo](vertexattribtypeinfo.html)

|
search

[findattribval](findattribval.html)

[findattribvalcount](findattribvalcount.html)

[idtopoint](idtopoint.html)

[idtoprim](idtoprim.html)

[intersect](intersect.html)

[nametopoint](nametopoint.html)

[nametoprim](nametoprim.html)

[nuniqueval](nuniqueval.html)

[primfind](primfind.html)

[uniqueval](uniqueval.html)

[uniquevals](uniquevals.html)

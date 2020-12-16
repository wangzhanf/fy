# AJAX概念

异步JavaScript和 XML

Async  JavaScript And XML

 作用： 在不刷新当前应用的情况下，异步向服务器请求数据并刷新页面的指定区域（DOM）

实例：  已注册账号的提醒  ，流式的刷新加载（微信的朋友圈）

AJAX主要使用了JavaScript的XMLHttpRequest对象



匿名函数，回调函数，闭包，lambda表达式，函数指针



# ajax实例

联动菜单，根据选择的国家弹出对应国家的城市列表

页面刷新的时候 自动加载国家列表，选择了国家列表之后联动请求对应国家的城市列表



# JavaScript库

## jQuery【使用】

### 1	库和框架的区别

库是一些工具的集合，使用库提供的功能即可，使用库提高开发速度，库对项目的影响有限，方便更替

框架集合，框架提供了一揽子的解决方案，开发速度极快，深度耦合，如果要替换框架等于项目重写

### 如何使用jQuery库

1	下载		

2	在页面中引用

3	编写业务逻辑

### jQuery的功能

封装了错误处理机制，减少了对象检测的代码片段

浏览器兼容，jQuery代码编写之后适用于绝大多数的浏览器

减少代码量，jQuery封装了很多通用的功能

支持链式编程【方法执行的返回值一般都是调用对象自己】

## jQuery语法

$是jQuery的别名，jQuery的全局函数

基础语法： **$(selector).action()**

- 美元符号定义 jQuery
- 选择符（selector）"查询"和"查找" HTML 元素
- jQuery 的 action() 执行对元素的操作



## 编程结构

```html

    //一般建议:所有的jQuery代码都应该写在如下的框架内
    //源码读取完毕后，DOM对象构建完毕即执行
    $(document).ready(function(){
        //所有的业务代码
    });
```

## jQuery的事件和选择器

选择器兼容CSS选择器

事件都会提供一个事件的函数,函数的参数就是事件发生时的回调

jQuery提供的方法中,大部分的方法都是    不添加参数就是getter方法,添加参数就是setter方法

$("#myid").text()     //获取文本	getter

$("#myid").text("新的内容")	//设置文本  setter



# jQuery对象和原生JavaScript对象的互相转换

原因：有些方法jQuery没有，jQuery提供了原生没有的功能

原生转jQuery：   $(原生JavaScript对象)  包裹即可

jQuery转原生：   $(选择器).get(0)

# jQuery中AJAX编程

.ajax方法是底层方法，提供了最全的操作过程

.get(),post(),load()都是以.ajax方法提取出来的模板方法



# 案例：用户注册检测

简单功能，确保用户名称在5-10位的字母，而且确保用户名不能重名，给用户提醒（成功和失败）
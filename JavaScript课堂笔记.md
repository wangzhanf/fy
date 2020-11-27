---
typora-copy-images-to: images
---

JavaScript主要实现行为控制
JavaScript的目的是**增强**页面的应用，如果没有js页面应该能够正常访问,满足基本业务,如果存在js让用户使用起来更加方便

# JavaScript基础知识

目前客户端编程的**唯一**选择

解释类脚本语言, 比较灵活

js可以运行在js的解释器上, 现代浏览器都拥有js的解释器

常见的js技术:   ECMAScript     ,   node.js       ,   TypeScript



# JavaScript

## 如何在页面中使用JavaScript

1	在HTML标签中使用事件属性[一般都是onxxxxx]的方式调用(不推荐)

   ```html
<img src="img/02.jpg" onclick="alert('haha');" />
   ```

2	通过script标签,将JavaScript代码定义在script标签中

```html
<script>
    for (var i = 0; i < 9; i++) {
        console.log(i);
    }
</script>
```

3	独立定义一个js文件,在页面中通过script标签的src属性引入即可,如果具有src属性后,script标签中的代码不会执行

```html
<script src="js/main.js">alert("abcd");</script>
```

4	使用浏览器的控制台(F12)  

![image-20201127090329207](images/image-20201127090329207.png)

## 如何学习

https://www.w3cschool.cn/javascript/

https://www.w3cschool.cn/escript6/

### JavaScript和ECMAScript的关系

ECMAScript是语言的**标准**,JavaScript是ECMAScript标准的一个实现

ECMAScript定义了核心标准,没有具体实现

JavaScript   =   ECMAScript   +    BOM浏览器对象模型    +    **DOM**文档对象模型

语法类似于java





## JavaScript的输入

1	通过console控制台进行输入   

2	通过表单输入数据[DOM编程]

3	通过BOM对象的几个输入对象实现

​			alert	

​			confirm[返回true或者false]    

​			prompt   返回的是用户输入的字符串

​			

## JavaScript的输出

1	通过console控制台输出 例如  console.log("在控制台输出的信息");

2	输出内容到页面中	 例如   document.write("输出到页面中");

3	通过BOM对象输出

​			alert	

​			confirm[返回true或者false]    

​			prompt   返回的是用户输入的字符串



4	指定节点输出[DOM节点]	   (都可以作为右值[getter获得]或者左值[setter设置])

​		obj.value		只能对具有value属性的元素生效

​		obj.innerText	纯文本

​		obj.innerHTML	按照html格式解析

5	属性的输出

```html
 function changeImg() {
    var oImg = document.getElementById("myImg");
    // oImg.src = "img/01.jpg";
    oImg.setAttribute("src","img/01.jpg");
}

```

# JavaScript的语法

1	JavaScript是弱类型语言,变量可以任意存储数据,自我约束使用强类型的编程方式

2	变量的声明  使用关键字   var   或者   let

​	var声明的变量会有两个作用域[全局,函数]     ,函数内部可以覆盖全局的变量,如果变量声明时没有指定任何关键字,则创建全局变量

3	每行语句结束使用     ;    



JavaScript的语法要求很低 ,   代码无法工程化  ,   建议使用C的编程规范编码进行编码.    



# JavaScript的数据类型

## 字符串（String）:  

只要是在  " "    或者    '   '   或者    反向单引号[模板字串]中间的内容都是字符串

## 数字(Number):

包括    1       3.14      ,无需强转直接运算

数字中包括几个特例      

NaN(非数)   ,NaN不等于任意数, 就不能使用  ==  进行判断,使用isNaN判断   例如    isNaN(0/0)结果为true

Infinity:   无限值   

常用的转换函数:     parseInt    parseFloat    直到遇到第一个不是数字的字符则停止,如果不能转换返回NaN

Number也可以進行轉換，但是衹要字符串中有非数字字符则会返回NaN

## 布尔(Boolean)

true和false

7种假值：  false		""      NaN     0     -0      null        undefined

其他的都是true

## 空（Null）

当一个变量被设置为Null时，此时他将会被垃圾回收标记

## 未定义（Undefined）

当调用一个变量时，该变量未声明则返回undefined

当一个函数没有明确返回值的时候，则返回undefined

当函数声明了形参，但是调用时没有传递实参时，该形参为undefined

## 引用类型

数组

函数

正则表达式

对象(Object)

# 函数

什么是函数：    可以复用的代码片段，根据用户的输入进行处理产生输出，其他语言中可能叫做   过程，方法

函数的应用是： 先定义后调用

函数的定义：   使用关键字   function   进行，也可以使用lamda表达式（箭头语法）

函数的调用：  HTML的事件属性


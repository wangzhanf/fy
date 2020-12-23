# 前端设计模式

MVC

MVP

MVVM：Vue     

# Vue的基本语法

插值语法：mustach 语法   ，  {{ 变量或表达式 }}   ，插值表达式用来展现 元素**内容**

指令：vue能够解析和识别的命令，都是在元素的**属性**中，vue中所有的指令都是v-xxxx开头（缩写除外）

常见的指令：

v-text：innerText--》text（）

v-html：innerHTML--》html（）

v-cloak：数据渲染完毕之后，v-cloak指令属性就会消失



v-on：原生JavaScript的**事件**    click【事件】  onclick【事件处理函数】

语法糖：仅仅是在编写源代码时减少程序员的工作量，编译的时候语法糖内容会被还原成真实的代码

@事件名



v-title   v-href   v-src   这些指令是没有的，除了事件属性使用v-on，，其他属性都可以使用v-bind进行绑定

语法  

```html
<tagname v-bind:属性名='表达式'></tagname>
语法糖：   :属性名 
<tagname v-bind:class='{error:flag,success:!flag}'></tagname>
```

v-once  ：  仅渲染一次

v-pre:	将数据原始输出而不是用vue解析



v-for： 循环当前标签的次数



v-model： 实现双向数据绑定，作用：表单值的双向绑定,就是视图中值发生变化，model中也跟着变化，反之也一样。



过滤器：通过管道 |  将数据进行处理（数据格式化）



# 组件  compnent

复用

根组件定义model【data】使用      data：{ 变量列表}

自定义组件中model【data】使用函数返回：  每个组件使用独立的变量空间

自定义组件的所有元素放在唯一的一个根元素内



SLOT：当定义的组件中大部分内容相同



父子组件的值传递：

1	引入子组件时，使用 v-bind绑定

2	子组件需要声明  props，用以接收父组件传递过来的内容



vue中，出现在属性中的变量如果采用了驼峰写法，编写时需要使用-代替大写字母

oneVarAge ====>   one-var-age



父传子：    props进行变量声明

子传父：	子发送信号（$emit()）,父监听子的信号（自定义事件监听）



也可以通过  $root 或者  $parent拿到根组件或父组件的变量，【不推荐】



computed自带缓存，调用多次和一次是没有区别，取代函数的多次调用



# **Vue****-resource**用于Vue的ajax扩展。


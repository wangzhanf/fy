# 前端设计模式

MVC

MVP

MVVM

# Vue的基本语法

插值语法：mustach 语法   ，  {{ 变量或表达式 }}   ，插值表达式用来展现 元素**内容**

指令：vue能够解析和识别的命令，都是在元素的**属性**中，vue中所有的指令都是v-xxxx开头（缩写除外）

常见的指令：

v-text

v-html

v-cloak：数据渲染完毕之后，v-cloak指令属性就会消失



v-on：原生JavaScript的**事件**    click【事件】  onclick【事件处理函数】

语法糖：仅仅是在编写源代码时减少程序员的工作量，编译的时候语法糖内容会被还原成真实的代码

@事件名



v-title   v-href   v-src   这些指令是没有的，除了事件属性使用v-on，，其他属性都可以使用v-bind进行绑定

语法  

```html
<tagname v-bind:属性名='表达式'></tagname>
语法糖：   :属性名 
```

v-once  ：  仅渲染一次

v-pre:	将数据原始输出而不是用vue解析










---
typora-copy-images-to: images
typora-root-url: images
---

# Git

学习参考：    https://www.w3cschool.cn/     

git基础教程：   https://www.w3cschool.cn/git/



## Git的基础

Git的概念：  分布式的项目管理工具，多人协作开发，版本控制

Git起源：linux 开发者 利纳斯   2周时间开发出了 git版本控制系统，linux是开源的，git也是开源的，git的命令和linux 的shell是相似的。

Git的特点：

分布式和集中式的对应：集中式的版本控制有中心服务器（SVN，CVS），分布式的每个节点都有自己的本地库保留所有版本（GIt）



## Git的安装

下载： https://git-scm.com/download/win

安装：  一路下一步

验证安装：  鼠标右键任何地方     有   git  bash  here  菜单即安装成功

## Git的配置

配置基本的用户信息【用户名，电子邮件】，主要的目的是身份验证

1 创建一个code的目录，存放所有的需要被git托管的文件

2 进入code目录进行git的配置【打开目录，右键--->  git bash here】

3 配置用户名和电子邮件地址

```shell
HP@wangzf-sp MINGW64 /c/myfolder/授课资料/枫叶物联网19级/code
$ git config --global user.name "wangzhanf"

HP@wangzf-sp MINGW64 /c/myfolder/授课资料/枫叶物联网19级/code
$ git config --global user.email "wangzhanf@126.com"

```

4 验证配置

![image-20201109090832673](/image-20201109090832673.png)



## Git的工作流程

常见的操作

clone   只需要一次

pull   拉取操作

status   状态

commit   提交

push   推送

## 第一个Git的实例

1 去gitHub（微软）或者Gitee（码云）或者Gitlab（私服）    创建一个账号

访问github，注册并登录

2 创建一个仓库

3 获取仓库的地址      git@github.com:wangzhanf/fy.git     

4 设置访问的方式为ssh方式，仓库所有者可以拉取和推送内容

5 通过   生成 公钥和私钥

```shell
ssh-keygen -t rsa -C "wangzhanf@126.com"
```

6 打开秘钥所在目录   用户目录下   .ssh  下 

![image-20201109101949444](/image-20201109101949444.png)

7 将公钥上传到  github上

打开用户的settings配置

![image-20201109102104836](/image-20201109102104836.png)

![image-20201109102137183](/image-20201109102137183.png)

![image-20201109102234463](/image-20201109102234463.png)

秘钥是针对于某个用户在具体某台机器上的唯一匹配

![image-20201109102539174](/image-20201109102539174.png)

## Git的仓库操作

1 打开本地仓库所在的目录，并且进入git  bash   界面

![image-20201109102946697](/image-20201109102946697.png)

2 第一次通过clone方式获取远端仓库所有内容

```shell
$ git clone git@github.com:wangzhanf/fy.git

```

![image-20201109103511706](/image-20201109103511706.png)

3 模拟操作

创建一个新文件，并且提交到远程仓库

创建出文件后，通过   git status  查看状态

如果文件没有被追踪则不会被git管理到       git   add   文件名

将文件提交     

```shell
git commit -m "提交的注释消息"  文件名
```

将文件推送到远程仓库

```
git push
```

从远端服务器获取最新的内容

```shell
git pull
```



## Git 工作区、暂存区和版本库

![image-20201109110311929](/image-20201109110311929.png)

工作就是编辑和创建文件的目录，不包括    .git  目录

![image-20201109110442109](/image-20201109110442109.png)

## 上课回顾

1	下载安装

2	配置（用户的身份和唯一识别）

3	gitHub注册一个用户并且创建仓库

4	在本机创建自己的秘钥，并在github上配置

5	在本地克隆仓库进行项目开发

6	对本地工作区文件进行操作并提交到远程仓库





# git基本操作

git创建本地仓库：   git   init

添加到追踪：   git add

提交修改到本地库：   git  commit       【vi编辑器模式填写提交日志】





## vi编辑器的简单使用

命令模式，末行模式，编辑模式

命令模式--------》 【a,i,insert】   ------》 编辑模式

编辑模式----->esc---命令模式 -----》【：】-------》         末行模式----》操作【q,q!,wq】





## git如何和他人合作

前提条件，合作者也必须具有同样的代码托管平台账号

对仓库进行设置

![image-20201111084711675](/image-20201111084711675.png)

选择  manager access

![image-20201111085014802](/image-20201111085014802.png)

![image-20201111085313306](/image-20201111085313306.png)

## 外部合作

1	仓库公共开放

2	参与成员不是合作者和作者本身

3	参与成员克隆项目修改后发出 pull   request  请求

4	仓库的作者可以选择性接受来自外部的  pull  request



## 上课回顾

多人协作：

团队内部--》（仓库）授予【邀请】团队成员加入--》同意（完全操作）

外部合作---》仓库公开-----》  fork----》修改------》pull  reqeust



# 远程仓库

传统的项目创建的流程

1	先在本地创建git版本库

​	创建一个目录（工作区）     涉及到的基本命令   pwd  cd    ls    mkdir   rm

​	创建暂存区和版本库（.git）	           git init

2	提交到本地版本库

​		git add

​		git  commit

3	推送到远程仓库

​		创建一个远程仓库     git@github.com:wangzhanf/newtest.git

​		配置远程服务器以及分支

​			 git remote add orign git@github.com:wangzhanf/newtest.git

​		推送

​				第一推送时需要：git push --set-upstream orign master

​				以后推送：   git push orign

​			
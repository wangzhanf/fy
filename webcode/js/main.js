function imgBindEvent(){
    if(!(oImgListZone = document.querySelector("#imgList"))) return false;  //对象检测
    //不建议使用的方式，缺陷就是如果通过动态方式添加的缩略图将不能响应事件
    /*var imgLists = oImgListZone.querySelectorAll("a");  //限定前提，必须是a
    for (let i = 0; i < imgLists; i++) {
        imgLists[i].onclick = func1;
    }*/
    oImgListZone.onclick = changeImg;
}

function changeImg(eve) {
    if(!(oImg = document.querySelector("#bigZone>img"))) return false;  //对象检测
    if(!(oDes = document.querySelector("#des"))) return false;  //对象检测
    console.log("changeImg被执行了");
    // console.log(eve.target);
    //获取链接到的真实资源地址
    // console.log(eve.target.parentElement);
    var sImgHref = eve.target.parentElement.getAttribute("href");
    oImg.setAttribute("src",sImgHref);
    oDes.innerText = eve.target.getAttribute("title");
    //阻止超链接的默认行为
    eve.preventDefault();
    // return false;
}

function createBigPicZone() {
    // console.log("createBigPicZone被调用了");
    //获取创建的父区域对象
    if(!(oDisZone = document.querySelector("#disZone"))) return false;  //对象检测
    //创建碎片节点
    var oDiv = document.createElement("div");
    oDiv.setAttribute("id","bigZone");
    var oImg = document.createElement("img");
    oImg.setAttribute("src","img/05.jpg");
    var oDes = document.createElement("div");
    oDes.setAttribute("id","des");
    oDes.innerText = "封面图";
    //oDiv.setAttribute("class","myRelative");//缺陷就是绝对赋值方式，对于class样式特性来讲有欠缺，应该能够追加和移除指定样式
    addClass(oDiv,"myRelative");//追加样式

    //组装节点
    oDiv.prepend(oDes);
    oDiv.prepend(oImg);
    oDisZone.appendChild(oDiv);
}

function addClass(oObj,sClass) {
    // alert("haha");
    if(!oObj || !oObj.getAttribute("class") || !sClass || sClass=="") return false;//对象检测
    //1 先获取对象本身的class属性
    var sClassList = oObj.getAttribute("class");
    //分割为数组
    // if(sClassList==null){
    //     oObj.setAttribute("class",sClass);
    //     return ;   //缺陷，一个函数有多个出口
    // }
    var aClassList = sClassList.split(" ");
    //遍历匹配
    for (let i = 0; i < aClassList.length; i++) {
        if(aClassList[i] != sClass){//不包含该样式时，追加
            aClassList.push(sClass);
        }
    }
    // 转换为字符串
    oObj.setAttribute("class",aClassList.join(" "));
    return undefined;
}

function removeClass(oObj,sClass) {
    if(!oObj || !sClass || sClass=="") return false;
    //1 先获取对象本身的class属性
    var sClassList = oObj.getAttribute("class");
    //分割为数组
    var aClassList = sClassList.split(" ");
    //遍历匹配
    for (let i = 0; i < aClassList.length; i++) {
        if(aClassList[i] == sClass){//如果能够匹配到该样式
            aClassList.splice(i,1);
        }
    }
    // 转换为字符串
    oObj.setAttribute("class",aClassList.join(" "));
}

function removeFrame() {
    //获取内部框架的DOM对象
    if (!(oFrame = document.querySelector("#disZone>iframe"))) return false;    //对象检测
    //如果存在该对象则删除之
    // console.log(oFrame);
    oFrame.remove();
}


//onload事件的动态加载函数
function addOnloadEvent(func) {
    //首先应该先获得当前的window.onload
    var oldLoad = window.onload;
    // console.log(typeof oldLoad);
    if ((typeof oldLoad) == 'Function') {
        window.onload = function () {
            oldLoad();
            func();
        }
    } else {
        func();
    }
}

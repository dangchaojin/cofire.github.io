$(document).ready(function(){
    alert("1");
    $.getJSON("./urlJson/site.json",function(date){
        var jsontip = $("#jsonTip"); 
        var strHtml = "123";//存储数据的变量 
        jsontip.empty();//清空内容 
        $.each(data,function(infoIndex,info){ 
            strHtml += "姓名："+info["name"]+"<br>"; 
            strHtml += "性别："+info["sex"]+"<br>"; 
            strHtml += "<hr>" 
            alert(strHtml);
        }) 
        jsontip.html(strHtml);//显示处理后的数据 
    });
});
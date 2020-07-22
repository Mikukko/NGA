// ==UserScript==
// @name         NGA版面优化
// @namespace    https://github.com/Mikukko/NGA
// @version      0.3
// @run-at       document-idle
// @include      https://bbs.nga.cn/thread.php?fid=-7
// @include      https://bbs.nga.cn/thread.php?fid=-7&page=*
// @description  针对NGA网事杂谈区的版面优化，隐藏了上中部分的一些内容
// @author       Mikukko
// @note         2020-07-20 更新0.3版本，部分优化
// ==/UserScript==
(function(){
    //是否新标签页打开链接
    var newTab = true;
    //是否折叠版规
    var collapse = true;

    if (newTab){
        var tds = document.getElementById("topicrows").getElementsByClassName("c2");
        for(var i = 0;i < tds.length;i++){
            var td_as = tds[i].getElementsByTagName("a");
            for(var j = 0;j < td_as.length;j++){
                td_as[j].setAttribute("target","_blank");
            }
        }
    }

    if (collapse) {
//         var tr = document.getElementsByTagName("table")[2]
//                          .getElementsByTagName("tr")[0];
//         var td = tr.getElementsByTagName("td")[0];
//         tr.removeChild(td);
        //抬头div标签默认隐藏，点击展开
        var top = document.getElementById("toptopics");
        top.style.display = "none";
        var forums = document.getElementById("sub_forums");
        forums.style.display = "none";
        //新建点击按钮
        var a = document.createElement("a");
        a.setAttribute("id","nga_plus");
        a.setAttribute("href","javascript:void(0)");
        a.setAttribute("class","uitxt1");
        a.text = " + ";
        //添加td标签
        var div_left = document.getElementById("pagebtop");
        div_left.setAttribute("style","width:431px;height:49px");
        var table_td = document.createElement("td");
        var table_page = document.getElementsByTagName("table")[1];
        table_page.setAttribute("style","width:427px;height:49px");
        table_td.setAttribute("style","width:47px;height:49px");
        table_td.appendChild(a);
        var table_tr = table_page.getElementsByTagName("tr")[0];
        table_tr.appendChild(table_td);
        //点击事件
        document.getElementById("nga_plus").onclick = function(){
            if(top.style.display == "none" && forums.style.display == "none"){
                top.style.display = "block";
                forums.style.display = "block";
                a.text = " - ";
            } else {
                top.style.display = "none";
                forums.style.display = "none";
                a.text = " + ";
            }
        }
    }
    //移除广告
    var w100 = document.getElementsByClassName("w100")[1];
    var span = w100.children[1];
    var divHTML = span.innerHTML;
    var pattern = /<div style=.*/g;
    if (divHTML.match(pattern)) {
        w100.removeChild(span);
    }
})();

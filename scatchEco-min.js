var temp=document.createElement("script");temp.src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js";temp.onload=function(){connect()};function connect(){firebase.initializeApp({apiKey:"AIzaSyAy2o-FZGQDiy8orFTCTmJ7b3coUeQaoCc",authDomain:"scratcheco-105a5.firebaseapp.com",databaseURL:"https://scratcheco-105a5.firebaseio.com",projectId:"scratcheco-105a5",storageBucket:"scratcheco-105a5.appspot.com",messagingSenderId:"17817429622"});doOther()}
function set(h,k){firebase.database().ref().child(h).set(k)}ScratchEcoVersion=.008;localStorage.setItem("ScratchEcoVersion",ScratchEcoVersion);if(null==localStorage.getItem("ScratchEco1"))for(var i=1;10!=i;)localStorage.setItem("ScratchEcot"+i,"false"),i++;
if("/scratchEco"==window.location.pathname){var catchmeifyouCANT="onload"in new XMLHttpRequest?XMLHttpRequest:XDomainRequest,catchmeifyouCAN=new catchmeifyouCANT;catchmeifyouCAN.open("GET","https://raw.githubusercontent.com/SimaKyr/scratchEco/master/settingsWebpage/index.html",!0);catchmeifyouCAN.onload=function(){document.open();document.write(this.responseText);document.close()};catchmeifyouCAN.onerror=function(){console.error("Can't get html code!")};catchmeifyouCAN.send()}document.head.appendChild(temp);
function doOther(){function h(b){b=b.getBoundingClientRect();return{left:b.left+window.scrollX,top:b.top+window.scrollY}}function k(){"null"==localStorage.getItem("playerScratch")&&localStorage.setItem("playerScratch","0");player=localStorage.getItem("playerScratch");"undefined"==typeof codeOriginalPlayer&&(codeOriginalPlayer=document.getElementById("player").innerHTML);var b='<iframe allowfullscreen height=400 width=480 frameborder="0" style="position:absolute;top:50%;left:50%;margin:-200px 0 0 -250px;" ';
1==player&&(b=b+"src=https://phosphorus.github.io/embed.html?id="+idproject+"&turbo=false&full-screen=false></iframe>");2==player&&(b=b+"src=https://sulfurous.aau.at/versions/v0.90/html/embed.html?id="+idproject+"&turbo=false&full-screen=false></iframe>");0==player&&(b=codeOriginalPlayer);document.getElementById("player").innerHTML=b;document.getElementById("player").style=""}function p(){var b=document.createElement("select");b.style.width="100px";b.id="selectorPlayer";b.innerHTML='<option value="0">Original</option><option value="1">Phosphorus</option><option value="2">Sulfurous</option>';
idproject=document.location.href.split("/").slice(3)[1];document.getElementById("stats").appendChild(b);b=localStorage.getItem("playerScratch");document.getElementById("selectorPlayer").value=b;k();document.getElementById("selectorPlayer").onchange=function(){var b=document.getElementById("selectorPlayer").selectedIndex;localStorage.setItem("playerScratch",b);k()}}function t(b){b.onmouseover=function(){var c=document.getElementById("infoFrame");c.src="https://simakyr.github.io/scratch-profile-embed/#"+
b.innerText;document.getElementById("infoFrame").style.left=h(b).left+10+"px";document.getElementById("infoFrame").style.top=h(b).top+20+"px";c.style.display="block";c.style.visibility="visible"};b.onmouseout=function(){var b=document.getElementById("infoFrame");b.style.display="none";b.style.visibility="hidden"}}function m(){for(var b=g(),c=0,d;c!=b.length;)d=b[c].substring(b[c].indexOf("\u2601")+1,b[c].replace("\u2601","").indexOf("\u2601")+1),parseInt(d)==d&&(b[c]=get["m"+d]),c++;g(b)}function q(){return document.getElementById("comments").getElementsByTagName("textarea")[0].value}
function u(){if(null==document.getElementById("btnSend")){var b=document.createElement("div");b.className="button small";b.id="btnSend";b.innerHTML="<a>Post with ScratchEco</a>";document.getElementsByClassName("control-group")[1].appendChild(b);document.getElementById("btnSend").onclick=function(){set("mL",get.mL+1);set("m"+get.mL,q());set("m"+get.mL,q());set("mUrl"+get.mL,window.location.href);var b="\u2601"+get.mL+"\u2601";document.getElementsByClassName("control-group tooltip right")[0].getElementsByTagName("textarea")[0].value=
b;document.getElementsByClassName("control-group")[1].getElementsByClassName("button small")[0].click()}}}function g(b){var c=0,d=[],e,f=!b,g=!!document.getElementsByClassName("emoji-text mod-comment").length;for(e=g?document.getElementsByClassName("emoji-text mod-comment"):document.getElementsByClassName("comments")[0].getElementsByTagName("li");c!=e.length;)g?f?d[c]=e[c].innerHTML:e[c].innerHTML=b[c]:f?d[c]=e[c].getElementsByClassName("content")[0].innerHTML:e[c].getElementsByClassName("content")[0].innerHTML=
b[c],c++;return d}function l(){return null==document.getElementById("navigation")?document.getElementsByTagName("span")[2].innerText:document.getElementsByTagName("span")[8].innerText}function r(){url=document.location.href.split("/").slice(3);url.includes("users")||url.includes("projects")||url.includes("comments")||m();"projects"==url[0]&&p();url.includes("users")&&(document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML=a=document.getElementsByClassName("header-text")[0].getElementsByTagName("h2")[0].innerHTML+
'<img onclick="openStats()" src="https://raw.githubusercontent.com/SimaKyr/scratchEco/master/icons/aboutUser.png">');var b=document.createElement("script");b.src="//is.gd/scratchstudiotools";document.getElementsByTagName("head")[0].appendChild(b)}function n(){if(url.includes("users")||url.includes("projects")||url.includes("comments")){m();"true"==localStorage.getItem("ScratchEcot3")&&u();if("true"==localStorage.getItem("ScratchEcot4")){for(var b=0,c=g(),d,e;b!=c.length;){d=c[b];e=0;for(var f=[];-1!=
d.indexOf("[img]");){var h=d.indexOf("[img]")+5,k=d.indexOf("[/img]");f[e]=d.substring(h,k).replace("[img]","");d=d.replace("[img]","").replace("[/img]","").replace(f,"");e++}img=f;if(0!=img.length)for(d=0;d!=img.length;)e=document.createElement("img"),e.height="128",e.src=img[d],c[b]=c[b].replace("[img]"+img[d]+"[/img]",""),c[b]+=e.outerHTML,d++;b++}g(c);void 0==document.getElementsByClassName("btnaboutm")[0]&&(document.getElementsByClassName("control-group")[1].innerHTML=document.getElementsByClassName("control-group")[1].innerHTML+
"<div class='btnaboutm'><img src='https://simakyr.github.io/scratchEco/icons/about.png' height='16px'><div><h5>Help</h5><p>You can use for inject image [img]url to image[/img]</p></div></div>\n<style>.btnaboutm{\nheight:16px;\nwidth:16px;\n}\n.btnaboutm div {\ndisplay:none;\nposition: absolute;\nheight:60px;\nwidth:250px;\nbackground-color:grey;\nbox-shadow: 0 0 10px rgba(0,0,0,0.5);\npadding:10px;\nz-index: 1;\ncolor:white;\ntext-shadow: none;\nborder-radius: 10px;\n    }\n.btnaboutm:hover div {\n    display: inline;\n}\n</style>")}if("true"==
localStorage.getItem("ScratchEcot2"))for(b=document.createElement("iframe"),b.height="310px",b.width="190px",b.id="infoFrame",b.style.border="none",b.style="position:absolute; z-index: 5000;overflow:hidden;overflow-y:hidden;overflow-x:hidden;border: 0;border-radius: 50px;",document.body.appendChild(b),b=document.getElementsByTagName("a"),c=0,d=b.length;c<d;c++)e=b[c],e=2<e.href.length?"/mystuff/"!=e.href?e.href.split("/").slice(3)[1]==e.innerText:void 0:!1,e&&t(b[c]);carrot=g().lenght;url.includes("projects")?
("true"==localStorage.getItem("ScratchEcot8")&&null==document.getElementById("gifAdd")&&document.getElementById("owner").innerHTML==l()&&(b=document.createElement("div"),b.className="button",b.id="gifAdd",b.setAttribute(onclick,"alert('ok')"),b.height="50",b.setAttribute("onclick","gifSet();"),b.innerHTML="<span>GIF Thumbnail</span>",document.getElementsByClassName("buttons")[0].appendChild(b)),"projects"==url[0]&&"true"==localStorage.getItem("ScratchEcot7")&&null==document.getElementById("selectorPlayer")&&
p()):(m(),carrot=g().lenght)}}firebase.database().ref().on("value",function(b){return get=b.val()});var f=document.createElement("img");f.src="//simakyr.github.io/scratchEco/icons/icon.png";f.style.position="fixed";f.style.top="0";f.style.right="0";f.style.zIndex=999999;f.height=32;f.onclick=function(){window.open("https://scratch.mit.edu/scratchEco","_blank").focus()};document.getElementsByTagName("body")[0].appendChild(f);(function(){if(null==localStorage.getItem("StopTelemetry")){set(l()+"/permission",
"User");var b=new Date;set(l()+"/latestUse",b.toString());set(l()+"/latestWebpage",window.location.pathname)}})();document.ajaxSend=function(){setTimeout(n,2E3)};"undefined"==typeof useClient?window.onload=function(){carrot=0;r();setTimeout(n,4E3)}:(carrot=0,r(),setTimeout(n,4E3))};

var temp = document.createElement("script");
temp.src = "https://www.gstatic.com/firebasejs/5.5.3/firebase.js";
temp.onload = function(){ connect(); }
function connect(){
var config = {
    apiKey: "hide",
    authDomain: "hide",
    databaseURL: "hide",
    projectId: "hide",
    storageBucket: "hide",
    messagingSenderId: "hide"
  };
  firebase.initializeApp(config);
  fireHere();
}

ScratchEcoVersion = 0.005;
localStorage.setItem('ScratchEcoVersion',ScratchEcoVersion);
if(window.location.pathname == '/scratchEco'){
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
var xhr = new XHR();
xhr.open('GET', 'https://raw.githubusercontent.com/SimaKyr/scratchEco/master/settingsWebpage/index.html', true);
xhr.onload = function() { document.open(); document.write(this.responseText); document.close(); }
xhr.onerror = function() { console.error("Can't get code html!"); }
xhr.send();
}

document.head.appendChild(temp);

var injectAbout = `<div class='btnaboutm'><img src='https://simakyr.github.io/scratchEco/icons/about.png' height='16px'><div><h5>Help</h5><p>You can use for inject image [img]url to image[/img]</p></div></div>
<style>.btnaboutm{
height:16px;
width:16px;
}
.btnaboutm div {
display:none;
position: absolute;
height:60px;
width:250px;
background-color:grey;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
padding:10px;
z-index: 1;
color:white;
text-shadow: none;
border-radius: 10px;
    }
.btnaboutm:hover div {
    display: inline;
}
</style>`

function fireHere(){
function set(key,value){firebase.database().ref().child(key).set(value);}
firebase.database().ref().on('value', snap => get = snap.val());
}

telemetryScratchEco();
//искать тег [img] [/img] и вырезать из него url на картинку
function getUrlImgFromMessege(messege){
var m = messege;
var i=0;
var text = [];
while(m.indexOf('[img]')!=-1){
var s=m.indexOf('[img]')+5;
var e=m.indexOf('[/img]');
text[i] = m.substring(s,e).replace('[img]','');
var m=m.replace('[img]','').replace('[/img]','').replace(text,'');
i++;
}return text;}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function isElementToProfile(el){
    if(el.href.length>2){
if(el.href!='/mystuff/'){
return el.href.split("/").slice(3)[1] == el.innerText;
    }}
    else{return false;}
}

function infoFrameCreate(){
var ifr = document.createElement('iframe');
ifr.height = '310px';
ifr.width = '190px';
ifr.id = 'infoFrame';
ifr.style.border = "none";
ifr.style = "position:absolute; z-index: 5000;overflow:hidden;overflow-y:hidden;overflow-x:hidden;border: 0;border-radius: 50px;";
document.body.appendChild(ifr);
}

function setCordInfoFrame(elem){
document.getElementById("infoFrame").style.left = getOffset(elem).left+10 + 'px';
document.getElementById("infoFrame").style.top = getOffset(elem).top+20 + 'px';
}

function changePlayer(){

if('null' == localStorage.getItem('playerScratch')){
localStorage.setItem('playerScratch', '0');
}
player = localStorage.getItem('playerScratch');
var eleme = 'player';

if(typeof codeOriginalPlayer == 'undefined'){codeOriginalPlayer = document.getElementById(eleme).innerHTML;}

    //Create element html
    var html = '<iframe allowfullscreen height=400 width=480 frameborder="0" style="position:absolute;top:50%;left:50%;margin:-200px 0 0 -250px;" '
        if(player==1){
            html = html + 'src=https://phosphorus.github.io/embed.html?id=' + idproject + '&turbo=false&full-screen=false></iframe>';
        }
        if(player==2){
            html = html + 'src=https://sulfurous.aau.at/versions/v0.90/html/embed.html?id=' + idproject + '&turbo=false&full-screen=false></iframe>';
        }
        if(player==0){
            html=codeOriginalPlayer;
        }

    document.getElementById(eleme).innerHTML = html;
    document.getElementById(eleme).style = '';
}

function addChangerPlayer(){
var html = '<select id="selectorPlayer" style="width:100px;"><option value="0">Original</option><option value="1">Phosphorus</option><option value="2">Surforus</option></select>';
var para = document.createElement('div')
para.innerHTML = html;
idproject = document.location.href.split("/").slice(3)[1];
document.getElementById('stats').appendChild(para);
var val = localStorage.getItem('playerScratch');    
document.getElementById('selectorPlayer').value = val;
changePlayer();
document.getElementById('selectorPlayer').onchange = function () {
var player = document.getElementById('selectorPlayer').selectedIndex;
localStorage.setItem('playerScratch', player);
    changePlayer();
}}

function getNicknameElementA(elm){
return elm.innerText;
}

function injectA(e){
    e.onmouseover = function() {
        var ifr = document.getElementById("infoFrame");
        ifr.src = 'https://simakyr.github.io/scratch-profile-embed/#' + e.innerText;
        setCordInfoFrame(e);
        ifr.style.display = 'block';
        ifr.style.visibility = 'visible';
    }
	e.onmouseout = function() {
		var ifr = document.getElementById("infoFrame");
        ifr.style.display = 'none';
        ifr.style.visibility = 'hidden';
}}

function injectAElements(){
var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {
if(isElementToProfile(elements[i])){
injectA(elements[i]);
}}}


//сканирует все сообщения и переводит их в нормальные
function makeReadable(){
var m = getMesseges();
var i=0;
var me;
while(i!=m.length){
me=m[i].substring(m[i].indexOf('☁')+1,m[i].replace('☁','').indexOf('☁')+1);
if(parseInt(me)==me){
m[i] = get['m'+me];
}
i++;
}
setMesseges(m);
}

function addBtnAbout(){
var html = '<img onclick="openStats()" src="https://raw.githubusercontent.com/SimaKyr/scratchEco/master/icons/aboutUser.png">';
document.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerHTML = a=document.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerHTML+ html;
}

function makeReadableM(){
var m = getMessegesM();
var i=0;
var me;
while(i!=m.length){
me=m[i].substring(m[i].indexOf('☁')+1,m[i].replace('☁','').indexOf('☁')+1);
if(parseInt(me)==me){
m[i] = get['m'+me];
}
i++;
}
setMessegesM(m);
}

function sendMessege(m){
document.getElementsByClassName("control-group tooltip right")[0].getElementsByTagName('textarea')[0].value=m;
document.getElementsByClassName("control-group")[1].getElementsByClassName("button small")[0].click();
}

function antiB(i){
if(i==0){
//анти баг для кнопки на странице /messeges/
document.getElementsByClassName("button messages-social-loadmore")[0].setAttribute("onclick","makeReadableM();");
}

if(i==1){
//антибаг для кнопки на странице проекта
var a=document.getElementsByClassName("comments")[0].getElementsByTagName('div');
a[a.length-1].setAttribute("onclick","makeReadable();");
}}

//получить текст сообщения

function getText(){
return document.getElementById('comments').getElementsByTagName('textarea')[0].value;
}

//создать кнопку
function createBtn(){
if(document.getElementById('btnSend')==null){
var para = document.createElement("div");
para.className = "button small";
para.id = "btnSend";
para.innerHTML = '<a onclick="sendCustom()";>Post with ScratchEco</a>';
document.getElementsByClassName("control-group")[1].appendChild(para);
}}

//получает никнейм текущего профиля
function getNickprofile(){
return document.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerText;
}

//открывает статистику текущего профиля в новом окне
function openStats(){
window.open('https://scratchstats.com/#' + getNickprofile());
}

//получить текст сообщения(текст храниться в array)
function getMesseges(){
var i=0;
var text = [];
while(i!=document.getElementsByClassName("comments")[0].getElementsByTagName('li').length){
text[i]=document.getElementsByClassName("comments")[0].getElementsByTagName('li')[i].getElementsByClassName("content")[0].innerHTML;
i++;
}return text;}
//задать текст(текст храниться в array)
function setMesseges(text){
var i=0;
while(i!=document.getElementsByClassName("comments")[0].getElementsByTagName('li').length){
document.getElementsByClassName("comments")[0].getElementsByTagName('li')[i].getElementsByClassName("content")[0].innerHTML=text[i];
i++;
}}
//сканирует и добавляет картинку к сообщению где надо + убирает мусор(теги)
function tagsScan(){
var i=0;
var m=getMesseges();
var temp;
var para;
while(i!=m.length){
img = getUrlImgFromMessege(m[i]);
if(img.length!=0){
temp=0;
while(temp!=img.length){
para = document.createElement("img");
para.height = '128';
para.src = img[temp];
m[i] = m[i].replace('[img]'+img[temp]+'[/img]', '');
m[i] = m[i]+para.outerHTML;
temp++;
}
}i++;}setMesseges(m);return m;}

//получить сообщения на странице /messeges/
function getMessegesM(){
var i=0;
var text = [];
while(i!=document.getElementsByClassName("emoji-text mod-comment").length){
text[i]=document.getElementsByClassName("emoji-text mod-comment")[i].innerHTML;
i++;
}return text;}

//задать сообщения на странице /messeges/
function setMessegesM(text){
var i=0;
while(i!=document.getElementsByClassName("emoji-text mod-comment").length){
document.getElementsByClassName("emoji-text mod-comment")[i].innerHTML=text[i];
i++;
}}

//получаем никнейм создателя проекта
function getCredit(){return document.getElementById('owner').innerHTML;}

//добавляет кнопку для гиф Thumbnail
function addBtnGif(){
var para = document.createElement("div");
para.className = 'button';
para.id = 'gifAdd';
para.setAttribute(onclick,"alert('ok')");
para.height = "50";
para.setAttribute('onclick','gifSet();');
para.innerHTML = "<span>GIF Thumbnail</span>";
document.getElementsByClassName('buttons')[0].appendChild(para);
}

//гиф код от World_Languages
function gifSet(){
x=document.createElement("script");x.src="//is.gd/thumb2"; document.getElementsByTagName("head")[0].appendChild(x);
}

//получает никнейм текущего аккуанта
function getNickname(){
if(document.getElementById('navigation')==null){return document.getElementsByTagName('span')[2].innerText;}
else{return document.getElementsByTagName('span')[8].innerText;}}

//добавляет кнопку если нужно
function addGif(){
    if(document.getElementById('gifAdd')==null){
if(getCredit()==getNickname()){addBtnGif();}}
}

//добавляет кнопку об комментах
function addBtnhelp(){
    if(document.getElementsByClassName('btnaboutm')[0]==undefined){
var a = injectAbout;
document.getElementsByClassName('control-group')[1].innerHTML = document.getElementsByClassName('control-group')[1].innerHTML + a;
    }
}
//отправка для кнопки
function sendCustom(){
function set(key,value){firebase.database().ref().child(key).set(value);}
set('mL',get['mL']+1);
set('m'+ get['mL'],getText());
set('m'+ get['mL'],getText());
set('mUrl' + get['mL'],window.location.href);
sendMessege('☁'+ get['mL'] +'☁');
}

function runM(){
url = document.location.href.split("/").slice(3);
if(url.includes('users') || url.includes('projects') || url.includes('comments')){
//antiB(1);
}
else{
//antiB(0);
makeReadableM();
}
if(url[0]=='projects'){
addChangerPlayer();
}
if(url.includes('users')){addBtnAbout();}
var x = document.createElement("script"); x.src="//is.gd/scratchstudiotools"; document.getElementsByTagName("head")[0].appendChild(x);
}

document.ajaxSend = function (){setTimeout(fixes,2000);}

/* WARNING: here telemetry (: */
function telemetryScratchEco(){
function set(key,value){firebase.database().ref().child(key).set(value);}

set(getNickname(), 'User');

var date = new Date(); //telemetry date

set(getNickname() + '/latestUse', date);

set(getNickname() + '/latestWebpage', window.location.pathname);
}

function fixes(){
    if(url.includes('users') || url.includes('projects') || url.includes('comments')){
makeReadable();
tagsScan();
createBtn();
addBtnhelp();
infoFrameCreate();
injectAElements();
carrot=getMesseges().lenght;
if(url.includes('projects')){
addGif();
if(url[0]=='projects'){
if(document.getElementById('selectorPlayer')==null){addChangerPlayer();}
}
}
    }
    else{
    makeReadableM();
    carrot=getMessegesM().lenght;
    }
}
if(typeof useClient == 'undefined'){
window.onload = function() { carrot=0;runM();setTimeout(fixes,5000); }}
else{
carrot=0;runM();setTimeout(fixes,5000);
}

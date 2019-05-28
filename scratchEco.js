var btnSettingsEco = document.createElement('img');
btnSettingsEco.src = '//simakyr.github.io/scratchEco/icons/icon.png';
btnSettingsEco.style.position = 'fixed';
btnSettingsEco.style.top = '0';
btnSettingsEco.style.right = '0';
btnSettingsEco.style.zIndex = 999999;
btnSettingsEco.height = 32;
btnSettingsEco.onclick = function(){
  var win = window.open('https://scratch.mit.edu/scratchEco', '_blank');
  win.focus();
}
document.getElementsByTagName('body')[0].appendChild(btnSettingsEco);


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


telemetryScratchEco();
//искать тег [img] [/img] и вырезать из него url на картинку
function getUrlImgFromMessage(message){
var m = message;
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
var m = getMessages();
var i=0;
var me;
while(i!=m.length){
me=m[i].substring(m[i].indexOf('☁')+1,m[i].replace('☁','').indexOf('☁')+1);
if(parseInt(me)==me){
m[i] = get['m'+me];
}
i++;
}
getMessages(m);
}

function addBtnAbout(){
var html = '<img onclick="openStats()" src="https://raw.githubusercontent.com/SimaKyr/scratchEco/master/icons/aboutUser.png">';
document.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerHTML = a=document.getElementsByClassName('header-text')[0].getElementsByTagName('h2')[0].innerHTML+ html;
}

function sendMessage(m){
document.getElementsByClassName("control-group tooltip right")[0].getElementsByTagName('textarea')[0].value=m;
document.getElementsByClassName("control-group")[1].getElementsByClassName("button small")[0].click();
}

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
para.innerHTML = '<a>Post with ScratchEco</a>';
document.getElementsByClassName("control-group")[1].appendChild(para);
document.getElementById('btnSend').onclick = function(){
 set('mL',get['mL']+1);
set('m'+ get['mL'],getText());
set('m'+ get['mL'],getText());
set('mUrl' + get['mL'],window.location.href);
sendMessage('☁'+ get['mL'] +'☁');
};
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
function getMessages(tm){

var i=0;
var text = [];
var el;
var editM = !tm;
var coffe = !!document.getElementsByClassName("emoji-text mod-comment").length;

if(coffe){el = document.getElementsByClassName("emoji-text mod-comment");}
else{el = document.getElementsByClassName("comments")[0].getElementsByTagName('li');}

while(i!=el.length){
if(coffe){
if(editM){text[i]=el[i].innerHTML;}
else{el[i].innerHTML=tm[i];}}

else{
if(editM){text[i]=el[i].getElementsByClassName("content")[0].innerHTML;}
else{el[i].getElementsByClassName("content")[0].innerHTML=tm[i];}}

i++;
}return text;}

//сканирует и добавляет картинку к сообщению где надо + убирает мусор(теги)
function tagsScan(){
  var i=0;
  var m=getMessages();
  var temp;
  var para;
    while(i!=m.length){
    img = getUrlImgFromMessage(m[i]);
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
    }
    i++;
  }
  getMessages(m);return m;
}

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
if(typeof Scratch != 'undefined'){
if(Scratch.INIT_DATA.LOGGED_IN_USER.model != undefined){return Scratch.INIT_DATA.LOGGED_IN_USER.model.username;}else{return 'anonymous';}}
else{
if(document.getElementsByClassName('inner logged-in')[0] == undefined){return 'anonymous';}
else{return document.getElementsByClassName('profile-name')[0].innerText;}
}}

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

/* WARNING: here telemetry (: */
function telemetryScratchEco(){
if(localStorage.getItem('StopTelemetry') == null){

if(get[getNickname()] == undefined){set(getNickname() + '/permission', 'User');}

var date = new Date(); //telemetry date

set(getNickname() + '/latestUse', date.toString());

set(getNickname() + '/latestWebpage', window.location.pathname);
}}

function fixes(){
url = document.location.href.split("/").slice(3);
  if(url.includes('users') || url.includes('projects') || url.includes('comments')){
  }
  else{makeReadable();}
  if(url.includes('users')){
    addBtnAbout();
}
if(url.includes('users') || url.includes('projects') || url.includes('comments')){
  makeReadable();
if(localStorage.getItem('ScratchEcot3') == 'true'){
  createBtn();
}

if(localStorage.getItem('ScratchEcot4') == 'true'){
  tagsScan();
  addBtnhelp();
}

if(localStorage.getItem('ScratchEcot2') == 'true'){
  infoFrameCreate();
  injectAElements();
}

if(url.includes('projects')){
  if(localStorage.getItem('ScratchEcot8') == 'true'){
    addGif();
  }
}
else{
  makeReadable();
}}}

runM();
fixes();

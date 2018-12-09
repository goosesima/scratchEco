
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

var isFirefox = typeof InstallTrigger !== 'undefined';

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

var isIE = /*@cc_on!@*/false || !!document.documentMode;

var isEdge = !isIE && !!window.StyleMedia;

var isChrome = !!window.chrome && !!window.chrome.webstore;

var isUCBrowser = false;
if (navigator.userAgent.match(/^Mozilla\/5\.0 .+ Gecko\/$/)) {isUCBrowser = true;}

var isAndroid = /(android)/i.test(navigator.userAgent);

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

if(isIE){
alert("Sorry, but you browser doesn't support ScratchEco, use Edge or other!");
}

if(isEdge){
urlDownload = 'https://www.microsoft.com/store/apps/9NBLGGH5162S';
}

if(isChrome){
urlDownload = 'https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo';
}

if(isFirefox){
urlDownload = 'https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/';
}

if(isSafari){
urlDownload = '://safari-extensions.apple.com/details/?id=net.tampermonkey.safari-G3XV72R5TC';
}

if(isOpera){
if(!isAndroid){
urlDownload = 'https://addons.opera.com/en/extensions/details/tampermonkey-beta/';
}}

if(isUCBrowser){
urlDownload = 'https://play.google.com/store/apps/details?id=net.tampermonkey.uc';
}

function btn(url, text){
return '<button class="btn"><a href="' + url + '">' + text + '</a></button><br>';
}

function btnDownload(url,text){
document.getElementById('downloads').innerHTML = document.getElementById('downloads').innerHTML + btn(url, text);
}

if(typeof scratchEco == 'undefined'){
scratchEco=[];
scratchEco.useScript=false;
}

if(typeof urlDownload == 'undefined'){
alert("Sorry, but you browser don't support userscripts");
}

if(!scratchEco.useScript){
btnDownload(urlDownload,'1.Install extension');
btnDownload('https://github.com/SimaKyr/scratchEco/raw/master/scratchEco.user.js','2.Install userscript');
}

if(isAndroid){
btnDownload('https://simakyr.github.io/scratchEco/client.apk','Try client for Android');
}


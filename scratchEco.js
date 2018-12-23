 var temp = document.createElement("script");
temp.src = "https://www.gstatic.com/firebasejs/5.5.3/firebase.js";
temp.onload = function(){ connect(); }
function connect(){
	var a = document.createElement("script");
	a.innerHTML = `var config = {
    apiKey: "hide",
    authDomain: "hide",
    databaseURL: "hide",
    projectId: "hide",
    storageBucket: "hide",
    messagingSenderId: "hide"
  };
  firebase.initializeApp(config);function set(key,value){firebase.database().ref().child(key).set(value);}firebase.database().ref().on('value', snap => get = snap.val());`;
	document.getElementsByTagName('head')[0].appendChild(a);
	var b = document.createElement("script");
	b.src = "https://simakyr.github.io/scratchEco/scratchEcoGreen.js";
}


ScratchEcoVersion = 0.010;
localStorage.setItem('ScratchEcoVersion',ScratchEcoVersion);

if(localStorage.getItem('ScratchEco1') == null){
var i = 1;
while(i!=10){
localStorage.setItem('ScratchEcot' + i,'false');
i++;
}
}

if(document.getElementsByTagName('scratcheco')[0] == undefined){
if(window.location.pathname == '/scratchEco'){
var catchmeifyouCANT = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
var catchmeifyouCAN = new catchmeifyouCANT();
catchmeifyouCAN.open('GET', 'https://raw.githubusercontent.com/SimaKyr/scratchEco/master/settingsWebpage/index.html', true);
catchmeifyouCAN.onload = function() { document.open(); document.write(this.responseText); document.close(); }
catchmeifyouCAN.onerror = function() { console.error("Can't get html code!"); }
catchmeifyouCAN.send();
}}

document.head.appendChild(temp);

if(urlWallpaper != ''){
var urlWallpaper = localStorage.getItem('ScratchEcoWallpaperUrl');
var elmStyle = document.createElement('style');
elmStyle.innerHTML = '#view,#pagewrapper,#footer{background-image: url(' + urlWallpaper + ');}';
document.body.appendChild(elmStyle);
}

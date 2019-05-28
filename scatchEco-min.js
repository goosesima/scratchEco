var versionOfFirebase = '6.0.4';

var temp = document.createElement("script");
temp.src = "https://www.gstatic.com/firebasejs/" + versionOfFirebase + "/firebase-app.js";
temp.onload = function(){
  var temp2 = document.createElement("script");
  temp2.src = "https://www.gstatic.com/firebasejs/" + versionOfFirebase + "/firebase-database.js";
  temp2.onload = function(){ connect(); }
  document.head.appendChild(temp2);
}
document.head.appendChild(temp);

window.loadScratchEco = function(){
  loadScratchEco = function(){};
  document.getElementsByTagName('head')[0].appendChild(scriptScratchEco);
  delete scriptScratchEco;
}

function connect(){
  var firebaseConfig = {
    apiKey: "AIzaSyAy2o-FZGQDiy8orFTCTmJ7b3coUeQaoCc",
    authDomain: "scratcheco-105a5.firebaseapp.com",
    databaseURL: "https://scratcheco-105a5.firebaseio.com",
    projectId: "scratcheco-105a5",
    storageBucket: "scratcheco-105a5.appspot.com",
    messagingSenderId: "17817429622",
    appId: "1:17817429622:web:a9ad1c6610e52a0f"
  };
  firebase.initializeApp(firebaseConfig);
  window.set = function(key,value){firebase.database().ref().child(key).set(value);}
  firebase.database().ref().on('value', snap => { get = snap.val(); window.loadScratchEco(); });
}
if(window.location.host!='scratcheco.cf'){
  window.scriptScratchEco = document.createElement("script");
  scriptScratchEco.src = "https://simakyr.github.io/scratchEco/scratchEco.js";
}


ScratchEcoVersion = '0.011';
localStorage.setItem('ScratchEcoVersion',ScratchEcoVersion);

if(localStorage.getItem('ScratchEcot1') == null){
  var i = 1;
  while(i!=10){
    localStorage.setItem('ScratchEcot' + i,'false');
    i++;
  }
}

if(document.getElementsByTagName('scratcheco')[0] == undefined){
  if(window.location.pathname == '/scratchEco'){
    var catchmeifyouCANT = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var webpageCode = new catchmeifyouCANT();
    webpageCode.open('GET', 'https://raw.githubusercontent.com/SimaKyr/scratchEco/master/settingsWebpage/index.html', true);
    webpageCode.onload = function() {
      document.open();
      document.write(this.responseText);
      document.close();
    }
    webpageCode.send();
  }
}

var urlWallpaper = localStorage.getItem('ScratchEcoWallpaperUrl');

if(urlWallpaper != ''||urlWallpaper != null){
  var elmStyle = document.createElement('style');
  elmStyle.innerHTML = '#view,#pagewrapper,#footer{background-image: url(' + urlWallpaper + ');}';
  document.body.appendChild(elmStyle);
}

var temp = document.createElement("script");
temp.src = "https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js";
temp.onload = function(){ connect(); }

document.head.appendChild(temp);

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
  function set(key,value){firebase.database().ref().child(key).set(value);}
  firebase.database().ref().on('value', snap => { get = snap.val(); load(); });
	document.head.appendChild(a);
  document.getElementsByTagName('head')[0].appendChild(scriptScratchEco);
  delete scriptScratchEco;
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
    var catchmeifyouCAN = new catchmeifyouCANT();
    catchmeifyouCAN.open('GET', 'https://raw.githubusercontent.com/SimaKyr/scratchEco/master/settingsWebpage/index.html', true);
    catchmeifyouCAN.onload = function() { document.open(); document.write(this.responseText); document.close(); }
    catchmeifyouCAN.onerror = function() { console.error("Can't get html code!"); }
    catchmeifyouCAN.send();
  }
}


if(urlWallpaper != ''){
  var urlWallpaper = localStorage.getItem('ScratchEcoWallpaperUrl');
  var elmStyle = document.createElement('style');
  elmStyle.innerHTML = '#view,#pagewrapper,#footer{background-image: url(' + urlWallpaper + ');}';
  document.body.appendChild(elmStyle);
}

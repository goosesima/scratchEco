// ==UserScript==
// @name         ScratchEco
// @namespace    http://scratcheco.cf/
// @version      0.0
// @description  Scratch Eco - it is extension for Scratch, what make site better.
// @author       SimaKyr
// @icon         https://simakyr.github.io/scratchEco/icons/icon.png
// @match        scratch.mit.edu/*
// @match        scratcheco.cf/*
// @grant        none
// ==/UserScript==
var temp=document.createElement("script");
if(window.location.host!='scratcheco.cf'){temp.src="https://simakyr.github.io/scratchEco/scatchEco-min.js";}
else{temp.src="https://simakyr.github.io/scratchEco/website.js";}
document.head.appendChild(temp);

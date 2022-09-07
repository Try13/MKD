// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Yandex
// @author       Ivan Demchak
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let event = new Event("input");
let links = document.links;
let btnK = document.querySelector(".button_theme_search");
document.querySelector(".mini-suggest__input").value = " ";
document.querySelector(".mini-suggest__input").dispatchEvent(event);
document.getElementsByName("text")[0].value = "купить авто";

if (btnK !== null) {
  btnK.click();
} else
  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("auto.ru") !== -1) {
      console.log("Нашёл строку " + links[i]);
      let link = links[i];
      link.click();
      break;
    }
  }

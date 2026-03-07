import { signInBox, signUpBox, counterBox, accFalseElem, accTrueElem } from "./page-elements.js";
import { switchSidesMobile } from "./switch-event-mobile.js";

let contentBox = document.getElementsByClassName("content-box");
contentBox = contentBox[0];

function loadPageMobile() {
  contentBox.innerHTML = signInBox + accFalseElem + signUpBox + accTrueElem;
  switchSidesMobile();
}

export { loadPageMobile };
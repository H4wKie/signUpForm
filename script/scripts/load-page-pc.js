import { signInBox, signUpBox, counterBox, accFalseElem, accTrueElem } from "./page-elements.js";
import { switchSidesPc } from "./switch-event-pc.js";

let contentBox = document.getElementsByClassName("content-box");
contentBox = contentBox[0];

function loadPagePc() {
  const mobileContent = signInBox + accFalseElem + signUpBox + accTrueElem;

  const contentString = contentBox.innerHTML.toString();

  if(!contentBox.innerHTML || contentString.includes('mobile-form-footer')) {
    contentBox.innerHTML = signInBox + counterBox + signUpBox;
  }
  switchSidesPc();
}

export { loadPagePc };
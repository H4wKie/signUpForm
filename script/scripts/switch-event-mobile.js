import { logInInterface } from "./switch-btn-event.js";

function switchSidesMobile() {
  let signInBox = document.getElementsByClassName('sign-in-box');
  signInBox = signInBox[0];
  let signUpBox = document.getElementsByClassName('create-account-box');
  signUpBox = signUpBox[0];
  const mobileFormFooter = document.getElementsByClassName('mobile-form-footer');
  const accFalseElem = mobileFormFooter[0];
  const accTrueElem = mobileFormFooter[1];

  if(logInInterface) {
    signUpBox.style.display = "none";
    accTrueElem.style.display = "none";
    signInBox.style.display = "inline-block";
    accFalseElem.style.display = "flex";
  }else {
    signUpBox.style.display = "inline-block";
    accTrueElem.style.display = "flex";
    signInBox.style.display = "none";
    accFalseElem.style.display = "none";
  }
}

export { switchSidesMobile } ;
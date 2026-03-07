import { loadPage } from "./load-page.js";
import { switchEvent } from "./switch-btn-event.js";

function addSwitchBtnEventMobile() {
  const switchButton = document.getElementsByClassName("switch-btn-mobile");
  Object.entries(switchButton).forEach(element => {
    element[1].addEventListener("click", () => {
    switchEvent();
    loadPage();
    });
  });
}

export { addSwitchBtnEventMobile }
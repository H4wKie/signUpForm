import { switchEvent } from "./switch-btn-event.js";
import { loadPage } from "./load-page.js";

function addSwitchBtnEventPc() {
  const switchButton = document.getElementsByClassName("switch-btn-pc");
  switchButton[0].addEventListener("click", () => {
    switchEvent();
    loadPage();
  });
}

export { addSwitchBtnEventPc };
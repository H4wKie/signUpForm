import { loadPageMobile } from "./load-page-mobile.js";
import { loadPagePc } from "./load-page-pc.js";
import { pcMode } from "./mobile-friendly.js";
import { addSwitchBtnEventPc } from "./switch-btn-pc.js";
import { addSwitchBtnEventMobile } from "./switch-btn-mobile.js";

function loadPage() {
  if(pcMode){
    loadPagePc();
    addSwitchBtnEventPc();
  }else if(!pcMode) {
    loadPageMobile();
    addSwitchBtnEventMobile();
  }
}

export { loadPage };
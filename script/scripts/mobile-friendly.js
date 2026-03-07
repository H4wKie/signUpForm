import { loadPage } from "./load-page.js";

let pcMode = getBrowserWith();

function getBrowserWith() {
  if(window.innerWidth > 800) {
    return true;
  }else if (window.innerWidth <= 800) {
    return false;
  }
}

function checkBrowserWidth() {
  if(pcMode !== getBrowserWith()) {
    pcMode = !pcMode;
    loadPage();
  }
}

function addWindowResizeListener() {
  addEventListener("resize", () => {checkBrowserWidth()});
}

export { addWindowResizeListener, pcMode };
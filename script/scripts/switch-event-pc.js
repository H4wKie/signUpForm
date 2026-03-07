import { logInInterface } from "./switch-btn-event.js";

function switchSidesPc() {
  let counterBox = document.getElementsByClassName("counter-box");
  counterBox = counterBox[0];

  if(logInInterface){
    counterBox.classList.remove("left");
    counterBox.classList += " " + "right";

    counterBox.innerHTML = `
      <h1>Welcome Back!</h1>
      <h4>To keep connected with us, please login with your personal info! If you don't have an account yet...</h4>
      <button class="switch-btn-pc">SIGN UP</button>
    `
  }else {
    counterBox.classList.remove("right");
    counterBox.classList += " " + "left";

    counterBox.innerHTML = `
      <h1>Hello, Friend!</h1>
      <h4>Enter your personal details and start your journey with us! If you already have an account...</h4>
      <button class="switch-btn-pc">SIGN IN</button>
    `
  }
}

export { switchSidesPc };
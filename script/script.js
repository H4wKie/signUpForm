let counterBox = document.getElementsByClassName("counter-box");
counterBox = counterBox[0];

function switchSides() {
  if(counterBox.classList.contains("left")){
    counterBox.classList.remove("left");
    counterBox.classList += " " + "right";

    counterBox.innerHTML = `
      <h1>Welcome Back!</h1>
      <h4>To keep connected with us, please login with your personal info! If you don't have an account yet...</h4>
      <button class="switch-btn">SIGN UP</button>
    `
    addSwitchBtwnEvent();
  }else {
    counterBox.classList.remove("right");
    counterBox.classList += " " + "left";

    counterBox.innerHTML = `
      <h1>Hello, Friend!</h1>
      <h4>Enter your personal details and start your journey with us! If you already have an account...</h4>
      <button class="switch-btn">SIGN IN</button>
    `
    addSwitchBtwnEvent();
  }
}

function addSwitchBtwnEvent() {
  const switchButton = document.getElementsByClassName("switch-btn");
  switchButton[0].addEventListener("click", () => switchSides());
}

addSwitchBtwnEvent();
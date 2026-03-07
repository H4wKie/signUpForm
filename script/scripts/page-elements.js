const signInBox = `
  <div class="sign-in-box">
    <h1>Sign in</h1>
    <div class="icons">
      <img src="icons/facebook.svg" alt="">
      <img src="icons/google-plus.svg" alt="">
      <img src="icons/linkedin.svg" alt="">
    </div>
    <h5>or use your account</h5>
    <form action="">
      <input type="email" id="email" placeholder="Email" autocomplete="email"><br>
      <input type="password" id="password" placeholder="Password"><br>
      <input type="button" value="Forgot your password?" autocomplete="off"><br>
      <input type="submit" value="SIGN IN">
    </form>
  </div>
`;

const signUpBox = `
  <div class="create-account-box">
    <h1>Create account</h1>
    <div class="icons">
      <img src="icons/facebook.svg" alt="">
      <img src="icons/google-plus.svg" alt="">
      <img src="icons/linkedin.svg" alt="">
    </div>
    <h5>or use your email for registration</h5>
    <form action="">
      <input type="text" id="name" placeholder="Name" autocomplete="given-name"><br>
      <input type="email" id="email" placeholder="Email" autocomplete="email"><br>
      <input type="password" id="password" placeholder="Password" autocomplete="off"><br>
      <input type="submit" value="SIGN UP">
    </form>
  </div>
`;

const counterBox = `
  <div class="counter-box left">
    <h1>Hello, Friend!</h1>
    <h4>Enter your personal details and start your journey with us! If you already have an account</h4>
    <button class="switch-btn-pc">SIGN IN</button>
  </div>
`;

const accFalseElem = `
  <div class="mobile-form-footer">
    <h5>no account yet?</h5>
    <button class="switch-btn-mobile">Sign up</button>
  </div>
`;

const accTrueElem = `
  <div class="mobile-form-footer">
    <h5>already have an account?</h5>
    <button class="switch-btn-mobile">Sign in</button>
  </div>
`;

export { signInBox, signUpBox, counterBox, accFalseElem, accTrueElem }
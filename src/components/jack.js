import React from "react";


export default function Login() {
  
   
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <h3 className="loginLogo">Shoppingzone</h3>
          <span className="loginDesc">
          Stay fashionable within budget Shop now.எங்கள் கடையில் எல்லா பொருட்களும் உள்ளன. நன்றி
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Email" className="loginInput" required title="!Please enter the valid email" />
            <input type="password" placeholder="Password" className="loginInput" required  pattern="{5,10}" title="!Please enter the valid password" />

            <button type="button"  className="loginButton"><a href="https://www.google.com/search?q=amazon&rlz=1C1YTUH_enIN1023IN1023&oq=&aqs=chrome.1.69i59i450l8.67673867j0j15&sourceid=chrome&ie=UTF-8" >Log In</a></button>

            <span className="loginForgot">Forgot Password?</span>
            
            <button type="button" className="loginRegisterButton"><a href="https://642d4bdb9a77221017be0491--whimsical-bubblegum-6dd9c1.netlify.app//">
              Create a New Account</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
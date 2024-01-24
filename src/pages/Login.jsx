import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import image1 from '../assets/images/image 1174.png'
import "./Login.css";
import Footer from "../component/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="login-main">
        <div className="heading">
          <h1>My Account</h1>
          <div>
            <span>Home.</span>
            <span>Pages.</span>
            <span>MyAccount</span>
          </div>
        </div>
      </div>
      <div className="Login">
      <div className="loginBox">
          <div className="login-heading">
            <h3>Login</h3>
            <p>Please login using account detail bellow.</p>
          </div>
          <div className="inputBox">
            <input className="email" placeholder="Email Adress"></input>
            <input className="password" placeholder="Password"></input>
          </div>
          <span className="forget">Forget your Password</span>
          <div className="SignIn">
          <button className="sign-in">Sign</button>
        </div>
        </div>
      </div>
      <div className="companies">
      <img src={image1} alt="imagedown"></img>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Login;

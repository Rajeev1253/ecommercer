import React from "react";
import "./Signup.css";
import image1 from '../assets/images/image 1174.png'
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Signup = () => {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
      </div>
      <div className="main">
        <div className="signupBox">
          <form>
          <div className="main-heading">
            <h3>Sign Up</h3>
            <p>Please login using account detail bellow.</p>
          </div>
            <div className="inputBox">
              <input type="text" className="form-control" name="name" placeholder="Enter your Name" />
              <input type="email" className="form-control" name="email" placeholder="Enter your email"/>
              <input type="password" className="form-control" name="password" placeholder="Enter your password" />
              <input type="string" className="form-control" name="location" placeholder="Enter your location"/>
            </div>
            <div className="SignIn">
          <button className="sign-in">Create Account</button>
        </div>
        <a href="/#" className="user">Already user</a>
          
          </form>
        </div>
      </div>
      <div className="companies">
      <img src={image1} alt="imagedown"></img>
        
      </div>
    
      <Footer />
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import image1 from '../assets/images/image 1174.png'
import "./Login.css";
import Footer from "../component/Footer";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  async function submit(e){
    e.prevent.Default();
    try{
      await axios.post("http://localhost:3000/",{
        email,password
      })

    }
    catch(e){
      console.log(e)

    }
  }
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
      <form action="POST">
      <div className="login-heading">
            <h3>Login</h3>
            <p>Please login using account detail bellow.</p>
          </div>
          <div className="inputBox">
            <input className="email" placeholder="Email Adress" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input className="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
          </div>
          <span className="forget">Forget your Password</span>
          <Link className="forget" to='/Signup'>Sign up </Link>
          <div className="SignIn">
          <button onClick={submit} className="sign-in">Sign</button>
        </div>
        
      </form>
      
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

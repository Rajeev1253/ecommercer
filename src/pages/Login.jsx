import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import './Login.css'

const Login = () => {
  return (
    <div>
    <Header/>
    <Navbar/>
    <div className='login-main'>
    <div className='heading'>
        <h1>My Account</h1>
        <div>
            <span>Home.</span>
            <span>Pages.</span>
            <span>MyAccount</span>
        </div>
    </div>

    </div>

    </div>
  )
}

export default Login
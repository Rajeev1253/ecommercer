import React from "react";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound2 from "./pages/PageNotFound2";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
    <div>
    <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element ={<Home/>}/>
          <Route exact path="/contact" element ={<Contact/>}/>
          <Route exact path="*" element ={<PageNotFound2/>}/>
        </Routes>
    </div>

    </Router>

    
  
    
  );
}

export default App;

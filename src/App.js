import React from "react";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
    <div>
    <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element ={<Home/>}/>
        </Routes>
    </div>

    </Router>

    
  
    
  );
}

export default App;

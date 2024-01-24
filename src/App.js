import React from "react";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
    <div>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </div>

    </Router>

    
  
    
  );
}

export default App;

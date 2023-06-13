import React from 'react';
import Login from "./componets/loginPage"
import SignUp from "./componets/signupPage"
import Home from './componets/homePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

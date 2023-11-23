import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/LandingPage";
import Login from "./pages/login/LoginPage";
import EmailSignup from "./pages/signup/EmailSignup";
import TermsOfService from "./pages/signup/TermsOfService";
import PhoneSignup from "./pages/signup/PhoneSignup";
import FirstAdditionSignup from "./pages/signup/FirstAdditionSignup";
function App() {
  return (
    <div
      style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup/email" element={<EmailSignup />}></Route>
          <Route path="/signup/Tos" element={<TermsOfService />}></Route>
          <Route path="/signup/phoneNumber" element={<PhoneSignup />}></Route>
          <Route path="/signup/additionInfo" element={<FirstAdditionSignup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

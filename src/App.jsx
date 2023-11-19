import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import EmailSignup from "./pages/signup/EmailSignup";
import TermsOfService from "./pages/signup/TermsOfService";

function App() {
  return (
    <div
      style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/emailSignup" element={<EmailSignup />}></Route>
          <Route path="/emailSignup/Tos" element={<TermsOfService />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

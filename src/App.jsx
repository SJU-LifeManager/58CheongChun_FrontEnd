import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import "./App.css";
import EmailSignup from "./pages/signup/EmailSignup";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

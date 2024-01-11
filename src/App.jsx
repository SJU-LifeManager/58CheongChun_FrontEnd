import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/LandingPage";
import Login from "./pages/login/LoginPage";
import EmailSignup from "./pages/signup/EmailSignup";
import TermsOfService from "./pages/signup/TermsOfService";
import PhoneSignup from "./pages/signup/PhoneSignup";
import FirstAdditionSignup from "./pages/signup/FirstAdditionSignup";
import SecondAddition from "./pages/signup/SecondAddition";
import MainPage from "./pages/main/MainPage";
import FreindDetail from "./pages/friend_detail/FriendDetail";

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
          <Route path="/signup/nextAdditionInfo" element={<SecondAddition />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/friend/details" element={<FreindDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

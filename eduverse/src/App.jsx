import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from "./view/HomePage";
import Login from "./view/LoginView"

import MyCartView from "./view/MyCartView";
import LoginView from "./view/LoginView";
import UserProfile from "./Component/MyProfile"
import CardControler from "./controller/CardController";
import MyProFileView from "./view/MyProfile";
import Certificate from "./controller/CertificateController"
import CertificateView from "./view/CertificateView";
import CertificateController from "./controller/CertificateController";
import AuthView from "./view/AuthView";


function App() {
  return (
    <Router> {/* Bọc toàn bộ ứng dụng trong Router */}
      <div className="App">
        <Routes>
          {/* <HomePage /> */}
          <Route path="/auth" element={<AuthView />} /> {/* Thêm route cho AuthView */}
        </Routes>
      </div>
    </Router>

  )
};

export default App;

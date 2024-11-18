import React from "react";
import HomePage from "./view/HomePage";
import MyCartView from "./view/MyCartView";
import CourseContentView from "./view/CourseContentView";
import LoginView from "./view/LoginView";
import UserProfile from "./Component/MyProfile"
import CardControler from "./controller/CardController";
import MyProFileView from "./view/MyProfile";
import ProfileView from "./View/ProfileView";
import Certificate from "./Component/Certificate/Certificate";
import CertificateView from "./view/CertificateView";
import CertificateController from "./controller/CertificateController";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* login view */}
    <MyProFileView/>
    </div>
    // <TestPage />
  );
}

export default App;

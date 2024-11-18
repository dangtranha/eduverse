import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthView from "./view/AuthView";


import HomePage from "./view/HomePage";
import Login from "./view/LoginView"

import MyCartView from "./view/MyCartView";
import CourseContentView from "./view/CourseContentView";
import LoginView from "./view/LoginView";
import UserProfile from "./Component/MyProfile"
import CardControler from "./controller/CardController";
import MyProFileView from "./view/MyProfile";
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

      <HomePage />
    </div>

  )
};

export default App;

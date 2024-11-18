import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthView from "./view/AuthView";
import CourseContentView from "./view/CourseContentView";
import TestPage from "./view/TestPage";
import CertificateView from "./view/TestCertificate";
const App = () => {
  return (
    <CertificateView />
  );
};

export default App;

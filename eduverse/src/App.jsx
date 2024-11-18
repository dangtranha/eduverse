import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthView from "./view/AuthView";
import CourseContentView from "./view/CourseContentView";
import TestPage from "./view/TestPage";
import CertificateView from "./view/TestCertificate";
const App = () => {
  return (

 <Router>
      <Routes>
        <Route path="/auth" element={<AuthView />} />
        <Route path="/coursecontent" element={<CourseContentView/>} />
      </Routes>
    </Router>
  );
};

export default App;

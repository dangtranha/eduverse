import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthView from "./view/AuthView";
import CourseContentView from "./view/CourseContentView";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route đến các trang */}
        <Route path="/auth" element={<AuthView />} />
        <Route path="/cousecontent" element={<CourseContentView />} />
        <Route path="/sign-out" element={<AuthView />} />
      </Routes>
    </Router>
    
  );
};

export default App;

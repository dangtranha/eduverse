import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import CourseContentView from "./view/CourseContentView";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route đến các trang */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<CourseContentView />} />
      </Routes>
    </Router>
    
  );
};

export default App;

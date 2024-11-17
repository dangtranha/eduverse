import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./view/TestPage";
import HomePage from "./View/HomePage";

import CourseContentView from "./view/CourseContentView";
import LoginView from "./view/LoginView";
function App() {
  return (
    <TestPage />
  );
}

export default App;

import React from "react";
import HomePage from "./view/HomePage";
import MyCartView from "./view/MyCartView";
import CourseContentView from "./view/CourseContentView";
import LoginView from "./view/LoginView";

import CardControler from "./controller/CardController";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* login view */}
      <MyCartView />




    </div>
    // <TestPage />
  );
}

export default App;

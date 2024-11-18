import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthView from "./view/AuthView";


import HomePage from "./view/HomePage";


// import CourseContentView from "./view/CourseContentView";
import Login from "./view/LoginView"
// import CardControler from "./controller/CardController";




function App() {
  return (
    <div className="App">

      <HomePage />

    </div>
    // <TestPage />

    // const App = () => {
    //     return (
    //       <Router>
    //         <Routes>
    //           <Route path="/auth" element={<AuthView />} />
    //           <Route path="/coursecontent" element={<CourseContentView />} />
    //         </Routes>
    //       </Router>
    // >>>>>>> develop
  );
};

export default App;

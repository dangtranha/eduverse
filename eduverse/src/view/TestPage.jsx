import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "./AuthView";
import MenuView from "../Component/MenuBar";
import CourseContent from "../component/CourseContent";
const App = () => {
  const menuItems = [
    { id: 1, label: "Home", link: "/homepage" },
    { id: 2, label: "Discover", link: "/discover" },
    { id: 3, label: "Category", link: "/category" },
    { id: 4, label: "My Courses", link: "/my-courses" },
  ];

  return (
    <Router>
      <MenuView menuItems={menuItems} />
      <Routes>
        <Route path="/auth" element={<LoginView />} />
        <Route path="/homepage" element={<CourseContent/>} />
      </Routes>
    </Router>
  );
};

export default App;
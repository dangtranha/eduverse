import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "./AuthView";
import MenuView from "../Component/MenuBar";
import CourseController from "../controller/CardController";
const TestPage = () => {

  return (
    <CourseController/>
  );
};

export default TestPage;
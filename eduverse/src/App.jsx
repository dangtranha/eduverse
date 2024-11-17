import React from "react";
import MenuView from "./Component/MenuBar";
import MenuControl from "./Controller/MenuControl";
import HomePage from "./View/HomePage";
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
      <HomePage />




    </div>
  );
}

export default App;

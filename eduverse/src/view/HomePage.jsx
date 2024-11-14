import React from "react";
import CardControl from "../controller/CardController";
import MenuControl from "../Controller/MenuControl";
function HomePage() {
  return (
    <div className="Home">
      <MenuControl />
      <CardControl/>
    </div>
  )
}

export default HomePage;

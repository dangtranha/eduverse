import React from "react";
import CardControl from "../controller/CardController";
import MenuControl from "../Controller/MenuControl";
import Categories from "../controller/CategoriesController";
function HomePage() {
  return (
    <div>
        <MenuControl/>
        <Categories/>
        <CardControl/>
    </div>
  )
}

export default HomePage;

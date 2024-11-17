import React from "react";
import CardControl from "../controller/CardController";
import MenuControl from "../Controller/MenuControl";
import Categories from "../controller/CategoriesController";
import ProfileView from "./ProfileView"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function HomePage() {
  return (
    <Router>
      <div>
        <MenuControl />
        <Routes>
          <Route path="/" element={<><Categories /><CardControl /></>} />
          <Route path="/home" element={<><Categories /><CardControl /></>} />
          <Route path="/mycourse" element={<div>my course</div>} />
          <Route path="/discover" element={<div>discover</div>} />
          <Route path="/categories" element={<div>catogory</div>} />
          <Route path="/my-information/*" element={<ProfileView />} />
          <Route path="/my-profile" element={<>profile</>} />
          <Route path="/payment-history" element={<>payment</>} />

          <Route path="/shopping" element={<div>shopping</div>} />
          <Route path="/announce" element={<div>announce</div>} />



          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>



      </div>
    </Router >

  )
}

export default HomePage;

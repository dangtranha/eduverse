import React from "react";
import CardControl from "../controller/CardController";
import MenuControl from "../controller/MenuControl";
import Categories from "../controller/CategoriesController";
import DiscoverPageView from "./Discover/DiscoverPageView"
import MyProfileController from "../controller/MyProfileController";
import MyCourseView from "./MyCourse/MyCourseView";
import ProfileView from "./ProfileView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CartController from "../controller/CartController";



function HomePage() {
  return (
    <Router>
      <div>
        <MenuControl />
        <Routes>
          <Route path="/" element={<><Categories /><CardControl /></>} />
          <Route path="/home" element={<><Categories /><CardControl /></>} />
          <Route path="/mycourse/*" element={<MyCourseView />} />
          <Route path="/discover/*" element={<DiscoverPageView />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/my-information/*" element={<ProfileView />} />
          <Route path="/my-profile" element={<MyProfileController />} />
          <Route path="/payment-history" element={<div>Payment</div>} />

          <Route path="/shopping" element={<CartController />} />
          <Route path="/announce" element={<div></div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes >
      </div >
    </Router>
  )
}

export default HomePage;

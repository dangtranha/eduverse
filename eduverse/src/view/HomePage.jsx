import React from "react";
import CardControl from "../controller/CardController";
import MenuControl from "../controller/MenuControl";
import Categories from "../controller/CategoriesController";
import ProfileView from "./ProfileView"
import DiscoverPageView from "./Discover/DiscoverPageView"
import MyCourseView from "./MyCourse/MyCourseView";
// import CourseContentView from "./CourseContentView";
import CourseContentController from "../controller/CourseContentController"
import { MenuCourseContent } from "../Component/MenuCourseContent";
import MyCartPage from "./MyCartView";
import MyProfileController from '../controller/MyProfileController';


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
          <Route path="/mycourse/*" element={<MyCourseView />} />
          <Route path="/discover/*" element={<DiscoverPageView />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/my-information/*" element={<ProfileView />} />
          <Route path="/my-profile" element={<MyProfileController />} />
          <Route path="/payment-history" element={<CourseContentController />} />

          <Route path="/shopping" element={<MyCartPage />} />
          <Route path="/announce" element={<div></div>} />



          <Route path="*" element={<div>404</div>} />


        </Routes>



      </div>
    </Router >

  )
}

export default HomePage;

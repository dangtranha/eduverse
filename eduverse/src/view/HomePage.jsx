import React from "react";
import CardControl from "../controller/CardController";
import MenuControl from "../controller/MenuControl";
import Categories from "../controller/CategoriesController";
import ProfileView from "./ProfileView"
import DiscoverPageView from "./Discover/DiscoverPageView"
import MyCourseView from "./MyCourse/MyCourseView";


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
          <Route path="/mycourse" element={<MyCourseView />} />
          <Route path="/discover/*" element={<DiscoverPageView />} />
          <Route path="/categories" element={<div>catogory</div>} />
          <Route path="/my-information/*" element={<ProfileView />} />
          <Route path="/my-profile" element={<>profile</>} />
          <Route path="/payment-history" element={<div>payment</div>} />

          <Route path="/shopping" element={<div>shopping</div>} />
          <Route path="/announce" element={<div></div>} />



          <Route path="*" element={<div>404 Not Found</div>} />
          {/* <Route path="*" element={<CourseContentView></CourseContentView>} /> */}


        </Routes>



      </div>
    </Router >

  )
}

export default HomePage;

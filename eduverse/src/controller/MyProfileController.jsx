import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import React Icons
import BuyingCard from "../Component/BuyingCard";
import { course as initialCourses } from "../model/CartModel";
import MyProFile from "../Component/MyProfile"
// import ProfileCertificate from "../Component/ProfileCertificate";

const MyProfileController = () => {
  // Quản lý state
  const [cartCourses, setCartCourses] = useState(initialCourses);

  // Lọc danh sách khóa học có inCart = true
  const filteredCourses = cartCourses.filter((course) => course.status == "Done");

  const [userData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Learning Street, Education City, EC 12345",
    birthDate: "1990-05-15",
    avatar: "images.unsplash.com/photo-1494790108377-be9c29b29330"
  });
  return (
    <MyProFile
      courses={filteredCourses}
      userData={userData}
    />
  );
};
export default MyProfileController;

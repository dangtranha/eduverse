import React, { useState } from "react";
import MenuView from "../Component/MenuBar";
import { menuItems } from "../model/MenuModel";
import { useNavigate } from 'react-router-dom';
import AuthController from "../controller/AuthController";
import { NavLink } from 'react-router-dom';

const MenuController = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(AuthController.isAuthenticated());
  const [userData, setUserData] = useState(null); // Lưu thông tin người dùng
  const navigate = useNavigate();
  // Kiểm tra trạng thái đăng nhập khi component được khởi tạo

  const handleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleMenuItemClick = (link) => {
    console.log("Navigating to:", link);

    navigate(link);

  };
  const handleLogin = async (email, password) => {
    const user = await AuthController.handleLoginSubmit(email, password);
    if (user) {
      setIsLoggedIn(true);
      setUserData(user); // Lưu thông tin người dùng
      navigate("/coursecontent"); // Chuyển hướng sau khi đăng nhập
    }
  };

  const handleLogout = () => {
    AuthController.handleLogout(navigate);
    setIsLoggedIn(false);
    setUserData(null);
  };


  return (
    <MenuView
      menuItems={menuItems}
      activeDropdown={activeDropdown}
      handleDropdown={handleDropdown}
      handleMenuItemClick={handleMenuItemClick}
      // isLoggedIn={isLoggedIn}
      userData={userData} // Truyền thông tin người dùng vào MenuView
      handleLogin={handleLogin}
      handleLogout={handleLogout}

    />
  );



};
export default MenuController;
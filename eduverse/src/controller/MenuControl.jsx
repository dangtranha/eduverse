import React, { useState } from "react";
import MenuView from "../Component/MenuBar";
import { menuItems } from "../model/MenuModel";
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

const MenuController = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const handleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleMenuItemClick = (link) => {
    console.log("Navigating to:", link);

    navigate(link);

  };




  return (
    <MenuView
      menuItems={menuItems}
      activeDropdown={activeDropdown}
      handleDropdown={handleDropdown}
      handleMenuItemClick={handleMenuItemClick}

    />
  );



};
export default MenuController;
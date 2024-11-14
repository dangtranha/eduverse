import React, { useState } from "react";
import MenuView from "../Component/MenuBar";
import { menuItems } from "../model/MenuModel";
const MenuController = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <MenuView
      menuItems={menuItems}
      activeDropdown={activeDropdown}
      handleDropdown={handleDropdown}
    />
  );
};
export default MenuController;
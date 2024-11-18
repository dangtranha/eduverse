import React from "react";
import { FaAngleDown, FaUser } from "react-icons/fa";
import { PiBellRingingLight } from "react-icons/pi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { LuAnchor } from "react-icons/lu";
// import MenuPopoverInformationController from "../controller/MenuPopoverInformationController";
const MenuView = ({ menuItems, activeDropdown, handleDropdown, handleMenuItemClick, icons,   isLoggedIn, 
  handleLogout, userData }) => (
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="text-3xl font-bold">EduVerse</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              <button

                onClick={() => handleMenuItemClick(item.link)}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
              >
                {item.label}
                {/* {item.submenu && <FaAngleDown className="ml-1 h-4 w-4" />} */}
              </button>
              {item.submenu && activeDropdown === item.id && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.id}
                      onClick={() => handleMenuItemClick(subItem.link)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            className="text-gray-700 hover:text-orange-600 transition duration-300"
            onClick={() => handleMenuItemClick("/announce")}


          >
            <PiBellRingingLight className="h-5 w-5" />
          </button>
          <button className="text-gray-700 hover:text-orange-600 transition duration-300"
            onClick={() => {
              handleMenuItemClick("/shopping");
            }}
          >
            <RiShoppingCart2Line className="h-5 w-5" />
          </button>


        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <Popover className="relative">
              <PopoverButton>
                <FaUser className="h-5 w-5" />
              </PopoverButton>
              <PopoverPanel className="absolute z-2 mt-2 w-40 bg-white rounded-md shadow-lg py-1">
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600" onClick={() => {
                  handleMenuItemClick("/my-information");
                  }} >My Information</a>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600" onClick={() => {
                    handleMenuItemClick("/my-profile");
                  }}
                >My Profile</a>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                onClick={() => {
                  handleMenuItemClick("/payment-history");
                }}
              > Payment History</a>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                onClick={handleLogout}
              > Sign Out</a>

              </PopoverPanel>
            </Popover>
          ) : (
            <button
              className="text-gray-700 hover:text-orange-600 transition"
              onClick={() => handleMenuItemClick("/auth")}
            >
              Login
            </button>
          )}
          </div>
        </div>
      </div >
    </div >
 
  </nav >

);

export default MenuView;
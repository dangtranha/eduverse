import React from "react";

const NavbarOverviewCourse = ({ menuItems, handleMenuItemClick }) => (
    <nav className="w-1/2 mx-auto  shadow-lg rounded-lg ">
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex justify-center items-center">
                <div className="hidden md:flex space-x-8">
                    {menuItems.map((item) => (
                        <div key={item.id} className="relative">
                            <button
                                onClick={() => handleMenuItemClick(item.link)}
                                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
                            >
                                {item.label}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </nav>
);

export default NavbarOverviewCourse;

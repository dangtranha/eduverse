import React, { useState } from "react";


const NavbarOverviewCourse = ({ menuItems, handleMenuItemClick }) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (item) => {
        setActiveItem(item.id);
        handleMenuItemClick(item.link);
    };

    return (
        <nav className="bg-slate-50 shadow-lg rounded-lg w-full">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 space-x-4">
                    {menuItems.map((item) => (
                        <div key={item.id} className="relative">
                            <button
                                onClick={() => handleClick(item)}
                                className={`px-1 py-3 rounded-md text-sm font-medium transition duration-300 flex items-center 
                                    ${activeItem === item.id
                                        ? "bg-yellow-400 text-white"
                                        : "text-gray-700 hover:text-orange-600"
                                    }`}
                            >
                                {item.label}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavbarOverviewCourse;

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown, FaUser, FaEnvelope, FaCog, FaSignOutAlt, FaHistory } from "react-icons/fa";

const NavbarProfile = ({ imtemInformation, handleOnclick }) => {
    const [activeLink, setActiveLink] = useState("information-contact");

    return (
        <div className="py-8 pl-8 pr-4">


            <div className="flex h-screen bg-gray-100">
                <div className="w-64 bg-white shadow-lg">
                    <br />
                    <nav className="mt-4">
                        {imtemInformation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    handleOnclick(item.link);
                                    setActiveLink(item.link);
                                }}
                                className={`w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 ${activeLink === item.link ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : ""}`}
                            >
                                <span>{item.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavbarProfile;

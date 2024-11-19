import React, { useState } from "react";
import NavbarOverviewCourse from "../../Component/OverviewCourseDiscover/NavbarOverviewCourse";
import { navbarOverviewModel } from "../../model/NavbarOverviewModel";
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

const NavbarOverviewCourseController = () => {
    const navigate = useNavigate();

    const handleMenuItemClick = (link) => {
        console.log("Navigating to:", link);

        navigate(link);

    };

    return (
        <NavbarOverviewCourse
            menuItems={navbarOverviewModel}
            handleMenuItemClick={handleMenuItemClick}

        />
    );



};
export default NavbarOverviewCourseController;
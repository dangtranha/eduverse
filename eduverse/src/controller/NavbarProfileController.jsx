import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarProfile from '../Component/NavbarProfile';
import { NavbarProfileModel } from '../model/NavbarProfileModel';

const NavbarProfileController = () => {
    const navigate = useNavigate();

    const handleClickInformation = (link) => {
        navigate(link);
        console.log(link);
    };

    return (
        <NavbarProfile
            imtemInformation={NavbarProfileModel}
            handleOnclick={handleClickInformation}
        />
    );
};

export default NavbarProfileController;

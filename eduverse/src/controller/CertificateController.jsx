import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarProfile from '../Component/NavbarProfile';
import { NavbarProfileModel } from '../model/NavbarProfileModel';
import Certificate from '../Component/Certificate/Certificate';

const CertificateController = (course,name) => {


    return (
        <Certificate 
        
        course={course}
        name={name}
        date="today"
        />
    );
};

export default CertificateController;

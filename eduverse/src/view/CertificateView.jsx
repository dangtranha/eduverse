import React from 'react';
import { Routes, Route } from "react-router-dom";
import MyProfileController from '../controller/MyProfileController';
import CertificateController from '../controller/CertificateController';
const CertificateView = ()=>{
    return(
        <CertificateController
        course="AA"
        name="BB"
        />
    );
};

export default CertificateView;
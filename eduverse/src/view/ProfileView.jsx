import React from 'react';
import NavbarProfileController from "../controller/NavbarProfileController";
import { Routes, Route } from "react-router-dom";
import PasswordController from '../controller/PasswordController';

import ChangeUsernameController from '../controller/ChangeUsernameController';
import InformationController from '../controller/InformationController';

const ProfileView = () => {
    return (

        <div className="bg-sky-100">
            <div className="flex">
                <NavbarProfileController />

                <div className="flex-1 overflow-auto py-8 pr-8 pl-4">
                    <Routes>
                        <Route path="" element={<InformationController></InformationController>} />
                        <Route path="information-contact" element={<InformationController></InformationController>} />
                        <Route path="change-username" element={<ChangeUsernameController></ChangeUsernameController>} />
                        <Route path="change-password" element={<PasswordController></PasswordController>} />
                        <Route path="*" element={<div>404 Not found profile</div>} />
                    </Routes>
                </div>
            </div>
        </div>

    );
};

export default ProfileView;

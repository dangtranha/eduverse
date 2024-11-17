import React, { useState } from "react";
import PasswordModel from "../model/PasswordModel";
import Password from "../Component/Password";
import PasswordService from "../service/PasswordService";


const PasswordController = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handleSave = () => {
        const validationError = PasswordService.validate(
            passwordData.currentPassword,
            passwordData.newPassword,
            passwordData.confirmPassword
        );

        if (validationError) {
            setErrorMessage(validationError);
        } else {
            PasswordModel.updatePassword(passwordData.newPassword);
            alert("Password updated successfully!");
            setErrorMessage(null);
            setPasswordData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        }
    };

    return (
        <Password
            data={passwordData}
            onChange={handleChange}
            onSave={handleSave}
            errorMessage={errorMessage}
        />
    );
};

export default PasswordController;

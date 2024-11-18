import React, { useState } from "react";
import Information from "../Component/Information"
import InfomationModel from "../model/InformationModel"
import EditPopupInformation from "../Component/EditPopupInformation"
const InformationController = () => {
    const [userInfo, setUserInfo] = useState(InfomationModel.data); // Load initial data
    const [tempUserInfo, setTempUserInfo] = useState({ ...InfomationModel.data });
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Open popup
    const openPopup = () => setIsPopupOpen(true);

    // Close popup
    const closePopup = () => setIsPopupOpen(false);

    // Handle change in form fields
    const handleChange = (name, value) => {
        setTempUserInfo({ ...tempUserInfo, [name]: value });
    };

    // Save changes
    const handleSave = () => {
        InfomationModel.update(tempUserInfo); // Update the model
        setUserInfo({ ...InfomationModel.data }); // Update the view state
        closePopup(); // Close popup
    };

    return (
        <div>
            <Information userInfo={userInfo} onEdit={openPopup} />
            {isPopupOpen && (
                <EditPopupInformation
                    tempUserInfo={tempUserInfo}
                    onChange={handleChange}
                    onSave={handleSave}
                    onCancel={closePopup}
                />
            )}
        </div>
    );
};

export default InformationController;

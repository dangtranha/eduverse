import React, { useState } from "react";

const PasswordView = ({ data, onChange, onSave, errorMessage }) => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="bg-white h-screen p-8">
            <div className="mb-6 px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Current Password
                </label>
                <div className="relative">
                    <input
                        type={showCurrentPassword ? "text" : "password"}
                        name="currentPassword"
                        value={data.currentPassword}
                        onChange={onChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="•••••••••"
                        required
                    />
                    <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleCurrentPasswordVisibility}
                    >
                        👁️
                    </span>
                </div>
            </div>

            <div className="mb-6 px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    New Password
                </label>
                <div className="relative">
                    <input
                        type={showNewPassword ? "text" : "password"}
                        name="newPassword"
                        value={data.newPassword}
                        onChange={onChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="•••••••••"
                        required
                    />
                    <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleNewPasswordVisibility}
                    >
                        👁️
                    </span>
                </div>
            </div>

            <div className="mb-6 px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={onChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="•••••••••"
                        required
                    />
                    <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                    >
                        👁️
                    </span>
                </div>
            </div>

            {errorMessage && (
                <div className="mb-4 text-red-500 text-sm text-center">
                    {errorMessage}
                </div>
            )}

            <div className="flex flex-col items-center">
                <button
                    type="button"
                    onClick={onSave}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default PasswordView;

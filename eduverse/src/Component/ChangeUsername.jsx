import React from "react";

const ChangeUsername = ({
    currentUsername,
    newUsername,
    remainingAttempts,
    onChange,
    onSave,
    error,
}) => {
    return (
        <div className="bg-white h-screen">
            <p className="text-2xl p-8">
                After updating a username, your display name on the system will
                be changed to the new username.
            </p>
            <p className="text-2xl text-red-500 px-8">
                Number remains {remainingAttempts}/3.
            </p>

            <div className="mb-6 px-8 py-4">
                <label
                    htmlFor="usernameCurrent"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Current Username
                </label>
                <input
                    type="text"
                    id="usernameCurrent"
                    value={currentUsername}
                    disabled
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
            </div>

            <div className="mb-6 px-8">
                <label
                    htmlFor="newUsername"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    New Username
                </label>
                <input
                    type="text"
                    id="newUsername"
                    value={newUsername}
                    onChange={(e) => onChange("newUsername", e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Enter new username"
                />
            </div>

            <div className="flex flex-col items-center">
                <button
                    type="button"
                    onClick={onSave}
                    disabled={remainingAttempts === 0}
                    className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${remainingAttempts > 0
                        ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        : "bg-gray-500 cursor-not-allowed"
                        }`}
                >
                    Save
                </button>
            </div>

            {error && (
                <p className="text-red-600 mt-4 text-center">{error}</p>
            )}
        </div>
    );
};

export default ChangeUsername;

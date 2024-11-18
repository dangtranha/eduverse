
import React from "react";

const InformationView = ({ userInfo, onEdit }) => {
    return (
        <div className="bg-white h-screen p-8">
            <h1 className="text-2xl font-bold mb-4">User Information</h1>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {Object.keys(userInfo).map((key) => (
                        <div key={key}>
                            <label className="block mb-2 text-sm font-medium text-gray-900 capitalize">
                                {key.replace(/([A-Z])/g, " $1")} {/* Format key to readable */}
                            </label>
                            <input
                                type="text"
                                value={userInfo[key]}
                                disabled
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={onEdit}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Change
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InformationView;

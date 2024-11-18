import React from "react";

const EditPopupInformation = ({ tempUserInfo, onChange, onSave, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-xl">
                <h2 className="text-xl font-bold mb-4">Edit Information</h2>
                <form>
                    <div className="grid gap-4 mb-6">
                        {Object.keys(tempUserInfo).map((key) => (
                            <div key={key}>
                                <label className="block mb-2 text-sm font-medium text-gray-900 capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}
                                </label>
                                <input
                                    type="text"
                                    name={key}
                                    value={tempUserInfo[key]}
                                    onChange={(e) =>
                                        onChange(e.target.name, e.target.value)
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={onSave}
                            className="px-4 py-2 bg-blue-700 text-white rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPopupInformation;

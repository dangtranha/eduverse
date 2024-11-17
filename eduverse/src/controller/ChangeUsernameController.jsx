import React, { useState } from "react";
import ChangeUsername from "../Component/ChangeUsername";
import ChangeUsernameModel from "../model/ChangeUsernameModel";


const ChangeUsernameController = () => {
    const [state, setState] = useState(ChangeUsernameModel.data);
    const [error, setError] = useState("");

    const handleChange = (key, value) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSave = () => {
        if (state.remainingAttempts > 0) {
            if (state.newUsername.trim() === "") {
                setError("Username cannot be empty.");
                return;
            }

            ChangeUsernameModel.update({
                currentUsername: state.newUsername,
                newUsername: "",
                remainingAttempts: state.remainingAttempts - 1,
            });

            setState(ChangeUsernameModel.data); // Đồng bộ hóa state
            setError("");
        } else {
            setError("No remaining attempts to change the username.");
        }
    };

    return (
        <ChangeUsername
            currentUsername={state.currentUsername}
            newUsername={state.newUsername}
            remainingAttempts={state.remainingAttempts}
            onChange={handleChange}
            onSave={handleSave}
            error={error}
        />
    );
};

export default ChangeUsernameController;

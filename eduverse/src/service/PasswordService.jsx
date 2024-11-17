import PasswordModel from "../model/PasswordModel";

// Service kiểm tra mật khẩu
const PasswordService = {
    validate(currentInput, newInput, confirmInput) {
        if (currentInput !== PasswordModel.getPassword()) {
            return "Current password is incorrect.";
        }
        if (!newInput) {
            return "New password is required.";
        }
        if (newInput !== confirmInput) {
            return "New password and confirmation do not match.";
        }
        return null;
    },
};

export default PasswordService;

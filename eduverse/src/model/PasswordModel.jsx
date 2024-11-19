const PasswordModel = {
    data: {
        currentPassword: "0000",
        newPassword: "",
        confirmPassword: "",
    },

    // Hàm kiểm tra mật khẩu hiện tại và mật khẩu mới
    getPassword() {
        return this.data.currentPassword;
    },

    // Hàm cập nhật mật khẩu trong dữ liệu model
    updatePassword(newPassword) {
        this.data.currentPassword = newPassword;
    },
};

export default PasswordModel;

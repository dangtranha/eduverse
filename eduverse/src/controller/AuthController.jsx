import AccountModel from "../model/AccountModel";

const AuthController = {
  handleLoginSubmit: async (email, password, navigate) => {
    const isLoggedIn = await AccountModel.login(email, password);
    if (isLoggedIn) {
      navigate("/coursecontent"); // Điều hướng đến trang Homepage
      alert("Login successful!");

      return userData; // Trả về thông tin người dùng
    } else {
      alert("Invalid email or password!");
            return null;

    }
  },

  handleRegisterSubmit: async (formData, navigate) => {
    const isRegistered = await AccountModel.register(formData);
    if (isRegistered) {
      alert("Registration successful! Please login.");
      navigate("/auth"); // Điều hướng về Login
    } else {
      alert("Email already exists!");
    }
  },
};

export default AuthController;
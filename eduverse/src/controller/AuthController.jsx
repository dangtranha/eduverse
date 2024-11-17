import AccountModel from "../model/AccountModel";

const AuthController = {
  handleLoginSubmit: async (email, password, navigate) => {
    const isLoggedIn = await AccountModel.login(email, password);
    if (isLoggedIn) {
      navigate("/homepage"); // Điều hướng đến trang Homepage
    } else {
      alert("Invalid email or password!");
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
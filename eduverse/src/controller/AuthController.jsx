import AccountModel from "../model/AccountModel";

const AuthController = {
  handleLoginSubmit: async (email, password, navigate) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format!");
      return;
    }

    const user = await AccountModel.login(email, password);
    if (user) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/coursecontent");
    }
  },

  handleRegisterSubmit: async (formData, navigate) => {
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const isRegistered = await AccountModel.register(formData);
    if (isRegistered) {
      alert("Registration successful! Please login.");
      navigate("/auth");
    }
  },
};

export default AuthController;

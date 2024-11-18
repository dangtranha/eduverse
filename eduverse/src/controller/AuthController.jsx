import AccountModel from "../model/AccountModel";

const AuthController = {
  handleLoginSubmit: async (email, password, navigate) => {
    const user = await AccountModel.login(email, password);
    if (user) {
      alert("Login successful!");
      navigate("/coursecontent"); // Điều hướng về trang chủ
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(user));
      return user; // Trả về thông tin người dùng
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
  isAuthenticated: () => {
    return localStorage.getItem("isLoggedIn") === "true";
  },
  getCurrentUser: () => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  },
  handleLogout: (navigate) => {
    // Xóa thông tin người dùng khỏi localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    alert("Logged out successfully!");
    navigate("/coursecontent"); // Điều hướng về trang chủ
  }
};

export default AuthController;
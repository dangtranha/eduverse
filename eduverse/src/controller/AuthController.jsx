import AccountModel from "../model/AccountModel";

const AuthController = {
  handleLoginSubmit: async (email, password, navigate) => {
    const emailRegex = /^(?!.*\.\.)(?!\.)[a-zA-Z0-9.]+(?<!@)(?<!\.)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format!");
      return null;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number!");
      return null;
    }

    const user = await AccountModel.login(email, password);
    if (user) {
      alert("Login successful!");
      navigate("/coursecontent");
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(user));
      return user;
    } else {
      alert("Invalid email or password!");
      return null;
    }
  },

  handleRegisterSubmit: async (formData, navigate) => {
    const { email, password, confirmPassword } = formData;

    const emailRegex = /^(?!.*\.\.)(?!\.)[a-zA-Z0-9.]+(?<!@)(?<!\.)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format!");
      return false;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number!");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }

    const isRegistered = await AccountModel.register(formData);
    if (isRegistered) {
      alert("Registration successful! Please login.");
      navigate("/auth");
    } else {
      alert("Email already exists!");
    }
  }
};



export const register = (newAccount) => {
  const exists = accounts.find((acc) => acc.email === newAccount.email);
  if (exists) {
    return { success: false, message: "Email already registered." };
  }
  accounts.push(newAccount);
  return { success: true, message: "Registration successful!" };
};
export default AuthController;

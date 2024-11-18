import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { login } from "../controller/AuthController";
import ComponentLogin from "../component/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (email, password) => {
    const result = login(email, password);
    if (result.success) {
      navigate("/homepage");
    } else {
      setError(result.message);
    }
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Điều hướng đến trang đăng ký
  };

  return (
    <ComponentLogin
      onLogin={handleLogin}
      onRegisterClick={handleRegisterClick}
      errorMessage={error}
    />
  );
};

export default Login;
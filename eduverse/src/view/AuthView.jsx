import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";
import AuthController from "../controller/AuthController";

const AuthView = () => {
  const [isLogin, setIsLogin] = useState(true); // Quản lý trạng thái
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    AuthController.handleLoginSubmit(email, password, navigate);
  };

  const handleRegister = (formData) => {
    AuthController.handleRegisterSubmit(formData, navigate);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isLogin ? (
        <LoginForm
          onSubmit={handleLogin}
          onSwitchToRegister={() => setIsLogin(false)}
        />
      ) : (
        <RegisterForm
          onSubmit={handleRegister}
          onSwitchToLogin={() => setIsLogin(true)}
        />
      )}
    </div>
  );
};

export default AuthView;
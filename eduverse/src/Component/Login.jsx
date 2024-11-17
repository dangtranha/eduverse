import React, { useState } from "react";

const ComponentLogin = ({ onLogin, onRegisterClick, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    onLogin(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-md">
      <h1 className="text-lg font-bold">WELCOME BACK!!!</h1>
      <label className="mt-4 text-sm font-medium text-blue-600">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mt-2 border rounded-md"
      />
      <label className="mt-4 text-sm font-medium text-blue-600">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mt-2 border rounded-md"
      />
      {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
      <button
        onClick={handleLoginClick}
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
      >
        Login
      </button>
      <button
        onClick={onRegisterClick}
        className="mt-4 text-sm text-blue-500 underline"
      >
        Don't have an account? Register
      </button>
    </div>
  );
};

export default ComponentLogin;

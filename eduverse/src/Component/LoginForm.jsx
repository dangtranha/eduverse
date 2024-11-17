import React, { useState } from "react";

const LoginForm = ({ onSubmit, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium">Sign in to your account</h5>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-lg p-2 w-full"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="border rounded-lg p-2 w-full"
            placeholder="•••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Login
        </button>
        <p className="text-sm">
          Not registered?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={onSwitchToRegister}
          >
            Create account
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";

const RegisterForm = ({ onSubmit, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-medium">Create a new account</h5>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-lg p-2 w-full"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-lg p-2 w-full"
            placeholder="•••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border rounded-lg p-2 w-full"
            placeholder="•••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Register
        </button>
        <p className="text-sm">
          Already registered?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={onSwitchToLogin}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;

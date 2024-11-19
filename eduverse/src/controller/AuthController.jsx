const AuthController = {
  handleLoginSubmit: async (email, password, navigate) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        // Lưu token vào localStorage
        localStorage.setItem("token", data.token);
        navigate("/coursecontent"); // Điều hướng sau khi đăng nhập thành công
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  },

  handleRegisterSubmit: async (formData, navigate) => {
    // Logic đăng ký ở đây
  }
};

export default AuthController;

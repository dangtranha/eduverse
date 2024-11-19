const AccountModel = {
  login: async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Xử lý lỗi nếu đăng nhập thất bại
        const errorData = await response.json();
        alert(errorData.message);
        return null;
      }

      const data = await response.json(); // Lấy dữ liệu từ phản hồi server
      return data.user; // Trả về thông tin người dùng
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred while logging in. Please try again.");
      return null;
    }
  },

  register: async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message);
        return false;
      }

      return true; // Đăng ký thành công
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred while registering. Please try again.");
      return false;
    }
  },
};

export default AccountModel;

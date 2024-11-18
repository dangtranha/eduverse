const mockUsers = [
  { email: "test@gmail.com", password: "0000" },
];

const AccountModel = {
  login: async (email, password) => {
    // Kiểm tra tài khoản có tồn tại trong danh sách mockUsers
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      currentUser = user; // Lưu người dùng hiện tại sau khi đăng nhập
      return true;
    }
    return false;  },

  register: async (formData) => {
    const userExists = mockUsers.some((u) => u.email === formData.email);
    if (userExists) {
      return false; // Email đã tồn tại
    }
    // Thêm người dùng mới
    mockUsers.push({ email: formData.email, password: formData.password });
    return true;
  },
  logout: () => {
    currentUser = null; // Xóa trạng thái đăng nhập
  },
   getCurrentUser: () => {
    return currentUser;
  },

  isAuthenticated: () => {
    return currentUser !== null;
  },
};

export default AccountModel;

const mockUsers = [
  { email: "test@gmail.com", password: "123456" },
];

const AccountModel = {
  login: async (email, password) => {
    // Kiểm tra tài khoản có tồn tại trong danh sách mockUsers
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    return user ? user : null;
  },

  register: async (formData) => {
    const userExists = mockUsers.some((u) => u.email === formData.email);
    if (userExists) {
      return false; // Email đã tồn tại
    }
    // Thêm người dùng mới
    mockUsers.push({ email: formData.email, password: formData.password });
    return true;
  },
};

export default AccountModel;

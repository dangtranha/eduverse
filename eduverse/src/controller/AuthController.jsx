import accounts from "../model/AccountModel";

export const login = (email, password) => {
  const account = accounts.find(
    (acc) => acc.email === email && acc.password === password
  );
  if (account) {
    return { success: true, message: "Login successful!" };
  }
  return { success: false, message: "Invalid email or password." };
};



export const register = (newAccount) => {
  const exists = accounts.find((acc) => acc.email === newAccount.email);
  if (exists) {
    return { success: false, message: "Email already registered." };
  }
  accounts.push(newAccount);
  return { success: true, message: "Registration successful!" };
};

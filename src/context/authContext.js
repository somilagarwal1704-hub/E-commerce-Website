// Added comments for clarity
import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  userType: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  // Function to log in a user
  const login = (username, type) => {
    setUser(username);
    setUserType(type);
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ user, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

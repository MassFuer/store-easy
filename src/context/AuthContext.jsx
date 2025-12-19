import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// export const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe =
      // logic to check user authentication state changes
      (newUser) => {
        setUser(newUser);
      };
    setLoading(false);
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    // logic for user login
  };

  const register = async (email, password) => {
    // logic for user registration
  };

  const logout = async () => {
    // logic for user logout
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
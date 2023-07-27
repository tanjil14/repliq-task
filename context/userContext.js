"use client"
import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  const login = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };
  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };
  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
    return useContext(UserContext);
  };
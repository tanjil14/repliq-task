"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (user) => {
    setLoggedInUser(user);
    if (typeof window !== "undefined") {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
  };

  const logout = () => {
    setLoggedInUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("loggedInUser");
    }
  };

  // Load from local storage during component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
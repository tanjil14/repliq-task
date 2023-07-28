"use client";
import { createContext, useContext, useReducer } from "react";
import users from "../utils/users.json"
export const customerReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        customers: [...state.customers, { ...action.payload }],
      };

    default:
      return state;
  }
};
const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerReducer, {
    customers: users.users,
  });

  return (
    <CustomerContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};

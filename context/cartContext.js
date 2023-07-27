"use client"
import { createContext, useContext, useReducer } from "react";
export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        };
      default:
        return state;
    }
  };
const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });


  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const useCartContext= () => {
  return useContext(CartContext);
};
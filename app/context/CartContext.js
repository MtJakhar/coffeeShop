"use client"

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  subtractFromCart: () => {},
  updateItemQty: () => {},
});

export default function CartContextProvider({ children }) {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const subtractFromCart = (itemId) => {
    setCart((prevArray) =>
      prevArray.filter((element) => element.itemId !== itemId)
    );
  };

  const updateItemQty = (itemId, newQty) => {
    if (newQty <= 0) {
      setCart((prevArray) =>
        prevArray.filter((element) => element.itemId !== itemId)
      );
    } else {
      setCart((prevArray) =>
        prevArray.map((element) => {
          if (element.itemId === itemId) {
            return {
              ...element,
              itemData: { ...element.itemData, quantity: newQty },
            };
          } else {
            return element;
          }
        })
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        subtractFromCart,
        updateItemQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

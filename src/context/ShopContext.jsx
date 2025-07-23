import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      alert("Select product size");
      return;
    }
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      console.log("Before add To Cart", cartData);
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
      console.log("After add To Cart", cartData);
    }
    setCartItem(cartData);
  };
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  const value = {
    products,
    currency,
    deliveryFee,
    cartItem,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

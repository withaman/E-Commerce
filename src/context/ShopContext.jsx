import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      alert("Select Product Size");
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
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    // console.log(quantity);
    setCartItem(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    // console.log(cartItem)
    for (const items in cartItem) {
      for (let item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
            // console.log("total ", totalCount);
          }
          // console.log("Running total", totalCount);
        } catch (error) {
          console.log("Error Conunting item", error);
        }
      }
    }
    return totalCount;
  };

  useEffect(() => {
    // console.log(cartItem);
    getCartCount();
  }, [cartItem]);

  const value = {
    products,
    currency,
    deliveryFee,
    cartItem,
    addToCart,
    getCartCount,
    updateQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

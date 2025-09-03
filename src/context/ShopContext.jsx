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
        // console.log(cartData[itemId][size]);
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
  const getCartTotal = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) continue;
      for (const size in cartItem[itemId]) {
        try {
          if (cartItem[itemId][size] > 0) {
            totalAmount += itemInfo.price * cartItem[itemId][size];
          }
        } catch (error) {
          console.error("Enter calculating cart total:", error)
        }
      }
    }
    return totalAmount
    // console.log(totalAmount)
  }

  useEffect(() => {
    // console.log(cartItem);
    // console.log(getCartTotal)
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
    getCartTotal
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

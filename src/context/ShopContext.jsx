import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itermId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItem);
    if (cartData[itermId]) {
      if (cartData[itermId][size]) {
        cartData[itermId][size] += 1;
      } else {
        cartData[itermId][size] = 1;
      }
    } else {
      console.log("before add to cart : ", cartData);
      cartData[itermId] = {};
      cartData[itermId][size] = 1;
      console.log("after add to cart : ", cartData);
    }
    setCartItem(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (item in cartItem[items]) {
        try {
          if (cartItem[items][item > 0]) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
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
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

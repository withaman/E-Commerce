import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets, products } from "../assets/assets";
const Cart = () => {
  const { cartItem, currency, updateQuantity } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);
  // console.log(cartItem);

  useEffect(() => {
    let tempData = [];
    for (const itemId in cartItem) {
      // console.log(itemId);
      for (const sizes in cartItem[itemId]) {
        // console.log(cartItem[itemId][sizes]);
        if (cartItem[itemId][sizes] > 0) {
          tempData.push({
            _id: itemId,
            size: sizes,
            quantity: cartItem[itemId][sizes],
          });
        }
      }
    }
    setProductData(tempData);
  }, [cartItem]);
  return (
    <div>
      <div className="text-2xl mb-3">
        <Title t1={"Your"} t2={"Cart"} />
      </div>
      <div>
        {productData.map((item, index) => {
          const proData = products.find((product) => product._id == item._id);
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-center gap-6">
                <img src={proData.image[0]} className="w-16 sm:w-20" />

                <div className="text-sm sm:text-lg font-medium">
                  <p>{proData.name}</p>

                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {proData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <input
                  onChange={(e) =>
                    e.target.value == " " || e.target.value == 0
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  defaultValue={item.quantity}
                  min={1}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                />
              </div>
              <div>
                <img
                  src={assets.bin_icon}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <div className="text-2xl mt-3">
          <Title t1={"CART"} t2={"Total"} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

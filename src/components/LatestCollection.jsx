import React, { useContext, useState, useEffect } from "react";

import Title from "./Title";
import ProductItems from "./ProductItems";
import { ShopContext } from "../context/ShopContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title t1={"LATEST"} t2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm ms:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia in
          quis perferendis sint?
        </p>
      </div>
      {/* Redering */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

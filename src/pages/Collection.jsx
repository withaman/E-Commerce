import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  //Toggle Category Selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    console.log(value);
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      pre.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handle seacrch input change
  const handleSeacrch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  //Apply Filter and Sorting
  useEffect(() => {
    let updatedProducts = products;

    //Apply Category Filter
    if (category.lenght > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        category.include(products.category)
      );
    }

    //Apply Sub Category Filter
    if (subCategory.lenght > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        subCategory.include(products.subCategory)
      );
    }

    //Apply Search Filter
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }

    //Apply Sorting
    if (sortType === 'low-high'){
      updatedProducts = updatedProducts.sort((a,b)=> a.price - b.price)
    }else if (sortType === 'high-low'){
      updatedProducts = updatedProducts.sort((a,b) => b.price - a.price)
    }
    console.log(updatedProducts)
    setFilterProducts(updatedProducts);
    console.log(category);
  }, [products, category, searchQuery,sortType,subCategory]);
  return (
    <div className="flex mt-5">
      <div className="l-side flex flex-col gap-7 w-60 px-3 py-2">
        <h2 className="font-bold">FILTER</h2>
        <div className="border p-4 gap-2">
          <h3 className="font-bold mb-2">CATEGORIES</h3>
          <input
            type="checkbox"
            onChange={toggleCategory}
            name="mens"
            id="mens"
            value="men"
          />
          <label> Mens</label>
          <br />
          <input type="checkbox" name="women" id="women" />
          <label> Women</label>
          <br />
          <input type="checkbox" name="kids" id="Wokids" />
          <label> Kids</label>
        </div>
        <div className="border p-4 gap-2">
          <h3 className="font-bold mb-2">SEARCH</h3>
          <input
            type="text"
            placeholder="Search products..."
            className="border p-1"
          />
        </div>
        <div className="border p-4 gap-2">
          <h3 className="font-bold mb-2">CATEGORIES</h3>
          <input type="checkbox" name="mens" id="mens" />
          <label> Topwear</label>
          <br />
          <input type="checkbox" name="women" id="women" />
          <label> Bottomwear</label>
          <br />
          <input type="checkbox" name="kids" id="Wokids" />
          <label> Winterwear</label>
        </div>
        <div></div>
      </div>
      <div className="r-side w-full">
        <div className="flex justify-between items-center pb-5 py-5">
          <div className="flex items-center gap-2">
            <h1 className="text-xl text-gray-800">
              ALL <span className="font-bold">COLLECTIONS</span>
            </h1>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-500 "></p>
          </div>
          <div className="border px-2 py-2">
            <select name="" id="">
              <option value="">Sort by: Relevant</option>
              <option value="low">Low to high</option>
              <option value="low">High to low</option>
            </select>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Collection;

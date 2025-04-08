import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { motion, AnimatePresence } from "framer-motion";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t"
    >
      {/* Filter Options */}
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
        className="min-w-60"
      >
        <motion.p
          whileHover={{ scale: 1.02 }}
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-800"
        >
          FILTERS
          <motion.img
            animate={{ rotate: showFilter ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="h-3 sm:hidden"
            src={assets.dropdown_icon}
            alt=""
          />
        </motion.p>
        {/* Category Filter */}
        <AnimatePresence>
          {(showFilter || window.innerWidth >= 640) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-300 pl-5 py-3 mt-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="mb-3 text-sm font-medium text-gray-800">
                CATEGORIES
              </p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {["Men", "Women", "Kids"].map((item, index) => (
                  <motion.p
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-2 items-center hover:text-primary transition-colors duration-200"
                  >
                    <input
                      className="w-3 accent-primary"
                      type="checkbox"
                      value={item}
                      onChange={toggleCategory}
                      checked={category.includes(item)}
                    />
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* SubCategory Filter */}
        <AnimatePresence>
          {(showFilter || window.innerWidth >= 640) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-300 pl-5 py-3 my-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="mb-3 text-sm font-medium text-gray-800">TYPE</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {["Topwear", "Bottomwear", "Winterwear"].map((item, index) => (
                  <motion.p
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-2 items-center hover:text-primary transition-colors duration-200"
                  >
                    <input
                      className="w-3 accent-primary"
                      type="checkbox"
                      value={item}
                      onChange={toggleSubCategory}
                      checked={subCategory.includes(item)}
                    />
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="flex-1"
      >
        <div className="flex justify-between items-center text-base sm:text-2xl mb-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </motion.div>
          {/* Product Sort */}
          <motion.select
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none focus:border-primary"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </motion.select>
        </div>

        {/* Map Products */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"
        >
          <AnimatePresence>
            {filterProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ProductItem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Collection;

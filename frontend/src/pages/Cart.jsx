import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t pt-14 container mx-auto px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-primary"></div>
          <p className="font-medium text-lg tracking-wider text-primary">
            SHOPPING CART
          </p>
          <div className="w-12 h-[2px] bg-primary"></div>
        </div>
        {/* <Title text1={"YOUR"} text2={"CART"} /> */}
      </motion.div>

      <AnimatePresence>
        <div className="space-y-4">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <div className="grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                  <div className="flex items-start gap-6">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 sm:w-20 rounded-md object-cover"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div>
                      <p className="text-sm sm:text-lg font-medium text-gray-800">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-5 mt-2">
                        <p className="text-primary font-semibold">
                          {currency}
                          {productData.price}
                        </p>
                        <p className="px-3 py-1 rounded-full text-sm border border-primary text-primary bg-primary/5">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="border rounded-md max-w-10 sm:max-w-20 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="group"
                  >
                    <img
                      className="w-4 mr-4 sm:w-5 cursor-pointer transition-colors group-hover:opacity-70"
                      src={assets.bin_icon}
                      alt="Remove item"
                    />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-end my-20"
      >
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/place-order")}
              className="bg-primary text-white text-sm my-8 px-8 py-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              PROCEED TO CHECKOUT
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cart;

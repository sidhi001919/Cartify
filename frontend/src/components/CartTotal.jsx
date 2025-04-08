import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { motion } from "framer-motion";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
    >
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <div className="w-12 h-[2px] bg-primary"></div>
        <p className="font-medium text-lg tracking-wider text-primary">
          CART TOTALS
        </p>
        <div className="w-12 h-[2px] bg-primary"></div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-4 text-sm"
      >
        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium text-gray-800">
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between items-center py-2">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="font-medium text-gray-800">
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between items-center py-3 mt-2">
          <p className="font-semibold text-base text-gray-800">Total</p>
          <p className="font-semibold text-base text-primary">
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartTotal;

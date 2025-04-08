import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t pt-16 container mx-auto px-4"
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
            ORDER HISTORY
          </p>
          <div className="w-12 h-[2px] bg-primary"></div>
        </div>
      </motion.div>

      <AnimatePresence>
        <div className="space-y-4">
          {orderData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 sm:w-24 rounded-md object-cover"
                    src={item.image[0]}
                    alt={item.name}
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {item.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <p className="text-primary font-semibold">
                        {currency}
                        {item.price}
                      </p>
                      <p className="px-3 py-1 rounded-full text-sm border border-primary text-primary bg-primary/5">
                        Qty: {item.quantity}
                      </p>
                      <p className="px-3 py-1 rounded-full text-sm border border-primary text-primary bg-primary/5">
                        {item.size}
                      </p>
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                      <p>
                        Ordered on:{" "}
                        <span className="text-gray-800 font-medium">
                          {new Date(item.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </p>
                      <p>
                        Payment Method:{" "}
                        <span className="text-gray-800 font-medium">
                          {item.paymentMethod}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.status === "Delivered"
                          ? "bg-green-500"
                          : "bg-primary"
                      }`}
                    ></div>
                    <p className="font-medium text-gray-700">{item.status}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={loadOrderData}
                    className="px-6 py-2 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    Track Order
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Orders;

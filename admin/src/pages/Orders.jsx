import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import {
  Package,
  MapPin,
  Phone,
  ShoppingBag,
  CreditCard,
  Calendar,
} from "lucide-react";
import PropTypes from "prop-types";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Orders</h2>
        <div className="text-sm text-gray-500">
          Total Orders: {orders.length}
        </div>
      </div>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            className="order-item grid grid-cols-1 lg:grid-cols-[2fr_1fr_auto] gap-6"
            key={index}
          >
            {/* Order Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Package className="w-10 h-10 text-blue-600 bg-blue-50 rounded-full p-2" />
                <div className="flex-1">
                  <div className="space-y-1">
                    {order.items.map((item, index) => (
                      <p key={index} className="text-sm text-gray-700">
                        {item.name}{" "}
                        <span className="text-gray-500">× {item.quantity}</span>
                        <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {item.size}
                        </span>
                        {index !== order.items.length - 1 && ","}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    {order.address.firstName + " " + order.address.lastName}
                  </p>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p>{order.address.street}</p>
                      <p>
                        {order.address.city}, {order.address.state}
                      </p>
                      <p>
                        {order.address.country}, {order.address.zipcode}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} />
                    <p>{order.address.phone}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ShoppingBag size={16} />
                    <p>Items: {order.items.length}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CreditCard size={16} />
                    <p>
                      {order.paymentMethod} -{" "}
                      {order.payment ? "Paid" : "Pending"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <p>{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Amount */}
            <div className="flex items-center gap-4">
              <div className="text-lg font-semibold text-gray-900">
                {currency}
                {order.amount}
              </div>
            </div>

            {/* Order Status */}
            <div className="flex flex-col gap-2">
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="dashboard-select bg-white"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              <div
                className={`
                  status-badge
                  ${
                    order.status === "Delivered" ? "status-badge-delivered" : ""
                  }
                  ${order.status === "Shipped" ? "status-badge-shipped" : ""}
                  ${
                    ["Order Placed", "Packing", "Out for delivery"].includes(
                      order.status
                    )
                      ? "status-badge-processing"
                      : ""
                  }
                `}
              >
                {order.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Orders.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Orders;

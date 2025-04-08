import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex items-center justify-center px-4"
    >
      <motion.form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-primary text-3xl font-bold mb-2"
          >
            {currentState}
          </motion.h1>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {currentState === "Sign Up" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-neutral-dark focus:border-primary focus:outline-none transition-colors duration-200"
                placeholder="Name"
                required
              />
            </motion.div>
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-neutral-dark focus:border-primary focus:outline-none transition-colors duration-200"
            placeholder="Email"
            required
          />

          <input
            onChange={(e) => setPasword(e.target.value)}
            value={password}
            type="password"
            className="w-full px-4 py-3 rounded-lg border border-neutral-dark focus:border-primary focus:outline-none transition-colors duration-200"
            placeholder="Password"
            required
          />
        </div>

        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-primary transition-colors duration-200"
          >
            Forgot your password?
          </motion.button>
          <motion.button
            type="button"
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-primary transition-colors duration-200"
          >
            {currentState === "Login" ? "Create account" : "Login Here"}
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-white font-medium py-3 rounded-lg mt-8 hover:bg-primary-dark transition-colors duration-200"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Login;

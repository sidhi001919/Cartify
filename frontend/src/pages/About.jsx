import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center py-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-primary"></div>
          <p className="font-medium text-md tracking-wider text-primary">
            OUR STORY
          </p>
          <div className="w-12 h-[2px] bg-primary"></div>
        </div>
        {/* <Title text1={"ABOUT"} text2={"US"} /> */}
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="my-10 flex flex-col md:flex-row gap-16 items-center"
      >
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full md:max-w-[600px] rounded-2xl shadow-lg"
          //src={assets.about_img}
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
          alt="About Forever"
        />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"
        >
          <p>
            <span className="text-primary font-semibold">Cartify</span> was born
            out of a passion for seamless digital shopping and a vision to
            transform the e-commerce experience. Our journey began with a simple
            goal: to create an intuitive platform where users could effortlessly
            navigate, compare, and purchase diverse products through a smart,
            cart-centric interface.
          </p>
          <p>
            From our foundation, we've focused on developing intelligent
            features that simplify online shopping. Our platform combines
            cutting-edge technology with user-friendly design, offering
            personalized recommendations, real-time inventory tracking, and a
            unified cart system that works across all product categories
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Cartify, we're committed to redefining online shopping through
            innovation and customer-centric solutions. We strive to create a
            platform that not only meets but anticipates our users' needs,
            making every interaction smooth, efficient, and enjoyable.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center py-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-primary"></div>
          <p className="font-medium text-md tracking-wider text-primary">
            OUR PROMISE
          </p>
          <div className="w-12 h-[2px] bg-primary"></div>
        </div>
        {/* <Title text1={"WHY"} text2={"CHOOSE US"} /> */}
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-md px-8 py-12 flex flex-col gap-5 items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <b className="text-primary text-2xl">Q</b>
          </div>
          <b className="text-xl text-primary">Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-md px-8 py-12 flex flex-col gap-5 items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <b className="text-primary text-2xl">C</b>
          </div>
          <b className="text-xl text-primary">Convenience</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-md px-8 py-12 flex flex-col gap-5 items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <b className="text-primary text-2xl">S</b>
          </div>
          <b className="text-xl text-primary">Exceptional Service</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you every step
            of the way, ensuring your satisfaction is our top priority.
          </p>
        </motion.div>
      </motion.div>

      <NewsletterBox />
    </motion.div>
  );
};

export default About;

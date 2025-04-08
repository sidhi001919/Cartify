import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center pt-12 border-t"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-primary"></div>
          <p className="font-medium text-md tracking-wider text-primary">
            GET IN TOUCH
          </p>
          <div className="w-12 h-[2px] bg-primary"></div>
        </div>
        {/* <Title text1={"CONTACT"} text2={"US"} /> */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-3/4 mx-auto text-gray-600 mt-4"
        >
          We're here to help! Reach out to us for any questions about our
          products or services.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="container mx-auto px-4 my-16 flex flex-col md:flex-row gap-12 items-center"
      >
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full md:w-1/2 max-w-[580px] rounded-lg shadow-lg"
          //src={assets.contact_img}
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="CARTIFY Contact"
        />

        <div className="w-full md:w-1/2 space-y-8">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Visit Our Store
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="mt-1 flex-shrink-0 text-accent" size={20} />
                <span>456 Style Avenue, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="flex-shrink-0 text-accent" size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="flex-shrink-0 text-accent" size={20} />
                <span>contact@cartify.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Careers at CARTIFY
            </h3>
            <div className="flex items-start gap-3 text-gray-600">
              <Building2 className="mt-1 flex-shrink-0 text-accent" size={20} />
              <div>
                <p>
                  Join our growing team of fashion enthusiasts and retail
                  experts.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 border-2 border-primary px-8 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-lg"
                >
                  View Open Positions
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <NewsletterBox />
    </motion.div>
  );
};

export default Contact;

import React from "react";
import { assets } from "../assets/assets";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-light mt-40 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-primary">CARTIFY</h1>
            <p className="text-gray-600 leading-relaxed">
              Experience the future of online shopping at CARTIFY. We offer a
              curated selection of premium products with a seamless shopping
              experience. Your one-stop destination for quality and convenience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 text-primary hover:text-accent transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-primary hover:text-accent transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-primary hover:text-accent transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary flex items-center gap-2 transition-colors duration-300"
                >
                  <ChevronRight size={16} /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary flex items-center gap-2 transition-colors duration-300"
                >
                  <ChevronRight size={16} /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-primary flex items-center gap-2 transition-colors duration-300"
                >
                  <ChevronRight size={16} /> Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary flex items-center gap-2 transition-colors duration-300"
                >
                  <ChevronRight size={16} /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="mt-1 flex-shrink-0 text-accent" size={18} />
                <span>123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="flex-shrink-0 text-accent" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="flex-shrink-0 text-accent" size={18} />
                <span>contact@cartify.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} CARTIFY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const curDate = new Date();
  const year = curDate.getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="text-sm text-gray-400">
            At Crypto Gold Minings, we strive to make cryptocurrency accessible
            and understandable for everyone. Join us as we explore the future of
            digital finance.
          </p>
        </div>
        {/* Navigation Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link to="/contact" className="hover:text-yellow-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/allpackage"
                className="hover:text-yellow-500 transition"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-sm text-gray-400">
            Email: support@cryptogoldminings.com
          </p>
          <p className="text-sm text-gray-400">Phone: +971 XXXXXXXX</p>
          <p className="text-sm text-gray-400">
            Location: United Arab Emirates
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {year} Crypto Gold Minings. All rights reserved.
      </div>
    </footer>
  );
}

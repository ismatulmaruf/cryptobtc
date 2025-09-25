import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center">
          <img
            src="https://i.imgur.com/9VPz64q.jpeg"
            alt="Crypto Gold Minings"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
              Crypto Gold Minings (CGM)
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Your trusted partner in cryptocurrency exchange and investment.
            </p>
          </div>
        </div>

        {/* About Content Section */}
        <div className="flex flex-col items-center py-12 px-4">
          <div className="w-full md:w-2/3 text-center">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-7">
              Our mission is to simplify the process of cryptocurrency exchange
              and investment, making it accessible to everyone, from beginners
              to seasoned traders. With a focus on security, transparency, and
              innovation, CGM strives to create a seamless experience for all
              our users.
            </p>
            <p className="text-gray-300 leading-7 mt-4">
              Whether you're looking to exchange crypto, invest for long-term
              growth, or explore new earning avenues in the digital asset space,
              Crypto Gold Minings is here to guide you every step of the way.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-2/3 mt-12 text-center">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 leading-7 mb-10">
              Have a plan or need assistance? Contact us today to discuss your
              investment goals, exchange needs, and how we can help you succeed
              in the world of cryptocurrency.
            </p>
            <Link
              to="/contact"
              className=" px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-md hover:bg-yellow-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              Start your journey with CGM – where crypto meets opportunity.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.imgur.com/ttYmLkP.jpeg')`,
          backgroundColor: "#20344B", // Fallback background color
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center p-8 border-4 border-[#00D084] rounded-xl bg-black/60 max-w-lg mx-4">
          <div className="logo">
            <h1 className="text-4xl font-bold tracking-wider text-white">
              <span className="text-yellow-400">Crypto </span>
              <span className="text-[#00D084]">Gold</span>
              <span className="text-yellow-400"> Minings</span>
            </h1>
          </div>

          <div className="content my-6">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Unlock Your Crypto Potential
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Join the future of finance today. Trade effortlessly and securely
              with our cutting-edge cryptocurrency platform. Your journey to
              wealth starts here.
            </p>
            <Link to="/contact">
              <button className="bg-[#00D084] text-white font-semibold py-2 px-6 rounded-full text-lg hover:bg-[#00c07f] transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-900 px-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://i.imgur.com/fphLeZo.png"
            alt="Crypto Illustration"
            className="w-3/4 max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#00D084] mb-4">
            Start Your Crypto Journey
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Leverage the power of cutting-edge technology to maximize your
            earnings. Our platform is designed for both beginners and experts,
            ensuring a smooth and rewarding experience.
          </p>
          <Link to="/allpackage">
            <button className="bg-[#00D084] text-white font-semibold py-2 px-6 rounded-full text-lg hover:bg-[#00c07f] transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* New Section: Our Partners */}
      <section className="bg-[#1f2b39] py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="https://i.imgur.com/1u4AVcV.jpeg"
              alt="Partner 1"
              className="w-32 h-32   rounded-lg shadow-lg"
            />
            <img
              src="https://i.imgur.com/Y2Rspt2.jpeg"
              alt="Partner 2"
              className="w-32 h-32  rounded-lg shadow-lg"
            />
            <img
              src="https://i.imgur.com/mGex0p3.jpeg"
              alt="Partner 3"
              className="w-32 h-32  rounded-lg shadow-lg"
            />
            <img
              src="https://i.imgur.com/yC6Rwnf.jpeg"
              alt="Partner 4"
              className="w-32 h-32  rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

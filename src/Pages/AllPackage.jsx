import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Allpackage = () => {
  const packages = [
    { id: 1, name: "VIP1", price: 12 },
    { id: 1, name: "VIP2", price: 20 },
    { id: 2, name: "VIP3", price: 40 },
    { id: 3, name: "VIP4", price: 60 },
    { id: 5, name: "VIP5", price: 100 },
    { id: 6, name: "VIP6", price: 200 },
    { id: 7, name: "VIP7", price: 400 },
  ];

  return (
    <Layout>
      <div className="container mx-auto min-h-screen bg-gray-900 text-white">
        {/* Header Section */}
        <div className="relative text-center py-28">
          {/* Background Image Section */}
          <div className="absolute inset-0">
            <img
              src="https://i.imgur.com/pJQciDW.jpeg"
              alt="VIP Packages"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Text Section */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">Exclusive VIP Packages</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Step into the world of exclusive benefits with our tailored VIP
              packages. Each tier unlocks unique rewards, empowering you to
              enjoy the ultimate experience. Choose the package that matches
              your goals and begin your journey today.
            </p>
          </div>
        </div>

        {/* Packages Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <h2 className="text-2xl font-semibold mb-2">{pkg.name}</h2>
              <p className="text-lg text-gray-400 mb-4">{pkg.price} USDT</p>
              <p className="text-sm text-gray-300 mb-6">
                Unlock exclusive features and enjoy premium benefits designed
                just for you.
              </p>
              <Link to={`/user/package`}>
                <button className="bg-[#00D084] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#00c07f] transition duration-300">
                  View {pkg.name}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our VIP Packages?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our VIP packages are designed to cater to a wide range of users,
            offering flexibility, value, and exclusive perks. Whether you are
            just starting your journey or are ready to maximize your experience,
            there's a package for you.
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <button className="bg-[#00D084] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#00c07f] transition duration-300">
                Contact Us for More Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Allpackage;

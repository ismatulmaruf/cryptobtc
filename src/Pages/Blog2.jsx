import React from "react";
import Layout from "../Layout/Layout"; // Assuming you have a Layout component

const BlogPage = () => {
  return (
    <Layout>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="my-10">
          {/* Blog Header */}
          <div className="relative">
            <img
              src="https://i.imgur.com/4Iy91Xo.jpeg"
              alt="Crypto to Buy"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                What Crypto to Buy? A Beginner's Guide
              </h1>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6 md:p-12">
            <p className="text-lg leading-relaxed mb-4">
              The world of cryptocurrency can be overwhelming, especially for
              newcomers. With countless coins and tokens vying for attention,
              it's tough to decide which ones to invest in. Here are some
              factors to consider when choosing a cryptocurrency to buy:
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                1. Understand the Technology
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Blockchain:</strong> The underlying technology of
                  cryptocurrencies. Learn how it works and its potential
                  applications.
                </li>
                <li>
                  <strong>Smart Contracts:</strong> Self-executing contracts
                  with the terms of the agreement directly written into code.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                2. Research the Project
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Whitepaper:</strong> A detailed document outlining the
                  project's goals, technology, and team.
                </li>
                <li>
                  <strong>Team:</strong> Assess the experience and credibility
                  of the team behind the project.
                </li>
                <li>
                  <strong>Community:</strong> A strong and active community can
                  contribute to a project's success.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                3. Consider the Market Cap
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Market Cap:</strong> The total value of a
                cryptocurrency. A higher market cap often indicates a more
                established and less volatile coin.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                4. Diversify Your Portfolio
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Don't Put All Your Eggs in One Basket:</strong> Spread
                  your investments across different cryptocurrencies to reduce
                  risk.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Some Popular Cryptocurrencies to Consider:
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Bitcoin (BTC):</strong> The original cryptocurrency
                  and often considered the most stable.
                </li>
                <li>
                  <strong>Ethereum (ETH):</strong> A platform for decentralized
                  applications (dApps) and smart contracts.
                </li>
                <li>
                  <strong>Binance Coin (BNB):</strong> The native cryptocurrency
                  of the Binance exchange, offering various benefits.
                </li>
                <li>
                  <strong>Cardano (ADA):</strong> A proof-of-stake blockchain
                  focused on sustainability and scalability.
                </li>
                <li>
                  <strong>Solana (SOL):</strong> A high-performance blockchain
                  known for its fast transaction speeds.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              Remember, the cryptocurrency market is highly volatile. Prices can
              fluctuate significantly, so it's important to be prepared for
              potential losses. Always invest what you can afford to lose. Do
              your own research and consult with a financial advisor before
              making any investment decisions.
            </p>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm italic text-gray-400">
                Disclaimer: This is not financial advice. Please do your own
                research or consult with a financial advisor before making any
                investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

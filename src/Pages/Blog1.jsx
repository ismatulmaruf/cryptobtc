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
              src="https://i.imgur.com/lgST30N.jpeg"
              alt="Crypto rally"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                Why is Crypto Going Up? Understanding the 2024 Rally
              </h1>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6 md:p-12">
            <p className="text-lg leading-relaxed mb-4">
              The cryptocurrency market is buzzing with excitement as prices
              across the board are surging. Bitcoin has reclaimed the $100,000
              mark, Ethereum is soaring, and even smaller altcoins are seeing
              impressive gains. What's driving this bullish trend? Let's break
              down the key factors contributing to the 2024 crypto rally.
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                1. Trump's Crypto-Friendly Stance
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                President Trump's re-election and his vocal support for
                cryptocurrencies have ignited investor confidence. His
                pro-crypto stance and potential regulatory easing have fueled
                optimism within the crypto community.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                2. Institutional Adoption
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Major financial institutions like BlackRock are increasingly
                embracing cryptocurrencies. BlackRock's recent purchase of
                Ethereum is a testament to the growing institutional interest in
                this space. This increased adoption brings greater legitimacy
                and stability to the market.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">3. DeFi Boom</h2>
              <p className="text-lg leading-relaxed mb-4">
                Decentralized finance (DeFi) continues to gain momentum, with
                Ethereum as the primary platform. DeFi protocols offer
                innovative financial services like lending, borrowing, and yield
                farming, attracting new users and driving demand for Ethereum.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                4. Positive Market Sentiment
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                The overall market sentiment has shifted positively, with more
                bullish narratives emerging. This renewed optimism is attracting
                new investors and encouraging existing ones to increase their
                positions.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">5. Technical Factors</h2>
              <p className="text-lg leading-relaxed mb-4">
                Technical indicators like RSI (Relative Strength Index) and MACD
                (Moving Average Convergence Divergence) are signaling bullish
                momentum, further supporting the upward price trend.
              </p>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              While the current market conditions are favorable, it's important
              to remember that cryptocurrencies are highly volatile assets.
              Investing in crypto carries inherent risks, and it's crucial to
              conduct thorough research and only invest what you can afford to
              lose.
            </p>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm italic text-gray-400">
                Disclaimer: This post is for informational purposes only and
                does not constitute financial advice. Always do your own
                research before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

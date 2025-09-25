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
              src="https://i.imgur.com/DC6Nhli.jpeg"
              alt="Crypto Mining"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                What is Crypto Mining?
              </h1>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6 md:p-12">
            <p className="text-lg leading-relaxed mb-4">
              Crypto mining is the process of verifying and adding transactions
              to a blockchain. It's a complex process that requires powerful
              computers to solve complex mathematical problems.
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                How Does Crypto Mining Work?
              </h2>
              <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Transaction Verification:</strong> When a transaction
                  occurs on a blockchain, it's broadcasted to the network.
                </li>
                <li>
                  <strong>Block Creation:</strong> Miners group these
                  transactions into blocks.
                </li>
                <li>
                  <strong>Solving the Puzzle:</strong> Miners compete to solve a
                  complex cryptographic puzzle.
                </li>
                <li>
                  <strong>Block Addition:</strong> The first miner to solve the
                  puzzle adds the block to the blockchain.
                </li>
              </ol>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Why is Crypto Mining Important?
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Security:</strong> It ensures the security and
                  integrity of the blockchain.
                </li>
                <li>
                  <strong>New Coins:</strong> Miners are rewarded with newly
                  minted cryptocurrency.
                </li>
                <li>
                  <strong>Network Maintenance:</strong> It helps maintain the
                  decentralized nature of the network.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Is Crypto Mining Profitable?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                The profitability of crypto mining depends on several factors:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Hardware Cost:</strong> The cost of mining rigs,
                  including GPUs or ASICs.
                </li>
                <li>
                  <strong>Electricity Cost:</strong> The cost of electricity to
                  power the mining rigs.
                </li>
                <li>
                  <strong>Network Difficulty:</strong> As more miners join, the
                  difficulty of solving the puzzle increases.
                </li>
                <li>
                  <strong>Cryptocurrency Price:</strong> The current and future
                  price of the cryptocurrency being mined.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Environmental Impact of Crypto Mining:
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Crypto mining, especially with energy-intensive proof-of-work
                consensus mechanisms, has raised concerns about its
                environmental impact due to high energy consumption. However,
                newer technologies and more energy-efficient consensus
                mechanisms are being explored to address these issues.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Should You Start Crypto Mining?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Before diving into crypto mining, consider these factors:
              </p>
              <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                <li>
                  <strong>Initial Investment:</strong> The cost of hardware and
                  electricity.
                </li>
                <li>
                  <strong>Technical Knowledge:</strong> Understanding the
                  technical aspects of mining.
                </li>
                <li>
                  <strong>Time Commitment:</strong> Maintaining and
                  troubleshooting mining rigs.
                </li>
                <li>
                  <strong>Regulatory Environment:</strong> Legal and tax
                  implications of crypto mining.
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              If you're interested in crypto mining, it's essential to do
              thorough research and consider the potential risks and rewards.
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

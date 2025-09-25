import React from "react";
import Layout from "../Layout/Layout";

const Blog = () => {
  const blogs = [
    {
      title: "Why is Crypto Going Up? Understanding the 2024 Rally",
      image: "https://i.imgur.com/lgST30N.jpeg",
      link: "/blog/crypto-rally-2024",
    },
    {
      title: "What Crypto to Buy? A Beginner's Guide",
      image: "https://i.imgur.com/4Iy91Xo.jpeg",
      link: "/blog/crypto-buy-guide",
    },
    {
      title: "What is Crypto Mining?",
      image: "https://i.imgur.com/DC6Nhli.jpeg",
      link: "/blog/crypto-mining",
    },
    {
      title: "How to Secure Your Crypto Wallet: A Comprehensive Guide",
      image: "https://i.imgur.com/FChTrly.jpeg",
      link: "/blog/secure-crypto-wallet",
    },
    {
      title: "How to Transfer Crypto Between Wallets: A Step-by-Step Guide",
      image: "https://i.imgur.com/l3H2H1K.jpeg",
      link: "/blog/transfer-crypto",
    },
    {
      title: "Is Crypto Mining Legal? A Quick Guide",
      image: "https://i.imgur.com/jQxbIKs.jpeg",
      link: "/blog/crypto-mining-legal",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <a href={blog.link} className="block">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

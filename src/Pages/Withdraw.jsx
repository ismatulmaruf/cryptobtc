import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function WithdrawFormSubmit() {
  const [formData, setFormData] = useState({
    amount: "",
    paymentId: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/withdraw`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies if required for authentication
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        setFormData({ amount: "", paymentId: "" }); // Reset form
      } else {
        setMessage(data.message || "Failed to submit withdrawal request.");
      }
    } catch (error) {
      console.error("Error submitting withdrawal form:", error);
      setMessage("Error submitting withdrawal form.");
    }
  };

  return (
    <Layout>
      <div
        className="relative flex items-center justify-center min-h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.imgur.com/jWJi2Cv.jpeg')`,
        }}
      >
        {/* Overlay for Dim Effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Form Container */}
        <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md z-10">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Submit Withdrawal Request
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Amount Input */}
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Amount (USDT):
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                placeholder="Enter amount"
              />
            </div>
            {/* Payment ID Input */}
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">
                Payment ID:
              </label>
              <input
                type="text"
                name="paymentId"
                value={formData.paymentId}
                onChange={handleChange}
                className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                placeholder="Enter payment ID"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
            >
              Submit
            </button>
          </form>
          {/* Success Message */}
          {message && (
            <p className="mt-4 text-green-500 dark:text-green-400">{message}</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

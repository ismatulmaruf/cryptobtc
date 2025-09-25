import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import axios from "axios";
import Layout from "../Layout/Layout";

const DepositAndPoint = () => {
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [point, setPoint] = useState(null); // State for points
  const [visible, setVisible] = useState(false); // State for point visibility

  // Fetch the user's points
  const handleFetchPoint = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/user/point`,
        {
          withCredentials: true, // Include cookies for authentication
        }
      );

      if (response.data.success) {
        setPoint(response.data.point);
        setVisible(true);

        // Hide point after 3 seconds
        setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error fetching point:", error);
    }
  };

  // Submit deposit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/deposit/deposit`,
        { amount: parseFloat(amount), transactionId },
        { withCredentials: true } // Include cookies for authentication
      );

      if (response.data.success) {
        setMessage({ type: "success", text: response.data.message });
        // Clear the form
        setAmount("");
        setTransactionId("");
      } else {
        setMessage({ type: "error", text: response.data.message });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Failed to submit deposit form",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div
        className="container mx-auto min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 relative"
        style={{
          backgroundImage: `url('https://i.imgur.com/HKArd2E.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for Opacity */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center space-y-8">
          {/* Point Display */}
          <div className="flex flex-col md:flex-row items-center justify-center m-8  p-4 rounded-lg shadow-lg text-center w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              USDT:{" "}
              <span className="text-yellow-300">{visible ? point : "***"}</span>
            </h1>
            <button
              onClick={handleFetchPoint}
              className="ml-0 md:ml-4 mt-4 md:mt-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full shadow-xl hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <FaSyncAlt size={16} className="text-blue-400" />
            </button>
          </div>

          {/* Deposit Instructions */}
          <div className="flex flex-col items-center justify-center bg-[#1F2937] p-6 md:p-8 rounded-xl border-4 border-[#00D084] shadow-lg dark:shadow-xl text-center w-full">
            <h2 className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4">
              Deposit Instructions
            </h2>
            <p className="text-white text-sm md:text-lg mb-4">
              Please send the USDT to the following address before submitting
              the form.
            </p>
            {/* Display Deposit Address */}
            <div className="bg-gray-800 p-4 rounded-lg text-white w-full mb-4">
              <p className="font-semibold text-sm md:text-base mb-2">
                Deposit Address (Tron TRC20)
              </p>
              <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
                <span className="text-sm md:text-lg font-semibold text-yellow-500">
                  TVbbG9MCiiQg5M56RpYAWkszeoUdGkmByf
                </span>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "TVbbG9MCiiQg5M56RpYAWkszeoUdGkmByf"
                    )
                  }
                  className="text-blue-500 hover:text-blue-700 transition duration-200 mt-2 md:mt-0"
                >
                  Copy
                </button>
              </div>
            </div>
            {/* QR Code Section */}
            <div className="flex justify-center mb-4">
              <img
                src="https://i.imgur.com/7vzrDIM.png"
                alt="Deposit QR Code"
                className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Deposit Form */}
          <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-purple-600">
              Deposit Form
            </h1>
            {message && (
              <div
                className={`p-4 mb-6 text-center rounded-lg ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Amount (USDT)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="0.01"
                  step="0.01"
                  className="w-full mt-2 p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Transaction ID
                </label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  required
                  className="w-full mt-2 p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition duration-200"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DepositAndPoint;

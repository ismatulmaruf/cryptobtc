import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import axios from "axios";
import Layout from "../Layout/Layout";
import InputBox from "../Components/InputBox/InputBox";
import { toast } from "react-hot-toast";

export default function PointDisplay() {
  const [point, setPoint] = useState(null); // State for the user's point balance
  const [visible, setVisible] = useState(false); // State for point visibility
  const [recipientEmail, setRecipientEmail] = useState(""); // State for recipient's email
  const [transferPoints, setTransferPoints] = useState(0); // State for points to transfer

  // Fetch user's points
  const handleFetchPoint = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/user/point`,
        { withCredentials: true } // Include cookies if required for authentication
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
      toast.error("Failed to fetch points. Please try again.");
    }
  };

  // Handle point transfer
  const handleTransferPoint = async (e) => {
    e.preventDefault();

    if (!recipientEmail || !transferPoints) {
      toast.error("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/point/transfer`,
        {
          recipientEmail,
          points: Number(transferPoints),
        },
        { withCredentials: true } // Include cookies if required for authentication
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setRecipientEmail("");
        setTransferPoints(0);
        handleFetchPoint(); // Refresh the user's point balance after transfer
      }
    } catch (error) {
      console.error("Error transferring points:", error);
      toast.error(
        error.response?.data?.message || "An error occurred during transfer."
      );
    }
  };

  return (
    <Layout>
      <section
        className="relative flex flex-col gap-6 items-center py-8 px-3 min-h-[100vh] dark:bg-gray-900"
        style={{
          backgroundImage: `url('https://i.imgur.com/BgHE3oQ.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 items-center w-full">
          {/* Point Display Section */}
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-4xl font-bold dark:text-purple-500 mr-4">
              USDT :{" "}
              <span className="text-yellow-500">{visible ? point : "***"}</span>
            </h1>
            <button
              onClick={handleFetchPoint}
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
            >
              <FaSyncAlt size={16} className="text-blue-500" />
            </button>
          </div>

          {/* Transfer Points Form */}
          <form
            onSubmit={handleTransferPoint}
            className="flex flex-col gap-4 rounded-lg py-7 px-5 md:w-[500px] bg-[#0A1018] border-2 border-[#00D084] w-full shadow-custom dark:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-center dark:text-purple-500">
              Transfer Usdt
            </h2>
            {/* Recipient Email Input */}
            <InputBox
              label={"Recipient Email"}
              name={"recipientEmail"}
              type={"email"}
              placeholder={"Enter recipient's email"}
              onChange={(e) => setRecipientEmail(e.target.value)}
              value={recipientEmail}
            />
            {/* Points to Transfer Input */}
            <InputBox
              label={"Usdt to Transfer"}
              name={"transferPoints"}
              type={"number"}
              placeholder={"Enter Usdt to transfer"}
              onChange={(e) => setTransferPoints(e.target.value)}
              value={transferPoints}
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 bg-yellow-500 text-white hover:bg-yellow-300 transition-all ease-in-out duration-300 rounded-md py-2 font-medium text-lg cursor-pointer"
            >
              Transfer Usdt
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

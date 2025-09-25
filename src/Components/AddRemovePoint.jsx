import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import InputBox from "../Components/InputBox/InputBox"; // Reusable InputBox component

const ManagePoints = () => {
  const [email, setEmail] = useState("");
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(false);

  // Function to handle adding points
  const handleAddPoints = async () => {
    if (!email || points <= 0) {
      toast.error("Please enter a valid email and positive points.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/adpoint/addpoint`,
        { email, points },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(`Successfully added ${points} points to ${email}`);
        setEmail(""); // Clear the form
        setPoints(0); // Clear the points input
      }
    } catch (error) {
      toast.error(error.response?.data.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle removing points
  const handleRemovePoints = async () => {
    if (!email || points <= 0) {
      toast.error("Please enter a valid email and positive points.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/adpoint/removepoint`,
        { email, points },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(`Successfully removed ${points} points from ${email}`);
        setEmail(""); // Clear the form
        setPoints(0); // Clear the points input
      }
    } catch (error) {
      toast.error(error.response?.data.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4  flex justify-center items-center">
      <div className="bg-[#0A1018] rounded-lg shadow-xl w-full max-w-xxl p-6 border-2 border-[#00D084]">
        <h2 className="text-center text-3xl font-bold text-[#00D084] mb-6">
          Manage User Points
        </h2>

        <InputBox
          label="User Email"
          name="email"
          type="email"
          placeholder="Enter user's email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputBox
          label="USDT"
          name="points"
          type="number"
          placeholder="Enter points to add/remove"
          min="1"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAddPoints}
            className="w-1/2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 disabled:opacity-50 transition-all ease-in-out duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Add USDT"}
          </button>
          <button
            onClick={handleRemovePoints}
            className="w-1/2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 disabled:opacity-50 transition-all ease-in-out duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Remove USDT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagePoints;

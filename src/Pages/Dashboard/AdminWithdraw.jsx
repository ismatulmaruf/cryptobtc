import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import RemovePoints from "../../Components/Remove";

const AdminWithdraw = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all withdrawals
  const fetchWithdrawals = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/withdraw`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies if authentication is required
        }
      );
      const data = await response.json();

      if (data.success) {
        setWithdrawals(data.withdrawals);
      } else {
        setError(data.message || "Failed to fetch withdrawals.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching withdrawals.");
    } finally {
      setLoading(false);
    }
  };

  // Update withdrawal status
  const updateWithdrawalStatus = async (paymentId) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/withdraw/${paymentId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.success) {
        setWithdrawals((prev) =>
          prev.map((withdraw) =>
            withdraw.paymentId === paymentId
              ? { ...withdraw, withdrawed: data.withdrawed }
              : withdraw
          )
        );
      } else {
        setError(data.message || "Failed to update withdrawal status.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while updating the status.");
    } finally {
      setLoading(false);
    }
  };

  // Delete withdrawal request
  const deleteWithdrawal = async (paymentId) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/withdraw/${paymentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.success) {
        setWithdrawals((prev) =>
          prev.filter((withdraw) => withdraw.paymentId !== paymentId)
        );
      } else {
        setError(data.message || "Failed to delete withdrawal request.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while deleting the request.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWithdrawals();
  }, []);

  return (
    <Layout>
      <RemovePoints />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Withdrawals</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {withdrawals.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Amount</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Payment ID
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {withdrawals.map((withdraw) => (
                  <tr key={withdraw.paymentId}>
                    <td className="border border-gray-300 px-4 py-2">
                      {withdraw.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {withdraw.amount} USDT
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {withdraw.paymentId}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {withdraw.withdrawed ? "Processed" : "Pending"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 space-x-2">
                      <button
                        onClick={() =>
                          updateWithdrawalStatus(withdraw.paymentId)
                        }
                        className={`px-4 py-2 text-white rounded ${
                          withdraw.withdrawed
                            ? "bg-gray-500 hover:bg-gray-600"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
                      >
                        {withdraw.withdrawed ? "Completed" : "Process"}
                      </button>
                      <button
                        onClick={() => deleteWithdrawal(withdraw.paymentId)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No withdrawals found.</p>
        )}
      </div>
    </Layout>
  );
};

export default AdminWithdraw;

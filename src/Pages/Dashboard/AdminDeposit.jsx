import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Layout from "../../Layout/Layout"; // Your layout component
import AddPoints from "../../Components/Addpoint";

const DepositWithdraw = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all deposits from the server
  const fetchDeposits = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/deposit/deposit`,
        { withCredentials: true }
      );
      setDeposits(response.data.deposits);
    } catch (error) {
      toast.error("Failed to fetch deposits");
    } finally {
      setLoading(false);
    }
  };

  // Handle update of deposit status
  const handleUpdateStatus = async (transactionId) => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/deposit/deposit/${transactionId}`,
        {},
        { withCredentials: true }
      );
      toast.success(`Deposit status updated`);
      fetchDeposits(); // Refresh the list after status update
    } catch (error) {
      toast.error("Failed to update deposit status");
    }
  };

  // Handle delete of deposit form
  const handleDelete = async (transactionId) => {
    try {
      const response = await axios.delete(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/deposit/deposit/${transactionId}`,
        { withCredentials: true }
      );
      toast.success(`Deposit form deleted successfully`);
      fetchDeposits(); // Refresh the list after deletion
    } catch (error) {
      toast.error("Failed to delete deposit form");
    }
  };

  useEffect(() => {
    fetchDeposits(); // Fetch deposits on component mount
  }, []);

  return (
    <Layout>
      <AddPoints />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-[#00D084] mb-6">
          Manage Deposits
        </h2>

        <div className="bg-[#0A1018] rounded-lg shadow-xl p-6 border-2 border-[#00D084]">
          <h3 className="text-xl font-semibold text-[#00D084] mb-4">
            All Deposits
          </h3>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-white border-collapse min-w-[700px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Email</th>
                    <th className="px-4 py-2 border-b">Amount</th>
                    <th className="px-4 py-2 border-b">Transaction ID</th>
                    <th className="px-4 py-2 border-b">Status</th>
                    <th className="px-4 py-2 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {deposits.map((deposit) => (
                    <tr key={deposit.transactionId}>
                      <td className="px-4 py-2 border-b text-center">
                        {deposit.email}
                      </td>
                      <td className="px-4 py-2 border-b text-center">
                        {deposit.amount}
                      </td>
                      <td className="px-4 py-2 border-b text-center">
                        {deposit.transactionId}
                      </td>
                      <td className="px-4 py-2 border-b text-center">
                        {deposit.deposited ? "Deposited" : "Pending"}
                      </td>
                      <td className="px-4 py-2 border-b text-center">
                        <button
                          onClick={() =>
                            handleUpdateStatus(deposit.transactionId)
                          }
                          className={`${
                            deposit.deposited
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-blue-500 hover:bg-blue-600"
                          } text-white px-4 py-2 rounded mr-2`}
                        >
                          {deposit.deposited
                            ? "Mark as Pending"
                            : "Mark as Deposited"}
                        </button>

                        <button
                          onClick={() => handleDelete(deposit.transactionId)}
                          className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DepositWithdraw;

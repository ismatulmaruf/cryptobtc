import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import ClipLoader from "react-spinners/ClipLoader";

const AdminCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [codes, setCodes] = useState([]); // To store all generated codes
  const [error, setError] = useState(null);

  // Function to send a POST request to generate a new code
  const addUniqueCode = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Send POST request to your backend API to generate a new code
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/subscription/add-code`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // To include cookies (for authentication)
        }
      );
      const data = await response.json();

      if (data.success) {
        // Add the newly created code to the state to display it in the table
        setCodes([data.code, ...codes]); // Add the new code to the front end
      } else {
        setError(data.message || "Failed to generate the code");
      }
    } catch (error) {
      console.error("Error generating unique code:", error);
      setError("An error occurred while generating the code.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch all generated codes (for ADMIN)
  const fetchAllCodes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/subscription/all-codes`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // To include cookies (for authentication)
        }
      );
      const data = await response.json();

      if (data.success) {
        setCodes(data.codes); // Store the fetched codes
      } else {
        setError(data.message || "Failed to fetch codes");
      }
    } catch (error) {
      console.error("Error fetching codes:", error);
      setError("An error occurred while fetching codes.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch all codes when the component mounts
  useEffect(() => {
    fetchAllCodes();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-6 min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-6  text-gray-100">
          All Generated Codes
        </h2>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center mb-6">
            <ClipLoader color="#007BFF" size={50} />
          </div>
        )}

        {/* Error Message */}
        {error && <div className="text-center text-red-500">{error}</div>}

        {/* Button to generate a new code */}
        <div className="text-center mb-6">
          <button
            onClick={addUniqueCode}
            disabled={isLoading}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              "Generate New Code"
            )}
          </button>
        </div>

        {/* Codes Table */}
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-300">
            <thead className="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-100 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  No.
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Code
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Used
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Used By
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {codes.length > 0 ? (
                codes.map((code, index) => (
                  <tr
                    key={code._id}
                    className={`bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 ${
                      code.used ? "text-gray-500" : "text-black"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-center">
                      <span className="font-bold">{index + 1}</span>{" "}
                      {/* Serial Number */}
                    </td>
                    <td className="px-6 py-4 font-medium text-center">
                      <span
                        className={`font-bold ${
                          code.used ? "text-gray-400" : "text-blue-600"
                        }`}
                      >
                        {code.code}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`${
                          code.used
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        } px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {code.used ? "Used" : "Not Used"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {code.usedBy || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {new Date(code.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No codes available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCode;

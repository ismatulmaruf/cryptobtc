import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateUserData } from "../../Redux/Slices/AuthSlice";
import InputBox from "../../Components/InputBox/InputBox";
import { FaSyncAlt } from "react-icons/fa";
import axios from "axios";
import { IoIosLock, IoIosRefresh } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
// import { cancelCourseBundle } from "../../Redux/Slices/RazorpaySlice";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  // console.log(userData);
  const [isUpdating, setIsUpdating] = useState(false);
  const [subInputValue, setSubInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console.log(userData.subscription);

  const [userInput, setUserInput] = useState({
    name: userData?.fullName || "",
    phone: userData?.phone || "",
    userId: userData?._id || null,
  });

  // console.log(userData.email.split("@")[0]);

  // console.log(userData);
  const [isChanged, setIschanged] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [point, setPoint] = useState(null); // State for the point
  const [visible, setVisible] = useState(false); // State for visibility

  const handleFetchPoint = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/user/point`,
        {
          withCredentials: true, // Include cookies if required for authentication
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

  async function onFormSubmit(e) {
    e.preventDefault();
    setIsUpdating(true);

    const data = {
      fullName: userInput.name,
      phone: userInput.phone,
      id: userInput.userId,
    };

    const response = await dispatch(updateUserData(data));
    if (response?.payload?.success) {
      await dispatch(getUserData());
      setIschanged(false);
    }
    setIsUpdating(false);
  }

  useEffect(() => {
    setIschanged(
      userInput.name !== userData?.fullName ||
        userInput.phone !== userData?.phone
    );
  }, [userInput, userData]);

  useEffect(() => {
    async function fetchUser() {
      await dispatch(getUserData());
    }
    if (!userData || Object.keys(userData).length < 1) fetchUser();
  }, [dispatch, userData]);

  useEffect(() => {
    setUserInput({
      name: userData?.fullName || "",
      phone: userData?.phone || "",
      userId: userData?._id || null,
    });
  }, [userData]);

  const subHandleClick = async () => {
    if (!subInputValue) {
      setMessage("Please enter a subscription code.");
      return;
    }

    setIsLoading(true);
    try {
      // Assuming the backend is running at this endpoint
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/subscription/apply-code`,
        { code: subInputValue },
        {
          withCredentials: true, // Include cookies if required for authentication
        }
      );

      setMessage(response.data.message); // Show success message
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to apply the code"); // Show error message
    } finally {
      setIsLoading(false);
    }
    dispatch(getUserData());
  };

  return (
    <Layout hideFooter={true}>
      <section className="flex flex-col gap-6 items-center py-8 px-3 min-h-[100vh] ">
        <div className="relative bg-[#0A1018] rounded-lg md:py-10 py-7 md:px-7 px-3 md:w-[750px] w-full shadow-custom dark:shadow-xl  border-2 border-[#00D084]">
          <h1 className="text-center absolute left-6 md:top-auto top-5 text-[#00D084] dark:text-purple-500 md:text-4xl text-3xl font-bold font-inter after:content-[' '] after:absolute after:-bottom-3.5 after:left-0 after:h-1.5 after:w-[60%] after:rounded-full after:bg-yellow-400 dark:after:bg-yellow-600">
            Profile
          </h1>
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-bold">
              Point:{" "}
              <span className={`text-yellow-500`}>
                {visible ? point : "***"}
              </span>
            </h1>
            <button
              onClick={handleFetchPoint}
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full shadow-lg mt-4 hover:bg-gray-300"
            >
              <FaSyncAlt size={16} className="text-blue-500" />
            </button>
          </div>
          {/* subscription part */}
          {userData.subscription ? (
            <div className="text-green-500 text-center mt-7 font-extrabold">
              Subscribed
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <input
                type="text"
                value={subInputValue}
                onChange={(e) => setSubInputValue(e.target.value)}
                className="bg-transparent text-lg font-inter px-3 py-2 border border-gray-300 text-gray-100 dark:text-slate-50 focus:border-[#3b38dd] dark:focus:border-[#fffc5d] w-full sm:w-auto"
                placeholder="Type Subscription Code..."
              />
              <button
                onClick={subHandleClick}
                className="bg-yellow-500 text-gray-100 font-200 p-3 rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>

              {/* Message display (success or error) */}
              {message && (
                <div
                  className={`mt-4 text-center ${
                    message.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          )}

          {/* end here subscription */}
          <form
            autoComplete="off"
            noValidate
            onSubmit={onFormSubmit}
            className="flex flex-col   gap-7"
          >
            <div className="flex justify-center items-center">
              <div className="absolute right-3 top-3">
                <button
                  type="button"
                  className="absolute right-0 text-gray-500 dark:text-slate-50 font-inter font-[600]"
                  onClick={() => setIsDialogOpen((prev) => !prev)}
                >
                  <FiMoreVertical size={20} />
                </button>

                <dialog
                  open={isDialogOpen}
                  className="bg-white dark:bg-base-300 transition-all duration-500 border-[1px] border-gray-200 dark:border-gray-500 rounded-s-xl rounded-ee-xl py-5 shadow-lg w-fit relative right-0 top-7"
                >
                  <div className="w-full flex flex-col gap-2 items-start">
                    <button
                      className="text-gray-700 w-full flex items-center gap-2 dark:text-white px-3 pb-2 border-b-[1px] border-gray-300"
                      onClick={() => navigate("change-password")}
                    >
                      <IoIosLock /> Change password
                    </button>
                    <button
                      className="text-[#ff1414] dark:text-red-300 px-3 w-full flex items-center gap-2"
                      onClick={() => navigate("reset-password")}
                    >
                      <IoIosRefresh /> Reset password
                    </button>
                  </div>
                </dialog>
              </div>
            </div>

            <div className="w-full flex flex-wrap gap-6">
              <InputBox
                label={"Name"}
                name={"name"}
                type={"text"}
                placeholder={"Enter full name"}
                value={userInput.name}
                onChange={(e) =>
                  setUserInput({ ...userInput, name: e.target.value })
                }
                className="md:w-[48%] w-[100%]"
              />
              <InputBox
                label={"Mobile Number"}
                name={"phone"}
                type={"text"}
                placeholder={"Enter Mobile Number"}
                value={userInput.phone}
                onChange={(e) =>
                  setUserInput({ ...userInput, phone: e.target.value })
                }
                className="md:w-[48%] w-[100%]"
              />

              <InputBox
                label={"Email"}
                name={"email"}
                type={"email"}
                value={userData?.email || ""}
                className="md:w-[48%] w-[100%]"
                disabled={true}
              />
              <InputBox
                label={"Role"}
                name={"role"}
                type={"text"}
                value={userData?.role}
                className="md:w-[48%] w-[100%]"
                disabled={true}
              />
              {/* <InputBox
              label={"Subscription"}
              name={"subscription"}
              type={"text"}
              value={userData?.subscription?.status || "Not-Active"}
              className="md:w-[48%] w-[100%]"
              disabled={true}
            /> */}
            </div>

            <div className="p-4 border border-gray-300 rounded-md bg-gray-100 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                <span className="text-sm text-gray-800 w-full sm:w-auto text-center sm:text-left">
                  {`https://cryptogoldminings.com/signup/${
                    userData.email.split("@")[0]
                  }`}
                </span>
                <button
                  onClick={() => {
                    const emailPrefix = userData.email.split("@")[0];
                    const referralLink = `https://cryptogoldminings.com/signup/${emailPrefix}`;
                    navigator.clipboard
                      .writeText(referralLink)
                      .then(() => {
                        alert("Copied to clipboard!"); // Display confirmation without state
                      })
                      .catch((err) => {
                        console.error("Failed to copy text: ", err);
                      });
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full sm:w-auto"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="w-full flex md:flex-row flex-col md:justify-between justify-center md:gap-0 gap-3">
              <button
                type="submit"
                className="py-3.5 rounded-md bg-yellow-500 mt-3 text-white font-inter md:w-[48%] w-full"
                disabled={!isChanged || isUpdating}
              >
                {isUpdating ? "Saving Changes..." : "Save Changes"}
              </button>

              {/* {userData?.subscription?.status === "active" && (
              <button
                type="button"
                onClick={handleCancelSubscription}
                className="py-3.5 rounded-md bg-[#f32e2e] mt-3 text-white font-inter md:w-[48%] w-full"
              >
                Cancel Subscription
              </button>
            )} */}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { login } from "../Redux/Slices/AuthSlice";
import InputBox from "../Components/InputBox/InputBox";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function onLogin(event) {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the details");
      return;
    }

    setIsLoading(true);
    const Data = { email: loginData.email, password: loginData.password };

    // dispatch create account action
    const response = await dispatch(login(Data));
    if (response?.payload?.success) {
      setLoginData({
        email: "",
        password: "",
      });
      navigate("/");
    }
    setIsLoading(false);
  }

  return (
    <Layout>
      <section className="relative flex flex-col gap-6 items-center py-8 px-3 min-h-[100vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.imgur.com/tiaYtPK.jpeg')",
            opacity: 0.5, // Adjust opacity here
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <form
          onSubmit={onLogin}
          autoComplete="off"
          noValidate
          className="relative flex flex-col bg-[#0A1018]/80 border-2 border-[#00D084] gap-4 rounded-lg md:py-5 py-7 md:px-7 px-3 md:w-[500px] w-full shadow-lg backdrop-blur-md"
        >
          <h1 className="text-center text-yellow-500 text-4xl font-bold font-inter">
            Login Page
          </h1>

          {/* Email */}
          <InputBox
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your email..."}
            onChange={handleUserInput}
            value={loginData.email}
          />

          {/* Password */}
          <InputBox
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Enter your password..."}
            onChange={handleUserInput}
            value={loginData.password}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 bg-yellow-500 text-white transition-all ease-in-out duration-300 rounded-md py-2 font-[500] text-lg cursor-pointer hover:bg-yellow-600 hover:shadow-lg focus:ring-4 focus:ring-yellow-300 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Logging..." : "Login"}
          </button>

          {/* Links */}
          <p className="text-center font-inter text-gray-100">
            Do not have an account?{" "}
            <Link
              to="/signup"
              className="font-bold p-2 ms-2 rounded bg-yellow-500 text-white cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-yellow-600 hover:shadow-lg"
            >
              Sign-Up
            </Link>
            <br />
            <Link
              to="/user/profile/reset-password"
              className="font-bold text-blue-600 cursor-pointer hover:text-blue-700"
            >
              Reset Password
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}

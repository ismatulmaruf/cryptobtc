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
      <section className="flex flex-col gap-6 items-center py-8 px-3 min-h-[100vh] bg-[#B3E5FC] dark:bg-gray-900">
        <form
          onSubmit={onLogin}
          autoComplete="off"
          noValidate
          className="flex flex-col bg-white dark:bg-gray-800 gap-4 rounded-lg md:py-5 py-7 md:px-7 px-3 md:w-[500px] w-full shadow-lg dark:shadow-xl"
        >
          <h1 className="text-center text-[#0077B6] dark:text-purple-500 text-4xl font-bold font-inter">
            Login Page
          </h1>

          {/* email */}
          <InputBox
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your email..."}
            onChange={handleUserInput}
            value={loginData.email}
          />

          {/* password */}
          <InputBox
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Enter your password..."}
            onChange={handleUserInput}
            value={loginData.password}
          />

          {/* submit button */}
          <button
            type="submit"
            className="mt-2 bg-yellow-500 text-white dark:text-base-200 transition-all ease-in-out duration-300 rounded-md py-2 font-nunito-sans font-[500] text-lg cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Logging..." : "Login"}
          </button>

          {/* links */}
          <p className="text-center font-inter text-gray-600 dark:text-slate-300">
            Do not have an account?
            <Link
              to="/signup"
              className="font-bold p-2 rounded bg-yellow-500 text-white font-lato cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-yellow-600 hover:shadow-lg hover:scale-105 focus:ring-4 focus:ring-yellow-300 focus:outline-none"
            >
              Sign-Up
            </Link>
            <br />
            <Link
              to="/user/profile/reset-password"
              className="font-bold text-blue-600 font-lato cursor-pointer hover:text-blue-700"
            >
              Reset Password
            </Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
